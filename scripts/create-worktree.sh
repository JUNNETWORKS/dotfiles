#!/bin/zsh

# 一時的なgit worktreeを作成し、作業後に自動削除するスクリプト

# エラーが発生した場合はスクリプトを終了する
set -e

# --- 使用方法を表示する関数 ---
show_usage() {
    cat <<EOF
Usage: $0 <branch-name> [worktree-directory] [--init-command "command"]

Creates a temporary git worktree, opens a new shell session within it,
and automatically cleans up the worktree upon exiting the shell.

Examples:
  $0 feature-branch
  $0 feature-branch /tmp/my-temp-work
  $0 bugfix-123 ../temp-bugfix --init-command "npm install"
  $0 feature-branch --init-command "npm ci && npm run build"

The script will:
  1. Create a new git worktree for a new or existing branch.
  2. Run the initialization command if provided.
  3. Open a new interactive zsh shell that will clean itself up on exit.
EOF
}

# --- 引数のチェック ---
if [[ $# -eq 0 || "$1" = "-h" || "$1" = "--help" ]]; then
    show_usage
    exit 0
fi

# --- 引数の解析 ---
BRANCH_NAME="$1"
WORKTREE_DIR_ARG=""
INIT_COMMAND=""

# 引数を解析
shift
while [[ $# -gt 0 ]]; do
    case $1 in
        --init-command)
            INIT_COMMAND="$2"
            shift 2
            ;;
        *)
            if [[ -z "$WORKTREE_DIR_ARG" ]]; then
                WORKTREE_DIR_ARG="$1"
            else
                echo "Error: Unknown argument '$1'" >&2
                exit 1
            fi
            shift
            ;;
    esac
done

# --- 変数の設定 ---
ORIGINAL_DIR=$(pwd)
PROJECT_ROOT=$(git rev-parse --show-toplevel)
PROJECT_NAME=$(basename "$PROJECT_ROOT")

DEFAULT_WORKTREE_NAME="${PROJECT_ROOT}/.git/worktree/${BRANCH_NAME//\//-}"
WORKTREE_DIR_ARG="${WORKTREE_DIR_ARG:-$DEFAULT_WORKTREE_NAME}"

# --- Gitリポジトリかどうかのチェック ---
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Error: Not a git repository." >&2
    exit 1
fi

# --- worktreeディレクトリの絶対パスを解決 (macOS互換) ---
# realpath -m が使えない環境のための代替ロジック
parent_dir=$(dirname -- "$WORKTREE_DIR_ARG")
base_name=$(basename -- "$WORKTREE_DIR_ARG")

# 親ディレクトリが存在すれば、cdして絶対パスを取得
if [[ -d "$parent_dir" ]]; then
    WORKTREE_DIR="$(cd -- "$parent_dir" && pwd)/$base_name"
else
    # 親ディレクトリが存在しない場合、指定されたパスが絶対パスか相対パスかで処理を分ける
    case "$WORKTREE_DIR_ARG" in
      /*)
        # 絶対パスの場合はそのまま使う
        WORKTREE_DIR="$WORKTREE_DIR_ARG"
        ;;
      *)
        # 相対パスの場合は、現在のディレクトリを基準にした絶対パスに変換
        WORKTREE_DIR="$ORIGINAL_DIR/$WORKTREE_DIR_ARG"
        ;;
    esac
fi


# --- worktreeの作成 ---
echo "Creating temporary git worktree..."
echo "  Branch: $BRANCH_NAME"
echo "  Directory: $WORKTREE_DIR"
echo ""

if [ -d "$WORKTREE_DIR" ]; then
    echo "Error: Directory '$WORKTREE_DIR' already exists." >&2
    exit 1
fi

if git rev-parse --verify "$BRANCH_NAME" >/dev/null 2>&1; then
    echo "Branch '$BRANCH_NAME' already exists. Creating worktree from it."
    if ! git worktree add "$WORKTREE_DIR" "$BRANCH_NAME"; then
        echo "Error: Failed to create worktree for existing branch '$BRANCH_NAME'." >&2
        exit 1
    fi
else
    echo "Branch '$BRANCH_NAME' does not exist. Creating new branch and worktree."
    if ! git worktree add -b "$BRANCH_NAME" "$WORKTREE_DIR"; then
        echo "Error: Failed to create new branch and worktree." >&2
        exit 1
    fi
fi

# --- 子シェルのための設定 ---
# 一時的な設定ディレクトリを作成
TEMP_ZDOTDIR=$(mktemp -d)

# 一時的な .zshrc ファイルに、クリーンアップロジックを書き込む
# 'EOF' をクォートすることで、ヒアドキュメント内の変数がこの場では展開されず、
# 子シェル内で解釈されるようにする
cat > "${TEMP_ZDOTDIR}/.zshrc" <<'EOF'
# --- Temporary Worktree Configuration ---

# ユーザーの既存の .zshrc を読み込む (存在する場合)
if [[ -f "${HOME}/.zshrc" ]]; then
    source "${HOME}/.zshrc"
fi

# プロンプトを設定 (変数は親シェルからexportされている)
export PS1="%F{green}[WORKTREE:${BRANCH_NAME}]%f %~ %# "

# シェル終了時に実行されるクリーンアップ関数
cleanup() {
    echo ""
    echo "--- Cleaning up worktree (from child shell exit) ---"

    # 元のディレクトリに戻る
    echo "Returning to the original directory: ${ORIGINAL_DIR}"
    cd "${ORIGINAL_DIR}"

    # git worktreeを削除
    if git worktree list | grep -q "\[${WORKTREE_DIR}\]"; then
        echo "Removing worktree directory: ${WORKTREE_DIR}"
        git worktree remove "${WORKTREE_DIR}" --force
    elif [[ -d "${WORKTREE_DIR}" ]]; then
        echo "Removing leftover directory: ${WORKTREE_DIR}"
        rm -rf "${WORKTREE_DIR}"
    fi
    git worktree prune

    # ブランチを削除するか確認
    if git rev-parse --verify --quiet "refs/heads/${BRANCH_NAME}" >/dev/null && \
       ! git worktree list | grep -q " ${BRANCH_NAME}$"; then
        read -q "reply?Do you want to delete the branch '${BRANCH_NAME}'? (y/N): "
        echo
        if [[ "${reply}" =~ ^[Yy]$ ]]; then
            echo "Deleting branch '${BRANCH_NAME}'..."
            git branch -D "${BRANCH_NAME}"
        fi
    fi

    # この設定ファイルが入っている一時ディレクトリ自身を削除
    if [[ -n "${TEMP_ZDOTDIR}" && -d "${TEMP_ZDOTDIR}" ]]; then
        echo "Removing temporary config directory: ${TEMP_ZDOTDIR}"
        rm -rf "${TEMP_ZDOTDIR}"
    fi

    echo "Cleanup complete."
}

# zsh終了時にcleanup関数を呼び出すフックを設定
autoload -Uz add-zsh-hook
add-zsh-hook zshexit cleanup

# ウェルカムメッセージ
echo ""
echo "===================================================================="
echo "✅ Temporary worktree is ready!"
echo ""
echo "  Current Directory: $(pwd)"
echo "  Current Branch: $(git branch --show-current)"
echo ""
echo "  You are now in a new shell session."
echo "  Exit this shell (using 'exit' or Ctrl+D) to automatically"
echo "  remove the worktree and clean up."
echo "===================================================================="
echo ""
EOF

# --- 新しいシェルセッションの開始 ---
# 子プロセスで必要になる変数をエクスポート
export ORIGINAL_DIR
export WORKTREE_DIR
export BRANCH_NAME
export TEMP_ZDOTDIR

# worktreeディレクトリに移動
cd "$WORKTREE_DIR"

# 初期化コマンドを実行（指定されている場合）
if [[ -n "$INIT_COMMAND" ]]; then
    echo "Running initialization command: $INIT_COMMAND"
    echo ""
    if ! eval "$INIT_COMMAND"; then
        echo "Warning: Initialization command failed. Continuing anyway..." >&2
    fi
    echo ""
fi

# 親プロセスを新しいzshで置き換える
# ZDOTDIRを指定して、一時的な.zshrcを読み込ませる
exec env ZDOTDIR="$TEMP_ZDOTDIR" zsh
