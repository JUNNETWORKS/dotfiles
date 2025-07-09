#!/bin/bash

# VOICEVOX speak command
# Usage: ./speak-voicevox.sh "話したい文章"

set -e

VOICEVOX_PORT=50021
VOICEVOX_HOST="127.0.0.1"
VOICEVOX_URL="http://${VOICEVOX_HOST}:${VOICEVOX_PORT}"
ZUNDAMON_SPEAKER_ID=3  # ずんだもんの基本スタイルID（ノーマル）

# ヘルプ表示
show_help() {
    cat << EOF
VOICEVOX speak command

使用法:
    $0 "話したい文章"
    $0 [オプション]

オプション:
    -h, --help    このヘルプを表示

説明:
    VOICEVOXを使用してずんだもんの音声で指定したテキストを読み上げます。
    VOICEVOXコンテナが起動していない場合は自動的に起動します。

例:
    $0 "こんにちは、ずんだもんなのだ！"
    $0 "今日はいい天気ですね"

要件:
    - Docker がインストールされていること
    - macOSの場合は afplay コマンドが利用可能であること
    - Linuxの場合は aplay または paplay コマンドが利用可能であること

EOF
}

# 引数チェック
if [ $# -eq 0 ]; then
    echo "使用法: $0 \"話したい文章\""
    echo "例: $0 \"こんにちは、ずんだもんなのだ！\""
    echo "詳細は $0 -h で確認してください"
    exit 1
fi

# ヘルプオプションのチェック
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    show_help
    exit 0
fi

TEXT="$1"

# VOICEVOXコンテナが起動しているかチェック
check_voicevox_running() {
    if curl -s "${VOICEVOX_URL}/speakers" > /dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# VOICEVOXコンテナを起動
start_voicevox() {
    echo "VOICEVOXコンテナを起動しています..."
    
    # 既存のコンテナが存在するかチェック
    if docker ps -a --format '{{.Names}}' | grep -q "voicevox_engine"; then
        echo "既存のVOICEVOXコンテナを停止しています..."
        docker stop voicevox_engine > /dev/null 2>&1 || true
        docker rm voicevox_engine > /dev/null 2>&1 || true
    fi
    
    # VOICEVOXコンテナを起動
    docker run -d --name voicevox_engine -p "${VOICEVOX_PORT}:50021" voicevox/voicevox_engine:cpu-latest
    
    # 起動を待機
    echo "VOICEVOXの起動を待機しています..."
    for i in {1..30}; do
        if check_voicevox_running; then
            echo "VOICEVOXが起動しました"
            return 0
        fi
        sleep 1
    done
    
    echo "エラー: VOICEVOXの起動に失敗しました"
    exit 1
}

# 音声合成と再生
synthesize_and_play() {
    local text="$1"
    
    echo "音声を合成しています..."
    
    # 一時ファイル作成
    local temp_dir=$(mktemp -d)
    local audio_file="${temp_dir}/speech.wav"
    local query_file="${temp_dir}/query.json"
    
    # クリーンアップ用のトラップ
    trap "rm -rf ${temp_dir}" EXIT
    
    # audio_queryの生成（URLエンコード）
    local encoded_text=$(printf '%s' "${text}" | jq -sRr @uri)
    curl -s -X POST "${VOICEVOX_URL}/audio_query?text=${encoded_text}&speaker=${ZUNDAMON_SPEAKER_ID}&enable_katakana_english=false" \
        -H "Content-Type: application/json" \
        -o "${query_file}"
    
    if [ $? -ne 0 ] || [ ! -f "${query_file}" ] || [ ! -s "${query_file}" ]; then
        echo "エラー: audio_queryの生成に失敗しました"
        exit 1
    fi
    
    # 音声合成
    curl -s -H "Content-Type: application/json" \
        -X POST -d @"${query_file}" \
        "${VOICEVOX_URL}/synthesis?speaker=${ZUNDAMON_SPEAKER_ID}" \
        -o "${audio_file}"
    
    if [ $? -ne 0 ]; then
        echo "エラー: 音声合成に失敗しました"
        exit 1
    fi
    
    # 音声ファイルが生成されているかチェック
    if [ ! -f "${audio_file}" ] || [ ! -s "${audio_file}" ]; then
        echo "エラー: 音声ファイルが生成されませんでした"
        exit 1
    fi
    
    # ファイルの先頭バイトを確認（WAVファイルかどうか）
    local file_header=$(hexdump -C "${audio_file}" | head -1)
    if [[ ! "${file_header}" =~ "52 49 46 46" ]]; then
        echo "エラー: 生成されたファイルがWAV形式ではありません"
        echo "ファイルの内容: $(head -c 100 "${audio_file}")"
        exit 1
    fi
    
    echo "音声を再生しています..."
    
    # macOSの場合はafplayを使用
    if command -v afplay > /dev/null 2>&1; then
        afplay "${audio_file}" 2>/dev/null
        if [ $? -ne 0 ]; then
            echo "エラー: 音声再生に失敗しました"
            exit 1
        fi
    # Linuxの場合はaplayまたはpaplayを使用
    elif command -v aplay > /dev/null 2>&1; then
        aplay "${audio_file}" 2>/dev/null
        if [ $? -ne 0 ]; then
            echo "エラー: 音声再生に失敗しました"
            exit 1
        fi
    elif command -v paplay > /dev/null 2>&1; then
        paplay "${audio_file}" 2>/dev/null
        if [ $? -ne 0 ]; then
            echo "エラー: 音声再生に失敗しました"
            exit 1
        fi
    else
        echo "エラー: 音声再生コマンドが見つかりません"
        echo "音声ファイルが生成されました: ${audio_file}"
        exit 1
    fi
    
    echo "音声再生が完了しました"
}

# メイン処理
main() {
    # Dockerが利用可能かチェック
    if ! command -v docker > /dev/null 2>&1; then
        echo "エラー: Dockerが見つかりません"
        exit 1
    fi
    
    # VOICEVOXが起動しているかチェック
    if ! check_voicevox_running; then
        start_voicevox
    else
        echo "VOICEVOXは既に起動しています"
    fi
    
    # 音声合成と再生
    synthesize_and_play "$TEXT"
}

# スクリプト実行
main "$@"