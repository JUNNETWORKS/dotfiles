#!/bin/zsh

# zsh補完ファイルのセットアップスクリプト

set -e

echo "Setting up zsh completions..."

# 補完ディレクトリを動的に取得
COMPLETION_DIR=""
for dir in $(echo $fpath | tr ' ' '\n'); do
    if [[ "$dir" == /usr/local/share/zsh/site-functions ]] || [[ "$dir" == */site-functions ]]; then
        COMPLETION_DIR="$dir"
        break
    fi
done

# フォールバック: 標準的な場所を使用
if [[ -z "$COMPLETION_DIR" ]]; then
    COMPLETION_DIR="/usr/local/share/zsh/site-functions"
fi

echo "Using completion directory: $COMPLETION_DIR"

# 補完ディレクトリを作成
sudo mkdir -p "$COMPLETION_DIR"

# 補完ファイルのシンボリックリンクを作成
DOTFILES_DIR="$(cd "$(dirname "$0")" && pwd)"

# create-worktree.sh の補完
if [[ -f "$DOTFILES_DIR/scripts/_create-worktree" ]]; then
    echo "Installing create-worktree completion..."
    sudo ln -sf "$DOTFILES_DIR/scripts/_create-worktree" "$COMPLETION_DIR/_create-worktree"
else
    echo "Warning: $DOTFILES_DIR/scripts/_create-worktree not found"
fi

# 今後追加する補完ファイルはここに記述
# 例:
# if [[ -f "$DOTFILES_DIR/scripts/_another-script" ]]; then
#     echo "Installing another-script completion..."
#     sudo ln -sf "$DOTFILES_DIR/scripts/_another-script" "$COMPLETION_DIR/_another-script"
# fi

echo "Zsh completions setup complete!"
echo "Note: You may need to restart your shell or run 'compinit' to reload completions."