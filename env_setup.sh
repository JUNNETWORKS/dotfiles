#!/bin/zsh
set -euCx

# download powerlevel10k
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k

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

# git
ln -sf ~/dotfiles/.gitconfig ~/.gitconfig

# cz-suctomizable
ln -sf ~/dotfiles/.config/cz-config.js ~/.config

# install libraries by brew (if os is macos)
# https://kakakakakku.hatenablog.com/entry/2020/09/17/124653
if uname -o | grep -q "Darwin" ; then
  # install dependencies
  ./_install.sh.osx
fi
