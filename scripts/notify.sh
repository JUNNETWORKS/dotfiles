#!/bin/bash

# デフォルト値の設定
TITLE="Notification"
MESSAGE=""

# ヘルプメッセージを表示する関数
usage() {
    echo "Usage: $(basename "$0") [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -t TITLE    通知のタイトルを指定します (デフォルト: Notification)"
    echo "  -m MESSAGE  通知のメッセージ内容を指定します (必須)"
    echo "  -h          このヘルプを表示します"
    echo ""
    echo "Example:"
    echo "  $(basename "$0") -t \"システム\" -m \"バックアップが完了しました\""
    exit 0
}

# getopts で引数を解析
while getopts "t:m:h" opt; do
    case "$opt" in
        t) TITLE="$OPTARG" ;;
        m) MESSAGE="$OPTARG" ;;
        h) usage ;;
        *) usage ;;
    esac
done

# メッセージが空の場合はエラーを表示して終了
if [ -z "$MESSAGE" ]; then
    echo "Error: メッセージ (-m) は必須項目です。"
    echo "詳細な使い方は $0 -h を参照してください。"
    exit 1
fi

# OSの判定と実行
OS_TYPE="$(uname -s)"

case "$OS_TYPE" in
    # --- macOS ---
    Darwin*)
        osascript -e "display notification \"$MESSAGE\" with title \"$TITLE\""
        ;;

    # --- Linux ---
    Linux*)
        if command -v notify-send > /dev/null; then
            notify-send "$TITLE" "$MESSAGE"
        else
            echo "Error: notify-send (libnotify-bin) が見つかりません。"
            exit 1
        fi
        ;;

    # --- Windows (WSL / Git Bash / MSYS2) ---
    CYGWIN*|MINGW*|MSYS*)
        powershell.exe -Command "
            [void] [System.Reflection.Assembly]::LoadWithPartialName('System.Windows.Forms');
            \$objNotifyIcon = New-Object System.Windows.Forms.NotifyIcon;
            \$objNotifyIcon.Icon = [System.Drawing.SystemIcons]::Information;
            \$objNotifyIcon.BalloonTipTitle = '$TITLE';
            \$objNotifyIcon.BalloonTipText = '$MESSAGE';
            \$objNotifyIcon.Visible = \$True;
            \$objNotifyIcon.ShowBalloonTip(5000);
        "
        ;;

    *)
        echo "Unsupported OS: $OS_TYPE"
        exit 1
        ;;
esac