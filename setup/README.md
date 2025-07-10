# Setup Scripts

このディレクトリには、環境セットアップ用のスクリプトが含まれています。

## 重要な注意事項

**`_*.sh` で始まるファイルは直接実行しないでください。**
これらのファイルは、ルートディレクトリの `env_setup.sh` から自動的に呼び出されます。

## 使用方法

```bash
# ルートディレクトリから実行
./env_setup.sh
```

## ファイル説明

- `_env_setup.common.sh`: 共通の環境設定
- `_env_setup.debian.sh`: Debian系OS用の設定
- `_env_setup.osx.sh`: macOS用の設定
- `_setup_zsh_completions.sh`: Zsh補完設定

これらのスクリプトは、`env_setup.sh` によってOS判定後に適切に呼び出されます。