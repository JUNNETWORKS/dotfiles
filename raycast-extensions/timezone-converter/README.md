# Timezone Converter (Raycast Extension)

日時・変換元タイムゾーン・変換先タイムゾーンを指定して日時を変換するRaycast Extensionです。

## 機能

- 入力しながらリアルタイムで変換結果を表示
- よく使うタイムゾーン12種 + 全IANAタイムゾーンをドロップダウンで選択（ドロップダウン内で検索可能）
- サマータイム自動判定（例: 7月のLos AngelesはPDT、1月はPST）
- 日付をまたぐ場合は「(翌日)」「(前日)」を表示
- Enter（結果をコピー）で変換結果をクリップボードにコピー
- ⌘S で変換元と変換先を入れ替え

## 対応する日時形式

| 入力例 | 解釈 |
|---|---|
| `2026-07-15 14:00` / `2026/7/15 14:00` | そのまま |
| `7/15 14:00` | 今年の7月15日 |
| `14:00` / `3:00` | 今日のその時刻 |
| `now` または空欄 | 現在時刻 |

## セットアップ

Node.js（v20以上推奨）が必要です。

```bash
cd timezone-converter
npm install
npm run dev
```

`npm run dev` を実行すると開発モードでRaycastに登録され、「Convert Timezone」で検索できるようになります。一度 `ray develop` で読み込めば、開発サーバーを止めてもコマンドは残ります。

## ファイル構成

```
timezone-converter/
├── assets/icon.png          # 拡張機能アイコン (512x512)
├── package.json             # manifest (コマンド定義・依存関係)
├── tsconfig.json
└── src/convert-timezone.tsx # コマンド本体 (Form UI + luxonで変換)
```

## カスタマイズ

- よく使うタイムゾーンのリストは `src/convert-timezone.tsx` の `COMMON_ZONES` を編集
- デフォルトの変換元/変換先は `useState` の初期値（`Asia/Tokyo` / `America/Los_Angeles`）を変更
