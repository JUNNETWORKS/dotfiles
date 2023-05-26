#!/bin/sh

# install dependencies
./_install.sh.osx

# zsh (require "oh-my-zsh")
ln -sf ~/dotfiles/.zshrc ~/.zshrc

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

# git
ln -sf ~/dotfiles/.gitconfig ~/.gitconfig

# cz-suctomizable
ln -sf ~/dotfiles/.config/cz-config.js ~/.config

# install libraries by brew (if os is macos)
# https://kakakakakku.hatenablog.com/entry/2020/09/17/124653
if uname -o | grep -q "Darwin" ; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  source ~/.zshrc
  brew bundle --file ~/dotfiles/Brewfile
fi
