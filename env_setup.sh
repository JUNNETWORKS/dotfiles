#!/bin/sh
# zsh (require "oh-my-zsh")
ln -sf ~/dotfiles/.zshrc ~/.zshrc

# neovim
ln -sf ~/dotfiles/.vimrc ~/.vimrc
ln -sf ~/dotfiles/.vim ~/.vim
ln -sf ~/dotfiles/.vimrc.lightline ~/.vimrc.lightline
ln -sf ~/dotfiles/.vimrc.maps ~/.vimrc.maps
mkdir -p ~/.config
ln -sf ~/dotfiles/.config/nvim ~/.config/nvim

# tmux
ln -sf ~/dotfiles/.tmux.conf ~/.tmux.conf
ln -sf ~/dotfiles/.tmux.powerline.conf ~/.tmux.powerline.conf

# scripts
ln -sf ~/dotfiles/scripts ~/scripts
