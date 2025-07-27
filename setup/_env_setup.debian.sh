#!/bin/bash

set -e  # エラーが発生したら停止

# 色付きメッセージ用の関数
print_info() {
    echo -e "\e[34m[INFO]\e[0m $1"
}

print_success() {
    echo -e "\e[32m[SUCCESS]\e[0m $1"
}

print_error() {
    echo -e "\e[31m[ERROR]\e[0m $1"
}

##################################
# Symlinks
##################################

# diff-highlight
sudo chmod +x /usr/share/doc/git/contrib/diff-highlight/diff-highlight
sudo ln -sf /usr/share/doc/git/contrib/diff-highlight/diff-highlight /usr/local/bin/diff-highlight


##################################
# Install Softwares
##################################

# mise
curl https://mise.run | sh

# apt でインストールするパッケージリスト
APT_PACKAGES=(
    # 基本ツール
    "curl"
    "wget"
    "git"
    "vim"
    "nano"
    "tree"
    "htop"
    "unzip"
    "zip"
    "lsof"
    "bc"
    "jq"

    # 開発ツール
    "build-essential"
    "python3"
    "python3-pip"
    "python3-dev"
    "clang"
    "gdb"
    "make"
    "patch"

    # システム監視・管理ツール
    "tmux"
    "screen"
    "lm-sensors"
    "strace"
    "ltrace"
    "lshw"
    "pciutils"
    "usbutils"
    "ncurses-bin"

    # ネットワークツール
    "net-tools"
    "tcpdump"
    "telnet"
    "rsync"
    "openssh-client"
    "openssh-server"

    # データベースクライアント
    "mysql-client"
    "postgresql-client"

    # エディタ・ツール
    "bat"
    "fzf"
    "peco"

    # セキュリティ・暗号化
    "gnupg"
    "openssl"

    # Ruby関連（必要に応じて）
    "ruby-full"
    "rbenv"
    "rake"

    # その他便利ツール
    "ffmpeg"
    "imagemagick"
    "graphviz"
    "inxi"
    "siege"
    "time"
)

SNAP_PACKAGES=(

)


# メイン処理開始
print_info "パッケージの自動インストールを開始します..."

# システムの更新
print_info "システムを更新中..."
sudo apt update && sudo apt upgrade -y
print_success "システムの更新が完了しました"

# APTパッケージのインストール
print_info "APTパッケージをインストール中..."
print_info "インストール対象: ${#PACKAGES[@]} パッケージ"

# パッケージリストを表示
echo "インストールするパッケージ:"
for package in "${PACKAGES[@]}"; do
    echo "  - $package"
done

# 確認プロンプト（オプション）
read -p "続行しますか？ [y/N]: " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_info "インストールをキャンセルしました"
    exit 0
fi

# 一括インストール実行
if sudo apt install -y "${PACKAGES[@]}"; then
    print_success "APTパッケージのインストールが完了しました"
else
    print_error "APTパッケージのインストールでエラーが発生しました"
    exit 1
fi

# Snapパッケージのインストール（オプション）
if [[ ${#SNAP_PACKAGES[@]} -gt 0 ]]; then
    if command -v snap >/dev/null 2>&1; then
        print_info "Snapパッケージをインストール中..."
        for snap_package in "${SNAP_PACKAGES[@]}"; do
            print_info "インストール中: $snap_package"
            if sudo snap install $snap_package; then
                print_success "$snap_package のインストールが完了"
            else
                print_error "$snap_package のインストールでエラーが発生"
            fi
        done
    else
        print_info "Snapが利用できないため、Snapパッケージをスキップします"
    fi
else
    print_info "Snapパッケージが指定されていないため、スキップします"
fi

# 不要なパッケージの削除
print_info "不要なパッケージを削除中..."
sudo apt autoremove -y
sudo apt autoclean

print_success "全てのインストールが完了しました！"
print_info "システムの再起動を推奨します"
