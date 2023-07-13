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
