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

# Brew
PATH="$PATH:/opt/homebrew/bin"

# pyenv
# export PATH="${HOME}/.pyenv/bin:$PATH"
# eval "$(pyenv init -)"
# eval "$(pyenv virtualenv-init -)"
# pipenv
PYTHON_BIN_PATH="$(python3 -m site --user-base)/bin"
PATH="$PATH:$PYTHON_BIN_PATH"

# golang
GOROOT="/usr/local/go"
GOBIN="$GOROOT/bin"
GOPATH="$HOME/go"
GOPATHBIN="$GOROOT/bin"
PATH="$PATH:$GOROOT:$GOPATH:$GOPATHBIN:$GOBIN"

# terraform
# autoload -U +X bashcompinit && bashcompinit
# complete -o nospace -C /usr/local/bin/terraform terraform

# copy to clip clipboard
if hash clip.exe 2> /dev/null
then
	alias pbcopy='clip.exe'
else
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
eval "$(goenv init -)"
eval "$(nodenv init -)"

# .NET
export PATH="$HOME/.dotnet:$PATH"

# Poetry (Python package manager)
export PATH="$HOME/.poetry/bin:$PATH"

# Open current directory on windows file explorer
alias ee='explorer.exe .'

# Node Version Manager configuration
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

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

# searching through history by up/down arrow
autoload -U up-line-or-beginning-search
autoload -U down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search
bindkey "^[[A" up-line-or-beginning-search # Up
bindkey "^[[B" down-line-or-beginning-search # Down

# ========== End Start User specific aliases and functions ==========

### Added by Zinit's installer
if [[ ! -f $HOME/.local/share/zinit/zinit.git/zinit.zsh ]]; then
    print -P "%F{33} %F{220}Installing %F{33}ZDHARMA-CONTINUUM%F{220} Initiative Plugin Manager (%F{33}zdharma-continuum/zinit%F{220})…%f"
    command mkdir -p "$HOME/.local/share/zinit" && command chmod g-rwX "$HOME/.local/share/zinit"
    command git clone https://github.com/zdharma-continuum/zinit "$HOME/.local/share/zinit/zinit.git" && \
        print -P "%F{33} %F{34}Installation successful.%f%b" || \
        print -P "%F{160} The clone has failed.%f%b"
fi

autoload -Uz compinit && compinit

source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

# ========== Start install zsh plugins ==========

# from oh-my-zsh

zi snippet OMZP::git
zi snippet OMZP::tmux
zi snippet OMZP::aws
zi snippet OMZP::yarn
zi snippet OMZP::npm
zi snippet OMZP::node
zi snippet OMZP::pip
zi snippet OMZP::dotenv
zi snippet OMZP::rust
zi snippet OMZP::docker
zi snippet OMZP::docker-compose
zi snippet OMZP::golang
zi snippet OMZP::terraform
zi snippet OMZP::kubectl
zi snippet OMZP::gcloud
zi snippet OMZP::rails
zinit cdclear -q

# theme
zinit ice depth=1; zinit light romkatv/powerlevel10k

# autocompletions
# Plugin history-search-multi-word loaded with investigating.
zinit load zdharma-continuum/history-search-multi-word

# Two regular plugins loaded without investigating.
zinit light zsh-users/zsh-autosuggestions
zinit light zdharma-continuum/fast-syntax-highlighting

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
export SDKMAN_DIR="$HOME/.sdkman"
[[ -s "$HOME/.sdkman/bin/sdkman-init.sh" ]] && source "$HOME/.sdkman/bin/sdkman-init.sh"

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
