#!/bin/zsh
set -euC

if ! $(which diff-highlight) ; then
  echo "Find diff-highlight (It may take few minutes...)"
  DIFF_HIGHLIGHT=$(find / -name diff-highlight -perm +111 -type f -print -quit 2>/dev/null | cat)
  if [ -n "$DIFF_HIGHLIGHT" ] ; then
    echo "diff-highlight successfully found in your system"
    echo "Need root perm to exec 'sudo ln -sf \"$DIFF_HIGHLIGHT\" /usr/local/bin'"
    sudo ln -sf "$DIFF_HIGHLIGHT" /usr/local/bin
  else
    echo "diff-highlight is not found in your system"
  fi
fi

# install libraries by brew (if os is macos)
# https://kakakakakku.hatenablog.com/entry/2020/09/17/124653
if ! $(which brew &>/dev/null) ; then
  echo "Install brew"
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

echo "Install softwares listed in Brewfile"
brew bundle --file ~/dotfiles/Brewfile

