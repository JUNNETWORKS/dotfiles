#!/usr/bin/env python3

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Convert Timezone
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🌏
# @raycast.packageName Time Tools
# @raycast.argument1 { "type": "text", "placeholder": "日時 (例: 2026-07-15 14:00 / now)" }
# @raycast.argument2 { "type": "text", "placeholder": "変換元 (例: JST, UTC, Asia/Tokyo)" }
# @raycast.argument3 { "type": "text", "placeholder": "変換先 (例: PST, America/New_York)" }

# Documentation:
# @raycast.description 日時を指定タイムゾーンから別のタイムゾーンに変換します
# @raycast.author you

import sys
import subprocess
from datetime import datetime
from zoneinfo import ZoneInfo

# よく使う略称 → IANA タイムゾーン名
ALIASES = {
    "JST": "Asia/Tokyo",
    "KST": "Asia/Seoul",
    "CST": "Asia/Shanghai",       # 中国標準時として解釈
    "IST": "Asia/Kolkata",
    "SGT": "Asia/Singapore",
    "UTC": "UTC",
    "GMT": "UTC",
    "BST": "Europe/London",
    "CET": "Europe/Paris",
    "CEST": "Europe/Paris",
    "EST": "America/New_York",
    "EDT": "America/New_York",
    "ET": "America/New_York",
    "CDT": "America/Chicago",
    "CT": "America/Chicago",
    "MST": "America/Denver",
    "MT": "America/Denver",
    "PST": "America/Los_Angeles",
    "PDT": "America/Los_Angeles",
    "PT": "America/Los_Angeles",
    "HST": "Pacific/Honolulu",
    "AEST": "Australia/Sydney",
    "AEDT": "Australia/Sydney",
    "NZST": "Pacific/Auckland",
}

DATETIME_FORMATS = [
    "%Y-%m-%d %H:%M:%S",
    "%Y-%m-%d %H:%M",
    "%Y/%m/%d %H:%M:%S",
    "%Y/%m/%d %H:%M",
    "%Y-%m-%dT%H:%M:%S",
    "%Y-%m-%dT%H:%M",
    "%m/%d %H:%M",
    "%m-%d %H:%M",
    "%H:%M",
]


def resolve_tz(name: str) -> ZoneInfo:
    key = name.strip()
    resolved = ALIASES.get(key.upper(), key)
    try:
        return ZoneInfo(resolved)
    except Exception:
        fail(f"タイムゾーン '{name}' が見つかりません (例: JST, UTC, Asia/Tokyo)")


def parse_datetime(text: str) -> datetime:
    text = text.strip()
    if text.lower() in ("now", "今"):
        return datetime.now()
    for fmt in DATETIME_FORMATS:
        try:
            dt = datetime.strptime(text, fmt)
            now = datetime.now()
            # 年が省略された形式は今年で補完
            if "%Y" not in fmt:
                dt = dt.replace(year=now.year)
            # 時刻のみの場合は今日の日付で補完
            if fmt == "%H:%M":
                dt = dt.replace(year=now.year, month=now.month, day=now.day)
            return dt
        except ValueError:
            continue
    fail(f"日時 '{text}' を解釈できません (例: 2026-07-15 14:00, 7/15 14:00, 14:00, now)")


def fail(msg: str):
    print(f"❌ {msg}")
    sys.exit(1)


def main():
    if len(sys.argv) < 4:
        fail("引数が足りません: 日時 / 変換元TZ / 変換先TZ")

    dt_text, from_text, to_text = sys.argv[1], sys.argv[2], sys.argv[3]

    from_tz = resolve_tz(from_text)
    to_tz = resolve_tz(to_text)
    naive = parse_datetime(dt_text)

    src = naive.replace(tzinfo=from_tz)
    dst = src.astimezone(to_tz)

    day_diff = (dst.date() - src.date()).days
    day_note = ""
    if day_diff == 1:
        day_note = " (翌日)"
    elif day_diff == -1:
        day_note = " (前日)"
    elif day_diff != 0:
        day_note = f" ({day_diff:+d}日)"

    result = (
        f"{src.strftime('%Y-%m-%d %H:%M')} {src.tzname()}"
        f" → {dst.strftime('%Y-%m-%d %H:%M (%a)')} {dst.tzname()}{day_note}"
    )
    print(result)

    # 結果をクリップボードにもコピー (macOS)
    try:
        subprocess.run(
            ["pbcopy"],
            input=dst.strftime("%Y-%m-%d %H:%M").encode(),
            check=False,
        )
    except FileNotFoundError:
        pass  # pbcopy がない環境では黙ってスキップ


if __name__ == "__main__":
    main()
