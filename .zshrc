# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# ========== Start User specific aliases and functions ==========

# Ctrl + S を押したときにXOFFによりキー入力が受け付けなくなるのを防ぐ
if ! uname -o | grep -q "Darwin" ; then
  stty stop undef
fi
# C-a のようなMacのemacライクなショートカットキーをtmuxで使えるようにする
bindkey -e

# Bashと同じように環境変数内の空白で区切る
# https://www.wholenotism.com/blog/2021/03/zsh-space-expansion.html
setopt SH_WORD_SPLIT

# copy to clip clipboard
if hash clip.exe 2> /dev/null
then
  # Windows
	alias pbcopy='clip.exe'
else
  # Linux
	alias pbocpy='xsel --clipboard --input'
fi

# Git aliases
alias g="git"

# tmux commands
alias ide="~/scripts/ide.sh"
export EDITOR="vim"

# env
# export PATH="$HOME/.anyenv/bin:$PATH"
# eval "$(anyenv init -)"
if command -v goenv > /dev/null 1>/dev/null; then
  eval "$(goenv init -)"
fi

if command -v nodenv > /dev/null 1>/dev/null; then
  eval "$(nodenv init -)"
fi

if command -v rbenv > /dev/null 1>/dev/null; then
  eval "$(rbenv init -)"
fi

# Rye: Python package manager
if [ -f "$HOME/.rye/env" ]; then
  source "$HOME/.rye/env"
fi

# .NET
export PATH="$HOME/.dotnet:$PATH"

# Python
PYTHON_BIN_PATH="$(python3 -m site --user-base)/bin"
PATH="$PATH:$PYTHON_BIN_PATH"

# golang
GOROOT="/usr/local/go"
GOBIN="$GOROOT/bin"
GOPATH="$HOME/go"
GOPATHBIN="$GOPATH/bin"
PATH="$PATH:$GOROOT:$GOPATH:$GOPATHBIN:$GOBIN"

# Flutter
FLUTTER_ROOT="$HOME/flutter"
FLUTTER_BIN="$FLUTTER_ROOT/bin"
PATH="$PATH:$FLUTTER_ROOT:$FLUTTER_BIN"

# Node Version Manager configuration
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Volta: JavaScript Tool Manager
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"

# Metasploit
export PATH="/opt/metasploit-framework/bin:$PATH"

# Softwares installed by pipx
export PATH="$HOME/.local/bin:$PATH"

if [[ "$OSTYPE" == "darwin"* ]]; then
  # MacOS

  # Brew
  PATH="$PATH:/opt/homebrew/bin"

  # The next line enables shell command completion for gcloud.
  if [ -f "/Users/$USER/Applications/google-cloud-sdk/completion.zsh.inc" ]; then . "/Users/$USER/Applications/google-cloud-sdk/completion.zsh.inc"; fi
  export PATH="/opt/homebrew/opt/libpq/bin:$PATH"

  # PostgreSQL executable files
  # brew install postgresql@15
  export PATH="/opt/homebrew/opt/postgresql@15/bin:$PATH"

  # The next line updates PATH for the Google Cloud SDK.
  if [ -f "/Users/$USER/Applications/google-cloud-sdk/path.zsh.inc" ]; then . "/Users/$USER/Applications/google-cloud-sdk/path.zsh.inc"; fi
elif [[ "$OSTYPE" == "msys"* ]]; then
  # Windows
  # Open current directory on windows file explorer
  alias ee='explorer.exe .'
fi


# ANSI colors
ansi () {
        echo 'Example: \\e[XXm string \\e[0m'
        for ((i = 1; i <= 7; i++)) do
                printf '\e[%dm%d\e[m ' $i $i
        done
        echo
        echo 'Example: \\e[XXm string \\e[0m'
        for ((i = 30; i <= 37; i++)) do
                printf '\e[%dm%d\e[m ' $i $i
        done
        for ((i = 40; i <= 47; i++)) do
                printf '\e[%dm%d\e[m ' $i $i
        done
        echo
        echo 'Example: \\e[38;5;XXm string \\e[0m'
        for ((i = 0; i < 16; i++)) do
                for ((j = 0; j < 16; j++)) do
                        hex=$(($i*16 + $j))
                        printf '\e[38;5;%dm%03d\e[m ' $hex $hex
                done
                echo ""
        done
}

# Man colorlize
man() {
        env \
            LESS_TERMCAP_mb=$(printf "\e[1;33m") \
            LESS_TERMCAP_md=$(printf "\e[1;33m") \
            LESS_TERMCAP_me=$(printf "\e[0m") \
            LESS_TERMCAP_se=$(printf "\e[0m") \
            LESS_TERMCAP_so=$(printf "\e[1;44;33m") \
            LESS_TERMCAP_ue=$(printf "\e[0m") \
            LESS_TERMCAP_us=$(printf "\e[1;32m") \
            man "$@"
}

mermaid-editor() {
  echo "Start mermaid editor on http://localhost:8080"
  docker run --publish 8000:8080 ghcr.io/mermaid-js/mermaid-live-editor
}

# ========== End User specific aliases and functions ==========

# ========== Start basic ==========
# searching through history by up/down arrow
autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey "^[[A" up-line-or-beginning-search # Up
bindkey "^[[B" down-line-or-beginning-search # Down

# コメントを履歴に残さない
setopt interactivecomments

# スラッシュを単語の区切りとみなす https://zenn.dev/ttskch/articles/fb5a700b37a504
autoload -Uz select-word-style
select-word-style bash
WORDCHARS='.-'

# 補完をcase-insensitiveに
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'

# 補完候補をカーソルで選択できるように
autoload -U compinit
compinit
zstyle ':completion:*:default' menu select=1

# 履歴ファイルの保存先
export HISTFILE=${HOME}/.zsh_history
# メモリに保存される履歴の件数
export HISTSIZE=1000
# 履歴ファイルに保存される履歴の件数
export SAVEHIST=100000
# ヒストリに追加されるコマンド行が古いものと同じなら古いものを削除
setopt hist_ignore_all_dups
# 開始と終了を記録
setopt EXTENDED_HISTORY
# 他のzshと履歴を共有
setopt inc_append_history
setopt share_history

# ========== End basic ==========

# ========== Start load zinit ==========
source ~/dotfiles/.zsh-plugins.zsh
# ========== End load zinit ==========

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
# SDKMAN: Software Development Kit Manager
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# ~/.fzf.zsh は fzf インストール時に生成されるファイル
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

## [Completion]
## Completion scripts setup. Remove the following line to uninstall
[[ -f "/Users/$USER/.dart-cli-completion/zsh-config.zsh" ]] && . "/Users/$USER/.dart-cli-completion/zsh-config.zsh" || true

