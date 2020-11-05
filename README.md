# JUN_NETWORKS Dotfiles

自分の環境のコンフィグファイルなどを管理してます.

使う時は `env_setup.sh` で各コンフィグファイルをそれぞれの場所にシンボリックリンクを貼るようにしています.

## requirement

- [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)
- [neovim](https://github.com/neovim/neovim)

## How to use

1. 依存ソフトウェアなどをインストールする.
2. このリポジトリをホームディレクトリ直下にクローンする
3. `bash env_setup.sh` を動かす

## TODO

neovim が Python3 に依存しているとか, oh-my-zsh のテーマの agnoster のためのフォントなどの依存関係の解決は何もしてないので出来るようにしたい.
