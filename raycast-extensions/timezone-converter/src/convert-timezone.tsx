import {
  Action,
  ActionPanel,
  Clipboard,
  Form,
  Icon,
  showToast,
  Toast,
} from "@raycast/api";
import { DateTime } from "luxon";
import { useMemo, useState } from "react";

// よく使うタイムゾーン (ドロップダウン上部に表示)
const COMMON_ZONES: { value: string; title: string }[] = [
  { value: "Asia/Tokyo", title: "日本 (JST) — Asia/Tokyo" },
  { value: "UTC", title: "UTC" },
  { value: "America/Los_Angeles", title: "米国西海岸 (PT) — America/Los_Angeles" },
  { value: "America/New_York", title: "米国東海岸 (ET) — America/New_York" },
  { value: "America/Chicago", title: "米国中部 (CT) — America/Chicago" },
  { value: "Europe/London", title: "英国 — Europe/London" },
  { value: "Europe/Paris", title: "中央ヨーロッパ — Europe/Paris" },
  { value: "Asia/Shanghai", title: "中国 — Asia/Shanghai" },
  { value: "Asia/Seoul", title: "韓国 — Asia/Seoul" },
  { value: "Asia/Singapore", title: "シンガポール — Asia/Singapore" },
  { value: "Asia/Kolkata", title: "インド — Asia/Kolkata" },
  { value: "Australia/Sydney", title: "シドニー — Australia/Sydney" },
];

// 上記以外の全IANAタイムゾーン
const OTHER_ZONES: string[] = (
  Intl.supportedValuesOf ? Intl.supportedValuesOf("timeZone") : []
).filter((z) => !COMMON_ZONES.some((c) => c.value === z));

// M/d/H は1〜2桁どちらも受け付ける (luxonのMM/HHは2桁固定のため)
const INPUT_FORMATS = [
  "yyyy-M-d H:mm:ss",
  "yyyy-M-d H:mm",
  "yyyy/M/d H:mm:ss",
  "yyyy/M/d H:mm",
  "yyyy-MM-dd'T'HH:mm:ss",
  "yyyy-MM-dd'T'HH:mm",
  "M/d H:mm",
  "M-d H:mm",
  "H:mm",
];

/** 入力文字列を「fromZone のローカル日時」として解釈する */
function parseInput(text: string, fromZone: string): DateTime | null {
  const trimmed = text.trim();
  if (trimmed === "" || trimmed.toLowerCase() === "now" || trimmed === "今") {
    return DateTime.now().setZone(fromZone);
  }
  const now = DateTime.now().setZone(fromZone);
  for (const fmt of INPUT_FORMATS) {
    const dt = DateTime.fromFormat(trimmed, fmt, { zone: fromZone });
    if (dt.isValid) {
      // 年が省略された形式は今年、時刻のみは今日で補完
      if (!fmt.includes("yyyy")) {
        if (fmt === "H:mm") {
          return dt.set({ year: now.year, month: now.month, day: now.day });
        }
        return dt.set({ year: now.year });
      }
      return dt;
    }
  }
  return null;
}

function dayDiffNote(src: DateTime, dst: DateTime): string {
  const diff = dst.startOf("day").diff(src.startOf("day"), "days").days;
  if (diff === 1) return " (翌日)";
  if (diff === -1) return " (前日)";
  if (diff !== 0) return ` (${diff > 0 ? "+" : ""}${diff}日)`;
  return "";
}

export default function Command() {
  const [dateText, setDateText] = useState<string>("");
  const [fromZone, setFromZone] = useState<string>("Asia/Tokyo");
  const [toZone, setToZone] = useState<string>("America/Los_Angeles");

  const result = useMemo(() => {
    const src = parseInput(dateText, fromZone);
    if (!src || !src.isValid) return null;
    const dst = src.setZone(toZone);
    if (!dst.isValid) return null;
    return { src, dst };
  }, [dateText, fromZone, toZone]);

  const resultText = result
    ? `${result.dst.toFormat("yyyy-MM-dd HH:mm")} (${result.dst.weekdayShort}) ${result.dst.toFormat("ZZZZ")}${dayDiffNote(result.src, result.dst)}`
    : dateText.trim() === ""
      ? "" // 空欄 = 現在時刻なので result は必ず存在するが、型のためのフォールバック
      : "⚠️ 日時を解釈できません (例: 2026-07-15 14:00, 7/15 14:00, 14:00, now)";

  const sourceText = result
    ? `${result.src.toFormat("yyyy-MM-dd HH:mm")} (${result.src.weekdayShort}) ${result.src.toFormat("ZZZZ")}`
    : "";

  async function copyResult() {
    if (!result) {
      await showToast({
        style: Toast.Style.Failure,
        title: "変換できません",
        message: "日時の形式を確認してください",
      });
      return;
    }
    await Clipboard.copy(result.dst.toFormat("yyyy-MM-dd HH:mm"));
    await showToast({
      style: Toast.Style.Success,
      title: "コピーしました",
      message: resultText,
    });
  }

  function swapZones() {
    const f = fromZone;
    setFromZone(toZone);
    setToZone(f);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="結果をコピー"
            icon={Icon.Clipboard}
            onSubmit={copyResult}
          />
          <Action
            title="変換元と変換先を入れ替え"
            icon={Icon.Switch}
            shortcut={{ modifiers: ["cmd"], key: "s" }}
            onAction={swapZones}
          />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="datetime"
        title="日時"
        placeholder="2026-07-15 14:00 / 7/15 14:00 / 14:00 / now (空欄=現在時刻)"
        value={dateText}
        onChange={setDateText}
      />
      <Form.Dropdown id="from" title="変換元" value={fromZone} onChange={setFromZone}>
        <Form.Dropdown.Section title="よく使うタイムゾーン">
          {COMMON_ZONES.map((z) => (
            <Form.Dropdown.Item key={z.value} value={z.value} title={z.title} />
          ))}
        </Form.Dropdown.Section>
        <Form.Dropdown.Section title="すべてのタイムゾーン">
          {OTHER_ZONES.map((z) => (
            <Form.Dropdown.Item key={z} value={z} title={z} />
          ))}
        </Form.Dropdown.Section>
      </Form.Dropdown>
      <Form.Dropdown id="to" title="変換先" value={toZone} onChange={setToZone}>
        <Form.Dropdown.Section title="よく使うタイムゾーン">
          {COMMON_ZONES.map((z) => (
            <Form.Dropdown.Item key={z.value} value={z.value} title={z.title} />
          ))}
        </Form.Dropdown.Section>
        <Form.Dropdown.Section title="すべてのタイムゾーン">
          {OTHER_ZONES.map((z) => (
            <Form.Dropdown.Item key={z} value={z} title={z} />
          ))}
        </Form.Dropdown.Section>
      </Form.Dropdown>
      <Form.Separator />
      {sourceText !== "" && <Form.Description title="変換元の日時" text={sourceText} />}
      <Form.Description title="変換結果" text={resultText || "—"} />
    </Form>
  );
}
