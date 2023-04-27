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
