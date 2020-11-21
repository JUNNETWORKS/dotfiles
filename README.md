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

### 依存しているもの

- git
- zsh
- oh-my-zsh
- neovim
- [Powerline fonts](https://github.com/powerline/fonts) oh-my-zsh の theme 用
- [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) neovim の dfsx プラグイン用
- [commitizen](https://github.com/commitizen/cz-cli)
- [cz-customizable](https://github.com/leoforfree/cz-customizable) commitizen の設定
- [git-cz](https://github.com/streamich/git-cz) commitizen で絵文字コミット
- [peco](https://github.com/peco/peco) CLI フィルタリングツール. .gitconfig 内で使ってる.
- [gh](https://github.com/cli/cli) GitHub Official CLI Tool
- [hub](https://github.com/github/hub)
- [tig](https://github.com/jonas/tig) it make possible visualize git history beautiful [日本語対応](https://blog.freks.jp/tig-install/)
- anyenv
- anyenv-update
- nodenv-default-packages

## MEMO

### Commitizen

#### local

Commitizen を使うためにはリポジトリを Commitizen Friendly にする必要があります.

以下のコマンドで初期設定を行えます.

##### 通常コミット

```bash
commitizen init cz-customizable --yarn --save-dev --save-exact
```

##### 絵文字コミット

git-cz の方は別に設定しなくても `git-cz` コマンドで勝手に動くのだが, どうしても `g cz` で動かしたい場合は以下のようにする

```bash
commitizen init git-cz --yarn --save-dev --save-exact
```

#### global

通常コミットとデフォルトコミット, どちらをデフォルトにするか設定できます

```bash
echo '{ "path": "<cz_adapter>" }' > ~/.czrc
```

`<cz_adapter>` のところに `cz-customizable` か `git-cz` を入れてください.

[Conventional commit messages as a global utility](https://github.com/commitizen/cz-cli#conventional-commit-messages-as-a-global-utility)
