#!/bin/zsh
set -euC

# download powerlevel10k
if [ -d "~/powerlevel10k" ]; then
  # Take action if DIR does not exist. #
  echo "Install powerlevel10k"
  git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
fi

echo create symlink for zshrc, p10k, vim, tmux, scripts, ranger, git

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
ln -sf ~/dotfiles/git/.gitignore_global ~/.gitignore_global

# cz-suctomizable
ln -sf ~/dotfiles/.config/cz-config.js ~/.config

if uname -o | grep -q "Darwin" ; then
  # install dependencies
  exec ./_install.sh.osx
fi
