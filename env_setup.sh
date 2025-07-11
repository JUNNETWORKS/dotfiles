#!/bin/zsh
set -euC

# download powerlevel10k
if [ -d "~/powerlevel10k" ]; then
  # Take action if DIR does not exist. #
  echo "Install powerlevel10k"
  git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
fi

echo create symlink for configurations

# zsh (based on powerlevel10k)
ln -sf ~/dotfiles/.zshrc ~/.zshrc
ln -sf ~/dotfiles/.p10k.zsh ~/.p10k.zsh

# vim
ln -sf ~/dotfiles/.vimrc ~/.vimrc
ln -sf ~/dotfiles/.vim ~/.vim

# tmux
ln -sf ~/dotfiles/.tmux.conf ~/.tmux.conf
ln -sf ~/dotfiles/.tmux.powerline.conf ~/.tmux.powerline.conf

# scripts
ln -sf ~/dotfiles/scripts ~/scripts

# ranger
ln -sf ~/dotfiles/.config/ranger ~/.config/ranger

# mise
ln -sf ~/dotfiles/.config/mise ~/.config/mise

# git
ln -sf ~/dotfiles/.gitconfig ~/.gitconfig
ln -sf ~/dotfiles/git/.gitignore_global ~/.gitignore_global

# cz-suctomizable
ln -sf ~/dotfiles/.config/cz-config.js ~/.config

# claude global
mkdir -p ~/.claude
ln -sf ~/dotfiles/.claude_global/CLAUDE.md ~/.claude/CLAUDE.md
ln -sf ~/dotfiles/.claude_global/settings.json ~/.claude/settings.json

# zsh completions
./setup/_setup_zsh_completions.sh

if uname -o | grep -q "Darwin" ; then
  echo "Setup MacOS settings..."
  # install dependencies
  exec ./setup/_env_setup.osx.sh
fi

if cat /etc/os-release | grep -q "ID_LIKE=debian" ; then
  echo "Setup Linux settings..."
  # install dependencies
  exec ./setup/_env_setup.debian.sh
fi

echo "Setup common settings..."
exec ./setup/_env_setup.common.sh
