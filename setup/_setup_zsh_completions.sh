#!/bin/zsh

# zsh補完ファイルのセットアップスクリプト

set -e

echo "Setting up zsh completions..."
autoload -Uz compinit
compinit


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
DOTFILES_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# create-worktree.sh の補完
if [[ -f "$DOTFILES_DIR/scripts/_create-worktree" ]]; then
    echo "Installing create-worktree completion..."
    sudo ln -sf "$DOTFILES_DIR/scripts/_create-worktree" "$COMPLETION_DIR/_create-worktree"
else
    echo "Warning: $DOTFILES_DIR/scripts/_create-worktree not found"
fi

# ==================== mise completion setup start ====================
#compdef mise
local curcontext="$curcontext"

# caching config
_usage_mise_cache_policy() {
  if [[ -z "${lifetime}" ]]; then
    lifetime=$((60*60*4)) # 4 hours
  fi
  local -a oldp
  oldp=( "$1"(Nms+${lifetime}) )
  (( $#oldp ))
}

_mise() {
  typeset -A opt_args
  local curcontext="$curcontext" spec cache_policy

  if ! command -v usage &> /dev/null; then
      echo >&2
      echo "Error: usage CLI not found. This is required for completions to work in mise." >&2
      echo "See https://usage.jdx.dev for more information." >&2
      return 1
  fi

  zstyle -s ":completion:${curcontext}:" cache-policy cache_policy
  if [[ -z $cache_policy ]]; then
    zstyle ":completion:${curcontext}:" cache-policy _usage_mise_cache_policy
  fi

  if ( [[ -z "${_usage_spec_mise_2025_5_0:-}" ]] || _cache_invalid _usage_spec_mise_2025_5_0 ) \
      && ! _retrieve_cache _usage_spec_mise_2025_5_0;
  then
    spec="$(mise usage)"
    _store_cache _usage_spec_mise_2025_5_0 spec
  fi

  _arguments "*: :(($(usage complete-word --shell zsh -s "$spec" -- "${words[@]}" )))"
  return 0
}

if [ "$funcstack[1]" = "_mise" ]; then
    _mise "$@"
else
    compdef _mise mise
fi
# ==================== mise completion setup end ====================


# 今後追加する補完ファイルはここに記述
# 例:
# if [[ -f "$DOTFILES_DIR/scripts/_another-script" ]]; then
#     echo "Installing another-script completion..."
#     sudo ln -sf "$DOTFILES_DIR/scripts/_another-script" "$COMPLETION_DIR/_another-script"
# fi

echo "Zsh completions setup complete!"
echo "Note: You may need to restart your shell or run 'compinit' to reload completions."
