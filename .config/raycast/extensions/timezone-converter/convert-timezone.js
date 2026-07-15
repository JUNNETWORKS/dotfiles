"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/convert-timezone.tsx
var convert_timezone_exports = {};
__export(convert_timezone_exports, {
  default: () => Command
});
module.exports = __toCommonJS(convert_timezone_exports);
var import_api = require("@raycast/api");

// node_modules/luxon/build/es6/luxon.mjs
var LuxonError = class extends Error {
};
var InvalidDateTimeError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
};
var InvalidIntervalError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
};
var InvalidDurationError = class extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
};
var ConflictingSpecificationError = class extends LuxonError {
};
var InvalidUnitError = class extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
};
var InvalidArgumentError = class extends LuxonError {
};
var ZoneIsAbstractError = class extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
};
var n = "numeric";
var s = "short";
var l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var Zone = class {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ZoneIsAbstractError();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ZoneIsAbstractError();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ZoneIsAbstractError();
  }
};
var singleton$1 = null;
var SystemZone = class _SystemZone extends Zone {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new _SystemZone();
    }
    return singleton$1;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }
  /** @override **/
  get isValid() {
    return true;
  }
};
var dtfCache = /* @__PURE__ */ new Map();
function makeDTF(zoneName) {
  let dtf = dtfCache.get(zoneName);
  if (dtf === void 0) {
    dtf = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zoneName,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    });
    dtfCache.set(zoneName, dtf);
  }
  return dtf;
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];
    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
var ianaZoneCache = /* @__PURE__ */ new Map();
var IANAZone = class _IANAZone extends Zone {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    let zone = ianaZoneCache.get(name);
    if (zone === void 0) {
      ianaZoneCache.set(name, zone = new _IANAZone(name));
    }
    return zone;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache.clear();
    dtfCache.clear();
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(s2) {
    return this.isValidZone(s2);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = _IANAZone.isValidZone(name);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return false;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    if (!this.valid) return NaN;
    const date = new Date(ts);
    if (isNaN(date)) return NaN;
    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
};
var intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
var intlDTCache = /* @__PURE__ */ new Map();
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache.get(key);
  if (dtf === void 0) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache.set(key, dtf);
  }
  return dtf;
}
var intlNumCache = /* @__PURE__ */ new Map();
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache.get(key);
  if (inf === void 0) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache.set(key, inf);
  }
  return inf;
}
var intlRelCache = /* @__PURE__ */ new Map();
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts;
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache.get(key);
  if (inf === void 0) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache.set(key, inf);
  }
  return inf;
}
var sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
var intlResolvedOptionsCache = /* @__PURE__ */ new Map();
function getCachedIntResolvedOptions(locString) {
  let opts = intlResolvedOptionsCache.get(locString);
  if (opts === void 0) {
    opts = new Intl.DateTimeFormat(locString).resolvedOptions();
    intlResolvedOptionsCache.set(locString, opts);
  }
  return opts;
}
var weekInfoCache = /* @__PURE__ */ new Map();
function getCachedWeekInfo(locString) {
  let data = weekInfoCache.get(locString);
  if (!data) {
    const locale = new Intl.Locale(locString);
    data = "getWeekInfo" in locale ? locale.getWeekInfo() : locale.weekInfo;
    if (!("minimalDays" in data)) {
      data = { ...fallbackWeekSettings, ...data };
    }
    weekInfoCache.set(locString, data);
  }
  return data;
}
function parseLocaleString(localeStr) {
  const xIndex = localeStr.indexOf("-x-");
  if (xIndex !== -1) {
    localeStr = localeStr.substring(0, xIndex);
  }
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    let selectedStr;
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
      selectedStr = localeStr;
    } catch (e) {
      const smaller = localeStr.substring(0, uIndex);
      options = getCachedDTF(smaller).resolvedOptions();
      selectedStr = smaller;
    }
    const { numberingSystem, calendar } = options;
    return [selectedStr, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    if (!localeStr.includes("-u-")) {
      localeStr += "-u";
    }
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2009, i, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, englishFn, intlFn) {
  const mode = loc.listingMode();
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || getCachedIntResolvedOptions(loc.locale).numberingSystem === "latn";
  }
}
var PolyNumberFormatter = class {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    const { padTo, floor, ...otherOpts } = opts;
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
      return padStart(fixed, this.padTo);
    }
  }
};
var PolyDateFormatter = class {
  constructor(dt, intl, opts) {
    this.opts = opts;
    this.originalZone = void 0;
    let z = void 0;
    if (this.opts.timeZone) {
      this.dt = dt;
    } else if (dt.zone.type === "fixed") {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        z = "UTC";
        this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
        this.originalZone = dt.zone;
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else if (dt.zone.type === "iana") {
      this.dt = dt;
      z = dt.zone.name;
    } else {
      z = "UTC";
      this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
      this.originalZone = dt.zone;
    }
    const intlOpts = { ...this.opts };
    intlOpts.timeZone = intlOpts.timeZone || z;
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    if (this.originalZone) {
      return this.formatToParts().map(({ value }) => value).join("");
    }
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const parts = this.dtf.formatToParts(this.dt.toJSDate());
    if (this.originalZone) {
      return parts.map((part) => {
        if (part.type === "timeZoneName") {
          const offsetName = this.originalZone.offsetName(this.dt.ts, {
            locale: this.dt.locale,
            format: this.opts.timeZoneName
          });
          return {
            ...part,
            value: offsetName
          };
        } else {
          return part;
        }
      });
    }
    return parts;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
};
var PolyRelFormatter = class {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
};
var fallbackWeekSettings = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
var Locale = class _Locale {
  static fromOpts(opts) {
    return _Locale.create(
      opts.locale,
      opts.numberingSystem,
      opts.outputCalendar,
      opts.weekSettings,
      opts.defaultToEN
    );
  }
  static create(locale, numberingSystem, outputCalendar, weekSettings, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    const weekSettingsR = validateWeekSettings(weekSettings) || Settings.defaultWeekSettings;
    return new _Locale(localeR, numberingSystemR, outputCalendarR, weekSettingsR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache.clear();
    intlNumCache.clear();
    intlRelCache.clear();
    intlResolvedOptionsCache.clear();
    weekInfoCache.clear();
  }
  static fromObject({ locale, numberingSystem, outputCalendar, weekSettings } = {}) {
    return _Locale.create(locale, numberingSystem, outputCalendar, weekSettings);
  }
  constructor(locale, numbering, outputCalendar, weekSettings, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.weekSettings = weekSettings;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return _Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        validateWeekSettings(alts.weekSettings) || this.weekSettings,
        alts.defaultToEN || false
      );
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }
  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }
  months(length, format = false) {
    return listStuff(this, length, months, () => {
      const monthSpecialCase = this.intl === "ja" || this.intl.startsWith("ja-");
      format &= !monthSpecialCase;
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        const mapper = !monthSpecialCase ? (dt) => this.extract(dt, intl, "month") : (dt) => this.dtFormatter(dt, intl).format();
        this.monthsCache[formatStr][length] = mapMonths(mapper);
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false) {
    return listStuff(this, length, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays(
          (dt) => this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems() {
    return listStuff(
      this,
      void 0,
      () => meridiems,
      () => {
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(length) {
    return listStuff(this, length, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(
          (dt) => this.extract(dt, intl, "era")
        );
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || getCachedIntResolvedOptions(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    if (this.weekSettings) {
      return this.weekSettings;
    } else if (!hasLocaleWeekInfo()) {
      return fallbackWeekSettings;
    } else {
      return getCachedWeekInfo(this.locale);
    }
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
};
var singleton = null;
var FixedOffsetZone = class _FixedOffsetZone extends Zone {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new _FixedOffsetZone(0);
    }
    return singleton;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset2) {
    return offset2 === 0 ? _FixedOffsetZone.utcInstance : new _FixedOffsetZone(offset2);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s2) {
    if (s2) {
      const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new _FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
    }
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return true;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return true;
  }
};
var InvalidZone = class extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return false;
  }
  /** @override **/
  get isValid() {
    return false;
  }
};
function normalizeZone(input, defaultZone2) {
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default") return defaultZone2;
    else if (lowered === "local" || lowered === "system") return SystemZone.instance;
    else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;
    else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}
var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
var digitRegexCache = /* @__PURE__ */ new Map();
function resetDigitRegexCache() {
  digitRegexCache.clear();
}
function digitRegex({ numberingSystem }, append = "") {
  const ns = numberingSystem || "latn";
  let appendCache = digitRegexCache.get(ns);
  if (appendCache === void 0) {
    appendCache = /* @__PURE__ */ new Map();
    digitRegexCache.set(ns, appendCache);
  }
  let regex = appendCache.get(append);
  if (regex === void 0) {
    regex = new RegExp(`${numberingSystems[ns]}${append}`);
    appendCache.set(append, regex);
  }
  return regex;
}
var now = () => Date.now();
var defaultZone = "system";
var defaultLocale = null;
var defaultNumberingSystem = null;
var defaultOutputCalendar = null;
var twoDigitCutoffYear = 60;
var throwOnInvalid;
var defaultWeekSettings = null;
var Settings = class {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n2) {
    now = n2;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return defaultWeekSettings;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(weekSettings) {
    defaultWeekSettings = validateWeekSettings(weekSettings);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return twoDigitCutoffYear;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(cutoffYear) {
    twoDigitCutoffYear = cutoffYear % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
    DateTime.resetCache();
    resetDigitRegexCache();
  }
};
var Invalid = class {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
};
var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid(
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}
function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));
  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  const js = d.getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function isoWeekdayToLocal(isoWeekday, startOfWeek) {
  return (isoWeekday - startOfWeek + 7) % 7 + 1;
}
function gregorianToWeek(gregObj, minDaysInFirstWeek = 4, startOfWeek = 1) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = isoWeekdayToLocal(dayOfWeek(year, month, day), startOfWeek);
  let weekNumber = Math.floor((ordinal - weekday + 14 - minDaysInFirstWeek) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear, minDaysInFirstWeek, startOfWeek);
  } else if (weekNumber > weeksInWeekYear(year, minDaysInFirstWeek, startOfWeek)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
}
function weekToGregorian(weekData, minDaysInFirstWeek = 4, startOfWeek = 1) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = isoWeekdayToLocal(dayOfWeek(weekYear, 1, minDaysInFirstWeek), startOfWeek), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 7 + minDaysInFirstWeek, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(weekData) };
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...timeObject(gregData) };
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(ordinalData) };
}
function usesLocalWeekValues(obj, loc) {
  const hasLocaleWeekData = !isUndefined(obj.localWeekday) || !isUndefined(obj.localWeekNumber) || !isUndefined(obj.localWeekYear);
  if (hasLocaleWeekData) {
    const hasIsoWeekData = !isUndefined(obj.weekday) || !isUndefined(obj.weekNumber) || !isUndefined(obj.weekYear);
    if (hasIsoWeekData) {
      throw new ConflictingSpecificationError(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    }
    if (!isUndefined(obj.localWeekday)) obj.weekday = obj.localWeekday;
    if (!isUndefined(obj.localWeekNumber)) obj.weekNumber = obj.localWeekNumber;
    if (!isUndefined(obj.localWeekYear)) obj.weekYear = obj.localWeekYear;
    delete obj.localWeekday;
    delete obj.localWeekNumber;
    delete obj.localWeekYear;
    return {
      minDaysInFirstWeek: loc.getMinDaysInFirstWeek(),
      startOfWeek: loc.getStartOfWeek()
    };
  } else {
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
  }
}
function hasInvalidWeekData(obj, minDaysInFirstWeek = 4, startOfWeek = 1) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(
    obj.weekNumber,
    1,
    weeksInWeekYear(obj.weekYear, minDaysInFirstWeek, startOfWeek)
  ), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.weekNumber);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasLocaleWeekInfo() {
  try {
    return typeof Intl !== "undefined" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch (e) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function validateWeekSettings(settings) {
  if (settings == null) {
    return null;
  } else if (typeof settings !== "object") {
    throw new InvalidArgumentError("Week settings must be an object");
  } else {
    if (!integerBetween(settings.firstDay, 1, 7) || !integerBetween(settings.minimalDays, 1, 7) || !Array.isArray(settings.weekend) || settings.weekend.some((v) => !integerBetween(v, 1, 7))) {
      throw new InvalidArgumentError("Invalid week settings");
    }
    return {
      firstDay: settings.firstDay,
      minimalDays: settings.minimalDays,
      weekend: Array.from(settings.weekend)
    };
  }
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x, n2) {
  return x - n2 * Math.floor(x / n2);
}
function padStart(input, n2 = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n2, "0");
  } else {
    padded = ("" + input).padStart(n2, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f);
  }
}
function roundTo(number, digits, rounding = "round") {
  const factor = 10 ** digits;
  switch (rounding) {
    case "expand":
      return number > 0 ? Math.ceil(number * factor) / factor : Math.floor(number * factor) / factor;
    case "trunc":
      return Math.trunc(number * factor) / factor;
    case "round":
      return Math.round(number * factor) / factor;
    case "floor":
      return Math.floor(number * factor) / factor;
    case "ceil":
      return Math.ceil(number * factor) / factor;
    default:
      throw new RangeError(`Value rounding ${rounding} is out of range`);
  }
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
  }
  return +d;
}
function firstWeekOffset(year, minDaysInFirstWeek, startOfWeek) {
  const fwdlw = isoWeekdayToLocal(dayOfWeek(year, 1, minDaysInFirstWeek), startOfWeek);
  return -fwdlw + minDaysInFirstWeek - 1;
}
function weeksInWeekYear(weekYear, minDaysInFirstWeek = 4, startOfWeek = 1) {
  const weekOffset = firstWeekOffset(weekYear, minDaysInFirstWeek, startOfWeek);
  const weekOffsetNext = firstWeekOffset(weekYear + 1, minDaysInFirstWeek, startOfWeek);
  return (daysInYear(weekYear) - weekOffset + weekOffsetNext) / 7;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > Settings.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = { timeZoneName: offsetFormat, ...intlOpts };
  const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || !Number.isFinite(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === void 0 || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token of splits) {
    if (token.literal) {
      s2 += token.val;
    } else {
      s2 += tokenToString(token.val);
    }
  }
  return s2;
}
var macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
var Formatter = class _Formatter {
  static create(locale, opts = {}) {
    return new _Formatter(locale, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0 || bracketed) {
          splits.push({
            literal: bracketed || /^\s+$/.test(currentFull),
            val: currentFull === "" ? "'" : currentFull
          });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }
  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }
  dtFormatter(dt, opts = {}) {
    return this.loc.dtFormatter(dt, { ...this.opts, ...opts });
  }
  formatDateTime(dt, opts) {
    return this.dtFormatter(dt, opts).format();
  }
  formatDateTimeParts(dt, opts) {
    return this.dtFormatter(dt, opts).formatToParts();
  }
  formatInterval(interval, opts) {
    const df = this.dtFormatter(interval.start, opts);
    return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
  }
  resolvedOptions(dt, opts) {
    return this.dtFormatter(dt, opts).resolvedOptions();
  }
  num(n2, p = 0, signDisplay = void 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p);
    }
    const opts = { ...this.opts };
    if (p > 0) {
      opts.padTo = p;
    }
    if (signDisplay) {
      opts.signDisplay = signDisplay;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(
      standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
      "weekday"
    ), maybeMacro = (token) => {
      const formatOpts = _Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
      switch (token) {
        // ms
        case "S":
          return this.num(dt.millisecond);
        case "u":
        // falls through
        case "SSS":
          return this.num(dt.millisecond, 3);
        // seconds
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        // fractional seconds
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        // minutes
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        // hours
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        // offset
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        // zone
        case "z":
          return dt.zoneName;
        // meridiems
        case "a":
          return meridiem();
        // dates
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        // weekdays - standalone
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        // weekdays - format
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        // months - standalone
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        // months - format
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        // years
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        // eras
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "n":
          return this.num(dt.localWeekNumber);
        case "nn":
          return this.num(dt.localWeekNumber, 2);
        case "ii":
          return this.num(dt.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(dt.localWeekYear, 4);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };
    return stringifyTokens(_Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const invertLargest = this.opts.signMode === "negativeLargestOnly" ? -1 : 1;
    const tokenToField = (token) => {
      switch (token[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "w":
          return "weeks";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return null;
      }
    }, tokenToString = (lildur, info) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        const inversionFactor = info.isNegativeDuration && mapped !== info.largestUnit ? invertLargest : 1;
        let signDisplay;
        if (this.opts.signMode === "negativeLargestOnly" && mapped !== info.largestUnit) {
          signDisplay = "never";
        } else if (this.opts.signMode === "all") {
          signDisplay = "always";
        } else {
          signDisplay = "auto";
        }
        return this.num(lildur.get(mapped) * inversionFactor, token.length, signDisplay);
      } else {
        return token;
      }
    }, tokens = _Formatter.parseFormat(fmt), realTokens = tokens.reduce(
      (found, { literal, val }) => literal ? found : found.concat(val),
      []
    ), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t)), durationInfo = {
      isNegativeDuration: collapsed < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(collapsed.values)[0]
    };
    return stringifyTokens(tokens, tokenToString(collapsed, durationInfo));
  }
};
var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m) => extractors.reduce(
    ([mergedVals, mergedZone, cursor], ex) => {
      const [val, zone, next] = ex(m, cursor);
      return [{ ...mergedVals, ...val }, zone || mergedZone, next];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s2);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i;
    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match2[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}
var offsetRegex = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/;
var isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
var isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
var isoTimeExtensionRegex = RegExp(`(?:[Tt]${isoTimeRegex.source})?`);
var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
var extractISOOrdinalData = simpleParse("year", "ordinal");
var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
var sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
);
var sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m = match2[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
var isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
var rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
var extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
var extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
var extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
function parseISODate(s2) {
  return parse(
    s2,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(
    s2,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
function parseSQL(s2) {
  return parse(
    s2,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}
var INVALID$2 = "Invalid Duration";
var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
};
var casualMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
};
var daysInYearAccurate = 146097 / 400;
var daysInMonthAccurate = 146097 / 4800;
var accurateMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
};
var orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
var reverseUnits = orderedUnits$1.slice(0).reverse();
function clone$1(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...alts.values || {} },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix
  };
  return new Duration(conf);
}
function durationToMillis(matrix, vals) {
  let sum = vals.milliseconds ?? 0;
  for (const unit of reverseUnits.slice(1)) {
    if (vals[unit]) {
      sum += vals[unit] * matrix[unit]["milliseconds"];
    }
  }
  return sum;
}
function normalizeValues(matrix, vals) {
  const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;
  orderedUnits$1.reduceRight((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        const previousVal = vals[previous] * factor;
        const conv = matrix[current][previous];
        const rollUp = Math.floor(previousVal / conv);
        vals[current] += rollUp * factor;
        vals[previous] -= rollUp * conv * factor;
      }
      return current;
    } else {
      return previous;
    }
  }, null);
  orderedUnits$1.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        const fraction = vals[previous] % 1;
        vals[previous] -= fraction;
        vals[current] += fraction * matrix[previous][current];
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
function removeZeroes(vals) {
  const newVals = {};
  for (const [key, value] of Object.entries(vals)) {
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}
var Duration = class _Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;
    if (config.matrix) {
      matrix = config.matrix;
    }
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = matrix;
    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return _Duration.fromObject({ milliseconds: count }, opts);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`
      );
    }
    return new _Duration({
      values: normalizeObject(obj, _Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return _Duration.fromMillis(durationLike);
    } else if (_Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return _Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return _Duration.fromObject(parsed, opts);
    } else {
      return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return _Duration.fromObject(parsed, opts);
    } else {
      return _Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new _Duration({ invalid });
    }
  }
  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false
    };
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
   * @example
   * ```js
   * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
   * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
   * ```
   */
  toHuman(opts = {}) {
    if (!this.isValid) return INVALID$2;
    const showZeros = opts.showZeros !== false;
    const l2 = orderedUnits$1.map((unit) => {
      const val = this.values[unit];
      if (isUndefined(val) || val === 0 && !showZeros) {
        return null;
      }
      return this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) }).format(val);
    }).filter((n2) => n2);
    return this.loc.listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts }).format(l2);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid) return {};
    return { ...this.values };
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let s2 = "P";
    if (this.years !== 0) s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s2 += this.weeks + "W";
    if (this.days !== 0) s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0) s2 += this.hours + "H";
    if (this.minutes !== 0) s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P") s2 += "T0S";
    return s2;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid) return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5) return null;
    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts,
      includeOffset: false
    };
    const dateTime = DateTime.fromMillis(millis, { zone: "UTC" });
    return dateTime.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    if (this.isValid) {
      return `Duration { values: ${JSON.stringify(this.values)} }`;
    } else {
      return `Duration { Invalid, reason: ${this.invalidReason} }`;
    }
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    if (!this.isValid) return NaN;
    return durationToMillis(this.matrix, this.values);
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = _Duration.fromDurationLike(duration), result = {};
    for (const k of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }
    return clone$1(this, { values: result }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = _Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid) return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, { values: result }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[_Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid) return this;
    const mixed = { ...this.values, ...normalizeObject(values, _Duration.normalizeUnit) };
    return clone$1(this, { values: mixed });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone$1(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone$1(this, { values: vals }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid) return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u) => _Duration.normalizeUnit(u));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k of orderedUnits$1) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k])) {
          own += vals[k];
        }
        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    normalizeValues(this.matrix, built);
    return clone$1(this, { values: built }, true);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    if (!this.isValid) return this;
    return this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    );
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, { values: negated }, true);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const vals = removeZeroes(this.values);
    return clone$1(this, { values: vals }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      if (v1 === void 0 || v1 === 0) return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u of orderedUnits$1) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
};
var INVALID$1 = "Invalid Interval";
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}
var Interval = class _Interval {
  /**
   * @private
   */
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new _Interval({ invalid });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new _Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
    return _Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
    return _Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s2, e] = (text || "").split("/", 2);
    if (s2 && e) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e2) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e2) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return _Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return _Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return _Interval.before(end, dur);
        }
      }
    }
    return _Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval. This is the first instant which is not part of the interval
   * (Interval is half-open).
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns the last DateTime included in the interval (since end is not part of the interval)
   * @type {DateTime}
   */
  get lastDateTime() {
    return this.isValid ? this.e ? this.e.minus(1) : null : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(unit = "milliseconds", opts) {
    if (!this.isValid) return NaN;
    const start = this.start.startOf(unit, opts);
    let end;
    if (opts?.useLocaleWeeks) {
      end = this.end.reconfigure({ locale: start.locale });
    } else {
      end = this.end;
    }
    end = end.startOf(unit, opts);
    return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid) return this;
    return _Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid) return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort((a, b) => a.toMillis() - b.toMillis()), results = [];
    let { s: s2 } = this, i = 0;
    while (s2 < this.e) {
      const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
      results.push(_Interval.fromDateTimes(s2, next));
      s2 = next;
      i += 1;
    }
    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(_Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid) return this;
    const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
    if (s2 >= e) {
      return null;
    } else {
      return _Interval.fromDateTimes(s2, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid) return this;
    const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
    return _Interval.fromDateTimes(s2, e);
  }
  /**
   * Merge an array of Intervals into an equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
   * and ending with the latest.
   *
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(
      ([sofar, current], item) => {
        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      },
      [[], null]
    );
    if (final) {
      found.push(final);
    }
    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null, currentCount = 0;
    const results = [], ends = intervals.map((i) => [
      { time: i.s, type: "s" },
      { time: i.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(_Interval.fromDateTimes(start, i.time));
        }
        start = null;
      }
    }
    return _Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return _Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid) return INVALID$1;
    return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    if (this.isValid) {
      return `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`;
    } else {
      return `Interval { Invalid, reason: ${this.invalidReason} }`;
    }
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(dateFormat, { separator = " \u2013 " } = {}) {
    if (!this.isValid) return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return _Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
};
var Info = class {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: hasRelative(), localeWeek: hasLocaleWeekInfo() };
  }
};
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  const earlier = cursor;
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      results[unit] = differ(cursor, later);
      highWater = earlier.plus(results);
      if (highWater > later) {
        results[unit]--;
        cursor = earlier.plus(results);
        if (cursor > later) {
          highWater = cursor;
          results[unit]--;
          cursor = earlier.plus(results);
        }
      } else {
        cursor = highWater;
      }
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}
var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s2]) => post(parseDigits(s2)) };
}
var NBSP = String.fromCharCode(160);
var spaceOrNBSP = `[ ${NBSP}]`;
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s2]) => s2, literal: true }), unitate = (t) => {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short"), 0);
      case "GG":
        return oneOf(loc.eras("long"), 0);
      // years
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      // months
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true), 1);
      case "MMMM":
        return oneOf(loc.months("long", true), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false), 1);
      // dates
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      // ordinals
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      // time
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      // meridiem
      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      // weekdays
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true), 1);
      // offset/zone
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      // this special-case "token" represents a place where a macro-token expanded into a white-space literal
      // in this case we accept any non-newline white-space
      case " ":
        return simple(/[^\S\n\r]/);
      default:
        return literal(t);
    }
  };
  const unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function tokenForPart(part, formatOpts, resolvedOpts) {
  const { type, value } = part;
  if (type === "literal") {
    const isSpace = /^\s+$/.test(value);
    return {
      literal: !isSpace,
      val: isSpace ? " " : value
    };
  }
  const style = formatOpts[type];
  let actualType = type;
  if (type === "hour") {
    if (formatOpts.hour12 != null) {
      actualType = formatOpts.hour12 ? "hour12" : "hour24";
    } else if (formatOpts.hourCycle != null) {
      if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
        actualType = "hour12";
      } else {
        actualType = "hour24";
      }
    } else {
      actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
    }
  }
  let val = partTypeStyleToTokenVal[actualType];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }
  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }
    return r;
  }, {});
  return [vals, zone, specificOffset];
}
var dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);
  if (tokens == null || tokens.includes(void 0)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}
var TokenParser = class {
  constructor(locale, format) {
    this.locale = locale;
    this.format = format;
    this.tokens = expandMacroTokens(Formatter.parseFormat(format), locale);
    this.units = this.tokens.map((t) => unitForToken(t, locale));
    this.disqualifyingUnit = this.units.find((t) => t.invalidReason);
    if (!this.disqualifyingUnit) {
      const [regexString, handlers] = buildRegex(this.units);
      this.regex = RegExp(regexString, "i");
      this.handlers = handlers;
    }
  }
  explainFromTokens(input) {
    if (!this.isValid) {
      return { input, tokens: this.tokens, invalidReason: this.invalidReason };
    } else {
      const [rawMatches, matches] = match(input, this.regex, this.handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
      if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
        throw new ConflictingSpecificationError(
          "Can't include meridiem when specifying 24-hour format"
        );
      }
      return {
        input,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches,
        matches,
        result,
        zone,
        specificOffset
      };
    }
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
};
function explainFromTokens(locale, input, format) {
  const parser = new TokenParser(locale, format);
  return parser.explainFromTokens(input);
}
function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}
function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }
  const formatter = Formatter.create(locale, formatOpts);
  const df = formatter.dtFormatter(getDummyDateTime());
  const parts = df.formatToParts();
  const resolvedOpts = df.resolvedOptions();
  return parts.map((p) => tokenForPart(p, formatOpts, resolvedOpts));
}
var INVALID = "Invalid DateTime";
var MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function possiblyCachedLocalWeekData(dt) {
  if (dt.localWeekData === null) {
    dt.localWeekData = gregorianToWeek(
      dt.c,
      dt.loc.getMinDaysInFirstWeek(),
      dt.loc.getStartOfWeek()
    );
  }
  return dt.localWeekData;
}
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime({ ...current, ...alts, old: current });
}
function fixOffset(localTS, o, tz) {
  let utcGuess = localTS - o * 60 * 1e3;
  const o2 = tz.offset(utcGuess);
  if (o === o2) {
    return [utcGuess, o];
  }
  utcGuess -= (o2 - o) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }
  return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
    ...inst.c,
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }, millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c);
  let [ts, o] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o = inst.zone.offset(ts);
  }
  return { ts, o };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
      ...opts,
      zone: interpretationZone,
      specificOffset
    });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o, extended, precision) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0) c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);
  if (precision === "year") return c;
  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    if (precision === "month") return c;
    c += "-";
  } else {
    c += padStart(o.c.month);
    if (precision === "month") return c;
  }
  c += padStart(o.c.day);
  return c;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone, precision) {
  let showSeconds = !suppressSeconds || o.c.millisecond !== 0 || o.c.second !== 0, c = "";
  switch (precision) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      c += padStart(o.c.hour);
      if (precision === "hour") break;
      if (extended) {
        c += ":";
        c += padStart(o.c.minute);
        if (precision === "minute") break;
        if (showSeconds) {
          c += ":";
          c += padStart(o.c.second);
        }
      } else {
        c += padStart(o.c.minute);
        if (precision === "minute") break;
        if (showSeconds) {
          c += padStart(o.c.second);
        }
      }
      if (precision === "second") break;
      if (showSeconds && (!suppressMilliseconds || o.c.millisecond !== 0)) {
        c += ".";
        c += padStart(o.c.millisecond, 3);
      }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }
  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}
var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
var orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
];
var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
}
function normalizeUnitWithLocalWeeks(unit) {
  switch (unit.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return normalizeUnit(unit);
  }
}
function guessOffsetForZone(zone) {
  if (zoneOffsetTs === void 0) {
    zoneOffsetTs = Settings.now();
  }
  if (zone.type !== "iana") {
    return zone.offset(zoneOffsetTs);
  }
  const zoneName = zone.name;
  let offsetGuess = zoneOffsetGuessCache.get(zoneName);
  if (offsetGuess === void 0) {
    offsetGuess = zone.offset(zoneOffsetTs);
    zoneOffsetGuessCache.set(zoneName, offsetGuess);
  }
  return offsetGuess;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone);
  if (!zone.isValid) {
    return DateTime.invalid(unsupportedZone(zone));
  }
  const loc = Locale.fromObject(opts);
  let ts, o;
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = guessOffsetForZone(zone);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = Settings.now();
  }
  return new DateTime({ ts, zone, loc, o });
}
function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round, rounding = isUndefined(opts.rounding) ? "trunc" : opts.rounding, format = (c, unit) => {
    c = roundTo(c, round || opts.calendary ? 0 : 2, opts.calendary ? "round" : rounding);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
var zoneOffsetTs;
var zoneOffsetGuessCache = /* @__PURE__ */ new Map();
var DateTime = class _DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c = null, o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = isNumber(config.o) && !config.old ? config.o : zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.localWeekData = null;
    this.c = c;
    this.o = o;
    this.isLuxonDateTime = true;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new _DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return _DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return _DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new _DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return _DateTime.invalid("Timestamp out of range");
    } else {
      return new _DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new _DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return _DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const loc = Locale.fromObject(opts);
    const normalized = normalizeObject(obj, normalizeUnitWithLocalWeeks);
    const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, loc);
    const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow, minDaysInFirstWeek, startOfWeek);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return _DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized, minDaysInFirstWeek, startOfWeek) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new _DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return _DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }
    if (!inst.isValid) {
      return _DateTime.invalid(inst.invalid);
    }
    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return _DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return _DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new _DateTime({ invalid });
    }
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => t ? t.val : null).join("");
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }
  static resetCache() {
    zoneOffsetTs = void 0;
    zoneOffsetGuessCache.clear();
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? possiblyCachedLocalWeekData(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? possiblyCachedLocalWeekData(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? possiblyCachedLocalWeekData(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed) {
      return [this];
    }
    const dayMs = 864e5;
    const minuteMs = 6e4;
    const localTS = objToLocalTS(this.c);
    const oEarlier = this.zone.offset(localTS - dayMs);
    const oLater = this.zone.offset(localTS + dayMs);
    const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
    const o2 = this.zone.offset(localTS - oLater * minuteMs);
    if (o1 === o2) {
      return [this];
    }
    const ts1 = localTS - o1 * minuteMs;
    const ts2 = localTS - o2 * minuteMs;
    const c1 = tsToObj(ts1, o1);
    const c2 = tsToObj(ts2, o2);
    if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) {
      return [clone(this, { ts: ts1 }), clone(this, { ts: ts2 })];
    }
    return [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? weeksInWeekYear(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return _DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid) return this;
    const normalized = normalizeObject(values, normalizeUnitWithLocalWeeks);
    const { minDaysInFirstWeek, startOfWeek } = usesLocalWeekValues(normalized, this.loc);
    const settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian(
        { ...gregorianToWeek(this.c, minDaysInFirstWeek, startOfWeek), ...normalized },
        minDaysInFirstWeek,
        startOfWeek
      );
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid) return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit, { useLocaleWeeks = false } = {}) {
    if (!this.isValid) return this;
    const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through
      case "quarters":
      case "months":
        o.day = 1;
      // falls through
      case "weeks":
      case "days":
        o.hour = 0;
      // falls through
      case "hours":
        o.minute = 0;
      // falls through
      case "minutes":
        o.second = 0;
      // falls through
      case "seconds":
        o.millisecond = 0;
        break;
    }
    if (normalizedUnit === "weeks") {
      if (useLocaleWeeks) {
        const startOfWeek = this.loc.getStartOfWeek();
        const { weekday } = this;
        if (weekday < startOfWeek) {
          o.weekNumber = this.weekNumber - 1;
        }
        o.weekday = startOfWeek;
      } else {
        o.weekday = 1;
      }
    }
    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }
    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit, opts) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit, opts).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
   * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
   * @return {string|null}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false,
    precision = "milliseconds"
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    precision = normalizeUnit(precision);
    const ext = format === "extended";
    let c = toISODate(this, ext, precision);
    if (orderedUnits.indexOf(precision) >= 3) c += "T";
    c += toISOTime(
      this,
      ext,
      suppressSeconds,
      suppressMilliseconds,
      includeOffset,
      extendedZone,
      precision
    );
    return c;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
   * @return {string|null}
   */
  toISODate({ format = "extended", precision = "day" } = {}) {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, format === "extended", normalizeUnit(precision));
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended",
    precision = "milliseconds"
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    precision = normalizeUnit(precision);
    let c = includePrefix && orderedUnits.indexOf(precision) >= 3 ? "T" : "";
    return c + toISOTime(
      this,
      format === "extended",
      suppressSeconds,
      suppressMilliseconds,
      includeOffset,
      extendedZone,
      precision
    );
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";
    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }
    return toTechFormat(this, fmt, true);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    if (this.isValid) {
      return `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`;
    } else {
      return `DateTime { Invalid, reason: ${this.invalidReason} }`;
    }
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid) return {};
    const base = { ...this.c };
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(_DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit, opts) {
    if (!this.isValid) return false;
    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit, opts) <= inputMs && inputMs <= adjustedToZone.endOf(unit, opts);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid) return null;
    const base = options.base || _DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid) return null;
    return diffRelative(options.base || _DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    });
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(_DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(_DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return _DateTime.fromFormatExplain(text, fmt, options);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return new TokenParser(localeToUse, fmt);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(text, formatParser, opts = {}) {
    if (isUndefined(text) || isUndefined(formatParser)) {
      throw new InvalidArgumentError(
        "fromFormatParser requires an input string and a format parser"
      );
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    if (!localeToUse.equals(formatParser.locale)) {
      throw new InvalidArgumentError(
        `fromFormatParser called with a locale of ${localeToUse}, but the format parser was created for ${formatParser.locale}`
      );
    }
    const { result, zone, specificOffset, invalidReason } = formatParser.explainFromTokens(text);
    if (invalidReason) {
      return _DateTime.invalid(invalidReason);
    } else {
      return parseDataToDateTime(
        result,
        zone,
        opts,
        `format ${formatParser.format}`,
        text,
        specificOffset
      );
    }
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return DATE_MED;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return DATE_FULL;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
};
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}

// src/convert-timezone.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var COMMON_ZONES = [
  { value: "Asia/Tokyo", title: "\u65E5\u672C (JST) \u2014 Asia/Tokyo" },
  { value: "UTC", title: "UTC" },
  { value: "America/Los_Angeles", title: "\u7C73\u56FD\u897F\u6D77\u5CB8 (PT) \u2014 America/Los_Angeles" },
  { value: "America/New_York", title: "\u7C73\u56FD\u6771\u6D77\u5CB8 (ET) \u2014 America/New_York" },
  { value: "America/Chicago", title: "\u7C73\u56FD\u4E2D\u90E8 (CT) \u2014 America/Chicago" },
  { value: "Europe/London", title: "\u82F1\u56FD \u2014 Europe/London" },
  { value: "Europe/Paris", title: "\u4E2D\u592E\u30E8\u30FC\u30ED\u30C3\u30D1 \u2014 Europe/Paris" },
  { value: "Asia/Shanghai", title: "\u4E2D\u56FD \u2014 Asia/Shanghai" },
  { value: "Asia/Seoul", title: "\u97D3\u56FD \u2014 Asia/Seoul" },
  { value: "Asia/Singapore", title: "\u30B7\u30F3\u30AC\u30DD\u30FC\u30EB \u2014 Asia/Singapore" },
  { value: "Asia/Kolkata", title: "\u30A4\u30F3\u30C9 \u2014 Asia/Kolkata" },
  { value: "Australia/Sydney", title: "\u30B7\u30C9\u30CB\u30FC \u2014 Australia/Sydney" }
];
var OTHER_ZONES = (Intl.supportedValuesOf ? Intl.supportedValuesOf("timeZone") : []).filter((z) => !COMMON_ZONES.some((c) => c.value === z));
var INPUT_FORMATS = [
  "yyyy-M-d H:mm:ss",
  "yyyy-M-d H:mm",
  "yyyy/M/d H:mm:ss",
  "yyyy/M/d H:mm",
  "yyyy-MM-dd'T'HH:mm:ss",
  "yyyy-MM-dd'T'HH:mm",
  "M/d H:mm",
  "M-d H:mm",
  "H:mm"
];
function parseInput(text, fromZone) {
  const trimmed = text.trim();
  if (trimmed === "" || trimmed.toLowerCase() === "now" || trimmed === "\u4ECA") {
    return DateTime.now().setZone(fromZone);
  }
  const now2 = DateTime.now().setZone(fromZone);
  for (const fmt of INPUT_FORMATS) {
    const dt = DateTime.fromFormat(trimmed, fmt, { zone: fromZone });
    if (dt.isValid) {
      if (!fmt.includes("yyyy")) {
        if (fmt === "H:mm") {
          return dt.set({ year: now2.year, month: now2.month, day: now2.day });
        }
        return dt.set({ year: now2.year });
      }
      return dt;
    }
  }
  return null;
}
function dayDiffNote(src, dst) {
  const diff2 = dst.startOf("day").diff(src.startOf("day"), "days").days;
  if (diff2 === 1) return " (\u7FCC\u65E5)";
  if (diff2 === -1) return " (\u524D\u65E5)";
  if (diff2 !== 0) return ` (${diff2 > 0 ? "+" : ""}${diff2}\u65E5)`;
  return "";
}
function Command() {
  const [dateText, setDateText] = (0, import_react.useState)("");
  const [fromZone, setFromZone] = (0, import_react.useState)("Asia/Tokyo");
  const [toZone, setToZone] = (0, import_react.useState)("America/Los_Angeles");
  const result = (0, import_react.useMemo)(() => {
    const src = parseInput(dateText, fromZone);
    if (!src || !src.isValid) return null;
    const dst = src.setZone(toZone);
    if (!dst.isValid) return null;
    return { src, dst };
  }, [dateText, fromZone, toZone]);
  const resultText = result ? `${result.dst.toFormat("yyyy-MM-dd HH:mm")} (${result.dst.weekdayShort}) ${result.dst.toFormat("ZZZZ")}${dayDiffNote(result.src, result.dst)}` : dateText.trim() === "" ? "" : "\u26A0\uFE0F \u65E5\u6642\u3092\u89E3\u91C8\u3067\u304D\u307E\u305B\u3093 (\u4F8B: 2026-07-15 14:00, 7/15 14:00, 14:00, now)";
  const sourceText = result ? `${result.src.toFormat("yyyy-MM-dd HH:mm")} (${result.src.weekdayShort}) ${result.src.toFormat("ZZZZ")}` : "";
  async function copyResult() {
    if (!result) {
      await (0, import_api.showToast)({
        style: import_api.Toast.Style.Failure,
        title: "\u5909\u63DB\u3067\u304D\u307E\u305B\u3093",
        message: "\u65E5\u6642\u306E\u5F62\u5F0F\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044"
      });
      return;
    }
    await import_api.Clipboard.copy(result.dst.toFormat("yyyy-MM-dd HH:mm"));
    await (0, import_api.showToast)({
      style: import_api.Toast.Style.Success,
      title: "\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
      message: resultText
    });
  }
  function swapZones() {
    const f = fromZone;
    setFromZone(toZone);
    setToZone(f);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_api.Form,
    {
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.ActionPanel, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api.Action.SubmitForm,
          {
            title: "\u7D50\u679C\u3092\u30B3\u30D4\u30FC",
            icon: import_api.Icon.Clipboard,
            onSubmit: copyResult
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api.Action,
          {
            title: "\u5909\u63DB\u5143\u3068\u5909\u63DB\u5148\u3092\u5165\u308C\u66FF\u3048",
            icon: import_api.Icon.Switch,
            shortcut: { modifiers: ["cmd"], key: "s" },
            onAction: swapZones
          }
        )
      ] }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api.Form.TextField,
          {
            id: "datetime",
            title: "\u65E5\u6642",
            placeholder: "2026-07-15 14:00 / 7/15 14:00 / 14:00 / now (\u7A7A\u6B04=\u73FE\u5728\u6642\u523B)",
            value: dateText,
            onChange: setDateText
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.Form.Dropdown, { id: "from", title: "\u5909\u63DB\u5143", value: fromZone, onChange: setFromZone, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Section, { title: "\u3088\u304F\u4F7F\u3046\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3", children: COMMON_ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Item, { value: z.value, title: z.title }, z.value)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Section, { title: "\u3059\u3079\u3066\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3", children: OTHER_ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Item, { value: z, title: z }, z)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api.Form.Dropdown, { id: "to", title: "\u5909\u63DB\u5148", value: toZone, onChange: setToZone, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Section, { title: "\u3088\u304F\u4F7F\u3046\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3", children: COMMON_ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Item, { value: z.value, title: z.title }, z.value)) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Section, { title: "\u3059\u3079\u3066\u306E\u30BF\u30A4\u30E0\u30BE\u30FC\u30F3", children: OTHER_ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Dropdown.Item, { value: z, title: z }, z)) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Separator, {}),
        sourceText !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Description, { title: "\u5909\u63DB\u5143\u306E\u65E5\u6642", text: sourceText }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.Form.Description, { title: "\u5909\u63DB\u7D50\u679C", text: resultText || "\u2014" })
      ]
    }
  );
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9zcmMvY29udmVydC10aW1lem9uZS50c3giLCAiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2Vycm9ycy5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9mb3JtYXRzLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9zeXN0ZW1ab25lLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy96b25lcy9JQU5BWm9uZS5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9sb2NhbGUuanMiLCAiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9ub2RlX21vZHVsZXMvbHV4b24vc3JjL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvem9uZXMvaW52YWxpZFpvbmUuanMiLCAiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvem9uZVV0aWwuanMiLCAiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZGlnaXRzLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9zZXR0aW5ncy5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9pbnZhbGlkLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL2NvbnZlcnNpb25zLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3V0aWwuanMiLCAiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvZW5nbGlzaC5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9mb3JtYXR0ZXIuanMiLCAiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2ltcGwvcmVnZXhQYXJzZXIuanMiLCAiLi4vLi4vLi4vLi4vRG93bmxvYWRzL3RpbWV6b25lLWNvbnZlcnRlci9ub2RlX21vZHVsZXMvbHV4b24vc3JjL2R1cmF0aW9uLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbnRlcnZhbC5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW5mby5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvaW1wbC9kaWZmLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9pbXBsL3Rva2VuUGFyc2VyLmpzIiwgIi4uLy4uLy4uLy4uL0Rvd25sb2Fkcy90aW1lem9uZS1jb252ZXJ0ZXIvbm9kZV9tb2R1bGVzL2x1eG9uL3NyYy9kYXRldGltZS5qcyIsICIuLi8uLi8uLi8uLi9Eb3dubG9hZHMvdGltZXpvbmUtY29udmVydGVyL25vZGVfbW9kdWxlcy9sdXhvbi9zcmMvbHV4b24uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gIEFjdGlvbixcbiAgQWN0aW9uUGFuZWwsXG4gIENsaXBib2FyZCxcbiAgRm9ybSxcbiAgSWNvbixcbiAgc2hvd1RvYXN0LFxuICBUb2FzdCxcbn0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIFx1MzA4OFx1MzA0Rlx1NEY3Rlx1MzA0Nlx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCRVx1MzBGQ1x1MzBGMyAoXHUzMEM5XHUzMEVEXHUzMEMzXHUzMEQ3XHUzMEMwXHUzMEE2XHUzMEYzXHU0RTBBXHU5MEU4XHUzMDZCXHU4ODY4XHU3OTNBKVxuY29uc3QgQ09NTU9OX1pPTkVTOiB7IHZhbHVlOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfVtdID0gW1xuICB7IHZhbHVlOiBcIkFzaWEvVG9reW9cIiwgdGl0bGU6IFwiXHU2NUU1XHU2NzJDIChKU1QpIFx1MjAxNCBBc2lhL1Rva3lvXCIgfSxcbiAgeyB2YWx1ZTogXCJVVENcIiwgdGl0bGU6IFwiVVRDXCIgfSxcbiAgeyB2YWx1ZTogXCJBbWVyaWNhL0xvc19BbmdlbGVzXCIsIHRpdGxlOiBcIlx1N0M3M1x1NTZGRFx1ODk3Rlx1NkQ3N1x1NUNCOCAoUFQpIFx1MjAxNCBBbWVyaWNhL0xvc19BbmdlbGVzXCIgfSxcbiAgeyB2YWx1ZTogXCJBbWVyaWNhL05ld19Zb3JrXCIsIHRpdGxlOiBcIlx1N0M3M1x1NTZGRFx1Njc3MVx1NkQ3N1x1NUNCOCAoRVQpIFx1MjAxNCBBbWVyaWNhL05ld19Zb3JrXCIgfSxcbiAgeyB2YWx1ZTogXCJBbWVyaWNhL0NoaWNhZ29cIiwgdGl0bGU6IFwiXHU3QzczXHU1NkZEXHU0RTJEXHU5MEU4IChDVCkgXHUyMDE0IEFtZXJpY2EvQ2hpY2Fnb1wiIH0sXG4gIHsgdmFsdWU6IFwiRXVyb3BlL0xvbmRvblwiLCB0aXRsZTogXCJcdTgyRjFcdTU2RkQgXHUyMDE0IEV1cm9wZS9Mb25kb25cIiB9LFxuICB7IHZhbHVlOiBcIkV1cm9wZS9QYXJpc1wiLCB0aXRsZTogXCJcdTRFMkRcdTU5MkVcdTMwRThcdTMwRkNcdTMwRURcdTMwQzNcdTMwRDEgXHUyMDE0IEV1cm9wZS9QYXJpc1wiIH0sXG4gIHsgdmFsdWU6IFwiQXNpYS9TaGFuZ2hhaVwiLCB0aXRsZTogXCJcdTRFMkRcdTU2RkQgXHUyMDE0IEFzaWEvU2hhbmdoYWlcIiB9LFxuICB7IHZhbHVlOiBcIkFzaWEvU2VvdWxcIiwgdGl0bGU6IFwiXHU5N0QzXHU1NkZEIFx1MjAxNCBBc2lhL1Nlb3VsXCIgfSxcbiAgeyB2YWx1ZTogXCJBc2lhL1NpbmdhcG9yZVwiLCB0aXRsZTogXCJcdTMwQjdcdTMwRjNcdTMwQUNcdTMwRERcdTMwRkNcdTMwRUIgXHUyMDE0IEFzaWEvU2luZ2Fwb3JlXCIgfSxcbiAgeyB2YWx1ZTogXCJBc2lhL0tvbGthdGFcIiwgdGl0bGU6IFwiXHUzMEE0XHUzMEYzXHUzMEM5IFx1MjAxNCBBc2lhL0tvbGthdGFcIiB9LFxuICB7IHZhbHVlOiBcIkF1c3RyYWxpYS9TeWRuZXlcIiwgdGl0bGU6IFwiXHUzMEI3XHUzMEM5XHUzMENCXHUzMEZDIFx1MjAxNCBBdXN0cmFsaWEvU3lkbmV5XCIgfSxcbl07XG5cbi8vIFx1NEUwQVx1OEExOFx1NEVFNVx1NTkxNlx1MzA2RVx1NTE2OElBTkFcdTMwQkZcdTMwQTRcdTMwRTBcdTMwQkVcdTMwRkNcdTMwRjNcbmNvbnN0IE9USEVSX1pPTkVTOiBzdHJpbmdbXSA9IChcbiAgSW50bC5zdXBwb3J0ZWRWYWx1ZXNPZiA/IEludGwuc3VwcG9ydGVkVmFsdWVzT2YoXCJ0aW1lWm9uZVwiKSA6IFtdXG4pLmZpbHRlcigoeikgPT4gIUNPTU1PTl9aT05FUy5zb21lKChjKSA9PiBjLnZhbHVlID09PSB6KSk7XG5cbi8vIE0vZC9IIFx1MzA2RjFcdTMwMUMyXHU2ODQxXHUzMDY5XHUzMDYxXHUzMDg5XHUzMDgyXHU1M0Q3XHUzMDUxXHU0RUQ4XHUzMDUxXHUzMDhCIChsdXhvblx1MzA2RU1NL0hIXHUzMDZGMlx1Njg0MVx1NTZGQVx1NUI5QVx1MzA2RVx1MzA1Rlx1MzA4MSlcbmNvbnN0IElOUFVUX0ZPUk1BVFMgPSBbXG4gIFwieXl5eS1NLWQgSDptbTpzc1wiLFxuICBcInl5eXktTS1kIEg6bW1cIixcbiAgXCJ5eXl5L00vZCBIOm1tOnNzXCIsXG4gIFwieXl5eS9NL2QgSDptbVwiLFxuICBcInl5eXktTU0tZGQnVCdISDptbTpzc1wiLFxuICBcInl5eXktTU0tZGQnVCdISDptbVwiLFxuICBcIk0vZCBIOm1tXCIsXG4gIFwiTS1kIEg6bW1cIixcbiAgXCJIOm1tXCIsXG5dO1xuXG4vKiogXHU1MTY1XHU1MjlCXHU2NTg3XHU1QjU3XHU1MjE3XHUzMDkyXHUzMDBDZnJvbVpvbmUgXHUzMDZFXHUzMEVEXHUzMEZDXHUzMEFCXHUzMEVCXHU2NUU1XHU2NjQyXHUzMDBEXHUzMDY4XHUzMDU3XHUzMDY2XHU4OUUzXHU5MUM4XHUzMDU5XHUzMDhCICovXG5mdW5jdGlvbiBwYXJzZUlucHV0KHRleHQ6IHN0cmluZywgZnJvbVpvbmU6IHN0cmluZyk6IERhdGVUaW1lIHwgbnVsbCB7XG4gIGNvbnN0IHRyaW1tZWQgPSB0ZXh0LnRyaW0oKTtcbiAgaWYgKHRyaW1tZWQgPT09IFwiXCIgfHwgdHJpbW1lZC50b0xvd2VyQ2FzZSgpID09PSBcIm5vd1wiIHx8IHRyaW1tZWQgPT09IFwiXHU0RUNBXCIpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUubm93KCkuc2V0Wm9uZShmcm9tWm9uZSk7XG4gIH1cbiAgY29uc3Qgbm93ID0gRGF0ZVRpbWUubm93KCkuc2V0Wm9uZShmcm9tWm9uZSk7XG4gIGZvciAoY29uc3QgZm10IG9mIElOUFVUX0ZPUk1BVFMpIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLmZyb21Gb3JtYXQodHJpbW1lZCwgZm10LCB7IHpvbmU6IGZyb21ab25lIH0pO1xuICAgIGlmIChkdC5pc1ZhbGlkKSB7XG4gICAgICAvLyBcdTVFNzRcdTMwNENcdTc3MDFcdTc1NjVcdTMwNTVcdTMwOENcdTMwNUZcdTVGNjJcdTVGMEZcdTMwNkZcdTRFQ0FcdTVFNzRcdTMwMDFcdTY2NDJcdTUyM0JcdTMwNkVcdTMwN0ZcdTMwNkZcdTRFQ0FcdTY1RTVcdTMwNjdcdTg4RENcdTVCOENcbiAgICAgIGlmICghZm10LmluY2x1ZGVzKFwieXl5eVwiKSkge1xuICAgICAgICBpZiAoZm10ID09PSBcIkg6bW1cIikge1xuICAgICAgICAgIHJldHVybiBkdC5zZXQoeyB5ZWFyOiBub3cueWVhciwgbW9udGg6IG5vdy5tb250aCwgZGF5OiBub3cuZGF5IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkdC5zZXQoeyB5ZWFyOiBub3cueWVhciB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGRheURpZmZOb3RlKHNyYzogRGF0ZVRpbWUsIGRzdDogRGF0ZVRpbWUpOiBzdHJpbmcge1xuICBjb25zdCBkaWZmID0gZHN0LnN0YXJ0T2YoXCJkYXlcIikuZGlmZihzcmMuc3RhcnRPZihcImRheVwiKSwgXCJkYXlzXCIpLmRheXM7XG4gIGlmIChkaWZmID09PSAxKSByZXR1cm4gXCIgKFx1N0ZDQ1x1NjVFNSlcIjtcbiAgaWYgKGRpZmYgPT09IC0xKSByZXR1cm4gXCIgKFx1NTI0RFx1NjVFNSlcIjtcbiAgaWYgKGRpZmYgIT09IDApIHJldHVybiBgICgke2RpZmYgPiAwID8gXCIrXCIgOiBcIlwifSR7ZGlmZn1cdTY1RTUpYDtcbiAgcmV0dXJuIFwiXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIGNvbnN0IFtkYXRlVGV4dCwgc2V0RGF0ZVRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2Zyb21ab25lLCBzZXRGcm9tWm9uZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiQXNpYS9Ub2t5b1wiKTtcbiAgY29uc3QgW3RvWm9uZSwgc2V0VG9ab25lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJBbWVyaWNhL0xvc19BbmdlbGVzXCIpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNyYyA9IHBhcnNlSW5wdXQoZGF0ZVRleHQsIGZyb21ab25lKTtcbiAgICBpZiAoIXNyYyB8fCAhc3JjLmlzVmFsaWQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGRzdCA9IHNyYy5zZXRab25lKHRvWm9uZSk7XG4gICAgaWYgKCFkc3QuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHsgc3JjLCBkc3QgfTtcbiAgfSwgW2RhdGVUZXh0LCBmcm9tWm9uZSwgdG9ab25lXSk7XG5cbiAgY29uc3QgcmVzdWx0VGV4dCA9IHJlc3VsdFxuICAgID8gYCR7cmVzdWx0LmRzdC50b0Zvcm1hdChcInl5eXktTU0tZGQgSEg6bW1cIil9ICgke3Jlc3VsdC5kc3Qud2Vla2RheVNob3J0fSkgJHtyZXN1bHQuZHN0LnRvRm9ybWF0KFwiWlpaWlwiKX0ke2RheURpZmZOb3RlKHJlc3VsdC5zcmMsIHJlc3VsdC5kc3QpfWBcbiAgICA6IGRhdGVUZXh0LnRyaW0oKSA9PT0gXCJcIlxuICAgICAgPyBcIlwiIC8vIFx1N0E3QVx1NkIwNCA9IFx1NzNGRVx1NTcyOFx1NjY0Mlx1NTIzQlx1MzA2QVx1MzA2RVx1MzA2NyByZXN1bHQgXHUzMDZGXHU1RkM1XHUzMDVBXHU1QjU4XHU1NzI4XHUzMDU5XHUzMDhCXHUzMDRDXHUzMDAxXHU1NzhCXHUzMDZFXHUzMDVGXHUzMDgxXHUzMDZFXHUzMEQ1XHUzMEE5XHUzMEZDXHUzMEVCXHUzMEQwXHUzMEMzXHUzMEFGXG4gICAgICA6IFwiXHUyNkEwXHVGRTBGIFx1NjVFNVx1NjY0Mlx1MzA5Mlx1ODlFM1x1OTFDOFx1MzA2N1x1MzA0RFx1MzA3RVx1MzA1Qlx1MzA5MyAoXHU0RjhCOiAyMDI2LTA3LTE1IDE0OjAwLCA3LzE1IDE0OjAwLCAxNDowMCwgbm93KVwiO1xuXG4gIGNvbnN0IHNvdXJjZVRleHQgPSByZXN1bHRcbiAgICA/IGAke3Jlc3VsdC5zcmMudG9Gb3JtYXQoXCJ5eXl5LU1NLWRkIEhIOm1tXCIpfSAoJHtyZXN1bHQuc3JjLndlZWtkYXlTaG9ydH0pICR7cmVzdWx0LnNyYy50b0Zvcm1hdChcIlpaWlpcIil9YFxuICAgIDogXCJcIjtcblxuICBhc3luYyBmdW5jdGlvbiBjb3B5UmVzdWx0KCkge1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBhd2FpdCBzaG93VG9hc3Qoe1xuICAgICAgICBzdHlsZTogVG9hc3QuU3R5bGUuRmFpbHVyZSxcbiAgICAgICAgdGl0bGU6IFwiXHU1OTA5XHU2M0RCXHUzMDY3XHUzMDREXHUzMDdFXHUzMDVCXHUzMDkzXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiXHU2NUU1XHU2NjQyXHUzMDZFXHU1RjYyXHU1RjBGXHUzMDkyXHU3OEJBXHU4QThEXHUzMDU3XHUzMDY2XHUzMDRGXHUzMDYwXHUzMDU1XHUzMDQ0XCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgQ2xpcGJvYXJkLmNvcHkocmVzdWx0LmRzdC50b0Zvcm1hdChcInl5eXktTU0tZGQgSEg6bW1cIikpO1xuICAgIGF3YWl0IHNob3dUb2FzdCh7XG4gICAgICBzdHlsZTogVG9hc3QuU3R5bGUuU3VjY2VzcyxcbiAgICAgIHRpdGxlOiBcIlx1MzBCM1x1MzBENFx1MzBGQ1x1MzA1N1x1MzA3RVx1MzA1N1x1MzA1RlwiLFxuICAgICAgbWVzc2FnZTogcmVzdWx0VGV4dCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN3YXBab25lcygpIHtcbiAgICBjb25zdCBmID0gZnJvbVpvbmU7XG4gICAgc2V0RnJvbVpvbmUodG9ab25lKTtcbiAgICBzZXRUb1pvbmUoZik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBhY3Rpb25zPXtcbiAgICAgICAgPEFjdGlvblBhbmVsPlxuICAgICAgICAgIDxBY3Rpb24uU3VibWl0Rm9ybVxuICAgICAgICAgICAgdGl0bGU9XCJcdTdENTBcdTY3OUNcdTMwOTJcdTMwQjNcdTMwRDRcdTMwRkNcIlxuICAgICAgICAgICAgaWNvbj17SWNvbi5DbGlwYm9hcmR9XG4gICAgICAgICAgICBvblN1Ym1pdD17Y29weVJlc3VsdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPVwiXHU1OTA5XHU2M0RCXHU1MTQzXHUzMDY4XHU1OTA5XHU2M0RCXHU1MTQ4XHUzMDkyXHU1MTY1XHUzMDhDXHU2NkZGXHUzMDQ4XCJcbiAgICAgICAgICAgIGljb249e0ljb24uU3dpdGNofVxuICAgICAgICAgICAgc2hvcnRjdXQ9e3sgbW9kaWZpZXJzOiBbXCJjbWRcIl0sIGtleTogXCJzXCIgfX1cbiAgICAgICAgICAgIG9uQWN0aW9uPXtzd2FwWm9uZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Rm9ybS5UZXh0RmllbGRcbiAgICAgICAgaWQ9XCJkYXRldGltZVwiXG4gICAgICAgIHRpdGxlPVwiXHU2NUU1XHU2NjQyXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCIyMDI2LTA3LTE1IDE0OjAwIC8gNy8xNSAxNDowMCAvIDE0OjAwIC8gbm93IChcdTdBN0FcdTZCMDQ9XHU3M0ZFXHU1NzI4XHU2NjQyXHU1MjNCKVwiXG4gICAgICAgIHZhbHVlPXtkYXRlVGV4dH1cbiAgICAgICAgb25DaGFuZ2U9e3NldERhdGVUZXh0fVxuICAgICAgLz5cbiAgICAgIDxGb3JtLkRyb3Bkb3duIGlkPVwiZnJvbVwiIHRpdGxlPVwiXHU1OTA5XHU2M0RCXHU1MTQzXCIgdmFsdWU9e2Zyb21ab25lfSBvbkNoYW5nZT17c2V0RnJvbVpvbmV9PlxuICAgICAgICA8Rm9ybS5Ecm9wZG93bi5TZWN0aW9uIHRpdGxlPVwiXHUzMDg4XHUzMDRGXHU0RjdGXHUzMDQ2XHUzMEJGXHUzMEE0XHUzMEUwXHUzMEJFXHUzMEZDXHUzMEYzXCI+XG4gICAgICAgICAge0NPTU1PTl9aT05FUy5tYXAoKHopID0+IChcbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duLkl0ZW0ga2V5PXt6LnZhbHVlfSB2YWx1ZT17ei52YWx1ZX0gdGl0bGU9e3oudGl0bGV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRm9ybS5Ecm9wZG93bi5TZWN0aW9uPlxuICAgICAgICA8Rm9ybS5Ecm9wZG93bi5TZWN0aW9uIHRpdGxlPVwiXHUzMDU5XHUzMDc5XHUzMDY2XHUzMDZFXHUzMEJGXHUzMEE0XHUzMEUwXHUzMEJFXHUzMEZDXHUzMEYzXCI+XG4gICAgICAgICAge09USEVSX1pPTkVTLm1hcCgoeikgPT4gKFxuICAgICAgICAgICAgPEZvcm0uRHJvcGRvd24uSXRlbSBrZXk9e3p9IHZhbHVlPXt6fSB0aXRsZT17en0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Gb3JtLkRyb3Bkb3duLlNlY3Rpb24+XG4gICAgICA8L0Zvcm0uRHJvcGRvd24+XG4gICAgICA8Rm9ybS5Ecm9wZG93biBpZD1cInRvXCIgdGl0bGU9XCJcdTU5MDlcdTYzREJcdTUxNDhcIiB2YWx1ZT17dG9ab25lfSBvbkNoYW5nZT17c2V0VG9ab25lfT5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uU2VjdGlvbiB0aXRsZT1cIlx1MzA4OFx1MzA0Rlx1NEY3Rlx1MzA0Nlx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCRVx1MzBGQ1x1MzBGM1wiPlxuICAgICAgICAgIHtDT01NT05fWk9ORVMubWFwKCh6KSA9PiAoXG4gICAgICAgICAgICA8Rm9ybS5Ecm9wZG93bi5JdGVtIGtleT17ei52YWx1ZX0gdmFsdWU9e3oudmFsdWV9IHRpdGxlPXt6LnRpdGxlfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Zvcm0uRHJvcGRvd24uU2VjdGlvbj5cbiAgICAgICAgPEZvcm0uRHJvcGRvd24uU2VjdGlvbiB0aXRsZT1cIlx1MzA1OVx1MzA3OVx1MzA2Nlx1MzA2RVx1MzBCRlx1MzBBNFx1MzBFMFx1MzBCRVx1MzBGQ1x1MzBGM1wiPlxuICAgICAgICAgIHtPVEhFUl9aT05FUy5tYXAoKHopID0+IChcbiAgICAgICAgICAgIDxGb3JtLkRyb3Bkb3duLkl0ZW0ga2V5PXt6fSB2YWx1ZT17en0gdGl0bGU9e3p9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRm9ybS5Ecm9wZG93bi5TZWN0aW9uPlxuICAgICAgPC9Gb3JtLkRyb3Bkb3duPlxuICAgICAgPEZvcm0uU2VwYXJhdG9yIC8+XG4gICAgICB7c291cmNlVGV4dCAhPT0gXCJcIiAmJiA8Rm9ybS5EZXNjcmlwdGlvbiB0aXRsZT1cIlx1NTkwOVx1NjNEQlx1NTE0M1x1MzA2RVx1NjVFNVx1NjY0MlwiIHRleHQ9e3NvdXJjZVRleHR9IC8+fVxuICAgICAgPEZvcm0uRGVzY3JpcHRpb24gdGl0bGU9XCJcdTU5MDlcdTYzREJcdTdENTBcdTY3OUNcIiB0ZXh0PXtyZXN1bHRUZXh0IHx8IFwiXHUyMDE0XCJ9IC8+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIiwgIi8vIHRoZXNlIGFyZW4ndCByZWFsbHkgcHJpdmF0ZSwgYnV0IG5vciBhcmUgdGhleSByZWFsbHkgdXNlZnVsIHRvIGRvY3VtZW50XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgTHV4b25FcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWREYXRlVGltZUVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIERhdGVUaW1lOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkSW50ZXJ2YWxFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcbiAgICBzdXBlcihgSW52YWxpZCBJbnRlcnZhbDogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZER1cmF0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgRHVyYXRpb246ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7fVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkVW5pdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHVuaXQpIHtcbiAgICBzdXBlcihgSW52YWxpZCB1bml0ICR7dW5pdH1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgWm9uZUlzQWJzdHJhY3RFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlpvbmUgaXMgYW4gYWJzdHJhY3QgY2xhc3NcIik7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3QgbiA9IFwibnVtZXJpY1wiLFxuICBzID0gXCJzaG9ydFwiLFxuICBsID0gXCJsb25nXCI7XG5cbmV4cG9ydCBjb25zdCBEQVRFX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgREFURV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfMjRfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXJDeWNsZTogXCJoMjNcIixcbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICB0aW1lWm9uZU5hbWU6IGwsXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHMsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogcyxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG4iLCAiaW1wb3J0IHsgWm9uZUlzQWJzdHJhY3RFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZSB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgSUFOQSBuYW1lIG9mIHRoaXMgem9uZS5cbiAgICogRGVmYXVsdHMgdG8gYG5hbWVgIGlmIG5vdCBvdmVyd3JpdHRlbiBieSBhIHN1YmNsYXNzLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpYW5hTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgb2Zmc2V0TmFtZSh0cywgb3B0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmdcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBvZmZzZXQodHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvIH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhU2NyaXB0IGVudmlyb25tZW50LlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN5c3RlbVpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgbG9jYWwgem9uZVxuICAgKiBAcmV0dXJuIHtTeXN0ZW1ab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24gPSBuZXcgU3lzdGVtWm9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwic3lzdGVtXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBmb3JtYXRPZmZzZXQsIHBhcnNlWm9uZUluZm8sIGlzVW5kZWZpbmVkLCBvYmpUb0xvY2FsVFMgfSBmcm9tIFwiLi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuXG5jb25zdCBkdGZDYWNoZSA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIG1ha2VEVEYoem9uZU5hbWUpIHtcbiAgbGV0IGR0ZiA9IGR0ZkNhY2hlLmdldCh6b25lTmFtZSk7XG4gIGlmIChkdGYgPT09IHVuZGVmaW5lZCkge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICAgIHRpbWVab25lOiB6b25lTmFtZSxcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gICAgICBlcmE6IFwic2hvcnRcIixcbiAgICB9KTtcbiAgICBkdGZDYWNoZS5zZXQoem9uZU5hbWUsIGR0Zik7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cblxuY29uc3QgdHlwZVRvUG9zID0ge1xuICB5ZWFyOiAwLFxuICBtb250aDogMSxcbiAgZGF5OiAyLFxuICBlcmE6IDMsXG4gIGhvdXI6IDQsXG4gIG1pbnV0ZTogNSxcbiAgc2Vjb25kOiA2LFxufTtcblxuZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIGNvbnN0IGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXQoZGF0ZSkucmVwbGFjZSgvXFx1MjAwRS9nLCBcIlwiKSxcbiAgICBwYXJzZWQgPSAvKFxcZCspXFwvKFxcZCspXFwvKFxcZCspIChBRHxCQyksPyAoXFxkKyk6KFxcZCspOihcXGQrKS8uZXhlYyhmb3JtYXR0ZWQpLFxuICAgIFssIGZNb250aCwgZkRheSwgZlllYXIsIGZhZE9yQmMsIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXSA9IHBhcnNlZDtcbiAgcmV0dXJuIFtmWWVhciwgZk1vbnRoLCBmRGF5LCBmYWRPckJjLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF07XG59XG5cbmZ1bmN0aW9uIHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcbiAgY29uc3QgZmlsbGVkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gZm9ybWF0dGVkW2ldO1xuICAgIGNvbnN0IHBvcyA9IHR5cGVUb1Bvc1t0eXBlXTtcblxuICAgIGlmICh0eXBlID09PSBcImVyYVwiKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbGxlZDtcbn1cblxuY29uc3QgaWFuYVpvbmVDYWNoZSA9IG5ldyBNYXAoKTtcbi8qKlxuICogQSB6b25lIGlkZW50aWZpZWQgYnkgYW4gSUFOQSBpZGVudGlmaWVyLCBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJQU5BWm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBab25lIG5hbWVcbiAgICogQHJldHVybiB7SUFOQVpvbmV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKG5hbWUpIHtcbiAgICBsZXQgem9uZSA9IGlhbmFab25lQ2FjaGUuZ2V0KG5hbWUpO1xuICAgIGlmICh6b25lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlhbmFab25lQ2FjaGUuc2V0KG5hbWUsICh6b25lID0gbmV3IElBTkFab25lKG5hbWUpKSk7XG4gICAgfVxuICAgIHJldHVybiB6b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGxvY2FsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgaWFuYVpvbmVDYWNoZS5jbGVhcigpO1xuICAgIGR0ZkNhY2hlLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaXMgYSB2YWxpZCBzcGVjaWZpZXIuIFRoaXMgb25seSBjaGVja3MgdGhlIHN0cmluZydzIGZvcm1hdCwgbm90IHRoYXQgdGhlIHNwZWNpZmllciBpZGVudGlmaWVzIGEga25vd24gem9uZTsgc2VlIGlzVmFsaWRab25lIGZvciB0aGF0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBzdHJpbmcgdG8gY2hlY2sgdmFsaWRpdHkgb25cbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAZGVwcmVjYXRlZCBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmb3J3YXJkcyB0byBpc1ZhbGlkWm9uZSwgYmV0dGVyIHVzZSBgaXNWYWxpZFpvbmUoKWAgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkWm9uZShzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHN0cmluZyBpZGVudGlmaWVzIGEgcmVhbCB6b25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gVGhlIHN0cmluZyB0byBjaGVja1xuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gZmFsc2VcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRab25lKHpvbmUpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwgeyB0aW1lWm9uZTogem9uZSB9KS5mb3JtYXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy56b25lTmFtZSA9IG5hbWU7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMudmFsaWQgPSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShuYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB6b25lLiBgaWFuYWAgZm9yIGFsbCBpbnN0YW5jZXMgb2YgYElBTkFab25lYC5cbiAgICogQG92ZXJyaWRlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gXCJpYW5hXCI7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lIChpLmUuIHRoZSBJQU5BIHpvbmUgbmFtZSkuXG4gICAqIEBvdmVycmlkZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvZmZzZXQgaXMga25vd24gdG8gYmUgZml4ZWQgZm9yIHRoZSB3aG9sZSB5ZWFyOlxuICAgKiBBbHdheXMgcmV0dXJucyBmYWxzZSBmb3IgYWxsIElBTkEgem9uZXMuXG4gICAqIEBvdmVycmlkZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlLCB0aGlzLm5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHRzICduYXJyb3cnLCAnc2hvcnQnLCBvciAndGVjaGllJy4gUmV0dXJuaW5nICcrNicsICcrMDY6MDAnLCBvciAnKzA2MDAnIHJlc3BlY3RpdmVseVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgZm9yIHRoaXMgem9uZSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcC5cbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gY29tcHV0ZSB0aGUgb2Zmc2V0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIG9mZnNldCh0cykge1xuICAgIGlmICghdGhpcy52YWxpZCkgcmV0dXJuIE5hTjtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodHMpO1xuXG4gICAgaWYgKGlzTmFOKGRhdGUpKSByZXR1cm4gTmFOO1xuXG4gICAgY29uc3QgZHRmID0gbWFrZURURih0aGlzLm5hbWUpO1xuICAgIGxldCBbeWVhciwgbW9udGgsIGRheSwgYWRPckJjLCBob3VyLCBtaW51dGUsIHNlY29uZF0gPSBkdGYuZm9ybWF0VG9QYXJ0c1xuICAgICAgPyBwYXJ0c09mZnNldChkdGYsIGRhdGUpXG4gICAgICA6IGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSk7XG5cbiAgICBpZiAoYWRPckJjID09PSBcIkJDXCIpIHtcbiAgICAgIHllYXIgPSAtTWF0aC5hYnMoeWVhcikgKyAxO1xuICAgIH1cblxuICAgIC8vIGJlY2F1c2Ugd2UncmUgdXNpbmcgaG91cjEyIGFuZCBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMDI1NTY0JmNhbj0yJnE9JTIyMjQlM0EwMCUyMiUyMGRhdGV0aW1lZm9ybWF0XG4gICAgY29uc3QgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjtcblxuICAgIGNvbnN0IGFzVVRDID0gb2JqVG9Mb2NhbFRTKHtcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGRheSxcbiAgICAgIGhvdXI6IGFkanVzdGVkSG91cixcbiAgICAgIG1pbnV0ZSxcbiAgICAgIHNlY29uZCxcbiAgICAgIG1pbGxpc2Vjb25kOiAwLFxuICAgIH0pO1xuXG4gICAgbGV0IGFzVFMgPSArZGF0ZTtcbiAgICBjb25zdCBvdmVyID0gYXNUUyAlIDEwMDA7XG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIGVxdWFsIHRvIGFub3RoZXIgem9uZVxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIHtab25lfSBvdGhlclpvbmUgLSB0aGUgem9uZSB0byBjb21wYXJlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cbiAgICogQG92ZXJyaWRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWQ7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBoYXNMb2NhbGVXZWVrSW5mbywgaGFzUmVsYXRpdmUsIHBhZFN0YXJ0LCByb3VuZFRvLCB2YWxpZGF0ZVdlZWtTZXR0aW5ncyB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSBcIi4vZW5nbGlzaC5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuXG4vLyB0b2RvIC0gcmVtYXAgY2FjaGluZ1xuXG5sZXQgaW50bExGQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZExGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGR0ZiA9IGludGxMRkNhY2hlW2tleV07XG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuTGlzdEZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxMRkNhY2hlW2tleV0gPSBkdGY7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cblxuY29uc3QgaW50bERUQ2FjaGUgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRDYWNoZWREVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICBsZXQgZHRmID0gaW50bERUQ2FjaGUuZ2V0KGtleSk7XG4gIGlmIChkdGYgPT09IHVuZGVmaW5lZCkge1xuICAgIGR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bERUQ2FjaGUuc2V0KGtleSwgZHRmKTtcbiAgfVxuICByZXR1cm4gZHRmO1xufVxuXG5jb25zdCBpbnRsTnVtQ2FjaGUgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRDYWNoZWRJTkYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICBsZXQgaW5mID0gaW50bE51bUNhY2hlLmdldChrZXkpO1xuICBpZiAoaW5mID09PSB1bmRlZmluZWQpIHtcbiAgICBpbmYgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jU3RyaW5nLCBvcHRzKTtcbiAgICBpbnRsTnVtQ2FjaGUuc2V0KGtleSwgaW5mKTtcbiAgfVxuICByZXR1cm4gaW5mO1xufVxuXG5jb25zdCBpbnRsUmVsQ2FjaGUgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3QgeyBiYXNlLCAuLi5jYWNoZUtleU9wdHMgfSA9IG9wdHM7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgY2FjaGVLZXlPcHRzXSk7XG4gIGxldCBpbmYgPSBpbnRsUmVsQ2FjaGUuZ2V0KGtleSk7XG4gIGlmIChpbmYgPT09IHVuZGVmaW5lZCkge1xuICAgIGluZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxSZWxDYWNoZS5zZXQoa2V5LCBpbmYpO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG5cbmxldCBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlO1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfVxufVxuXG5jb25zdCBpbnRsUmVzb2x2ZWRPcHRpb25zQ2FjaGUgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBnZXRDYWNoZWRJbnRSZXNvbHZlZE9wdGlvbnMobG9jU3RyaW5nKSB7XG4gIGxldCBvcHRzID0gaW50bFJlc29sdmVkT3B0aW9uc0NhY2hlLmdldChsb2NTdHJpbmcpO1xuICBpZiAob3B0cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0cyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY1N0cmluZykucmVzb2x2ZWRPcHRpb25zKCk7XG4gICAgaW50bFJlc29sdmVkT3B0aW9uc0NhY2hlLnNldChsb2NTdHJpbmcsIG9wdHMpO1xuICB9XG4gIHJldHVybiBvcHRzO1xufVxuXG5jb25zdCB3ZWVrSW5mb0NhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gZ2V0Q2FjaGVkV2Vla0luZm8obG9jU3RyaW5nKSB7XG4gIGxldCBkYXRhID0gd2Vla0luZm9DYWNoZS5nZXQobG9jU3RyaW5nKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgY29uc3QgbG9jYWxlID0gbmV3IEludGwuTG9jYWxlKGxvY1N0cmluZyk7XG4gICAgLy8gYnJvd3NlcnMgY3VycmVudGx5IGltcGxlbWVudCB0aGlzIGFzIGEgcHJvcGVydHksIGJ1dCBzcGVjIHNheXMgaXQgc2hvdWxkIGJlIGEgZ2V0dGVyIGZ1bmN0aW9uXG4gICAgZGF0YSA9IFwiZ2V0V2Vla0luZm9cIiBpbiBsb2NhbGUgPyBsb2NhbGUuZ2V0V2Vla0luZm8oKSA6IGxvY2FsZS53ZWVrSW5mbztcbiAgICAvLyBtaW5pbWFsRGF5cyB3YXMgcmVtb3ZlZCBmcm9tIFdlZWtJbmZvOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1pbnRsLWxvY2FsZS1pbmZvL2lzc3Vlcy84NlxuICAgIGlmICghKFwibWluaW1hbERheXNcIiBpbiBkYXRhKSkge1xuICAgICAgZGF0YSA9IHsgLi4uZmFsbGJhY2tXZWVrU2V0dGluZ3MsIC4uLmRhdGEgfTtcbiAgICB9XG4gICAgd2Vla0luZm9DYWNoZS5zZXQobG9jU3RyaW5nLCBkYXRhKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlU3RyKSB7XG4gIC8vIEkgcmVhbGx5IHdhbnQgdG8gYXZvaWQgd3JpdGluZyBhIEJDUCA0NyBwYXJzZXJcbiAgLy8gc2VlLCBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vYmNwLTQ3XG4gIC8vIEluc3RlYWQsIHdlJ2xsIGRvIHRoaXM6XG5cbiAgLy8gYSkgaWYgdGhlIHN0cmluZyBoYXMgbm8gLXUgZXh0ZW5zaW9ucywganVzdCBsZWF2ZSBpdCBhbG9uZVxuICAvLyBiKSBpZiBpdCBkb2VzLCB1c2UgSW50bCB0byByZXNvbHZlIGV2ZXJ5dGhpbmdcbiAgLy8gYykgaWYgSW50bCBmYWlscywgdHJ5IGFnYWluIHdpdGhvdXQgdGhlIC11XG5cbiAgLy8gcHJpdmF0ZSBzdWJ0YWdzIGFuZCB1bmljb2RlIHN1YnRhZ3MgaGF2ZSBvcmRlcmluZyByZXF1aXJlbWVudHMsXG4gIC8vIGFuZCB3ZSdyZSBub3QgcHJvcGVybHkgcGFyc2luZyB0aGlzLCBzbyBqdXN0IHN0cmlwIG91dCB0aGVcbiAgLy8gcHJpdmF0ZSBvbmVzIGlmIHRoZXkgZXhpc3QuXG4gIGNvbnN0IHhJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXgtXCIpO1xuICBpZiAoeEluZGV4ICE9PSAtMSkge1xuICAgIGxvY2FsZVN0ciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgeEluZGV4KTtcbiAgfVxuXG4gIGNvbnN0IHVJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXUtXCIpO1xuICBpZiAodUluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBbbG9jYWxlU3RyXTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgb3B0aW9ucztcbiAgICBsZXQgc2VsZWN0ZWRTdHI7XG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICAgIHNlbGVjdGVkU3RyID0gbG9jYWxlU3RyO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXIgPSBsb2NhbGVTdHIuc3Vic3RyaW5nKDAsIHVJbmRleCk7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgICAgc2VsZWN0ZWRTdHIgPSBzbWFsbGVyO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4gW3NlbGVjdGVkU3RyLCBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRsQ29uZmlnU3RyaW5nKGxvY2FsZVN0ciwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikge1xuICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgaWYgKCFsb2NhbGVTdHIuaW5jbHVkZXMoXCItdS1cIikpIHtcbiAgICAgIGxvY2FsZVN0ciArPSBcIi11XCI7XG4gICAgfVxuXG4gICAgaWYgKG91dHB1dENhbGVuZGFyKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gYC1jYS0ke291dHB1dENhbGVuZGFyfWA7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgbG9jYWxlU3RyICs9IGAtbnUtJHtudW1iZXJpbmdTeXN0ZW19YDtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZVN0cjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jYWxlU3RyO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcE1vbnRocyhmKSB7XG4gIGNvbnN0IG1zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDA5LCBpLCAxKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIG1hcFdlZWtkYXlzKGYpIHtcbiAgY29uc3QgbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgY29uc3QgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBsaXN0U3R1ZmYobG9jLCBsZW5ndGgsIGVuZ2xpc2hGbiwgaW50bEZuKSB7XG4gIGNvbnN0IG1vZGUgPSBsb2MubGlzdGluZ01vZGUoKTtcblxuICBpZiAobW9kZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAobW9kZSA9PT0gXCJlblwiKSB7XG4gICAgcmV0dXJuIGVuZ2xpc2hGbihsZW5ndGgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnRsRm4obGVuZ3RoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0Zhc3ROdW1iZXJzKGxvYykge1xuICBpZiAobG9jLm51bWJlcmluZ1N5c3RlbSAmJiBsb2MubnVtYmVyaW5nU3lzdGVtICE9PSBcImxhdG5cIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgbG9jLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIgfHxcbiAgICAgICFsb2MubG9jYWxlIHx8XG4gICAgICBsb2MubG9jYWxlLnN0YXJ0c1dpdGgoXCJlblwiKSB8fFxuICAgICAgZ2V0Q2FjaGVkSW50UmVzb2x2ZWRPcHRpb25zKGxvYy5sb2NhbGUpLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCJcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jbGFzcyBQb2x5TnVtYmVyRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoaW50bCwgZm9yY2VTaW1wbGUsIG9wdHMpIHtcbiAgICB0aGlzLnBhZFRvID0gb3B0cy5wYWRUbyB8fCAwO1xuICAgIHRoaXMuZmxvb3IgPSBvcHRzLmZsb29yIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgeyBwYWRUbywgZmxvb3IsIC4uLm90aGVyT3B0cyB9ID0gb3B0cztcblxuICAgIGlmICghZm9yY2VTaW1wbGUgfHwgT2JqZWN0LmtleXMob3RoZXJPcHRzKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbnRsT3B0cyA9IHsgdXNlR3JvdXBpbmc6IGZhbHNlLCAuLi5vcHRzIH07XG4gICAgICBpZiAob3B0cy5wYWRUbyA+IDApIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcbiAgICAgIHRoaXMuaW5mID0gZ2V0Q2FjaGVkSU5GKGludGwsIGludGxPcHRzKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoaSkge1xuICAgIGlmICh0aGlzLmluZikge1xuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7XG4gICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcbiAgICAgIGNvbnN0IGZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiByb3VuZFRvKGksIDMpO1xuICAgICAgcmV0dXJuIHBhZFN0YXJ0KGZpeGVkLCB0aGlzLnBhZFRvKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIFBvbHlEYXRlRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoZHQsIGludGwsIG9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMub3JpZ2luYWxab25lID0gdW5kZWZpbmVkO1xuXG4gICAgbGV0IHogPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMub3B0cy50aW1lWm9uZSkge1xuICAgICAgLy8gRG9uJ3QgYXBwbHkgYW55IHdvcmthcm91bmRzIGlmIGEgdGltZVpvbmUgaXMgZXhwbGljaXRseSBwcm92aWRlZCBpbiBvcHRzXG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwiZml4ZWRcIikge1xuICAgICAgLy8gVVRDLTggb3IgRXRjL1VUQy04IGFyZSBub3QgcGFydCBvZiB0emRhdGEsIG9ubHkgRXRjL0dNVCs4IGFuZCB0aGUgbGlrZS5cbiAgICAgIC8vIFRoYXQgaXMgd2h5IGZpeGVkLW9mZnNldCBUWiBpcyBzZXQgdG8gdGhhdCB1bmxlc3MgaXQgaXM6XG4gICAgICAvLyAxLiBSZXByZXNlbnRpbmcgb2Zmc2V0IDAgd2hlbiBVVEMgaXMgdXNlZCB0byBtYWludGFpbiBwcmV2aW91cyBiZWhhdmlvciBhbmQgZG9lcyBub3QgYmVjb21lIEdNVC5cbiAgICAgIC8vIDIuIFVuc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyOlxuICAgICAgLy8gICAgLSBzb21lIGRvIG5vdCBzdXBwb3J0IEV0Yy9cbiAgICAgIC8vICAgIC0gPCBFdGMvR01ULTE0LCA+IEV0Yy9HTVQrMTIsIGFuZCAzMC1taW51dGUgb3IgNDUtbWludXRlIG9mZnNldHMgYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YVxuICAgICAgY29uc3QgZ210T2Zmc2V0ID0gLTEgKiAoZHQub2Zmc2V0IC8gNjApO1xuICAgICAgY29uc3Qgb2Zmc2V0WiA9IGdtdE9mZnNldCA+PSAwID8gYEV0Yy9HTVQrJHtnbXRPZmZzZXR9YCA6IGBFdGMvR01UJHtnbXRPZmZzZXR9YDtcbiAgICAgIGlmIChkdC5vZmZzZXQgIT09IDAgJiYgSUFOQVpvbmUuY3JlYXRlKG9mZnNldFopLnZhbGlkKSB7XG4gICAgICAgIHogPSBvZmZzZXRaO1xuICAgICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOb3QgYWxsIGZpeGVkLW9mZnNldCB6b25lcyBsaWtlIEV0Yy8rNDozMCBhcmUgcHJlc2VudCBpbiB0emRhdGEgc29cbiAgICAgICAgLy8gd2UgbWFudWFsbHkgYXBwbHkgdGhlIG9mZnNldCBhbmQgc3Vic3RpdHV0ZSB0aGUgem9uZSBhcyBuZWVkZWQuXG4gICAgICAgIHogPSBcIlVUQ1wiO1xuICAgICAgICB0aGlzLmR0ID0gZHQub2Zmc2V0ID09PSAwID8gZHQgOiBkdC5zZXRab25lKFwiVVRDXCIpLnBsdXMoeyBtaW51dGVzOiBkdC5vZmZzZXQgfSk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxab25lID0gZHQuem9uZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGR0LnpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIikge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgIH0gZWxzZSBpZiAoZHQuem9uZS50eXBlID09PSBcImlhbmFcIikge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgeiA9IGR0LnpvbmUubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3VzdG9tIHpvbmVzIGNhbiBoYXZlIGFueSBvZmZzZXQgLyBvZmZzZXROYW1lIHNvIHdlIGp1c3QgbWFudWFsbHlcbiAgICAgIC8vIGFwcGx5IHRoZSBvZmZzZXQgYW5kIHN1YnN0aXR1dGUgdGhlIHpvbmUgYXMgbmVlZGVkLlxuICAgICAgeiA9IFwiVVRDXCI7XG4gICAgICB0aGlzLmR0ID0gZHQuc2V0Wm9uZShcIlVUQ1wiKS5wbHVzKHsgbWludXRlczogZHQub2Zmc2V0IH0pO1xuICAgICAgdGhpcy5vcmlnaW5hbFpvbmUgPSBkdC56b25lO1xuICAgIH1cblxuICAgIGNvbnN0IGludGxPcHRzID0geyAuLi50aGlzLm9wdHMgfTtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IGludGxPcHRzLnRpbWVab25lIHx8IHo7XG4gICAgdGhpcy5kdGYgPSBnZXRDYWNoZWREVEYoaW50bCwgaW50bE9wdHMpO1xuICB9XG5cbiAgZm9ybWF0KCkge1xuICAgIGlmICh0aGlzLm9yaWdpbmFsWm9uZSkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSB0byBzdWJzdGl0dXRlIGluIHRoZSBhY3R1YWwgem9uZSBuYW1lLCB3ZSBoYXZlIHRvIHVzZVxuICAgICAgLy8gZm9ybWF0VG9QYXJ0cyBzbyB0aGF0IHRoZSB0aW1lem9uZSBjYW4gYmUgcmVwbGFjZWQuXG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRUb1BhcnRzKClcbiAgICAgICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXQodGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgfVxuXG4gIGZvcm1hdFRvUGFydHMoKSB7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLmR0Zi5mb3JtYXRUb1BhcnRzKHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gICAgaWYgKHRoaXMub3JpZ2luYWxab25lKSB7XG4gICAgICByZXR1cm4gcGFydHMubWFwKChwYXJ0KSA9PiB7XG4gICAgICAgIGlmIChwYXJ0LnR5cGUgPT09IFwidGltZVpvbmVOYW1lXCIpIHtcbiAgICAgICAgICBjb25zdCBvZmZzZXROYW1lID0gdGhpcy5vcmlnaW5hbFpvbmUub2Zmc2V0TmFtZSh0aGlzLmR0LnRzLCB7XG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuZHQubG9jYWxlLFxuICAgICAgICAgICAgZm9ybWF0OiB0aGlzLm9wdHMudGltZVpvbmVOYW1lLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5wYXJ0LFxuICAgICAgICAgICAgdmFsdWU6IG9mZnNldE5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcGFydDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cztcbiAgfVxuXG4gIHJlc29sdmVkT3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kdGYucmVzb2x2ZWRPcHRpb25zKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBQb2x5UmVsRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoaW50bCwgaXNFbmdsaXNoLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0geyBzdHlsZTogXCJsb25nXCIsIC4uLm9wdHMgfTtcbiAgICBpZiAoIWlzRW5nbGlzaCAmJiBoYXNSZWxhdGl2ZSgpKSB7XG4gICAgICB0aGlzLnJ0ZiA9IGdldENhY2hlZFJURihpbnRsLCBvcHRzKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoY291bnQsIHVuaXQpIHtcbiAgICBpZiAodGhpcy5ydGYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXQoY291bnQsIHVuaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRW5nbGlzaC5mb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIHRoaXMub3B0cy5udW1lcmljLCB0aGlzLm9wdHMuc3R5bGUgIT09IFwibG9uZ1wiKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZmFsbGJhY2tXZWVrU2V0dGluZ3MgPSB7XG4gIGZpcnN0RGF5OiAxLFxuICBtaW5pbWFsRGF5czogNCxcbiAgd2Vla2VuZDogWzYsIDddLFxufTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbGUge1xuICBzdGF0aWMgZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKFxuICAgICAgb3B0cy5sb2NhbGUsXG4gICAgICBvcHRzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIG9wdHMub3V0cHV0Q2FsZW5kYXIsXG4gICAgICBvcHRzLndlZWtTZXR0aW5ncyxcbiAgICAgIG9wdHMuZGVmYXVsdFRvRU5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIHdlZWtTZXR0aW5ncywgZGVmYXVsdFRvRU4gPSBmYWxzZSkge1xuICAgIGNvbnN0IHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlO1xuICAgIC8vIHRoZSBzeXN0ZW0gbG9jYWxlIGlzIHVzZWZ1bCBmb3IgaHVtYW4tcmVhZGFibGUgc3RyaW5ncyBidXQgYW5ub3lpbmcgZm9yIHBhcnNpbmcvZm9ybWF0dGluZyBrbm93biBmb3JtYXRzXG4gICAgY29uc3QgbG9jYWxlUiA9IHNwZWNpZmllZExvY2FsZSB8fCAoZGVmYXVsdFRvRU4gPyBcImVuLVVTXCIgOiBzeXN0ZW1Mb2NhbGUoKSk7XG4gICAgY29uc3QgbnVtYmVyaW5nU3lzdGVtUiA9IG51bWJlcmluZ1N5c3RlbSB8fCBTZXR0aW5ncy5kZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICAgIGNvbnN0IG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICBjb25zdCB3ZWVrU2V0dGluZ3NSID0gdmFsaWRhdGVXZWVrU2V0dGluZ3Mod2Vla1NldHRpbmdzKSB8fCBTZXR0aW5ncy5kZWZhdWx0V2Vla1NldHRpbmdzO1xuICAgIHJldHVybiBuZXcgTG9jYWxlKGxvY2FsZVIsIG51bWJlcmluZ1N5c3RlbVIsIG91dHB1dENhbGVuZGFyUiwgd2Vla1NldHRpbmdzUiwgc3BlY2lmaWVkTG9jYWxlKTtcbiAgfVxuXG4gIHN0YXRpYyByZXNldENhY2hlKCkge1xuICAgIHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcbiAgICBpbnRsRFRDYWNoZS5jbGVhcigpO1xuICAgIGludGxOdW1DYWNoZS5jbGVhcigpO1xuICAgIGludGxSZWxDYWNoZS5jbGVhcigpO1xuICAgIGludGxSZXNvbHZlZE9wdGlvbnNDYWNoZS5jbGVhcigpO1xuICAgIHdlZWtJbmZvQ2FjaGUuY2xlYXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyLCB3ZWVrU2V0dGluZ3MgfSA9IHt9KSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyLCB3ZWVrU2V0dGluZ3MpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCB3ZWVrU2V0dGluZ3MsIHNwZWNpZmllZExvY2FsZSkge1xuICAgIGNvbnN0IFtwYXJzZWRMb2NhbGUsIHBhcnNlZE51bWJlcmluZ1N5c3RlbSwgcGFyc2VkT3V0cHV0Q2FsZW5kYXJdID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKTtcblxuICAgIHRoaXMubG9jYWxlID0gcGFyc2VkTG9jYWxlO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nIHx8IHBhcnNlZE51bWJlcmluZ1N5c3RlbSB8fCBudWxsO1xuICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhciB8fCBwYXJzZWRPdXRwdXRDYWxlbmRhciB8fCBudWxsO1xuICAgIHRoaXMud2Vla1NldHRpbmdzID0gd2Vla1NldHRpbmdzO1xuICAgIHRoaXMuaW50bCA9IGludGxDb25maWdTdHJpbmcodGhpcy5sb2NhbGUsIHRoaXMubnVtYmVyaW5nU3lzdGVtLCB0aGlzLm91dHB1dENhbGVuZGFyKTtcblxuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1vbnRoc0NhY2hlID0geyBmb3JtYXQ6IHt9LCBzdGFuZGFsb25lOiB7fSB9O1xuICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IG51bGw7XG4gICAgdGhpcy5lcmFDYWNoZSA9IHt9O1xuXG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XG4gIH1cblxuICBnZXQgZmFzdE51bWJlcnMoKSB7XG4gICAgaWYgKHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQ7XG4gIH1cblxuICBsaXN0aW5nTW9kZSgpIHtcbiAgICBjb25zdCBpc0FjdHVhbGx5RW4gPSB0aGlzLmlzRW5nbGlzaCgpO1xuICAgIGNvbnN0IGhhc05vV2VpcmRuZXNzID1cbiAgICAgICh0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gbnVsbCB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIpICYmXG4gICAgICAodGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gbnVsbCB8fCB0aGlzLm91dHB1dENhbGVuZGFyID09PSBcImdyZWdvcnlcIik7XG4gICAgcmV0dXJuIGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcyA/IFwiZW5cIiA6IFwiaW50bFwiO1xuICB9XG5cbiAgY2xvbmUoYWx0cykge1xuICAgIGlmICghYWx0cyB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhbHRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShcbiAgICAgICAgYWx0cy5sb2NhbGUgfHwgdGhpcy5zcGVjaWZpZWRMb2NhbGUsXG4gICAgICAgIGFsdHMubnVtYmVyaW5nU3lzdGVtIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBhbHRzLm91dHB1dENhbGVuZGFyIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIsXG4gICAgICAgIHZhbGlkYXRlV2Vla1NldHRpbmdzKGFsdHMud2Vla1NldHRpbmdzKSB8fCB0aGlzLndlZWtTZXR0aW5ncyxcbiAgICAgICAgYWx0cy5kZWZhdWx0VG9FTiB8fCBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZWRlZmF1bHRUb0VOKGFsdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKHsgLi4uYWx0cywgZGVmYXVsdFRvRU46IHRydWUgfSk7XG4gIH1cblxuICByZWRlZmF1bHRUb1N5c3RlbShhbHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7IC4uLmFsdHMsIGRlZmF1bHRUb0VOOiBmYWxzZSB9KTtcbiAgfVxuXG4gIG1vbnRocyhsZW5ndGgsIGZvcm1hdCA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIEVuZ2xpc2gubW9udGhzLCAoKSA9PiB7XG4gICAgICAvLyBXb3JrYXJvdW5kIGZvciBcImphXCIgbG9jYWxlOiBmb3JtYXRUb1BhcnRzIGRvZXMgbm90IGxhYmVsIGFsbCBwYXJ0cyBvZiB0aGUgbW9udGhcbiAgICAgIC8vIGFzIFwibW9udGhcIiBhbmQgZm9yIHRoaXMgbG9jYWxlIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2UgYmV0d2VlbiBcImZvcm1hdFwiIGFuZCBcIm5vbi1mb3JtYXRcIi5cbiAgICAgIC8vIEFzIHN1Y2gsIGp1c3QgdXNlIGZvcm1hdCgpIGluc3RlYWQgb2YgZm9ybWF0VG9QYXJ0cygpIGFuZCB0YWtlIHRoZSB3aG9sZSBzdHJpbmdcbiAgICAgIGNvbnN0IG1vbnRoU3BlY2lhbENhc2UgPSB0aGlzLmludGwgPT09IFwiamFcIiB8fCB0aGlzLmludGwuc3RhcnRzV2l0aChcImphLVwiKTtcbiAgICAgIGZvcm1hdCAmPSAhbW9udGhTcGVjaWFsQ2FzZTtcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXQgPyB7IG1vbnRoOiBsZW5ndGgsIGRheTogXCJudW1lcmljXCIgfSA6IHsgbW9udGg6IGxlbmd0aCB9LFxuICAgICAgICBmb3JtYXRTdHIgPSBmb3JtYXQgPyBcImZvcm1hdFwiIDogXCJzdGFuZGFsb25lXCI7XG4gICAgICBpZiAoIXRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIGNvbnN0IG1hcHBlciA9ICFtb250aFNwZWNpYWxDYXNlXG4gICAgICAgICAgPyAoZHQpID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJtb250aFwiKVxuICAgICAgICAgIDogKGR0KSA9PiB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsKS5mb3JtYXQoKTtcbiAgICAgICAgdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBNb250aHMobWFwcGVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIHdlZWtkYXlzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgRW5nbGlzaC53ZWVrZGF5cywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdFxuICAgICAgICAgID8geyB3ZWVrZGF5OiBsZW5ndGgsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfVxuICAgICAgICAgIDogeyB3ZWVrZGF5OiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cygoZHQpID0+XG4gICAgICAgICAgdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcIndlZWtkYXlcIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyaWRpZW1zKCkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYoXG4gICAgICB0aGlzLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgKCkgPT4gRW5nbGlzaC5tZXJpZGllbXMsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIEluIHRoZW9yeSB0aGVyZSBjb3VsZCBiZSBhcmliaXRyYXJ5IGRheSBwZXJpb2RzLiBXZSdyZSBnb25uYSBhc3N1bWUgdGhlcmUgYXJlIGV4YWN0bHkgdHdvXG4gICAgICAgIC8vIGZvciBBTSBhbmQgUE0uIFRoaXMgaXMgcHJvYmFibHkgd3JvbmcsIGJ1dCBpdCdzIG1ha2VzIHBhcnNpbmcgd2F5IGVhc2llci5cbiAgICAgICAgaWYgKCF0aGlzLm1lcmlkaWVtQ2FjaGUpIHtcbiAgICAgICAgICBjb25zdCBpbnRsID0geyBob3VyOiBcIm51bWVyaWNcIiwgaG91ckN5Y2xlOiBcImgxMlwiIH07XG4gICAgICAgICAgdGhpcy5tZXJpZGllbUNhY2hlID0gW0RhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDkpLCBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCAxOSldLm1hcChcbiAgICAgICAgICAgIChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcImRheXBlcmlvZFwiKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5tZXJpZGllbUNhY2hlO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBlcmFzKGxlbmd0aCkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBFbmdsaXNoLmVyYXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSB7IGVyYTogbGVuZ3RoIH07XG5cbiAgICAgIC8vIFRoaXMgaXMgcHJvYmxlbWF0aWMuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cbiAgICAgIGlmICghdGhpcy5lcmFDYWNoZVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoKGR0KSA9PlxuICAgICAgICAgIHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJlcmFcIilcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4dHJhY3QoZHQsIGludGxPcHRzLCBmaWVsZCkge1xuICAgIGNvbnN0IGRmID0gdGhpcy5kdEZvcm1hdHRlcihkdCwgaW50bE9wdHMpLFxuICAgICAgcmVzdWx0cyA9IGRmLmZvcm1hdFRvUGFydHMoKSxcbiAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKChtKSA9PiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gZmllbGQpO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIG51bWJlckZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICAvLyB0aGlzIGZvcmNlc2ltcGxlIG9wdGlvbiBpcyBuZXZlciB1c2VkICh0aGUgb25seSBjYWxsZXIgc2hvcnQtY2lyY3VpdHMgb24gaXQsIGJ1dCBpdCBzZWVtcyBzYWZlciB0byBsZWF2ZSlcbiAgICAvLyAoaW4gY29udHJhc3QsIHRoZSByZXN0IG9mIHRoZSBjb25kaXRpb24gaXMgdXNlZCBoZWF2aWx5KVxuICAgIHJldHVybiBuZXcgUG9seU51bWJlckZvcm1hdHRlcih0aGlzLmludGwsIG9wdHMuZm9yY2VTaW1wbGUgfHwgdGhpcy5mYXN0TnVtYmVycywgb3B0cyk7XG4gIH1cblxuICBkdEZvcm1hdHRlcihkdCwgaW50bE9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seURhdGVGb3JtYXR0ZXIoZHQsIHRoaXMuaW50bCwgaW50bE9wdHMpO1xuICB9XG5cbiAgcmVsRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgUG9seVJlbEZvcm1hdHRlcih0aGlzLmludGwsIHRoaXMuaXNFbmdsaXNoKCksIG9wdHMpO1xuICB9XG5cbiAgbGlzdEZvcm1hdHRlcihvcHRzID0ge30pIHtcbiAgICByZXR1cm4gZ2V0Q2FjaGVkTEYodGhpcy5pbnRsLCBvcHRzKTtcbiAgfVxuXG4gIGlzRW5nbGlzaCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sb2NhbGUgPT09IFwiZW5cIiB8fFxuICAgICAgdGhpcy5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gXCJlbi11c1wiIHx8XG4gICAgICBnZXRDYWNoZWRJbnRSZXNvbHZlZE9wdGlvbnModGhpcy5pbnRsKS5sb2NhbGUuc3RhcnRzV2l0aChcImVuLXVzXCIpXG4gICAgKTtcbiAgfVxuXG4gIGdldFdlZWtTZXR0aW5ncygpIHtcbiAgICBpZiAodGhpcy53ZWVrU2V0dGluZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLndlZWtTZXR0aW5ncztcbiAgICB9IGVsc2UgaWYgKCFoYXNMb2NhbGVXZWVrSW5mbygpKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2tXZWVrU2V0dGluZ3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBnZXRDYWNoZWRXZWVrSW5mbyh0aGlzLmxvY2FsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhcnRPZldlZWsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2Vla1NldHRpbmdzKCkuZmlyc3REYXk7XG4gIH1cblxuICBnZXRNaW5EYXlzSW5GaXJzdFdlZWsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2Vla1NldHRpbmdzKCkubWluaW1hbERheXM7XG4gIH1cblxuICBnZXRXZWVrZW5kRGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRXZWVrU2V0dGluZ3MoKS53ZWVrZW5kO1xuICB9XG5cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYWxlID09PSBvdGhlci5sb2NhbGUgJiZcbiAgICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiZcbiAgICAgIHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG90aGVyLm91dHB1dENhbGVuZGFyXG4gICAgKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgTG9jYWxlKCR7dGhpcy5sb2NhbGV9LCAke3RoaXMubnVtYmVyaW5nU3lzdGVtfSwgJHt0aGlzLm91dHB1dENhbGVuZGFyfSlgO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBzaWduZWRPZmZzZXQgfSBmcm9tIFwiLi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuXG5sZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBBIHpvbmUgd2l0aCBhIGZpeGVkIG9mZnNldCAobWVhbmluZyBubyBEU1QpXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRPZmZzZXRab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgVVRDXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgdXRjSW5zdGFuY2UoKSB7XG4gICAgaWYgKHNpbmdsZXRvbiA9PT0gbnVsbCkge1xuICAgICAgc2luZ2xldG9uID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZSgwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlc1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgaW5zdGFuY2Uob2Zmc2V0KSB7XG4gICAgcmV0dXJuIG9mZnNldCA9PT0gMCA/IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZSA6IG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgRml4ZWRPZmZzZXRab25lIGZyb20gYSBVVEMgb2Zmc2V0IHN0cmluZywgbGlrZSBcIlVUQys2XCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgb2Zmc2V0IHN0cmluZyB0byBwYXJzZVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrMDZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDLTY6MDBcIilcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlU3BlY2lmaWVyKHMpIHtcbiAgICBpZiAocykge1xuICAgICAgY29uc3QgciA9IHMubWF0Y2goL151dGMoPzooWystXVxcZHsxLDJ9KSg/OjooXFxkezJ9KSk/KT8kL2kpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvZmZzZXQpIHtcbiAgICBzdXBlcigpO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cbiAgICB0aGlzLmZpeGVkID0gb2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHpvbmUuIGBmaXhlZGAgZm9yIGFsbCBpbnN0YW5jZXMgb2YgYEZpeGVkT2Zmc2V0Wm9uZWAuXG4gICAqIEBvdmVycmlkZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiZml4ZWRcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGlzIHpvbmUuXG4gICAqIEFsbCBmaXhlZCB6b25lcycgbmFtZXMgYWx3YXlzIHN0YXJ0IHdpdGggXCJVVENcIiAocGx1cyBvcHRpb25hbCBvZmZzZXQpXG4gICAqIEBvdmVycmlkZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyBcIlVUQ1wiIDogYFVUQyR7Zm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIFwibmFycm93XCIpfWA7XG4gIH1cblxuICAvKipcbiAgICogVGhlIElBTkEgbmFtZSBvZiB0aGlzIHpvbmUsIGkuZS4gYEV0Yy9VVENgIG9yIGBFdGMvR01UKy8tbm5gXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGlhbmFOYW1lKCkge1xuICAgIGlmICh0aGlzLmZpeGVkID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJFdGMvVVRDXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgRXRjL0dNVCR7Zm9ybWF0T2Zmc2V0KC10aGlzLmZpeGVkLCBcIm5hcnJvd1wiKX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyBjb21tb24gbmFtZSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcC5cbiAgICpcbiAgICogRm9yIGZpeGVkIG9mZnNldCB6b25lcyB0aGlzIGVxdWFscyB0byB0aGUgem9uZSBuYW1lLlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyB2YWx1ZSBhcyBhIHN0cmluZ1xuICAgKiBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG9mZnNldFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0cyAnbmFycm93JywgJ3Nob3J0Jywgb3IgJ3RlY2hpZScuIFJldHVybmluZyAnKzYnLCAnKzA2OjAwJywgb3IgJyswNjAwJyByZXNwZWN0aXZlbHlcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBvZmZzZXQgaXMga25vd24gdG8gYmUgZml4ZWQgZm9yIHRoZSB3aG9sZSB5ZWFyOlxuICAgKiBBbHdheXMgcmV0dXJucyB0cnVlIGZvciBhbGwgZml4ZWQgb2Zmc2V0IHpvbmVzLlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBvZmZzZXQgaW4gbWludXRlcyBmb3IgdGhpcyB6b25lIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wLlxuICAgKlxuICAgKiBGb3IgZml4ZWQgb2Zmc2V0IHpvbmVzLCB0aGlzIGlzIGNvbnN0YW50IGFuZCBkb2VzIG5vdCBkZXBlbmQgb24gYSB0aW1lc3RhbXAuXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIGVxdWFsIHRvIGFub3RoZXIgem9uZSAoaS5lLiBhbHNvIGZpeGVkIGFuZCBzYW1lIG9mZnNldClcbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJmaXhlZFwiICYmIG90aGVyWm9uZS5maXhlZCA9PT0gdGhpcy5maXhlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgdmFsaWQ6XG4gICAqIEFsbCBmaXhlZCBvZmZzZXQgem9uZXMgYXJlIHZhbGlkLlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwgImltcG9ydCBab25lIGZyb20gXCIuLi96b25lLmpzXCI7XG5cbi8qKlxuICogQSB6b25lIHRoYXQgZmFpbGVkIHRvIHBhcnNlLiBZb3Ugc2hvdWxkIG5ldmVyIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhpcy5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkWm9uZSBleHRlbmRzIFpvbmUge1xuICBjb25zdHJ1Y3Rvcih6b25lTmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqICBAcHJpdmF0ZSAqL1xuICAgIHRoaXMuem9uZU5hbWUgPSB6b25lTmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImludmFsaWRcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVW5pdmVyc2FsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBwcml2YXRlXG4gKi9cblxuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IEludmFsaWRab25lIGZyb20gXCIuLi96b25lcy9pbnZhbGlkWm9uZS5qc1wiO1xuXG5pbXBvcnQgeyBpc1VuZGVmaW5lZCwgaXNTdHJpbmcsIGlzTnVtYmVyIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IFN5c3RlbVpvbmUgZnJvbSBcIi4uL3pvbmVzL3N5c3RlbVpvbmUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIGRlZmF1bHRab25lKSB7XG4gIGxldCBvZmZzZXQ7XG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkgfHwgaW5wdXQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XG4gIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBab25lKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIGNvbnN0IGxvd2VyZWQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChsb3dlcmVkID09PSBcImRlZmF1bHRcIikgcmV0dXJuIGRlZmF1bHRab25lO1xuICAgIGVsc2UgaWYgKGxvd2VyZWQgPT09IFwibG9jYWxcIiB8fCBsb3dlcmVkID09PSBcInN5c3RlbVwiKSByZXR1cm4gU3lzdGVtWm9uZS5pbnN0YW5jZTtcbiAgICBlbHNlIGlmIChsb3dlcmVkID09PSBcInV0Y1wiIHx8IGxvd2VyZWQgPT09IFwiZ210XCIpIHJldHVybiBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2U7XG4gICAgZWxzZSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKGxvd2VyZWQpIHx8IElBTkFab25lLmNyZWF0ZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiICYmIFwib2Zmc2V0XCIgaW4gaW5wdXQgJiYgdHlwZW9mIGlucHV0Lm9mZnNldCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrXG4gICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdFxuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTtcbiAgfVxufVxuIiwgImNvbnN0IG51bWJlcmluZ1N5c3RlbXMgPSB7XG4gIGFyYWI6IFwiW1xcdTA2NjAtXFx1MDY2OV1cIixcbiAgYXJhYmV4dDogXCJbXFx1MDZGMC1cXHUwNkY5XVwiLFxuICBiYWxpOiBcIltcXHUxQjUwLVxcdTFCNTldXCIsXG4gIGJlbmc6IFwiW1xcdTA5RTYtXFx1MDlFRl1cIixcbiAgZGV2YTogXCJbXFx1MDk2Ni1cXHUwOTZGXVwiLFxuICBmdWxsd2lkZTogXCJbXFx1RkYxMC1cXHVGRjE5XVwiLFxuICBndWpyOiBcIltcXHUwQUU2LVxcdTBBRUZdXCIsXG4gIGhhbmlkZWM6IFwiW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV1cIixcbiAga2htcjogXCJbXFx1MTdFMC1cXHUxN0U5XVwiLFxuICBrbmRhOiBcIltcXHUwQ0U2LVxcdTBDRUZdXCIsXG4gIGxhb286IFwiW1xcdTBFRDAtXFx1MEVEOV1cIixcbiAgbGltYjogXCJbXFx1MTk0Ni1cXHUxOTRGXVwiLFxuICBtbHltOiBcIltcXHUwRDY2LVxcdTBENkZdXCIsXG4gIG1vbmc6IFwiW1xcdTE4MTAtXFx1MTgxOV1cIixcbiAgbXltcjogXCJbXFx1MTA0MC1cXHUxMDQ5XVwiLFxuICBvcnlhOiBcIltcXHUwQjY2LVxcdTBCNkZdXCIsXG4gIHRhbWxkZWM6IFwiW1xcdTBCRTYtXFx1MEJFRl1cIixcbiAgdGVsdTogXCJbXFx1MEM2Ni1cXHUwQzZGXVwiLFxuICB0aGFpOiBcIltcXHUwRTUwLVxcdTBFNTldXCIsXG4gIHRpYnQ6IFwiW1xcdTBGMjAtXFx1MEYyOV1cIixcbiAgbGF0bjogXCJcXFxcZFwiLFxufTtcblxuY29uc3QgbnVtYmVyaW5nU3lzdGVtc1VURjE2ID0ge1xuICBhcmFiOiBbMTYzMiwgMTY0MV0sXG4gIGFyYWJleHQ6IFsxNzc2LCAxNzg1XSxcbiAgYmFsaTogWzY5OTIsIDcwMDFdLFxuICBiZW5nOiBbMjUzNCwgMjU0M10sXG4gIGRldmE6IFsyNDA2LCAyNDE1XSxcbiAgZnVsbHdpZGU6IFs2NTI5NiwgNjUzMDNdLFxuICBndWpyOiBbMjc5MCwgMjc5OV0sXG4gIGtobXI6IFs2MTEyLCA2MTIxXSxcbiAga25kYTogWzMzMDIsIDMzMTFdLFxuICBsYW9vOiBbMzc5MiwgMzgwMV0sXG4gIGxpbWI6IFs2NDcwLCA2NDc5XSxcbiAgbWx5bTogWzM0MzAsIDM0MzldLFxuICBtb25nOiBbNjE2MCwgNjE2OV0sXG4gIG15bXI6IFs0MTYwLCA0MTY5XSxcbiAgb3J5YTogWzI5MTgsIDI5MjddLFxuICB0YW1sZGVjOiBbMzA0NiwgMzA1NV0sXG4gIHRlbHU6IFszMTc0LCAzMTgzXSxcbiAgdGhhaTogWzM2NjQsIDM2NzNdLFxuICB0aWJ0OiBbMzg3MiwgMzg4MV0sXG59O1xuXG5jb25zdCBoYW5pZGVjQ2hhcnMgPSBudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMucmVwbGFjZSgvW1xcW3xcXF1dL2csIFwiXCIpLnNwbGl0KFwiXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEaWdpdHMoc3RyKSB7XG4gIGxldCB2YWx1ZSA9IHBhcnNlSW50KHN0ciwgMTApO1xuICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgdmFsdWUgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgIGlmIChzdHJbaV0uc2VhcmNoKG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlICs9IGhhbmlkZWNDaGFycy5pbmRleE9mKHN0cltpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBudW1iZXJpbmdTeXN0ZW1zVVRGMTYpIHtcbiAgICAgICAgICBjb25zdCBbbWluLCBtYXhdID0gbnVtYmVyaW5nU3lzdGVtc1VURjE2W2tleV07XG4gICAgICAgICAgaWYgKGNvZGUgPj0gbWluICYmIGNvZGUgPD0gbWF4KSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBjb2RlIC0gbWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLy8gY2FjaGUgb2Yge251bWJlcmluZ1N5c3RlbToge2FwcGVuZDogcmVnZXh9fVxuY29uc3QgZGlnaXRSZWdleENhY2hlID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RGlnaXRSZWdleENhY2hlKCkge1xuICBkaWdpdFJlZ2V4Q2FjaGUuY2xlYXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZ2l0UmVnZXgoeyBudW1iZXJpbmdTeXN0ZW0gfSwgYXBwZW5kID0gXCJcIikge1xuICBjb25zdCBucyA9IG51bWJlcmluZ1N5c3RlbSB8fCBcImxhdG5cIjtcblxuICBsZXQgYXBwZW5kQ2FjaGUgPSBkaWdpdFJlZ2V4Q2FjaGUuZ2V0KG5zKTtcbiAgaWYgKGFwcGVuZENhY2hlID09PSB1bmRlZmluZWQpIHtcbiAgICBhcHBlbmRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICBkaWdpdFJlZ2V4Q2FjaGUuc2V0KG5zLCBhcHBlbmRDYWNoZSk7XG4gIH1cbiAgbGV0IHJlZ2V4ID0gYXBwZW5kQ2FjaGUuZ2V0KGFwcGVuZCk7XG4gIGlmIChyZWdleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKGAke251bWJlcmluZ1N5c3RlbXNbbnNdfSR7YXBwZW5kfWApO1xuICAgIGFwcGVuZENhY2hlLnNldChhcHBlbmQsIHJlZ2V4KTtcbiAgfVxuXG4gIHJldHVybiByZWdleDtcbn1cbiIsICJpbXBvcnQgU3lzdGVtWm9uZSBmcm9tIFwiLi96b25lcy9zeXN0ZW1ab25lLmpzXCI7XG5pbXBvcnQgSUFOQVpvbmUgZnJvbSBcIi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuXG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuaW1wb3J0IHsgdmFsaWRhdGVXZWVrU2V0dGluZ3MgfSBmcm9tIFwiLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCB7IHJlc2V0RGlnaXRSZWdleENhY2hlIH0gZnJvbSBcIi4vaW1wbC9kaWdpdHMuanNcIjtcblxubGV0IG5vdyA9ICgpID0+IERhdGUubm93KCksXG4gIGRlZmF1bHRab25lID0gXCJzeXN0ZW1cIixcbiAgZGVmYXVsdExvY2FsZSA9IG51bGwsXG4gIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudWxsLFxuICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBudWxsLFxuICB0d29EaWdpdEN1dG9mZlllYXIgPSA2MCxcbiAgdGhyb3dPbkludmFsaWQsXG4gIGRlZmF1bHRXZWVrU2V0dGluZ3MgPSBudWxsO1xuXG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgbm93KCkge1xuICAgIHJldHVybiBub3c7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBudW1iZXIsIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYW4gRXBvY2ggbWlsbGlzZWNvbmQgY291bnRcbiAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IDAgLy8gYWx3YXlzIHByZXRlbmQgaXQncyBKYW4gMSwgMTk3MCBhdCBtaWRuaWdodCBpbiBVVEMgdGltZVxuICAgKi9cbiAgc3RhdGljIHNldCBub3cobikge1xuICAgIG5vdyA9IG47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0Wm9uZSh6b25lKSB7XG4gICAgZGVmYXVsdFpvbmUgPSB6b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IGN1cnJlbnRseSB1c2VkIHRvIGNyZWF0ZSBEYXRlVGltZXMuIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxuICAgKiBAdHlwZSB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFpvbmUoKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoZGVmYXVsdFpvbmUsIFN5c3RlbVpvbmUuaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0TG9jYWxlKGxvY2FsZSkge1xuICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbShudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKG91dHB1dENhbGVuZGFyKSB7XG4gICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge09iamVjdH0gV2Vla1NldHRpbmdzXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmaXJzdERheVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gbWluaW1hbERheXNcbiAgICogQHByb3BlcnR5IHtudW1iZXJbXX0gd2Vla2VuZFxuICAgKi9cblxuICAvKipcbiAgICogQHJldHVybiB7V2Vla1NldHRpbmdzfG51bGx9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRXZWVrU2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRXZWVrU2V0dGluZ3M7XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHQgbG9jYWxlIHdlZWsgc2V0dGluZ3MsIGkuZS4gdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrLCB0aGUgd2Vla2VuZCBhbmRcbiAgICogaG93IG1hbnkgZGF5cyBhcmUgcmVxdWlyZWQgaW4gdGhlIGZpcnN0IHdlZWsgb2YgYSB5ZWFyLlxuICAgKiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1dlZWtTZXR0aW5nc3xudWxsfSB3ZWVrU2V0dGluZ3NcbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdFdlZWtTZXR0aW5ncyh3ZWVrU2V0dGluZ3MpIHtcbiAgICBkZWZhdWx0V2Vla1NldHRpbmdzID0gdmFsaWRhdGVXZWVrU2V0dGluZ3Mod2Vla1NldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1dG9mZiB5ZWFyIGZvciB3aGV0aGVyIGEgMi1kaWdpdCB5ZWFyIHN0cmluZyBpcyBpbnRlcnByZXRlZCBpbiB0aGUgY3VycmVudCBvciBwcmV2aW91cyBjZW50dXJ5LiBOdW1iZXJzIGhpZ2hlciB0aGFuIHRoZSBjdXRvZmYgd2lsbCBiZSBjb25zaWRlcmVkIHRvIG1lYW4gMTl4eCBhbmQgbnVtYmVycyBsb3dlciBvciBlcXVhbCB0byB0aGUgY3V0b2ZmIHdpbGwgYmUgY29uc2lkZXJlZCAyMHh4LlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGdldCB0d29EaWdpdEN1dG9mZlllYXIoKSB7XG4gICAgcmV0dXJuIHR3b0RpZ2l0Q3V0b2ZmWWVhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1dG9mZiB5ZWFyIGZvciB3aGV0aGVyIGEgMi1kaWdpdCB5ZWFyIHN0cmluZyBpcyBpbnRlcnByZXRlZCBpbiB0aGUgY3VycmVudCBvciBwcmV2aW91cyBjZW50dXJ5LiBOdW1iZXJzIGhpZ2hlciB0aGFuIHRoZSBjdXRvZmYgd2lsbCBiZSBjb25zaWRlcmVkIHRvIG1lYW4gMTl4eCBhbmQgbnVtYmVycyBsb3dlciBvciBlcXVhbCB0byB0aGUgY3V0b2ZmIHdpbGwgYmUgY29uc2lkZXJlZCAyMHh4LlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPSAwIC8vIGFsbCAneXknIGFyZSBpbnRlcnByZXRlZCBhcyAyMHRoIGNlbnR1cnlcbiAgICogQGV4YW1wbGUgU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID0gOTkgLy8gYWxsICd5eScgYXJlIGludGVycHJldGVkIGFzIDIxc3QgY2VudHVyeVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPSA1MCAvLyAnNDknIC0+IDIwNDk7ICc1MCcgLT4gMTk1MFxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy50d29EaWdpdEN1dG9mZlllYXIgPSAxOTUwIC8vIGludGVycHJldGVkIGFzIDUwXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDIwNTAgLy8gQUxTTyBpbnRlcnByZXRlZCBhcyA1MFxuICAgKi9cbiAgc3RhdGljIHNldCB0d29EaWdpdEN1dG9mZlllYXIoY3V0b2ZmWWVhcikge1xuICAgIHR3b0RpZ2l0Q3V0b2ZmWWVhciA9IGN1dG9mZlllYXIgJSAxMDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGdldCB0aHJvd09uSW52YWxpZCgpIHtcbiAgICByZXR1cm4gdGhyb3dPbkludmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIHNldCB0aHJvd09uSW52YWxpZCh0KSB7XG4gICAgdGhyb3dPbkludmFsaWQgPSB0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IEx1eG9uJ3MgZ2xvYmFsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc3RhdGljIHJlc2V0Q2FjaGVzKCkge1xuICAgIExvY2FsZS5yZXNldENhY2hlKCk7XG4gICAgSUFOQVpvbmUucmVzZXRDYWNoZSgpO1xuICAgIERhdGVUaW1lLnJlc2V0Q2FjaGUoKTtcbiAgICByZXNldERpZ2l0UmVnZXhDYWNoZSgpO1xuICB9XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZCB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLmV4cGxhbmF0aW9uID0gZXhwbGFuYXRpb247XG4gIH1cblxuICB0b01lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZXhwbGFuYXRpb24pIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnJlYXNvbn06ICR7dGhpcy5leHBsYW5hdGlvbn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgaW50ZWdlckJldHdlZW4sXG4gIGlzTGVhcFllYXIsXG4gIHRpbWVPYmplY3QsXG4gIGRheXNJblllYXIsXG4gIGRheXNJbk1vbnRoLFxuICB3ZWVrc0luV2Vla1llYXIsXG4gIGlzSW50ZWdlcixcbiAgaXNVbmRlZmluZWQsXG59IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ludmFsaWQuanNcIjtcbmltcG9ydCB7IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuXG5jb25zdCBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSxcbiAgbGVhcExhZGRlciA9IFswLCAzMSwgNjAsIDkxLCAxMjEsIDE1MiwgMTgyLCAyMTMsIDI0NCwgMjc0LCAzMDUsIDMzNV07XG5cbmZ1bmN0aW9uIHVuaXRPdXRPZlJhbmdlKHVuaXQsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcbiAgICBcInVuaXQgb3V0IG9mIHJhbmdlXCIsXG4gICAgYHlvdSBzcGVjaWZpZWQgJHt2YWx1ZX0gKG9mIHR5cGUgJHt0eXBlb2YgdmFsdWV9KSBhcyBhICR7dW5pdH0sIHdoaWNoIGlzIGludmFsaWRgXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSkge1xuICBjb25zdCBkID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggLSAxLCBkYXkpKTtcblxuICBpZiAoeWVhciA8IDEwMCAmJiB5ZWFyID49IDApIHtcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xuICB9XG5cbiAgY29uc3QganMgPSBkLmdldFVUQ0RheSgpO1xuXG4gIHJldHVybiBqcyA9PT0gMCA/IDcgOiBqcztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSB7XG4gIGNvbnN0IHRhYmxlID0gaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyLFxuICAgIG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleCgoaSkgPT4gaSA8IG9yZGluYWwpLFxuICAgIGRheSA9IG9yZGluYWwgLSB0YWJsZVttb250aDBdO1xuICByZXR1cm4geyBtb250aDogbW9udGgwICsgMSwgZGF5IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc29XZWVrZGF5VG9Mb2NhbChpc29XZWVrZGF5LCBzdGFydE9mV2Vlaykge1xuICByZXR1cm4gKChpc29XZWVrZGF5IC0gc3RhcnRPZldlZWsgKyA3KSAlIDcpICsgMTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBncmVnb3JpYW5Ub1dlZWsoZ3JlZ09iaiwgbWluRGF5c0luRmlyc3RXZWVrID0gNCwgc3RhcnRPZldlZWsgPSAxKSB7XG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ09iaixcbiAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSksXG4gICAgd2Vla2RheSA9IGlzb1dlZWtkYXlUb0xvY2FsKGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSwgc3RhcnRPZldlZWspO1xuXG4gIGxldCB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxNCAtIG1pbkRheXNJbkZpcnN0V2VlaykgLyA3KSxcbiAgICB3ZWVrWWVhcjtcblxuICBpZiAod2Vla051bWJlciA8IDEpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgLSAxO1xuICAgIHdlZWtOdW1iZXIgPSB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIsIG1pbkRheXNJbkZpcnN0V2Vlaywgc3RhcnRPZldlZWspO1xuICB9IGVsc2UgaWYgKHdlZWtOdW1iZXIgPiB3ZWVrc0luV2Vla1llYXIoeWVhciwgbWluRGF5c0luRmlyc3RXZWVrLCBzdGFydE9mV2VlaykpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xuICAgIHdlZWtOdW1iZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIHdlZWtZZWFyID0geWVhcjtcbiAgfVxuXG4gIHJldHVybiB7IHdlZWtZZWFyLCB3ZWVrTnVtYmVyLCB3ZWVrZGF5LCAuLi50aW1lT2JqZWN0KGdyZWdPYmopIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEsIG1pbkRheXNJbkZpcnN0V2VlayA9IDQsIHN0YXJ0T2ZXZWVrID0gMSkge1xuICBjb25zdCB7IHdlZWtZZWFyLCB3ZWVrTnVtYmVyLCB3ZWVrZGF5IH0gPSB3ZWVrRGF0YSxcbiAgICB3ZWVrZGF5T2ZKYW40ID0gaXNvV2Vla2RheVRvTG9jYWwoZGF5T2ZXZWVrKHdlZWtZZWFyLCAxLCBtaW5EYXlzSW5GaXJzdFdlZWspLCBzdGFydE9mV2VlayksXG4gICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuXG4gIGxldCBvcmRpbmFsID0gd2Vla051bWJlciAqIDcgKyB3ZWVrZGF5IC0gd2Vla2RheU9mSmFuNCAtIDcgKyBtaW5EYXlzSW5GaXJzdFdlZWssXG4gICAgeWVhcjtcblxuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qod2Vla0RhdGEpIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBncmVnb3JpYW5Ub09yZGluYWwoZ3JlZ0RhdGEpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnRGF0YTtcbiAgY29uc3Qgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpO1xuICByZXR1cm4geyB5ZWFyLCBvcmRpbmFsLCAuLi50aW1lT2JqZWN0KGdyZWdEYXRhKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbFRvR3JlZ29yaWFuKG9yZGluYWxEYXRhKSB7XG4gIGNvbnN0IHsgeWVhciwgb3JkaW5hbCB9ID0gb3JkaW5hbERhdGE7XG4gIGNvbnN0IHsgbW9udGgsIGRheSB9ID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKTtcbiAgcmV0dXJuIHsgeWVhciwgbW9udGgsIGRheSwgLi4udGltZU9iamVjdChvcmRpbmFsRGF0YSkgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBsb2NhbCB3ZWVrIHVuaXRzIGxpa2UgbG9jYWxXZWVrZGF5IGFyZSB1c2VkIGluIG9iai5cbiAqIElmIHNvLCB2YWxpZGF0ZXMgdGhhdCB0aGV5IGFyZSBub3QgbWl4ZWQgd2l0aCBJU08gd2VlayB1bml0cyBhbmQgdGhlbiBjb3BpZXMgdGhlbSB0byB0aGUgbm9ybWFsIHdlZWsgdW5pdCBwcm9wZXJ0aWVzLlxuICogTW9kaWZpZXMgb2JqIGluLXBsYWNlIVxuICogQHBhcmFtIG9iaiB0aGUgb2JqZWN0IHZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlc0xvY2FsV2Vla1ZhbHVlcyhvYmosIGxvYykge1xuICBjb25zdCBoYXNMb2NhbGVXZWVrRGF0YSA9XG4gICAgIWlzVW5kZWZpbmVkKG9iai5sb2NhbFdlZWtkYXkpIHx8XG4gICAgIWlzVW5kZWZpbmVkKG9iai5sb2NhbFdlZWtOdW1iZXIpIHx8XG4gICAgIWlzVW5kZWZpbmVkKG9iai5sb2NhbFdlZWtZZWFyKTtcbiAgaWYgKGhhc0xvY2FsZVdlZWtEYXRhKSB7XG4gICAgY29uc3QgaGFzSXNvV2Vla0RhdGEgPVxuICAgICAgIWlzVW5kZWZpbmVkKG9iai53ZWVrZGF5KSB8fCAhaXNVbmRlZmluZWQob2JqLndlZWtOdW1iZXIpIHx8ICFpc1VuZGVmaW5lZChvYmoud2Vla1llYXIpO1xuXG4gICAgaWYgKGhhc0lzb1dlZWtEYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2Fubm90IG1peCBsb2NhbGUtYmFzZWQgd2VlayBmaWVsZHMgd2l0aCBJU08tYmFzZWQgd2VlayBmaWVsZHNcIlxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChvYmoubG9jYWxXZWVrZGF5KSkgb2JqLndlZWtkYXkgPSBvYmoubG9jYWxXZWVrZGF5O1xuICAgIGlmICghaXNVbmRlZmluZWQob2JqLmxvY2FsV2Vla051bWJlcikpIG9iai53ZWVrTnVtYmVyID0gb2JqLmxvY2FsV2Vla051bWJlcjtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9iai5sb2NhbFdlZWtZZWFyKSkgb2JqLndlZWtZZWFyID0gb2JqLmxvY2FsV2Vla1llYXI7XG4gICAgZGVsZXRlIG9iai5sb2NhbFdlZWtkYXk7XG4gICAgZGVsZXRlIG9iai5sb2NhbFdlZWtOdW1iZXI7XG4gICAgZGVsZXRlIG9iai5sb2NhbFdlZWtZZWFyO1xuICAgIHJldHVybiB7XG4gICAgICBtaW5EYXlzSW5GaXJzdFdlZWs6IGxvYy5nZXRNaW5EYXlzSW5GaXJzdFdlZWsoKSxcbiAgICAgIHN0YXJ0T2ZXZWVrOiBsb2MuZ2V0U3RhcnRPZldlZWsoKSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IG1pbkRheXNJbkZpcnN0V2VlazogNCwgc3RhcnRPZldlZWs6IDEgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZFdlZWtEYXRhKG9iaiwgbWluRGF5c0luRmlyc3RXZWVrID0gNCwgc3RhcnRPZldlZWsgPSAxKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoud2Vla1llYXIpLFxuICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKFxuICAgICAgb2JqLndlZWtOdW1iZXIsXG4gICAgICAxLFxuICAgICAgd2Vla3NJbldlZWtZZWFyKG9iai53ZWVrWWVhciwgbWluRGF5c0luRmlyc3RXZWVrLCBzdGFydE9mV2VlaylcbiAgICApLFxuICAgIHZhbGlkV2Vla2RheSA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrZGF5LCAxLCA3KTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtZZWFyXCIsIG9iai53ZWVrWWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vlaykge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtcIiwgb2JqLndlZWtOdW1iZXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWtkYXkpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrZGF5XCIsIG9iai53ZWVrZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRPcmRpbmFsRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE9yZGluYWwgPSBpbnRlZ2VyQmV0d2VlbihvYmoub3JkaW5hbCwgMSwgZGF5c0luWWVhcihvYmoueWVhcikpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkT3JkaW5hbCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm9yZGluYWxcIiwgb2JqLm9yZGluYWwpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksXG4gICAgdmFsaWRNb250aCA9IGludGVnZXJCZXR3ZWVuKG9iai5tb250aCwgMSwgMTIpLFxuICAgIHZhbGlkRGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLmRheSwgMSwgZGF5c0luTW9udGgob2JqLnllYXIsIG9iai5tb250aCkpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTW9udGgpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtb250aFwiLCBvYmoubW9udGgpO1xuICB9IGVsc2UgaWYgKCF2YWxpZERheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImRheVwiLCBvYmouZGF5KTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludmFsaWRUaW1lRGF0YShvYmopIHtcbiAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmQgfSA9IG9iajtcbiAgY29uc3QgdmFsaWRIb3VyID1cbiAgICAgIGludGVnZXJCZXR3ZWVuKGhvdXIsIDAsIDIzKSB8fFxuICAgICAgKGhvdXIgPT09IDI0ICYmIG1pbnV0ZSA9PT0gMCAmJiBzZWNvbmQgPT09IDAgJiYgbWlsbGlzZWNvbmQgPT09IDApLFxuICAgIHZhbGlkTWludXRlID0gaW50ZWdlckJldHdlZW4obWludXRlLCAwLCA1OSksXG4gICAgdmFsaWRTZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihzZWNvbmQsIDAsIDU5KSxcbiAgICB2YWxpZE1pbGxpc2Vjb25kID0gaW50ZWdlckJldHdlZW4obWlsbGlzZWNvbmQsIDAsIDk5OSk7XG5cbiAgaWYgKCF2YWxpZEhvdXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJob3VyXCIsIGhvdXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1pbnV0ZSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbnV0ZVwiLCBtaW51dGUpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInNlY29uZFwiLCBzZWNvbmQpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1pbGxpc2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuIiwgIi8qXG4gIFRoaXMgaXMganVzdCBhIGp1bmsgZHJhd2VyLCBjb250YWluaW5nIGFueXRoaW5nIHVzZWQgYWNyb3NzIG11bHRpcGxlIGNsYXNzZXMuXG4gIEJlY2F1c2UgTHV4b24gaXMgc21hbGwoaXNoKSwgdGhpcyBzaG91bGQgc3RheSBzbWFsbCBhbmQgd2Ugd29uJ3Qgd29ycnkgYWJvdXQgc3BsaXR0aW5nXG4gIGl0IHVwIGludG8sIHNheSwgcGFyc2luZ1V0aWwuanMgYW5kIGJhc2ljVXRpbC5qcyBhbmQgc28gb24uIEJ1dCB0aGV5IGFyZSBkaXZpZGVkIHVwIGJ5IGZlYXR1cmUgYXJlYS5cbiovXG5cbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgZGF5T2ZXZWVrLCBpc29XZWVrZGF5VG9Mb2NhbCB9IGZyb20gXCIuL2NvbnZlcnNpb25zLmpzXCI7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG4vLyBUWVBFU1xuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwidW5kZWZpbmVkXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcihvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJudW1iZXJcIiAmJiBvICUgMSA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInN0cmluZ1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gXCJbb2JqZWN0IERhdGVdXCI7XG59XG5cbi8vIENBUEFCSUxJVElFU1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzUmVsYXRpdmUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSBcInVuZGVmaW5lZFwiICYmICEhSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0xvY2FsZVdlZWtJbmZvKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgSW50bCAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgISFJbnRsLkxvY2FsZSAmJlxuICAgICAgKFwid2Vla0luZm9cIiBpbiBJbnRsLkxvY2FsZS5wcm90b3R5cGUgfHwgXCJnZXRXZWVrSW5mb1wiIGluIEludGwuTG9jYWxlLnByb3RvdHlwZSlcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIE9CSkVDVFMgQU5EIEFSUkFZU1xuXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVBcnJheSh0aGluZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGluZykgPyB0aGluZyA6IFt0aGluZ107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiZXN0QnkoYXJyLCBieSwgY29tcGFyZSkge1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGJlc3QsIG5leHQpID0+IHtcbiAgICBjb25zdCBwYWlyID0gW2J5KG5leHQpLCBuZXh0XTtcbiAgICBpZiAoIWJlc3QpIHtcbiAgICAgIHJldHVybiBwYWlyO1xuICAgIH0gZWxzZSBpZiAoY29tcGFyZShiZXN0WzBdLCBwYWlyWzBdKSA9PT0gYmVzdFswXSkge1xuICAgICAgcmV0dXJuIGJlc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYWlyO1xuICAgIH1cbiAgfSwgbnVsbClbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKGEsIGspID0+IHtcbiAgICBhW2tdID0gb2JqW2tdO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVXZWVrU2V0dGluZ3Moc2V0dGluZ3MpIHtcbiAgaWYgKHNldHRpbmdzID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc2V0dGluZ3MgIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJXZWVrIHNldHRpbmdzIG11c3QgYmUgYW4gb2JqZWN0XCIpO1xuICB9IGVsc2Uge1xuICAgIGlmIChcbiAgICAgICFpbnRlZ2VyQmV0d2VlbihzZXR0aW5ncy5maXJzdERheSwgMSwgNykgfHxcbiAgICAgICFpbnRlZ2VyQmV0d2VlbihzZXR0aW5ncy5taW5pbWFsRGF5cywgMSwgNykgfHxcbiAgICAgICFBcnJheS5pc0FycmF5KHNldHRpbmdzLndlZWtlbmQpIHx8XG4gICAgICBzZXR0aW5ncy53ZWVrZW5kLnNvbWUoKHYpID0+ICFpbnRlZ2VyQmV0d2Vlbih2LCAxLCA3KSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIkludmFsaWQgd2VlayBzZXR0aW5nc1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0RGF5OiBzZXR0aW5ncy5maXJzdERheSxcbiAgICAgIG1pbmltYWxEYXlzOiBzZXR0aW5ncy5taW5pbWFsRGF5cyxcbiAgICAgIHdlZWtlbmQ6IEFycmF5LmZyb20oc2V0dGluZ3Mud2Vla2VuZCksXG4gICAgfTtcbiAgfVxufVxuXG4vLyBOVU1CRVJTIEFORCBTVFJJTkdTXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlZ2VyQmV0d2Vlbih0aGluZywgYm90dG9tLCB0b3ApIHtcbiAgcmV0dXJuIGlzSW50ZWdlcih0aGluZykgJiYgdGhpbmcgPj0gYm90dG9tICYmIHRoaW5nIDw9IHRvcDtcbn1cblxuLy8geCAlIG4gYnV0IHRha2VzIHRoZSBzaWduIG9mIG4gaW5zdGVhZCBvZiB4XG5leHBvcnQgZnVuY3Rpb24gZmxvb3JNb2QoeCwgbikge1xuICByZXR1cm4geCAtIG4gKiBNYXRoLmZsb29yKHggLyBuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZFN0YXJ0KGlucHV0LCBuID0gMikge1xuICBjb25zdCBpc05lZyA9IGlucHV0IDwgMDtcbiAgbGV0IHBhZGRlZDtcbiAgaWYgKGlzTmVnKSB7XG4gICAgcGFkZGVkID0gXCItXCIgKyAoXCJcIiArIC1pbnB1dCkucGFkU3RhcnQobiwgXCIwXCIpO1xuICB9IGVsc2Uge1xuICAgIHBhZGRlZCA9IChcIlwiICsgaW5wdXQpLnBhZFN0YXJ0KG4sIFwiMFwiKTtcbiAgfVxuICByZXR1cm4gcGFkZGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nLCAxMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRmxvYXRpbmcoc3RyaW5nKSB7XG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWlsbGlzKGZyYWN0aW9uKSB7XG4gIC8vIFJldHVybiB1bmRlZmluZWQgKGluc3RlYWQgb2YgMCkgaW4gdGhlc2UgY2FzZXMsIHdoZXJlIGZyYWN0aW9uIGlzIG5vdCBzZXRcbiAgaWYgKGlzVW5kZWZpbmVkKGZyYWN0aW9uKSB8fCBmcmFjdGlvbiA9PT0gbnVsbCB8fCBmcmFjdGlvbiA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZiA9IHBhcnNlRmxvYXQoXCIwLlwiICsgZnJhY3Rpb24pICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihmKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUbyhudW1iZXIsIGRpZ2l0cywgcm91bmRpbmcgPSBcInJvdW5kXCIpIHtcbiAgY29uc3QgZmFjdG9yID0gMTAgKiogZGlnaXRzO1xuICBzd2l0Y2ggKHJvdW5kaW5nKSB7XG4gICAgY2FzZSBcImV4cGFuZFwiOlxuICAgICAgcmV0dXJuIG51bWJlciA+IDBcbiAgICAgICAgPyBNYXRoLmNlaWwobnVtYmVyICogZmFjdG9yKSAvIGZhY3RvclxuICAgICAgICA6IE1hdGguZmxvb3IobnVtYmVyICogZmFjdG9yKSAvIGZhY3RvcjtcbiAgICBjYXNlIFwidHJ1bmNcIjpcbiAgICAgIHJldHVybiBNYXRoLnRydW5jKG51bWJlciAqIGZhY3RvcikgLyBmYWN0b3I7XG4gICAgY2FzZSBcInJvdW5kXCI6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiBmYWN0b3IpIC8gZmFjdG9yO1xuICAgIGNhc2UgXCJmbG9vclwiOlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyICogZmFjdG9yKSAvIGZhY3RvcjtcbiAgICBjYXNlIFwiY2VpbFwiOlxuICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIgKiBmYWN0b3IpIC8gZmFjdG9yO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVmFsdWUgcm91bmRpbmcgJHtyb3VuZGluZ30gaXMgb3V0IG9mIHJhbmdlYCk7XG4gIH1cbn1cblxuLy8gREFURSBCQVNJQ1NcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICBjb25zdCBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSxcbiAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcbiAgfVxufVxuXG4vLyBjb252ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgbG9jYWwgdGltZXN0YW1wIChlcG9jaCwgYnV0IHdpdGggdGhlIG9mZnNldCBiYWtlZCBpbilcbmV4cG9ydCBmdW5jdGlvbiBvYmpUb0xvY2FsVFMob2JqKSB7XG4gIGxldCBkID0gRGF0ZS5VVEMoXG4gICAgb2JqLnllYXIsXG4gICAgb2JqLm1vbnRoIC0gMSxcbiAgICBvYmouZGF5LFxuICAgIG9iai5ob3VyLFxuICAgIG9iai5taW51dGUsXG4gICAgb2JqLnNlY29uZCxcbiAgICBvYmoubWlsbGlzZWNvbmRcbiAgKTtcblxuICAvLyBmb3IgbGVnYWN5IHJlYXNvbnMsIHllYXJzIGJldHdlZW4gMCBhbmQgOTkgYXJlIGludGVycHJldGVkIGFzIDE5WFg7IHJldmVydCB0aGF0XG4gIGlmIChvYmoueWVhciA8IDEwMCAmJiBvYmoueWVhciA+PSAwKSB7XG4gICAgZCA9IG5ldyBEYXRlKGQpO1xuICAgIC8vIHNldCB0aGUgbW9udGggYW5kIGRheSBhZ2FpbiwgdGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSB5ZWFyIDIwMDAgaXMgYSBsZWFwIHllYXIsIGJ1dCB5ZWFyIDEwMCBpcyBub3RcbiAgICAvLyBzbyBpZiBvYmoueWVhciBpcyBpbiA5OSwgYnV0IG9iai5kYXkgbWFrZXMgaXQgcm9sbCBvdmVyIGludG8geWVhciAxMDAsXG4gICAgLy8gdGhlIGNhbGN1bGF0aW9ucyBkb25lIGJ5IERhdGUuVVRDIGFyZSB1c2luZyB5ZWFyIDIwMDAgLSB3aGljaCBpcyBpbmNvcnJlY3RcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKG9iai55ZWFyLCBvYmoubW9udGggLSAxLCBvYmouZGF5KTtcbiAgfVxuICByZXR1cm4gK2Q7XG59XG5cbi8vIGFkYXB0ZWQgZnJvbSBtb21lbnQuanM6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2Jsb2IvMDAwYWMxODAwZTYyMGY3NzBmNGViMzFiNWFlOTA4ZjYxNjdiMGFiMi9zcmMvbGliL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMuanNcbmZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyLCBtaW5EYXlzSW5GaXJzdFdlZWssIHN0YXJ0T2ZXZWVrKSB7XG4gIGNvbnN0IGZ3ZGx3ID0gaXNvV2Vla2RheVRvTG9jYWwoZGF5T2ZXZWVrKHllYXIsIDEsIG1pbkRheXNJbkZpcnN0V2VlayksIHN0YXJ0T2ZXZWVrKTtcbiAgcmV0dXJuIC1md2RsdyArIG1pbkRheXNJbkZpcnN0V2VlayAtIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIsIG1pbkRheXNJbkZpcnN0V2VlayA9IDQsIHN0YXJ0T2ZXZWVrID0gMSkge1xuICBjb25zdCB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHdlZWtZZWFyLCBtaW5EYXlzSW5GaXJzdFdlZWssIHN0YXJ0T2ZXZWVrKTtcbiAgY29uc3Qgd2Vla09mZnNldE5leHQgPSBmaXJzdFdlZWtPZmZzZXQod2Vla1llYXIgKyAxLCBtaW5EYXlzSW5GaXJzdFdlZWssIHN0YXJ0T2ZXZWVrKTtcbiAgcmV0dXJuIChkYXlzSW5ZZWFyKHdlZWtZZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhcikge1xuICBpZiAoeWVhciA+IDk5KSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSByZXR1cm4geWVhciA+IFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA/IDE5MDAgKyB5ZWFyIDogMjAwMCArIHllYXI7XG59XG5cbi8vIFBBUlNJTkdcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWm9uZUluZm8odHMsIG9mZnNldEZvcm1hdCwgbG9jYWxlLCB0aW1lWm9uZSA9IG51bGwpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRzKSxcbiAgICBpbnRsT3B0cyA9IHtcbiAgICAgIGhvdXJDeWNsZTogXCJoMjNcIixcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICB9O1xuXG4gIGlmICh0aW1lWm9uZSkge1xuICAgIGludGxPcHRzLnRpbWVab25lID0gdGltZVpvbmU7XG4gIH1cblxuICBjb25zdCBtb2RpZmllZCA9IHsgdGltZVpvbmVOYW1lOiBvZmZzZXRGb3JtYXQsIC4uLmludGxPcHRzIH07XG5cbiAgY29uc3QgcGFyc2VkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBtb2RpZmllZClcbiAgICAuZm9ybWF0VG9QYXJ0cyhkYXRlKVxuICAgIC5maW5kKChtKSA9PiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aW1lem9uZW5hbWVcIik7XG4gIHJldHVybiBwYXJzZWQgPyBwYXJzZWQudmFsdWUgOiBudWxsO1xufVxuXG4vLyBzaWduZWRPZmZzZXQoJy01JywgJzMwJykgLT4gLTMzMFxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpIHtcbiAgbGV0IG9mZkhvdXIgPSBwYXJzZUludChvZmZIb3VyU3RyLCAxMCk7XG5cbiAgLy8gZG9uJ3QgfHwgdGhpcyBiZWNhdXNlIHdlIHdhbnQgdG8gcHJlc2VydmUgLTBcbiAgaWYgKE51bWJlci5pc05hTihvZmZIb3VyKSkge1xuICAgIG9mZkhvdXIgPSAwO1xuICB9XG5cbiAgY29uc3Qgb2ZmTWluID0gcGFyc2VJbnQob2ZmTWludXRlU3RyLCAxMCkgfHwgMCxcbiAgICBvZmZNaW5TaWduZWQgPSBvZmZIb3VyIDwgMCB8fCBPYmplY3QuaXMob2ZmSG91ciwgLTApID8gLW9mZk1pbiA6IG9mZk1pbjtcbiAgcmV0dXJuIG9mZkhvdXIgKiA2MCArIG9mZk1pblNpZ25lZDtcbn1cblxuLy8gQ09FUkNJT05cblxuZXhwb3J0IGZ1bmN0aW9uIGFzTnVtYmVyKHZhbHVlKSB7XG4gIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiIHx8IHZhbHVlID09PSBcIlwiIHx8ICFOdW1iZXIuaXNGaW5pdGUobnVtZXJpY1ZhbHVlKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoYEludmFsaWQgdW5pdCB2YWx1ZSAke3ZhbHVlfWApO1xuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xuICBjb25zdCBub3JtYWxpemVkID0ge307XG4gIGZvciAoY29uc3QgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgY29uc3QgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRPZmZzZXQob2Zmc2V0LCBmb3JtYXQpIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAvIDYwKSksXG4gICAgbWludXRlcyA9IE1hdGgudHJ1bmMoTWF0aC5hYnMob2Zmc2V0ICUgNjApKSxcbiAgICBzaWduID0gb2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuXG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke3BhZFN0YXJ0KGhvdXJzLCAyKX06JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7aG91cnN9JHttaW51dGVzID4gMCA/IGA6JHttaW51dGVzfWAgOiBcIlwifWA7XG4gICAgY2FzZSBcInRlY2hpZVwiOlxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVmFsdWUgZm9ybWF0ICR7Zm9ybWF0fSBpcyBvdXQgb2YgcmFuZ2UgZm9yIHByb3BlcnR5IGZvcm1hdGApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lT2JqZWN0KG9iaikge1xuICByZXR1cm4gcGljayhvYmosIFtcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSk7XG59XG4iLCAiaW1wb3J0ICogYXMgRm9ybWF0cyBmcm9tIFwiLi9mb3JtYXRzLmpzXCI7XG5pbXBvcnQgeyBwaWNrIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIE9iamVjdC5rZXlzKG9iaikuc29ydCgpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBjb25zdCBtb250aHNMb25nID0gW1xuICBcIkphbnVhcnlcIixcbiAgXCJGZWJydWFyeVwiLFxuICBcIk1hcmNoXCIsXG4gIFwiQXByaWxcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5lXCIsXG4gIFwiSnVseVwiLFxuICBcIkF1Z3VzdFwiLFxuICBcIlNlcHRlbWJlclwiLFxuICBcIk9jdG9iZXJcIixcbiAgXCJOb3ZlbWJlclwiLFxuICBcIkRlY2VtYmVyXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgbW9udGhzU2hvcnQgPSBbXG4gIFwiSmFuXCIsXG4gIFwiRmViXCIsXG4gIFwiTWFyXCIsXG4gIFwiQXByXCIsXG4gIFwiTWF5XCIsXG4gIFwiSnVuXCIsXG4gIFwiSnVsXCIsXG4gIFwiQXVnXCIsXG4gIFwiU2VwXCIsXG4gIFwiT2N0XCIsXG4gIFwiTm92XCIsXG4gIFwiRGVjXCIsXG5dO1xuXG5leHBvcnQgY29uc3QgbW9udGhzTmFycm93ID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBbLi4ubW9udGhzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4ubW9udGhzU2hvcnRdO1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gWy4uLm1vbnRoc0xvbmddO1xuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCJdO1xuICAgIGNhc2UgXCIyLWRpZ2l0XCI6XG4gICAgICByZXR1cm4gW1wiMDFcIiwgXCIwMlwiLCBcIjAzXCIsIFwiMDRcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLCBcIjA5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCJdO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgd2Vla2RheXNMb25nID0gW1xuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCIsXG4gIFwiU3VuZGF5XCIsXG5dO1xuXG5leHBvcnQgY29uc3Qgd2Vla2RheXNTaG9ydCA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzTmFycm93ID0gW1wiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCIsIFwiU1wiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNOYXJyb3ddO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c1Nob3J0XTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFsuLi53ZWVrZGF5c0xvbmddO1xuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lcmlkaWVtcyA9IFtcIkFNXCIsIFwiUE1cIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzTG9uZyA9IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXTtcblxuZXhwb3J0IGNvbnN0IGVyYXNTaG9ydCA9IFtcIkJDXCIsIFwiQURcIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzTmFycm93ID0gW1wiQlwiLCBcIkFcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBlcmFzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBbLi4uZXJhc05hcnJvd107XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gWy4uLmVyYXNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4uZXJhc0xvbmddO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkge1xuICByZXR1cm4gbWVyaWRpZW1zW2R0LmhvdXIgPCAxMiA/IDAgOiAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gbW9udGhzKGxlbmd0aClbZHQubW9udGggLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGVyYXMobGVuZ3RoKVtkdC55ZWFyIDwgMCA/IDAgOiAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgbnVtZXJpYyA9IFwiYWx3YXlzXCIsIG5hcnJvdyA9IGZhbHNlKSB7XG4gIGNvbnN0IHVuaXRzID0ge1xuICAgIHllYXJzOiBbXCJ5ZWFyXCIsIFwieXIuXCJdLFxuICAgIHF1YXJ0ZXJzOiBbXCJxdWFydGVyXCIsIFwicXRyLlwiXSxcbiAgICBtb250aHM6IFtcIm1vbnRoXCIsIFwibW8uXCJdLFxuICAgIHdlZWtzOiBbXCJ3ZWVrXCIsIFwid2suXCJdLFxuICAgIGRheXM6IFtcImRheVwiLCBcImRheVwiLCBcImRheXNcIl0sXG4gICAgaG91cnM6IFtcImhvdXJcIiwgXCJoci5cIl0sXG4gICAgbWludXRlczogW1wibWludXRlXCIsIFwibWluLlwiXSxcbiAgICBzZWNvbmRzOiBbXCJzZWNvbmRcIiwgXCJzZWMuXCJdLFxuICB9O1xuXG4gIGNvbnN0IGxhc3RhYmxlID0gW1wiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXS5pbmRleE9mKHVuaXQpID09PSAtMTtcblxuICBpZiAobnVtZXJpYyA9PT0gXCJhdXRvXCIgJiYgbGFzdGFibGUpIHtcbiAgICBjb25zdCBpc0RheSA9IHVuaXQgPT09IFwiZGF5c1wiO1xuICAgIHN3aXRjaCAoY291bnQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b21vcnJvd1wiIDogYG5leHQgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ5ZXN0ZXJkYXlcIiA6IGBsYXN0ICR7dW5pdHNbdW5pdF1bMF19YDtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b2RheVwiIDogYHRoaXMgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgZGVmYXVsdDogLy8gZmFsbCB0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaXNJblBhc3QgPSBPYmplY3QuaXMoY291bnQsIC0wKSB8fCBjb3VudCA8IDAsXG4gICAgZm10VmFsdWUgPSBNYXRoLmFicyhjb3VudCksXG4gICAgc2luZ3VsYXIgPSBmbXRWYWx1ZSA9PT0gMSxcbiAgICBsaWxVbml0cyA9IHVuaXRzW3VuaXRdLFxuICAgIGZtdFVuaXQgPSBuYXJyb3dcbiAgICAgID8gc2luZ3VsYXJcbiAgICAgICAgPyBsaWxVbml0c1sxXVxuICAgICAgICA6IGxpbFVuaXRzWzJdIHx8IGxpbFVuaXRzWzFdXG4gICAgICA6IHNpbmd1bGFyXG4gICAgICA/IHVuaXRzW3VuaXRdWzBdXG4gICAgICA6IHVuaXQ7XG4gIHJldHVybiBpc0luUGFzdCA/IGAke2ZtdFZhbHVlfSAke2ZtdFVuaXR9IGFnb2AgOiBgaW4gJHtmbXRWYWx1ZX0gJHtmbXRVbml0fWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTdHJpbmcoa25vd25Gb3JtYXQpIHtcbiAgLy8gdGhlc2UgYWxsIGhhdmUgdGhlIG9mZnNldHMgcmVtb3ZlZCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYWNjZXNzIHRvIHRoZW1cbiAgLy8gd2l0aG91dCBhbGwgdGhlIGludGwgc3R1ZmYgdGhpcyBpcyBiYWNrZmlsbGluZ1xuICBjb25zdCBmaWx0ZXJlZCA9IHBpY2soa25vd25Gb3JtYXQsIFtcbiAgICAgIFwid2Vla2RheVwiLFxuICAgICAgXCJlcmFcIixcbiAgICAgIFwieWVhclwiLFxuICAgICAgXCJtb250aFwiLFxuICAgICAgXCJkYXlcIixcbiAgICAgIFwiaG91clwiLFxuICAgICAgXCJtaW51dGVcIixcbiAgICAgIFwic2Vjb25kXCIsXG4gICAgICBcInRpbWVab25lTmFtZVwiLFxuICAgICAgXCJob3VyQ3ljbGVcIixcbiAgICBdKSxcbiAgICBrZXkgPSBzdHJpbmdpZnkoZmlsdGVyZWQpLFxuICAgIGRhdGVUaW1lSHVnZSA9IFwiRUVFRSwgTExMTCBkLCB5eXl5LCBoOm1tIGFcIjtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfU0hPUlQpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfTUVEKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5XCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFX01FRF9XSVRIX1dFRUtEQVkpOlxuICAgICAgcmV0dXJuIFwiRUVFLCBMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9GVUxMKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9IVUdFKTpcbiAgICAgIHJldHVybiBcIkVFRUUsIExMTEwgZCwgeXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9TSU1QTEUpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1NJTVBMRSk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiSEg6bW06c3NcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfU0hPUlQpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXksIGg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfTUVEKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0ZVTEwpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0hVR0UpOlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eSwgaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkpOlxuICAgICAgcmV0dXJuIFwiRUVFLCBkIExMTCB5eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGF0ZVRpbWVIdWdlO1xuICB9XG59XG4iLCAiaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7IHBhZFN0YXJ0IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlUb2tlbnMoc3BsaXRzLCB0b2tlblRvU3RyaW5nKSB7XG4gIGxldCBzID0gXCJcIjtcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBzcGxpdHMpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcyArPSB0b2tlbi52YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcztcbn1cblxuY29uc3QgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcbiAgRDogRm9ybWF0cy5EQVRFX1NIT1JULFxuICBERDogRm9ybWF0cy5EQVRFX01FRCxcbiAgREREOiBGb3JtYXRzLkRBVEVfRlVMTCxcbiAgRERERDogRm9ybWF0cy5EQVRFX0hVR0UsXG4gIHQ6IEZvcm1hdHMuVElNRV9TSU1QTEUsXG4gIHR0OiBGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcbiAgdHR0dDogRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQsXG4gIFQ6IEZvcm1hdHMuVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTLFxuICBUVFQ6IEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCxcbiAgVFRUVDogRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IEZvcm1hdHMuREFURVRJTUVfU0hPUlQsXG4gIGZmOiBGb3JtYXRzLkRBVEVUSU1FX01FRCxcbiAgZmZmOiBGb3JtYXRzLkRBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IEZvcm1hdHMuREFURVRJTUVfSFVHRSxcbiAgRjogRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMsXG4gIEZGOiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcbiAgRkZGRjogRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyxcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtYXR0ZXIge1xuICBzdGF0aWMgY3JlYXRlKGxvY2FsZSwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBGb3JtYXR0ZXIobG9jYWxlLCBvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZUZvcm1hdChmbXQpIHtcbiAgICAvLyB3aGl0ZS1zcGFjZSBpcyBhbHdheXMgY29uc2lkZXJlZCBhIGxpdGVyYWwgaW4gdXNlci1wcm92aWRlZCBmb3JtYXRzXG4gICAgLy8gdGhlIFwiIFwiIHRva2VuIGhhcyBhIHNwZWNpYWwgbWVhbmluZyAoc2VlIHVuaXRGb3JUb2tlbilcblxuICAgIGxldCBjdXJyZW50ID0gbnVsbCxcbiAgICAgIGN1cnJlbnRGdWxsID0gXCJcIixcbiAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHNwbGl0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gZm10LmNoYXJBdChpKTtcbiAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICAvLyB0dXJuICcnIGludG8gYSBsaXRlcmFsIHNpZ25hbCBxdW90ZSBpbnN0ZWFkIG9mIGp1c3Qgc2tpcHBpbmcgdGhlIGVtcHR5IGxpdGVyYWxcbiAgICAgICAgaWYgKGN1cnJlbnRGdWxsLmxlbmd0aCA+IDAgfHwgYnJhY2tldGVkKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goe1xuICAgICAgICAgICAgbGl0ZXJhbDogYnJhY2tldGVkIHx8IC9eXFxzKyQvLnRlc3QoY3VycmVudEZ1bGwpLFxuICAgICAgICAgICAgdmFsOiBjdXJyZW50RnVsbCA9PT0gXCJcIiA/IFwiJ1wiIDogY3VycmVudEZ1bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRGdWxsID0gXCJcIjtcbiAgICAgICAgYnJhY2tldGVkID0gIWJyYWNrZXRlZDtcbiAgICAgIH0gZWxzZSBpZiAoYnJhY2tldGVkKSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2UgaWYgKGMgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgY3VycmVudEZ1bGwgKz0gYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiAvXlxccyskLy50ZXN0KGN1cnJlbnRGdWxsKSwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50RnVsbCA9IGM7XG4gICAgICAgIGN1cnJlbnQgPSBjO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICBzcGxpdHMucHVzaCh7IGxpdGVyYWw6IGJyYWNrZXRlZCB8fCAvXlxccyskLy50ZXN0KGN1cnJlbnRGdWxsKSwgdmFsOiBjdXJyZW50RnVsbCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRzO1xuICB9XG5cbiAgc3RhdGljIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pIHtcbiAgICByZXR1cm4gbWFjcm9Ub2tlblRvRm9ybWF0T3B0c1t0b2tlbl07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihsb2NhbGUsIGZvcm1hdE9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBmb3JtYXRPcHRzO1xuICAgIHRoaXMubG9jID0gbG9jYWxlO1xuICAgIHRoaXMuc3lzdGVtTG9jID0gbnVsbDtcbiAgfVxuXG4gIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7XG4gICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7XG4gICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7XG4gICAgfVxuICAgIGNvbnN0IGRmID0gdGhpcy5zeXN0ZW1Mb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfVxuXG4gIGR0Rm9ybWF0dGVyKGR0LCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIHsgLi4udGhpcy5vcHRzLCAuLi5vcHRzIH0pO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWUoZHQsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5kdEZvcm1hdHRlcihkdCwgb3B0cykuZm9ybWF0KCk7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZVBhcnRzKGR0LCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuZHRGb3JtYXR0ZXIoZHQsIG9wdHMpLmZvcm1hdFRvUGFydHMoKTtcbiAgfVxuXG4gIGZvcm1hdEludGVydmFsKGludGVydmFsLCBvcHRzKSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGludGVydmFsLnN0YXJ0LCBvcHRzKTtcbiAgICByZXR1cm4gZGYuZHRmLmZvcm1hdFJhbmdlKGludGVydmFsLnN0YXJ0LnRvSlNEYXRlKCksIGludGVydmFsLmVuZC50b0pTRGF0ZSgpKTtcbiAgfVxuXG4gIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBvcHRzKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgfVxuXG4gIG51bShuLCBwID0gMCwgc2lnbkRpc3BsYXkgPSB1bmRlZmluZWQpIHtcbiAgICAvLyB3ZSBnZXQgc29tZSBwZXJmIG91dCBvZiBkb2luZyB0aGlzIGhlcmUsIGFubm95aW5nbHlcbiAgICBpZiAodGhpcy5vcHRzLmZvcmNlU2ltcGxlKSB7XG4gICAgICByZXR1cm4gcGFkU3RhcnQobiwgcCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IHsgLi4udGhpcy5vcHRzIH07XG5cbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cbiAgICBpZiAoc2lnbkRpc3BsYXkpIHtcbiAgICAgIG9wdHMuc2lnbkRpc3BsYXkgPSBzaWduRGlzcGxheTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2MubnVtYmVyRm9ybWF0dGVyKG9wdHMpLmZvcm1hdChuKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm10KSB7XG4gICAgY29uc3Qga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPSB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAmJiB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAhPT0gXCJncmVnb3J5XCIsXG4gICAgICBzdHJpbmcgPSAob3B0cywgZXh0cmFjdCkgPT4gdGhpcy5sb2MuZXh0cmFjdChkdCwgb3B0cywgZXh0cmFjdCksXG4gICAgICBmb3JtYXRPZmZzZXQgPSAob3B0cykgPT4ge1xuICAgICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcbiAgICAgICAgICByZXR1cm4gXCJaXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IGR0LnpvbmUuZm9ybWF0T2Zmc2V0KGR0LnRzLCBvcHRzLmZvcm1hdCkgOiBcIlwiO1xuICAgICAgfSxcbiAgICAgIG1lcmlkaWVtID0gKCkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBFbmdsaXNoLm1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpXG4gICAgICAgICAgOiBzdHJpbmcoeyBob3VyOiBcIm51bWVyaWNcIiwgaG91ckN5Y2xlOiBcImgxMlwiIH0sIFwiZGF5cGVyaW9kXCIpLFxuICAgICAgbW9udGggPSAobGVuZ3RoLCBzdGFuZGFsb25lKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2hcbiAgICAgICAgICA/IEVuZ2xpc2gubW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKVxuICAgICAgICAgIDogc3RyaW5nKHN0YW5kYWxvbmUgPyB7IG1vbnRoOiBsZW5ndGggfSA6IHsgbW9udGg6IGxlbmd0aCwgZGF5OiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpLFxuICAgICAgd2Vla2RheSA9IChsZW5ndGgsIHN0YW5kYWxvbmUpID0+XG4gICAgICAgIGtub3duRW5nbGlzaFxuICAgICAgICAgID8gRW5nbGlzaC53ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aClcbiAgICAgICAgICA6IHN0cmluZyhcbiAgICAgICAgICAgICAgc3RhbmRhbG9uZSA/IHsgd2Vla2RheTogbGVuZ3RoIH0gOiB7IHdlZWtkYXk6IGxlbmd0aCwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH0sXG4gICAgICAgICAgICAgIFwid2Vla2RheVwiXG4gICAgICAgICAgICApLFxuICAgICAgbWF5YmVNYWNybyA9ICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pO1xuICAgICAgICBpZiAoZm9ybWF0T3B0cykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcmEgPSAobGVuZ3RoKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2ggPyBFbmdsaXNoLmVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIDogc3RyaW5nKHsgZXJhOiBsZW5ndGggfSwgXCJlcmFcIiksXG4gICAgICB0b2tlblRvU3RyaW5nID0gKHRva2VuKSA9PiB7XG4gICAgICAgIC8vIFdoZXJlIHBvc3NpYmxlOiBodHRwczovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lL2RhdGUtdGltZS1zeW1ib2xzXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAvLyBtc1xuICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQpO1xuICAgICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taWxsaXNlY29uZCwgMyk7XG4gICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5zZWNvbmQsIDIpO1xuICAgICAgICAgIC8vIGZyYWN0aW9uYWwgc2Vjb25kc1xuICAgICAgICAgIGNhc2UgXCJ1dVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQubWlsbGlzZWNvbmQgLyAxMCksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ1dXVcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTAwKSk7XG4gICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlKTtcbiAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taW51dGUsIDIpO1xuICAgICAgICAgIC8vIGhvdXJzXG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMik7XG4gICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91cik7XG4gICAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciwgMik7XG4gICAgICAgICAgLy8gb2Zmc2V0XG4gICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzZcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6IFwibmFycm93XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzA2OjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInNob3J0XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICswNjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInRlY2hpZVwiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJzaG9ydFwiLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJsb25nXCIsIGxvY2FsZTogdGhpcy5sb2MubG9jYWxlIH0pO1xuICAgICAgICAgIC8vIHpvbmVcbiAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZU5hbWU7XG4gICAgICAgICAgLy8gbWVyaWRpZW1zXG4gICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xuICAgICAgICAgIC8vIGRhdGVzXG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogXCJudW1lcmljXCIgfSwgXCJkYXlcIikgOiB0aGlzLm51bShkdC5kYXkpO1xuICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgZGF5OiBcIjItZGlnaXRcIiB9LCBcImRheVwiKSA6IHRoaXMubnVtKGR0LmRheSwgMik7XG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gZm9ybWF0XG4gICAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIHN0YW5kYWxvbmVcbiAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCJudW1lcmljXCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDEsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoLCAyKTtcbiAgICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphblxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgpO1xuICAgICAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwiMi1kaWdpdFwiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyB5ZWFyc1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDIwMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKSA6IHRoaXMubnVtKGR0LnllYXIpO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxNFxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCIyLWRpZ2l0XCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAxMlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCJudW1lcmljXCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAgIC8vIGVyYXNcbiAgICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBRFxuICAgICAgICAgICAgcmV0dXJuIGVyYShcInNob3J0XCIpO1xuICAgICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxuICAgICAgICAgICAgcmV0dXJuIGVyYShcImxvbmdcIik7XG4gICAgICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgICAgICByZXR1cm4gZXJhKFwibmFycm93XCIpO1xuICAgICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLCA0KTtcbiAgICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuICAgICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJuXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubG9jYWxXZWVrTnVtYmVyKTtcbiAgICAgICAgICBjYXNlIFwibm5cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5sb2NhbFdlZWtOdW1iZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LmxvY2FsV2Vla1llYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuICAgICAgICAgIGNhc2UgXCJpaWlpXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubG9jYWxXZWVrWWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5vcmRpbmFsKTtcbiAgICAgICAgICBjYXNlIFwib29vXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQub3JkaW5hbCwgMyk7XG4gICAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnF1YXJ0ZXIpO1xuICAgICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnF1YXJ0ZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJYXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oTWF0aC5mbG9vcihkdC50cyAvIDEwMDApKTtcbiAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnRzKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG1heWJlTWFjcm8odG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgdG9rZW5Ub1N0cmluZyk7XG4gIH1cblxuICBmb3JtYXREdXJhdGlvbkZyb21TdHJpbmcoZHVyLCBmbXQpIHtcbiAgICBjb25zdCBpbnZlcnRMYXJnZXN0ID0gdGhpcy5vcHRzLnNpZ25Nb2RlID09PSBcIm5lZ2F0aXZlTGFyZ2VzdE9ubHlcIiA/IC0xIDogMTtcbiAgICBjb25zdCB0b2tlblRvRmllbGQgPSAodG9rZW4pID0+IHtcbiAgICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaWxsaXNlY29uZHNcIjtcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwic2Vjb25kc1wiO1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaW51dGVzXCI7XG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiBcImhvdXJzXCI7XG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImRheXNcIjtcbiAgICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwid2Vla3NcIjtcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwibW9udGhzXCI7XG4gICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgIHJldHVybiBcInllYXJzXCI7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdG9rZW5Ub1N0cmluZyA9IChsaWxkdXIsIGluZm8pID0+ICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xuICAgICAgICBpZiAobWFwcGVkKSB7XG4gICAgICAgICAgY29uc3QgaW52ZXJzaW9uRmFjdG9yID1cbiAgICAgICAgICAgIGluZm8uaXNOZWdhdGl2ZUR1cmF0aW9uICYmIG1hcHBlZCAhPT0gaW5mby5sYXJnZXN0VW5pdCA/IGludmVydExhcmdlc3QgOiAxO1xuICAgICAgICAgIGxldCBzaWduRGlzcGxheTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRzLnNpZ25Nb2RlID09PSBcIm5lZ2F0aXZlTGFyZ2VzdE9ubHlcIiAmJiBtYXBwZWQgIT09IGluZm8ubGFyZ2VzdFVuaXQpIHtcbiAgICAgICAgICAgIHNpZ25EaXNwbGF5ID0gXCJuZXZlclwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRzLnNpZ25Nb2RlID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBzaWduRGlzcGxheSA9IFwiYWx3YXlzXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFwiYXV0b1wiIGFuZCBcIm5lZ2F0aXZlXCIgYXJlIHRoZSBzYW1lLCBidXQgXCJhdXRvXCIgaGFzIGJldHRlciBzdXBwb3J0XG4gICAgICAgICAgICBzaWduRGlzcGxheSA9IFwiYXV0b1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0obGlsZHVyLmdldChtYXBwZWQpICogaW52ZXJzaW9uRmFjdG9yLCB0b2tlbi5sZW5ndGgsIHNpZ25EaXNwbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKFxuICAgICAgICAoZm91bmQsIHsgbGl0ZXJhbCwgdmFsIH0pID0+IChsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKSksXG4gICAgICAgIFtdXG4gICAgICApLFxuICAgICAgY29sbGFwc2VkID0gZHVyLnNoaWZ0VG8oLi4ucmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIoKHQpID0+IHQpKSxcbiAgICAgIGR1cmF0aW9uSW5mbyA9IHtcbiAgICAgICAgaXNOZWdhdGl2ZUR1cmF0aW9uOiBjb2xsYXBzZWQgPCAwLFxuICAgICAgICAvLyB0aGlzIHJlbGllcyBvbiBcImNvbGxhcHNlZFwiIGJlaW5nIGJhc2VkIG9uIFwic2hpZnRUb1wiLCB3aGljaCBidWlsZHMgdXAgdGhlIG9iamVjdFxuICAgICAgICAvLyBpbiBvcmRlclxuICAgICAgICBsYXJnZXN0VW5pdDogT2JqZWN0LmtleXMoY29sbGFwc2VkLnZhbHVlcylbMF0sXG4gICAgICB9O1xuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnModG9rZW5zLCB0b2tlblRvU3RyaW5nKGNvbGxhcHNlZCwgZHVyYXRpb25JbmZvKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQge1xuICB1bnRydW5jYXRlWWVhcixcbiAgc2lnbmVkT2Zmc2V0LFxuICBwYXJzZUludGVnZXIsXG4gIHBhcnNlTWlsbGlzLFxuICBpc1VuZGVmaW5lZCxcbiAgcGFyc2VGbG9hdGluZyxcbn0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcblxuLypcbiAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6XG4gKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC5cbiAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3RcbiAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLlxuICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhIFwiY3Vyc29yXCIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgaW4gdGhlIG1hdGNoIHRvIGxvb2sgYXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBjb21iaW5lIGV4dHJhY3RvcnMuXG4gKiBjb21iaW5lRXh0cmFjdG9ycygpIGRvZXMgdGhlIHdvcmsgb2YgY29tYmluaW5nIHRoZW0sIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnNvciB0aHJvdWdoIG11bHRpcGxlIGV4dHJhY3Rpb25zLlxuICogU29tZSBleHRyYWN0aW9ucyBhcmUgc3VwZXIgZHVtYiBhbmQgc2ltcGxlUGFyc2UgYW5kIGZyb21TdHJpbmdzIGhlbHAgRFJZIHRoZW0uXG4gKi9cblxuY29uc3QgaWFuYVJlZ2V4ID0gL1tBLVphLXpfKy1dezEsMjU2fSg/Ojo/XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KD86XFwvW0EtWmEtejAtOV8rLV17MSwyNTZ9KT8pPy87XG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWdleGVzKC4uLnJlZ2V4ZXMpIHtcbiAgY29uc3QgZnVsbCA9IHJlZ2V4ZXMucmVkdWNlKChmLCByKSA9PiBmICsgci5zb3VyY2UsIFwiXCIpO1xuICByZXR1cm4gUmVnRXhwKGBeJHtmdWxsfSRgKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoLi4uZXh0cmFjdG9ycykge1xuICByZXR1cm4gKG0pID0+XG4gICAgZXh0cmFjdG9yc1xuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFttZXJnZWRWYWxzLCBtZXJnZWRab25lLCBjdXJzb3JdLCBleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IFt2YWwsIHpvbmUsIG5leHRdID0gZXgobSwgY3Vyc29yKTtcbiAgICAgICAgICByZXR1cm4gW3sgLi4ubWVyZ2VkVmFscywgLi4udmFsIH0sIHpvbmUgfHwgbWVyZ2VkWm9uZSwgbmV4dF07XG4gICAgICAgIH0sXG4gICAgICAgIFt7fSwgbnVsbCwgMV1cbiAgICAgIClcbiAgICAgIC5zbGljZSgwLCAyKTtcbn1cblxuZnVuY3Rpb24gcGFyc2UocywgLi4ucGF0dGVybnMpIHtcbiAgaWYgKHMgPT0gbnVsbCkge1xuICAgIHJldHVybiBbbnVsbCwgbnVsbF07XG4gIH1cblxuICBmb3IgKGNvbnN0IFtyZWdleCwgZXh0cmFjdG9yXSBvZiBwYXR0ZXJucykge1xuICAgIGNvbnN0IG0gPSByZWdleC5leGVjKHMpO1xuICAgIGlmIChtKSB7XG4gICAgICByZXR1cm4gZXh0cmFjdG9yKG0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW251bGwsIG51bGxdO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVQYXJzZSguLi5rZXlzKSB7XG4gIHJldHVybiAobWF0Y2gsIGN1cnNvcikgPT4ge1xuICAgIGNvbnN0IHJldCA9IHt9O1xuICAgIGxldCBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJldFtrZXlzW2ldXSA9IHBhcnNlSW50ZWdlcihtYXRjaFtjdXJzb3IgKyBpXSk7XG4gICAgfVxuICAgIHJldHVybiBbcmV0LCBudWxsLCBjdXJzb3IgKyBpXTtcbiAgfTtcbn1cblxuLy8gSVNPIGFuZCBTUUwgcGFyc2luZ1xuY29uc3Qgb2Zmc2V0UmVnZXggPSAvKD86KFtael0pfChbKy1dXFxkXFxkKSg/Ojo/KFxcZFxcZCkpPykvO1xuY29uc3QgaXNvRXh0ZW5kZWRab25lID0gYCg/OiR7b2Zmc2V0UmVnZXguc291cmNlfT8oPzpcXFxcWygke2lhbmFSZWdleC5zb3VyY2V9KVxcXFxdKT8pP2A7XG5jb25zdCBpc29UaW1lQmFzZVJlZ2V4ID0gLyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzpbLixdKFxcZHsxLDMwfSkpPyk/KT8vO1xuY29uc3QgaXNvVGltZVJlZ2V4ID0gUmVnRXhwKGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSR7aXNvRXh0ZW5kZWRab25lfWApO1xuY29uc3QgaXNvVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKGAoPzpbVHRdJHtpc29UaW1lUmVnZXguc291cmNlfSk/YCk7XG5jb25zdCBpc29ZbWRSZWdleCA9IC8oWystXVxcZHs2fXxcXGR7NH0pKD86LT8oXFxkXFxkKSg/Oi0/KFxcZFxcZCkpPyk/LztcbmNvbnN0IGlzb1dlZWtSZWdleCA9IC8oXFxkezR9KS0/VyhcXGRcXGQpKD86LT8oXFxkKSk/LztcbmNvbnN0IGlzb09yZGluYWxSZWdleCA9IC8oXFxkezR9KS0/KFxcZHszfSkvO1xuY29uc3QgZXh0cmFjdElTT1dlZWtEYXRhID0gc2ltcGxlUGFyc2UoXCJ3ZWVrWWVhclwiLCBcIndlZWtOdW1iZXJcIiwgXCJ3ZWVrRGF5XCIpO1xuY29uc3QgZXh0cmFjdElTT09yZGluYWxEYXRhID0gc2ltcGxlUGFyc2UoXCJ5ZWFyXCIsIFwib3JkaW5hbFwiKTtcbmNvbnN0IHNxbFltZFJlZ2V4ID0gLyhcXGR7NH0pLShcXGRcXGQpLShcXGRcXGQpLzsgLy8gZHVtYmVkLWRvd24gdmVyc2lvbiBvZiB0aGUgSVNPIG9uZVxuY29uc3Qgc3FsVGltZVJlZ2V4ID0gUmVnRXhwKFxuICBgJHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0gPyg/OiR7b2Zmc2V0UmVnZXguc291cmNlfXwoJHtpYW5hUmVnZXguc291cmNlfSkpP2Bcbik7XG5jb25zdCBzcWxUaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OiAke3NxbFRpbWVSZWdleC5zb3VyY2V9KT9gKTtcblxuZnVuY3Rpb24gaW50KG1hdGNoLCBwb3MsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IG0gPSBtYXRjaFtwb3NdO1xuICByZXR1cm4gaXNVbmRlZmluZWQobSkgPyBmYWxsYmFjayA6IHBhcnNlSW50ZWdlcihtKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT1ltZChtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgeWVhcjogaW50KG1hdGNoLCBjdXJzb3IpLFxuICAgIG1vbnRoOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDEpLFxuICAgIGRheTogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAxKSxcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPVGltZShtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IGl0ZW0gPSB7XG4gICAgaG91cnM6IGludChtYXRjaCwgY3Vyc29yLCAwKSxcbiAgICBtaW51dGVzOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDApLFxuICAgIHNlY29uZHM6IGludChtYXRjaCwgY3Vyc29yICsgMiwgMCksXG4gICAgbWlsbGlzZWNvbmRzOiBwYXJzZU1pbGxpcyhtYXRjaFtjdXJzb3IgKyAzXSksXG4gIH07XG5cbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyA0XTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT09mZnNldChtYXRjaCwgY3Vyc29yKSB7XG4gIGNvbnN0IGxvY2FsID0gIW1hdGNoW2N1cnNvcl0gJiYgIW1hdGNoW2N1cnNvciArIDFdLFxuICAgIGZ1bGxPZmZzZXQgPSBzaWduZWRPZmZzZXQobWF0Y2hbY3Vyc29yICsgMV0sIG1hdGNoW2N1cnNvciArIDJdKSxcbiAgICB6b25lID0gbG9jYWwgPyBudWxsIDogRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGZ1bGxPZmZzZXQpO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElBTkFab25lKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3Qgem9uZSA9IG1hdGNoW2N1cnNvcl0gPyBJQU5BWm9uZS5jcmVhdGUobWF0Y2hbY3Vyc29yXSkgOiBudWxsO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAxXTtcbn1cblxuLy8gSVNPIHRpbWUgcGFyc2luZ1xuXG5jb25zdCBpc29UaW1lT25seSA9IFJlZ0V4cChgXlQ/JHtpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZX0kYCk7XG5cbi8vIElTTyBkdXJhdGlvbiBwYXJzaW5nXG5cbmNvbnN0IGlzb0R1cmF0aW9uID1cbiAgL14tP1AoPzooPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylZKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylXKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylEKT8oPzpUKD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pSCk/KD86KC0/XFxkezEsMjB9KD86XFwuXFxkezEsMjB9KT8pTSk/KD86KC0/XFxkezEsMjB9KSg/OlsuLF0oLT9cXGR7MSwyMH0pKT9TKT8pPykkLztcblxuZnVuY3Rpb24gZXh0cmFjdElTT0R1cmF0aW9uKG1hdGNoKSB7XG4gIGNvbnN0IFtzLCB5ZWFyU3RyLCBtb250aFN0ciwgd2Vla1N0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0ciwgbWlsbGlzZWNvbmRzU3RyXSA9XG4gICAgbWF0Y2g7XG5cbiAgY29uc3QgaGFzTmVnYXRpdmVQcmVmaXggPSBzWzBdID09PSBcIi1cIjtcbiAgY29uc3QgbmVnYXRpdmVTZWNvbmRzID0gc2Vjb25kU3RyICYmIHNlY29uZFN0clswXSA9PT0gXCItXCI7XG5cbiAgY29uc3QgbWF5YmVOZWdhdGUgPSAobnVtLCBmb3JjZSA9IGZhbHNlKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIChmb3JjZSB8fCAobnVtICYmIGhhc05lZ2F0aXZlUHJlZml4KSkgPyAtbnVtIDogbnVtO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgeWVhcnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoeWVhclN0cikpLFxuICAgICAgbW9udGhzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1vbnRoU3RyKSksXG4gICAgICB3ZWVrczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh3ZWVrU3RyKSksXG4gICAgICBkYXlzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKGRheVN0cikpLFxuICAgICAgaG91cnM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoaG91clN0cikpLFxuICAgICAgbWludXRlczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhtaW51dGVTdHIpKSxcbiAgICAgIHNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoc2Vjb25kU3RyKSwgc2Vjb25kU3RyID09PSBcIi0wXCIpLFxuICAgICAgbWlsbGlzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZU1pbGxpcyhtaWxsaXNlY29uZHNTdHIpLCBuZWdhdGl2ZVNlY29uZHMpLFxuICAgIH0sXG4gIF07XG59XG5cbi8vIFRoZXNlIGFyZSBhIGxpdHRsZSBicmFpbmRlYWQuIEVEVCAqc2hvdWxkKiB0ZWxsIHVzIHRoYXQgd2UncmUgaW4sIHNheSwgQW1lcmljYS9OZXdfWW9ya1xuLy8gYW5kIG5vdCBqdXN0IHRoYXQgd2UncmUgaW4gLTI0MCAqcmlnaHQgbm93Ki4gQnV0IHNpbmNlIEkgZG9uJ3QgdGhpbmsgdGhlc2UgYXJlIHVzZWQgdGhhdCBvZnRlblxuLy8gSSdtIGp1c3QgZ29pbmcgdG8gaWdub3JlIHRoYXRcbmNvbnN0IG9ic09mZnNldHMgPSB7XG4gIEdNVDogMCxcbiAgRURUOiAtNCAqIDYwLFxuICBFU1Q6IC01ICogNjAsXG4gIENEVDogLTUgKiA2MCxcbiAgQ1NUOiAtNiAqIDYwLFxuICBNRFQ6IC02ICogNjAsXG4gIE1TVDogLTcgKiA2MCxcbiAgUERUOiAtNyAqIDYwLFxuICBQU1Q6IC04ICogNjAsXG59O1xuXG5mdW5jdGlvbiBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgeWVhcjogeWVhclN0ci5sZW5ndGggPT09IDIgPyB1bnRydW5jYXRlWWVhcihwYXJzZUludGVnZXIoeWVhclN0cikpIDogcGFyc2VJbnRlZ2VyKHllYXJTdHIpLFxuICAgIG1vbnRoOiBFbmdsaXNoLm1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpICsgMSxcbiAgICBkYXk6IHBhcnNlSW50ZWdlcihkYXlTdHIpLFxuICAgIGhvdXI6IHBhcnNlSW50ZWdlcihob3VyU3RyKSxcbiAgICBtaW51dGU6IHBhcnNlSW50ZWdlcihtaW51dGVTdHIpLFxuICB9O1xuXG4gIGlmIChzZWNvbmRTdHIpIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludGVnZXIoc2Vjb25kU3RyKTtcbiAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICByZXN1bHQud2Vla2RheSA9XG4gICAgICB3ZWVrZGF5U3RyLmxlbmd0aCA+IDNcbiAgICAgICAgPyBFbmdsaXNoLndlZWtkYXlzTG9uZy5pbmRleE9mKHdlZWtkYXlTdHIpICsgMVxuICAgICAgICA6IEVuZ2xpc2gud2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpICsgMTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIFJGQyAyODIyLzUzMjJcbmNvbnN0IHJmYzI4MjIgPVxuICAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLFxccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoPzooWystXVxcZFxcZCkoXFxkXFxkKSkpJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RSRkMyODIyKG1hdGNoKSB7XG4gIGNvbnN0IFtcbiAgICAgICxcbiAgICAgIHdlZWtkYXlTdHIsXG4gICAgICBkYXlTdHIsXG4gICAgICBtb250aFN0cixcbiAgICAgIHllYXJTdHIsXG4gICAgICBob3VyU3RyLFxuICAgICAgbWludXRlU3RyLFxuICAgICAgc2Vjb25kU3RyLFxuICAgICAgb2JzT2Zmc2V0LFxuICAgICAgbWlsT2Zmc2V0LFxuICAgICAgb2ZmSG91clN0cixcbiAgICAgIG9mZk1pbnV0ZVN0cixcbiAgICBdID0gbWF0Y2gsXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuXG4gIGxldCBvZmZzZXQ7XG4gIGlmIChvYnNPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gIH0gZWxzZSBpZiAobWlsT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXQgPSBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKTtcbiAgfVxuXG4gIHJldHVybiBbcmVzdWx0LCBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCldO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gIHJldHVybiBzXG4gICAgLnJlcGxhY2UoL1xcKFteKCldKlxcKXxbXFxuXFx0XS9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvKFxcc1xccyspL2csIFwiIFwiKVxuICAgIC50cmltKCk7XG59XG5cbi8vIGh0dHAgZGF0ZVxuXG5jb25zdCByZmMxMTIzID1cbiAgICAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLCAoXFxkXFxkKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpIChcXGR7NH0pIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICByZmM4NTAgPVxuICAgIC9eKE1vbmRheXxUdWVzZGF5fFdlZG5lc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxcZFxcZCktKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKS0oXFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgYXNjaWkgPVxuICAgIC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1bikgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoIFxcZHxcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIChcXGR7NH0pJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RSRkMxMTIzT3I4NTAobWF0Y2gpIHtcbiAgY29uc3QgWywgd2Vla2RheVN0ciwgZGF5U3RyLCBtb250aFN0ciwgeWVhclN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHJdID0gbWF0Y2gsXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEFTQ0lJKG1hdGNoKSB7XG4gIGNvbnN0IFssIHdlZWtkYXlTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCB5ZWFyU3RyXSA9IG1hdGNoLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG5cbmNvbnN0IGlzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29ZbWRSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvV2Vla1JlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvT3JkaW5hbFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29PcmRpbmFsUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29UaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1RpbWVSZWdleCk7XG5cbmNvbnN0IGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09ZbWQsXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5jb25zdCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1dlZWtEYXRhLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuY29uc3QgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZSA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPT3JkaW5hbERhdGEsXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5jb25zdCBleHRyYWN0SVNPVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuXG4vKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU09EYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW2lzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSxcbiAgICBbaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldF0sXG4gICAgW2lzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPT3JkaW5hbERhdGVBbmRUaW1lXSxcbiAgICBbaXNvVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0XVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhUVFBEYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW3JmYzExMjMsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLFxuICAgIFtyZmM4NTAsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLFxuICAgIFthc2NpaSwgZXh0cmFjdEFTQ0lJXVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU09EdXJhdGlvbihzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvRHVyYXRpb24sIGV4dHJhY3RJU09EdXJhdGlvbl0pO1xufVxuXG5jb25zdCBleHRyYWN0SVNPVGltZU9ubHkgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUlTT1RpbWVPbmx5KHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29UaW1lT25seSwgZXh0cmFjdElTT1RpbWVPbmx5XSk7XG59XG5cbmNvbnN0IHNxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxZbWRSZWdleCwgc3FsVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IHNxbFRpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsVGltZVJlZ2V4KTtcblxuY29uc3QgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTUUwocykge1xuICByZXR1cm4gcGFyc2UoXG4gICAgcyxcbiAgICBbc3FsWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXRdLFxuICAgIFtzcWxUaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZV1cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciwgSW52YWxpZER1cmF0aW9uRXJyb3IsIEludmFsaWRVbml0RXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcIi4vaW1wbC9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ltcGwvaW52YWxpZC5qc1wiO1xuaW1wb3J0IExvY2FsZSBmcm9tIFwiLi9pbXBsL2xvY2FsZS5qc1wiO1xuaW1wb3J0IHsgcGFyc2VJU09EdXJhdGlvbiwgcGFyc2VJU09UaW1lT25seSB9IGZyb20gXCIuL2ltcGwvcmVnZXhQYXJzZXIuanNcIjtcbmltcG9ydCB7XG4gIGFzTnVtYmVyLFxuICBoYXNPd25Qcm9wZXJ0eSxcbiAgaXNOdW1iZXIsXG4gIGlzVW5kZWZpbmVkLFxuICBub3JtYWxpemVPYmplY3QsXG4gIHJvdW5kVG8sXG59IGZyb20gXCIuL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWUuanNcIjtcblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBEdXJhdGlvblwiO1xuXG4vLyB1bml0IGNvbnZlcnNpb24gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgbG93T3JkZXJNYXRyaXggPSB7XG4gICAgd2Vla3M6IHtcbiAgICAgIGRheXM6IDcsXG4gICAgICBob3VyczogNyAqIDI0LFxuICAgICAgbWludXRlczogNyAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIGRheXM6IHtcbiAgICAgIGhvdXJzOiAyNCxcbiAgICAgIG1pbnV0ZXM6IDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBob3VyczogeyBtaW51dGVzOiA2MCwgc2Vjb25kczogNjAgKiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMCB9LFxuICAgIG1pbnV0ZXM6IHsgc2Vjb25kczogNjAsIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwIH0sXG4gICAgc2Vjb25kczogeyBtaWxsaXNlY29uZHM6IDEwMDAgfSxcbiAgfSxcbiAgY2FzdWFsTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogNTIsXG4gICAgICBkYXlzOiAzNjUsXG4gICAgICBob3VyczogMzY1ICogMjQsXG4gICAgICBtaW51dGVzOiAzNjUgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcXVhcnRlcnM6IHtcbiAgICAgIG1vbnRoczogMyxcbiAgICAgIHdlZWtzOiAxMyxcbiAgICAgIGRheXM6IDkxLFxuICAgICAgaG91cnM6IDkxICogMjQsXG4gICAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICB3ZWVrczogNCxcbiAgICAgIGRheXM6IDMwLFxuICAgICAgaG91cnM6IDMwICogMjQsXG4gICAgICBtaW51dGVzOiAzMCAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG5cbiAgICAuLi5sb3dPcmRlck1hdHJpeCxcbiAgfSxcbiAgZGF5c0luWWVhckFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0MDAsXG4gIGRheXNJbk1vbnRoQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQ4MDAsXG4gIGFjY3VyYXRlTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBxdWFydGVyczoge1xuICAgICAgbW9udGhzOiAzLFxuICAgICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxuICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcbiAgICAgIGhvdXJzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQpIC8gNCxcbiAgICAgIG1pbnV0ZXM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwKSAvIDQsXG4gICAgICBzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwKSAvIDQsXG4gICAgICBtaWxsaXNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwKSAvIDQsXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiBkYXlzSW5Nb250aEFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LFxuICAgICAgbWludXRlczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIC4uLmxvd09yZGVyTWF0cml4LFxuICB9O1xuXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcbmNvbnN0IG9yZGVyZWRVbml0cyA9IFtcbiAgXCJ5ZWFyc1wiLFxuICBcInF1YXJ0ZXJzXCIsXG4gIFwibW9udGhzXCIsXG4gIFwid2Vla3NcIixcbiAgXCJkYXlzXCIsXG4gIFwiaG91cnNcIixcbiAgXCJtaW51dGVzXCIsXG4gIFwic2Vjb25kc1wiLFxuICBcIm1pbGxpc2Vjb25kc1wiLFxuXTtcblxuY29uc3QgcmV2ZXJzZVVuaXRzID0gb3JkZXJlZFVuaXRzLnNsaWNlKDApLnJldmVyc2UoKTtcblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zIFwiY3JlYXRlIGFub3RoZXIgaW5zdGFuY2UganVzdCBsaWtlIHRoaXMgb25lLCBidXQgd2l0aCB0aGVzZSBjaGFuZ2VzXCJcbmZ1bmN0aW9uIGNsb25lKGR1ciwgYWx0cywgY2xlYXIgPSBmYWxzZSkge1xuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXG4gIGNvbnN0IGNvbmYgPSB7XG4gICAgdmFsdWVzOiBjbGVhciA/IGFsdHMudmFsdWVzIDogeyAuLi5kdXIudmFsdWVzLCAuLi4oYWx0cy52YWx1ZXMgfHwge30pIH0sXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3ksXG4gICAgbWF0cml4OiBhbHRzLm1hdHJpeCB8fCBkdXIubWF0cml4LFxuICB9O1xuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xufVxuXG5mdW5jdGlvbiBkdXJhdGlvblRvTWlsbGlzKG1hdHJpeCwgdmFscykge1xuICBsZXQgc3VtID0gdmFscy5taWxsaXNlY29uZHMgPz8gMDtcbiAgZm9yIChjb25zdCB1bml0IG9mIHJldmVyc2VVbml0cy5zbGljZSgxKSkge1xuICAgIGlmICh2YWxzW3VuaXRdKSB7XG4gICAgICBzdW0gKz0gdmFsc1t1bml0XSAqIG1hdHJpeFt1bml0XVtcIm1pbGxpc2Vjb25kc1wiXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cblxuLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWVzKG1hdHJpeCwgdmFscykge1xuICAvLyB0aGUgbG9naWMgYmVsb3cgYXNzdW1lcyB0aGUgb3ZlcmFsbCB2YWx1ZSBvZiB0aGUgZHVyYXRpb24gaXMgcG9zaXRpdmVcbiAgLy8gaWYgdGhpcyBpcyBub3QgdGhlIGNhc2UsIGZhY3RvciBpcyB1c2VkIHRvIG1ha2UgaXQgc29cbiAgY29uc3QgZmFjdG9yID0gZHVyYXRpb25Ub01pbGxpcyhtYXRyaXgsIHZhbHMpIDwgMCA/IC0xIDogMTtcblxuICBvcmRlcmVkVW5pdHMucmVkdWNlUmlnaHQoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsID0gdmFsc1twcmV2aW91c10gKiBmYWN0b3I7XG4gICAgICAgIGNvbnN0IGNvbnYgPSBtYXRyaXhbY3VycmVudF1bcHJldmlvdXNdO1xuXG4gICAgICAgIC8vIGlmIChwcmV2aW91c1ZhbCA8IDApOlxuICAgICAgICAvLyBsb3dlciBvcmRlciB1bml0IGlzIG5lZ2F0aXZlIChlLmcuIHsgeWVhcnM6IDIsIGRheXM6IC0yIH0pXG4gICAgICAgIC8vIG5vcm1hbGl6ZSB0aGlzIGJ5IHJlZHVjaW5nIHRoZSBoaWdoZXIgb3JkZXIgdW5pdCBieSB0aGUgYXBwcm9wcmlhdGUgYW1vdW50XG4gICAgICAgIC8vIGFuZCBpbmNyZWFzaW5nIHRoZSBsb3dlciBvcmRlciB1bml0XG4gICAgICAgIC8vIHRoaXMgY2FuIG5ldmVyIG1ha2UgdGhlIGhpZ2hlciBvcmRlciB1bml0IG5lZ2F0aXZlLCBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gb25seSBvcGVyYXRlc1xuICAgICAgICAvLyBvbiBwb3NpdGl2ZSBkdXJhdGlvbnMsIHNvIHRoZSBhbW91bnQgb2YgdGltZSByZXByZXNlbnRlZCBieSB0aGUgbG93ZXIgb3JkZXIgdW5pdCBjYW5ub3RcbiAgICAgICAgLy8gYmUgbGFyZ2VyIHRoYW4gdGhlIGhpZ2hlciBvcmRlciB1bml0XG4gICAgICAgIC8vIGVsc2U6XG4gICAgICAgIC8vIGxvd2VyIG9yZGVyIHVuaXQgaXMgcG9zaXRpdmUgKGUuZy4geyB5ZWFyczogMiwgZGF5czogNDUwIH0gb3IgeyB5ZWFyczogLTIsIGRheXM6IDQ1MCB9KVxuICAgICAgICAvLyBpbiB0aGlzIGNhc2Ugd2UgYXR0ZW1wdCB0byBjb252ZXJ0IGFzIG11Y2ggYXMgcG9zc2libGUgZnJvbSB0aGUgbG93ZXIgb3JkZXIgdW5pdCBpbnRvXG4gICAgICAgIC8vIHRoZSBoaWdoZXIgb3JkZXIgb25lXG4gICAgICAgIC8vXG4gICAgICAgIC8vIE1hdGguZmxvb3IgdGFrZXMgY2FyZSBvZiBib3RoIG9mIHRoZXNlIGNhc2VzLCByb3VuZGluZyBhd2F5IGZyb20gMFxuICAgICAgICAvLyBpZiBwcmV2aW91c1ZhbCA8IDAgaXQgbWFrZXMgdGhlIGFic29sdXRlIHZhbHVlIGxhcmdlclxuICAgICAgICAvLyBpZiBwcmV2aW91c1ZhbCA+PSBpdCBtYWtlcyB0aGUgYWJzb2x1dGUgdmFsdWUgc21hbGxlclxuICAgICAgICBjb25zdCByb2xsVXAgPSBNYXRoLmZsb29yKHByZXZpb3VzVmFsIC8gY29udik7XG4gICAgICAgIHZhbHNbY3VycmVudF0gKz0gcm9sbFVwICogZmFjdG9yO1xuICAgICAgICB2YWxzW3ByZXZpb3VzXSAtPSByb2xsVXAgKiBjb252ICogZmFjdG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICB9XG4gIH0sIG51bGwpO1xuXG4gIC8vIHRyeSB0byBjb252ZXJ0IGFueSBkZWNpbWFscyBpbnRvIHNtYWxsZXIgdW5pdHMgaWYgcG9zc2libGVcbiAgLy8gZm9yIGV4YW1wbGUgZm9yIHsgeWVhcnM6IDIuNSwgZGF5czogMCwgc2Vjb25kczogMCB9IHdlIHdhbnQgdG8gZ2V0IHsgeWVhcnM6IDIsIGRheXM6IDE4MiwgaG91cnM6IDEyIH1cbiAgb3JkZXJlZFVuaXRzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHNbY3VycmVudF0pKSB7XG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgY29uc3QgZnJhY3Rpb24gPSB2YWxzW3ByZXZpb3VzXSAlIDE7XG4gICAgICAgIHZhbHNbcHJldmlvdXNdIC09IGZyYWN0aW9uO1xuICAgICAgICB2YWxzW2N1cnJlbnRdICs9IGZyYWN0aW9uICogbWF0cml4W3ByZXZpb3VzXVtjdXJyZW50XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJldmlvdXM7XG4gICAgfVxuICB9LCBudWxsKTtcbn1cblxuLy8gUmVtb3ZlIGFsbCBwcm9wZXJ0aWVzIHdpdGggYSB2YWx1ZSBvZiAwIGZyb20gYW4gb2JqZWN0XG5mdW5jdGlvbiByZW1vdmVaZXJvZXModmFscykge1xuICBjb25zdCBuZXdWYWxzID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHMpKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICBuZXdWYWxzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ld1ZhbHM7XG59XG5cbi8qKlxuICogQSBEdXJhdGlvbiBvYmplY3QgcmVwcmVzZW50cyBhIHBlcmlvZCBvZiB0aW1lLCBsaWtlIFwiMiBtb250aHNcIiBvciBcIjEgZGF5LCAxIGhvdXJcIi4gQ29uY2VwdHVhbGx5LCBpdCdzIGp1c3QgYSBtYXAgb2YgdW5pdHMgdG8gdGhlaXIgcXVhbnRpdGllcywgYWNjb21wYW5pZWQgYnkgc29tZSBhZGRpdGlvbmFsIGNvbmZpZ3VyYXRpb24gYW5kIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uIFRoZXkgY2FuIGJlIHVzZWQgb24gdGhlaXIgb3duIG9yIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgTHV4b24gdHlwZXM7IGZvciBleGFtcGxlLCB5b3UgY2FuIHVzZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c30gdG8gYWRkIGEgRHVyYXRpb24gb2JqZWN0IHRvIGEgRGF0ZVRpbWUsIHByb2R1Y2luZyBhbm90aGVyIERhdGVUaW1lLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gRHVyYXRpb246XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGEgRHVyYXRpb24sIHVzZSB7QGxpbmsgRHVyYXRpb24uZnJvbU1pbGxpc30sIHtAbGluayBEdXJhdGlvbi5mcm9tT2JqZWN0fSwgb3Ige0BsaW5rIER1cmF0aW9uLmZyb21JU099LlxuICogKiAqKlVuaXQgdmFsdWVzKiogU2VlIHRoZSB7QGxpbmsgRHVyYXRpb24jeWVhcnN9LCB7QGxpbmsgRHVyYXRpb24jbW9udGhzfSwge0BsaW5rIER1cmF0aW9uI3dlZWtzfSwge0BsaW5rIER1cmF0aW9uI2RheXN9LCB7QGxpbmsgRHVyYXRpb24jaG91cnN9LCB7QGxpbmsgRHVyYXRpb24jbWludXRlc30sIHtAbGluayBEdXJhdGlvbiNzZWNvbmRzfSwge0BsaW5rIER1cmF0aW9uI21pbGxpc2Vjb25kc30gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgIHtAbGluayBEdXJhdGlvbiNsb2NhbGV9IGFuZCB7QGxpbmsgRHVyYXRpb24jbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgbmV3IER1cmF0aW9ucyBvdXQgb2Ygb2xkIG9uZXMgdXNlIHtAbGluayBEdXJhdGlvbiNwbHVzfSwge0BsaW5rIER1cmF0aW9uI21pbnVzfSwge0BsaW5rIER1cmF0aW9uI25vcm1hbGl6ZX0sIHtAbGluayBEdXJhdGlvbiNzZXR9LCB7QGxpbmsgRHVyYXRpb24jcmVjb25maWd1cmV9LCB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30sIGFuZCB7QGxpbmsgRHVyYXRpb24jbmVnYXRlfS5cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBEdXJhdGlvbiBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBEdXJhdGlvbiNhc30sIHtAbGluayBEdXJhdGlvbiN0b0lTT30sIHtAbGluayBEdXJhdGlvbiN0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgRHVyYXRpb24jdG9KU09OfVxuICpcbiAqIFRoZXJlJ3MgYXJlIG1vcmUgbWV0aG9kcyBkb2N1bWVudGVkIGJlbG93LiBJbiBhZGRpdGlvbiwgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gc3VidGxlciB0b3BpY3MgbGlrZSBpbnRlcm5hdGlvbmFsaXphdGlvbiBhbmQgdmFsaWRpdHksIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVyYXRpb24ge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbnN0IGFjY3VyYXRlID0gY29uZmlnLmNvbnZlcnNpb25BY2N1cmFjeSA9PT0gXCJsb25ndGVybVwiIHx8IGZhbHNlO1xuICAgIGxldCBtYXRyaXggPSBhY2N1cmF0ZSA/IGFjY3VyYXRlTWF0cml4IDogY2FzdWFsTWF0cml4O1xuXG4gICAgaWYgKGNvbmZpZy5tYXRyaXgpIHtcbiAgICAgIG1hdHJpeCA9IGNvbmZpZy5tYXRyaXg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy52YWx1ZXMgPSBjb25maWcudmFsdWVzO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jb252ZXJzaW9uQWNjdXJhY3kgPSBhY2N1cmF0ZSA/IFwibG9uZ3Rlcm1cIiA6IFwiY2FzdWFsXCI7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25EdXJhdGlvbiA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgb2YgbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tTWlsbGlzKGNvdW50LCBvcHRzKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IGNvdW50IH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxuICAgKiBJZiB0aGlzIG9iamVjdCBpcyBlbXB0eSB0aGVuIGEgemVybyBtaWxsaXNlY29uZHMgZHVyYXRpb24gaXMgcmV0dXJuZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucXVhcnRlcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5ob3Vyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz1bXV0gLSBvcHRpb25zIGZvciBjcmVhdGluZyB0aGlzIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgcHJlc2V0IGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubWF0cml4PU9iamVjdF0gLSB0aGUgY3VzdG9tIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iaiwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYER1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290ICR7XG4gICAgICAgICAgb2JqID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2Ygb2JqXG4gICAgICAgIH1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xuICAgICAgdmFsdWVzOiBub3JtYWxpemVPYmplY3Qob2JqLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0cyksXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9wdHMuY29udmVyc2lvbkFjY3VyYWN5LFxuICAgICAgbWF0cml4OiBvcHRzLm1hdHJpeCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIER1cmF0aW9uTGlrZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3QgfCBudW1iZXIgfCBEdXJhdGlvbn0gZHVyYXRpb25MaWtlXG4gICAqIE9uZSBvZjpcbiAgICogLSBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogLSBudW1iZXIgcmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kc1xuICAgKiAtIER1cmF0aW9uIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb25MaWtlKSB7XG4gICAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uTGlrZSk7XG4gICAgfSBlbHNlIGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uTGlrZSkpIHtcbiAgICAgIHJldHVybiBkdXJhdGlvbkxpa2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb25MaWtlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbkxpa2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBVbmtub3duIGR1cmF0aW9uIGFyZ3VtZW50ICR7ZHVyYXRpb25MaWtlfSBvZiB0eXBlICR7dHlwZW9mIGR1cmF0aW9uTGlrZX1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGFuIElTTyA4NjAxIGR1cmF0aW9uIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm1hdHJpeD1PYmplY3RdIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk0xVzREVDEySDMwTTVTJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDMsIG1vbnRoczogNiwgd2Vla3M6IDEsIGRheXM6IDQsIGhvdXJzOiAxMiwgbWludXRlczogMzAsIHNlY29uZHM6IDUgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQVDIzSCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyMyB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1A1WTNNJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDUsIG1vbnRoczogMyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09EdXJhdGlvbih0ZXh0KTtcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSB0aW1lIHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0ZXh0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm1hdHJpeD1PYmplY3RdIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMToyMjozMy40NDQnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDIyLCBzZWNvbmRzOiAzMywgbWlsbGlzZWNvbmRzOiA0NDQgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnVDExMDAnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDAsIHNlY29uZHM6IDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPVGltZSh0ZXh0LCBvcHRzKSB7XG4gICAgY29uc3QgW3BhcnNlZF0gPSBwYXJzZUlTT1RpbWVPbmx5KHRleHQpO1xuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHBhcnNlZCwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBgdGhlIGlucHV0IFwiJHt0ZXh0fVwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMWApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgZGF0ZXRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRHVyYXRpb25FcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7IGludmFsaWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHtcbiAgICAgIHllYXI6IFwieWVhcnNcIixcbiAgICAgIHllYXJzOiBcInllYXJzXCIsXG4gICAgICBxdWFydGVyOiBcInF1YXJ0ZXJzXCIsXG4gICAgICBxdWFydGVyczogXCJxdWFydGVyc1wiLFxuICAgICAgbW9udGg6IFwibW9udGhzXCIsXG4gICAgICBtb250aHM6IFwibW9udGhzXCIsXG4gICAgICB3ZWVrOiBcIndlZWtzXCIsXG4gICAgICB3ZWVrczogXCJ3ZWVrc1wiLFxuICAgICAgZGF5OiBcImRheXNcIixcbiAgICAgIGRheXM6IFwiZGF5c1wiLFxuICAgICAgaG91cjogXCJob3Vyc1wiLFxuICAgICAgaG91cnM6IFwiaG91cnNcIixcbiAgICAgIG1pbnV0ZTogXCJtaW51dGVzXCIsXG4gICAgICBtaW51dGVzOiBcIm1pbnV0ZXNcIixcbiAgICAgIHNlY29uZDogXCJzZWNvbmRzXCIsXG4gICAgICBzZWNvbmRzOiBcInNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xuXG4gICAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcblxuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIER1cmF0aW9uLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEdXJhdGlvbihvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkR1cmF0aW9uKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIER1cmF0aW9uLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIER1cmF0aW9uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy4gWW91IG1heSB1c2UgdGhlc2UgdG9rZW5zOlxuICAgKiAqIGBTYCBmb3IgbWlsbGlzZWNvbmRzXG4gICAqICogYHNgIGZvciBzZWNvbmRzXG4gICAqICogYG1gIGZvciBtaW51dGVzXG4gICAqICogYGhgIGZvciBob3Vyc1xuICAgKiAqIGBkYCBmb3IgZGF5c1xuICAgKiAqIGB3YCBmb3Igd2Vla3NcbiAgICogKiBgTWAgZm9yIG1vbnRoc1xuICAgKiAqIGB5YCBmb3IgeWVhcnNcbiAgICogTm90ZXM6XG4gICAqICogQWRkIHBhZGRpbmcgYnkgcmVwZWF0aW5nIHRoZSB0b2tlbiwgZS5nLiBcInl5XCIgcGFkcyB0aGUgeWVhcnMgdG8gdHdvIGRpZ2l0cywgXCJoaGhoXCIgcGFkcyB0aGUgaG91cnMgb3V0IHRvIGZvdXIgZGlnaXRzXG4gICAqICogVG9rZW5zIGNhbiBiZSBlc2NhcGVkIGJ5IHdyYXBwaW5nIHdpdGggc2luZ2xlIHF1b3Rlcy5cbiAgICogKiBUaGUgZHVyYXRpb24gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHNldCBvZiB1bml0cyBpbiB0aGUgZm9ybWF0IHN0cmluZyB1c2luZyB7QGxpbmsgRHVyYXRpb24jc2hpZnRUb30gYW5kIHRoZSBEdXJhdGlvbnMncyBjb252ZXJzaW9uIGFjY3VyYWN5IHNldHRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5mbG9vcj10cnVlXSAtIGZsb29yIG51bWVyaWNhbCB2YWx1ZXNcbiAgICogQHBhcmFtIHsnbmVnYXRpdmUnfCdhbGwnfCduZWdhdGl2ZUxhcmdlc3RPbmx5J30gW29wdHMuc2lnbk1vZGU9bmVnYXRpdmVdIC0gSG93IHRvIGhhbmRsZSBzaWduc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5IGQgc1wiKSAvLz0+IFwiMSA2IDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5eSBkZCBzc3NcIikgLy89PiBcIjAxIDA2IDAwMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcIk0gU1wiKSAvLz0+IFwiMTIgNTE4NDAyMDAwXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJkIHNcIiwgeyBzaWduTW9kZTogXCJhbGxcIiB9KSAvLz0+IFwiKzYgKzJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgZGF5czogLTYsIHNlY29uZHM6IC0yIH0pLnRvRm9ybWF0KFwiZCBzXCIsIHsgc2lnbk1vZGU6IFwiYWxsXCIgfSkgLy89PiBcIi02IC0yXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IC02LCBzZWNvbmRzOiAtMiB9KS50b0Zvcm1hdChcImQgc1wiLCB7IHNpZ25Nb2RlOiBcIm5lZ2F0aXZlTGFyZ2VzdE9ubHlcIiB9KSAvLz0+IFwiLTYgMlwiXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgLy8gcmV2ZXJzZS1jb21wYXQgc2luY2UgMS4yOyB3ZSBhbHdheXMgcm91bmQgZG93biBub3csIG5ldmVyIHVwLCBhbmQgd2UgZG8gaXQgYnkgZGVmYXVsdFxuICAgIGNvbnN0IGZtdE9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgZmxvb3I6IG9wdHMucm91bmQgIT09IGZhbHNlICYmIG9wdHMuZmxvb3IgIT09IGZhbHNlLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLCBmbXRPcHRzKS5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcodGhpcywgZm10KVxuICAgICAgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBEdXJhdGlvbiB3aXRoIGFsbCB1bml0cyBpbmNsdWRlZC5cbiAgICogVG8gbW9kaWZ5IGl0cyBiZWhhdmlvciwgdXNlIGBsaXN0U3R5bGVgIGFuZCBhbnkgSW50bC5OdW1iZXJGb3JtYXQgb3B0aW9uLCB0aG91Z2ggYHVuaXREaXNwbGF5YCBpcyBlc3BlY2lhbGx5IHJlbGV2YW50LlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvTnVtYmVyRm9ybWF0L051bWJlckZvcm1hdCNvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gRm9ybWF0dGluZyBvcHRpb25zLiBBY2NlcHRzIHRoZSBzYW1lIGtleXMgYXMgdGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9mIHRoZSBuYXRpdmUgYEludGwuTnVtYmVyRm9ybWF0YCBjb25zdHJ1Y3RvciwgYXMgd2VsbCBhcyBgbGlzdFN0eWxlYC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxpc3RTdHlsZT0nbmFycm93J10gLSBIb3cgdG8gZm9ybWF0IHRoZSBtZXJnZWQgbGlzdC4gQ29ycmVzcG9uZHMgdG8gdGhlIGBzdHlsZWAgcHJvcGVydHkgb2YgdGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9mIHRoZSBuYXRpdmUgYEludGwuTGlzdEZvcm1hdGAgY29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2hvd1plcm9zPXRydWVdIC0gU2hvdyBhbGwgdW5pdHMgcHJldmlvdXNseSB1c2VkIGJ5IHRoZSBkdXJhdGlvbiBldmVuIGlmIHRoZXkgYXJlIHplcm9cbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogdmFyIGR1ciA9IER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDEsIHdlZWtzOiAwLCBob3VyczogNSwgbWludXRlczogNiB9KVxuICAgKiBkdXIudG9IdW1hbigpIC8vPT4gJzEgbW9udGgsIDAgd2Vla3MsIDUgaG91cnMsIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyBsaXN0U3R5bGU6IFwibG9uZ1wiIH0pIC8vPT4gJzEgbW9udGgsIDAgd2Vla3MsIDUgaG91cnMsIGFuZCA2IG1pbnV0ZXMnXG4gICAqIGR1ci50b0h1bWFuKHsgdW5pdERpc3BsYXk6IFwic2hvcnRcIiB9KSAvLz0+ICcxIG10aCwgMCB3a3MsIDUgaHIsIDYgbWluJ1xuICAgKiBkdXIudG9IdW1hbih7IHNob3daZXJvczogZmFsc2UgfSkgLy89PiAnMSBtb250aCwgNSBob3VycywgNiBtaW51dGVzJ1xuICAgKiBgYGBcbiAgICovXG4gIHRvSHVtYW4ob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuXG4gICAgY29uc3Qgc2hvd1plcm9zID0gb3B0cy5zaG93WmVyb3MgIT09IGZhbHNlO1xuXG4gICAgY29uc3QgbCA9IG9yZGVyZWRVbml0c1xuICAgICAgLm1hcCgodW5pdCkgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlc1t1bml0XTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbCkgfHwgKHZhbCA9PT0gMCAmJiAhc2hvd1plcm9zKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvY1xuICAgICAgICAgIC5udW1iZXJGb3JtYXR0ZXIoeyBzdHlsZTogXCJ1bml0XCIsIHVuaXREaXNwbGF5OiBcImxvbmdcIiwgLi4ub3B0cywgdW5pdDogdW5pdC5zbGljZSgwLCAtMSkgfSlcbiAgICAgICAgICAuZm9ybWF0KHZhbCk7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigobikgPT4gbik7XG5cbiAgICByZXR1cm4gdGhpcy5sb2NcbiAgICAgIC5saXN0Rm9ybWF0dGVyKHsgdHlwZTogXCJjb25qdW5jdGlvblwiLCBzdHlsZTogb3B0cy5saXN0U3R5bGUgfHwgXCJuYXJyb3dcIiwgLi4ub3B0cyB9KVxuICAgICAgLmZvcm1hdChsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIER1cmF0aW9uJ3MgdmFsdWVzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0b09iamVjdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuICAgIHJldHVybiB7IC4uLnRoaXMudmFsdWVzIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMywgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQM1lUNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA0LCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1A0TVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDUgfSkudG9JU08oKSAvLz0+ICdQNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiA1IH0pLnRvSVNPKCkgLy89PiAnUFQ1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogNiB9KS50b0lTTygpIC8vPT4gJ1BUMC4wMDZTJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTygpIHtcbiAgICAvLyB3ZSBjb3VsZCB1c2UgdGhlIGZvcm1hdHRlciwgYnV0IHRoaXMgaXMgYW4gZWFzaWVyIHdheSB0byBnZXQgdGhlIG1pbmltdW0gc3RyaW5nXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHMgPSBcIlBcIjtcbiAgICBpZiAodGhpcy55ZWFycyAhPT0gMCkgcyArPSB0aGlzLnllYXJzICsgXCJZXCI7XG4gICAgaWYgKHRoaXMubW9udGhzICE9PSAwIHx8IHRoaXMucXVhcnRlcnMgIT09IDApIHMgKz0gdGhpcy5tb250aHMgKyB0aGlzLnF1YXJ0ZXJzICogMyArIFwiTVwiO1xuICAgIGlmICh0aGlzLndlZWtzICE9PSAwKSBzICs9IHRoaXMud2Vla3MgKyBcIldcIjtcbiAgICBpZiAodGhpcy5kYXlzICE9PSAwKSBzICs9IHRoaXMuZGF5cyArIFwiRFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwIHx8IHRoaXMubWludXRlcyAhPT0gMCB8fCB0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApXG4gICAgICBzICs9IFwiVFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwKSBzICs9IHRoaXMuaG91cnMgKyBcIkhcIjtcbiAgICBpZiAodGhpcy5taW51dGVzICE9PSAwKSBzICs9IHRoaXMubWludXRlcyArIFwiTVwiO1xuICAgIGlmICh0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApXG4gICAgICAvLyB0aGlzIHdpbGwgaGFuZGxlIFwiZmxvYXRpbmcgcG9pbnQgbWFkbmVzc1wiIGJ5IHJlbW92aW5nIGV4dHJhIGRlY2ltYWwgcGxhY2VzXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODgwMDQvaXMtZmxvYXRpbmctcG9pbnQtbWF0aC1icm9rZW5cbiAgICAgIHMgKz0gcm91bmRUbyh0aGlzLnNlY29uZHMgKyB0aGlzLm1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpICsgXCJTXCI7XG4gICAgaWYgKHMgPT09IFwiUFwiKSBzICs9IFwiVDBTXCI7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24sIGZvcm1hdHRlZCBhcyBhIHRpbWUgb2YgZGF5LlxuICAgKiBOb3RlIHRoYXQgdGhpcyB3aWxsIHJldHVybiBudWxsIGlmIHRoZSBkdXJhdGlvbiBpcyBpbnZhbGlkLCBuZWdhdGl2ZSwgb3IgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIDI0IGhvdXJzLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlUHJlZml4PWZhbHNlXSAtIGluY2x1ZGUgdGhlIGBUYCBwcmVmaXhcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKCkgLy89PiAnMTE6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzTWlsbGlzZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzExOjAwOjAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzU2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QxMTowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzExMDAwMC4wMDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPVGltZShvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBtaWxsaXMgPSB0aGlzLnRvTWlsbGlzKCk7XG4gICAgaWYgKG1pbGxpcyA8IDAgfHwgbWlsbGlzID49IDg2NDAwMDAwKSByZXR1cm4gbnVsbDtcblxuICAgIG9wdHMgPSB7XG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kczogZmFsc2UsXG4gICAgICBzdXBwcmVzc1NlY29uZHM6IGZhbHNlLFxuICAgICAgaW5jbHVkZVByZWZpeDogZmFsc2UsXG4gICAgICBmb3JtYXQ6IFwiZXh0ZW5kZWRcIixcbiAgICAgIC4uLm9wdHMsXG4gICAgICBpbmNsdWRlT2Zmc2V0OiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0ZVRpbWUgPSBEYXRlVGltZS5mcm9tTWlsbGlzKG1pbGxpcywgeyB6b25lOiBcIlVUQ1wiIH0pO1xuICAgIHJldHVybiBkYXRlVGltZS50b0lTT1RpbWUob3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdGhlIFJFUEwuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIFtTeW1ib2wuZm9yKFwibm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b21cIildKCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBgRHVyYXRpb24geyB2YWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy52YWx1ZXMpfSB9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBEdXJhdGlvbiB7IEludmFsaWQsIHJlYXNvbjogJHt0aGlzLmludmFsaWRSZWFzb259IH1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcblxuICAgIHJldHVybiBkdXJhdGlvblRvTWlsbGlzKHRoaXMubWF0cml4LCB0aGlzLnZhbHVlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBtaWxsaXNlY29uZHMgdmFsdWUgb2YgdGhpcyBEdXJhdGlvbi4gQWxpYXMgb2Yge0BsaW5rIHRvTWlsbGlzfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB2YWx1ZU9mKCkge1xuICAgIHJldHVybiB0aGlzLnRvTWlsbGlzKCk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShkdXIudmFsdWVzLCBrKSB8fCBoYXNPd25Qcm9wZXJ0eSh0aGlzLnZhbHVlcywgaykpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gZHVyLmdldChrKSArIHRoaXMuZ2V0KGspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cyh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cygoeCwgdSkgPT4gdSA9PT0gXCJob3Vyc1wiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBtYXBVbml0cyhmbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XG4gICAgICByZXN1bHRba10gPSBhc051bWJlcihmbih0aGlzLnZhbHVlc1trXSwgaykpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ3llYXJzJykgLy89PiAyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZ2V0KCdtb250aHMnKSAvLz0+IDBcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ2RheXMnKSAvLz0+IDNcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG1peGVkID0geyAuLi50aGlzLnZhbHVlcywgLi4ubm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCkgfTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IG1peGVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSBhbmQvb3IgbnVtYmVyaW5nU3lzdGVtLiAgUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBkdXIucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjb252ZXJzaW9uQWNjdXJhY3ksIG1hdHJpeCB9ID0ge30pIHtcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pO1xuICAgIGNvbnN0IG9wdHMgPSB7IGxvYywgbWF0cml4LCBjb252ZXJzaW9uQWNjdXJhY3kgfTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgYXModW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnNoaWZ0VG8odW5pdCkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG4gICAqIEFzc3VtaW5nIHRoZSBvdmVyYWxsIHZhbHVlIG9mIHRoZSBEdXJhdGlvbiBpcyBwb3NpdGl2ZSwgdGhpcyBtZWFuczpcbiAgICogLSBleGNlc3NpdmUgdmFsdWVzIGZvciBsb3dlci1vcmRlciB1bml0cyBhcmUgY29udmVydGVkIHRvIGhpZ2hlci1vcmRlciB1bml0cyAoaWYgcG9zc2libGUsIHNlZSBmaXJzdCBhbmQgc2Vjb25kIGV4YW1wbGUpXG4gICAqIC0gbmVnYXRpdmUgbG93ZXItb3JkZXIgdW5pdHMgYXJlIGNvbnZlcnRlZCB0byBoaWdoZXIgb3JkZXIgdW5pdHMgKHRoZXJlIG11c3QgYmUgc3VjaCBhIGhpZ2hlciBvcmRlciB1bml0LCBvdGhlcndpc2VcbiAgICogICB0aGUgb3ZlcmFsbCB2YWx1ZSB3b3VsZCBiZSBuZWdhdGl2ZSwgc2VlIHRoaXJkIGV4YW1wbGUpXG4gICAqIC0gZnJhY3Rpb25hbCB2YWx1ZXMgZm9yIGhpZ2hlci1vcmRlciB1bml0cyBhcmUgY29udmVydGVkIHRvIGxvd2VyLW9yZGVyIHVuaXRzIChpZiBwb3NzaWJsZSwgc2VlIGZvdXJ0aCBleGFtcGxlKVxuICAgKlxuICAgKiBJZiB0aGUgb3ZlcmFsbCB2YWx1ZSBpcyBuZWdhdGl2ZSwgdGhlIHJlc3VsdCBvZiB0aGlzIG1ldGhvZCBpcyBlcXVpdmFsZW50IHRvIGB0aGlzLm5lZ2F0ZSgpLm5vcm1hbGl6ZSgpLm5lZ2F0ZSgpYC5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDUwMDAgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgZGF5czogNTAwMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTIsIG1pbnV0ZXM6IC00NSB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDE1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLjUsIGRheXM6IDAsIGhvdXJzOiAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAyLCBkYXlzOiAxODIsIGhvdXJzOiAxMiB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbm9ybWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIG5vcm1hbGl6ZVZhbHVlcyh0aGlzLm1hdHJpeCwgdmFscyk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiB2YWxzIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2NhbGUgdW5pdHMgdG8gaXRzIGxhcmdlc3QgcmVwcmVzZW50YXRpb25cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogOTAwMDAgfSkucmVzY2FsZSgpLnRvT2JqZWN0KCkgLy89PiB7IG1pbnV0ZXM6IDEsIHNlY29uZHM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICByZXNjYWxlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB2YWxzID0gcmVtb3ZlWmVyb2VzKHRoaXMubm9ybWFsaXplKCkuc2hpZnRUb0FsbCgpLnRvT2JqZWN0KCkpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogdmFscyB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHNoaWZ0VG8oLi4udW5pdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1bml0cyA9IHVuaXRzLm1hcCgodSkgPT4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KSk7XG5cbiAgICBjb25zdCBidWlsdCA9IHt9LFxuICAgICAgYWNjdW11bGF0ZWQgPSB7fSxcbiAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbGV0IGxhc3RVbml0O1xuXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKHVuaXRzLmluZGV4T2YoaykgPj0gMCkge1xuICAgICAgICBsYXN0VW5pdCA9IGs7XG5cbiAgICAgICAgbGV0IG93biA9IDA7XG5cbiAgICAgICAgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XG4gICAgICAgIGZvciAoY29uc3QgYWsgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgICAgICBvd24gKz0gdGhpcy5tYXRyaXhbYWtdW2tdICogYWNjdW11bGF0ZWRbYWtdO1xuICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIHRoYXQncyBhbHJlYWR5IGluIHRoaXMgdW5pdFxuICAgICAgICBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgICBvd24gKz0gdmFsc1trXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9ubHkga2VlcCB0aGUgaW50ZWdlciBwYXJ0IGZvciBub3cgaW4gdGhlIGhvcGVzIG9mIHB1dHRpbmcgYW55IGRlY2ltYWwgcGFydFxuICAgICAgICAvLyBpbnRvIGEgc21hbGxlciB1bml0IGxhdGVyXG4gICAgICAgIGNvbnN0IGkgPSBNYXRoLnRydW5jKG93bik7XG4gICAgICAgIGJ1aWx0W2tdID0gaTtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSAob3duICogMTAwMCAtIGkgKiAxMDAwKSAvIDEwMDA7XG5cbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gdmFsc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbnl0aGluZyBsZWZ0b3ZlciBiZWNvbWVzIHRoZSBkZWNpbWFsIGZvciB0aGUgbGFzdCB1bml0XG4gICAgLy8gbGFzdFVuaXQgbXVzdCBiZSBkZWZpbmVkIHNpbmNlIHVuaXRzIGlzIG5vdCBlbXB0eVxuICAgIGZvciAoY29uc3Qga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz1cbiAgICAgICAgICBrZXkgPT09IGxhc3RVbml0ID8gYWNjdW11bGF0ZWRba2V5XSA6IGFjY3VtdWxhdGVkW2tleV0gLyB0aGlzLm1hdHJpeFtsYXN0VW5pdF1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIGJ1aWx0KTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IGJ1aWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoaWZ0IHRoaXMgRHVyYXRpb24gdG8gYWxsIGF2YWlsYWJsZSB1bml0cy5cbiAgICogU2FtZSBhcyBzaGlmdFRvKFwieWVhcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCIpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2hpZnRUb0FsbCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuc2hpZnRUbyhcbiAgICAgIFwieWVhcnNcIixcbiAgICAgIFwibW9udGhzXCIsXG4gICAgICBcIndlZWtzXCIsXG4gICAgICBcImRheXNcIixcbiAgICAgIFwiaG91cnNcIixcbiAgICAgIFwibWludXRlc1wiLFxuICAgICAgXCJzZWNvbmRzXCIsXG4gICAgICBcIm1pbGxpc2Vjb25kc1wiXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5lZ2F0aXZlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkubmVnYXRlKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IC0xLCBzZWNvbmRzOiAtMzAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIG5lZ2F0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgbmVnYXRlZCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcykpIHtcbiAgICAgIG5lZ2F0ZWRba10gPSB0aGlzLnZhbHVlc1trXSA9PT0gMCA/IDAgOiAtdGhpcy52YWx1ZXNba107XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogbmVnYXRlZCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCB1bml0cyB3aXRoIHZhbHVlcyBlcXVhbCB0byAwIGZyb20gdGhpcyBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiAwLCBob3VyczogMCwgbWludXRlczogMCB9KS5yZW1vdmVaZXJvcygpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAyIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICByZW1vdmVaZXJvcygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdmFscyA9IHJlbW92ZVplcm9lcyh0aGlzLnZhbHVlcyk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiB2YWxzIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhcnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgeWVhcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnllYXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBxdWFydGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMucXVhcnRlcnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtb250aHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1vbnRocyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2Vla3NcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMud2Vla3MgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheXMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuZGF5cyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG91cnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaG91cnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmhvdXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbnV0ZXMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5zZWNvbmRzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBtaWxsaXNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbGxpc2Vjb25kcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgKiBvbiBpbnZhbGlkIERhdGVUaW1lcyBvciBJbnRlcnZhbHMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcSh2MSwgdjIpIHtcbiAgICAgIC8vIENvbnNpZGVyIDAgYW5kIHVuZGVmaW5lZCBhcyBlcXVhbFxuICAgICAgaWYgKHYxID09PSB1bmRlZmluZWQgfHwgdjEgPT09IDApIHJldHVybiB2MiA9PT0gdW5kZWZpbmVkIHx8IHYyID09PSAwO1xuICAgICAgcmV0dXJuIHYxID09PSB2MjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoIWVxKHRoaXMudmFsdWVzW3VdLCBvdGhlci52YWx1ZXNbdV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsICJpbXBvcnQgRGF0ZVRpbWUsIHsgZnJpZW5kbHlEYXRlVGltZSB9IGZyb20gXCIuL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgRHVyYXRpb24gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IHsgSW52YWxpZEFyZ3VtZW50RXJyb3IsIEludmFsaWRJbnRlcnZhbEVycm9yIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbXBsL2ludmFsaWQuanNcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcIi4vaW1wbC9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSBcIi4vaW1wbC9mb3JtYXRzLmpzXCI7XG5cbmNvbnN0IElOVkFMSUQgPSBcIkludmFsaWQgSW50ZXJ2YWxcIjtcblxuLy8gY2hlY2tzIGlmIHRoZSBzdGFydCBpcyBlcXVhbCB0byBvciBiZWZvcmUgdGhlIGVuZFxuZnVuY3Rpb24gdmFsaWRhdGVTdGFydEVuZChzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQgfHwgIXN0YXJ0LmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBzdGFydFwiKTtcbiAgfSBlbHNlIGlmICghZW5kIHx8ICFlbmQuaXNWYWxpZCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwibWlzc2luZyBvciBpbnZhbGlkIGVuZFwiKTtcbiAgfSBlbHNlIGlmIChlbmQgPCBzdGFydCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFxuICAgICAgXCJlbmQgYmVmb3JlIHN0YXJ0XCIsXG4gICAgICBgVGhlIGVuZCBvZiBhbiBpbnRlcnZhbCBtdXN0IGJlIGFmdGVyIGl0cyBzdGFydCwgYnV0IHlvdSBoYWQgc3RhcnQ9JHtzdGFydC50b0lTTygpfSBhbmQgZW5kPSR7ZW5kLnRvSVNPKCl9YFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBJbnRlcnZhbCBvYmplY3QgcmVwcmVzZW50cyBhIGhhbGYtb3BlbiBpbnRlcnZhbCBvZiB0aW1lLCB3aGVyZSBlYWNoIGVuZHBvaW50IGlzIGEge0BsaW5rIERhdGVUaW1lfS4gQ29uY2VwdHVhbGx5LCBpdCdzIGEgY29udGFpbmVyIGZvciB0aG9zZSB0d28gZW5kcG9pbnRzLCBhY2NvbXBhbmllZCBieSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgY29tcGFyaW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIHRoZSBtb3N0IGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBJbnRlcnZhbDpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYW4gSW50ZXJ2YWwsIHVzZSB7QGxpbmsgSW50ZXJ2YWwuZnJvbURhdGVUaW1lc30sIHtAbGluayBJbnRlcnZhbC5hZnRlcn0sIHtAbGluayBJbnRlcnZhbC5iZWZvcmV9LCBvciB7QGxpbmsgSW50ZXJ2YWwuZnJvbUlTT30uXG4gKiAqICoqQWNjZXNzb3JzKiogVXNlIHtAbGluayBJbnRlcnZhbCNzdGFydH0gYW5kIHtAbGluayBJbnRlcnZhbCNlbmR9IHRvIGdldCB0aGUgc3RhcnQgYW5kIGVuZC5cbiAqICogKipJbnRlcnJvZ2F0aW9uKiogVG8gYW5hbHl6ZSB0aGUgSW50ZXJ2YWwsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjY291bnR9LCB7QGxpbmsgSW50ZXJ2YWwjbGVuZ3RofSwge0BsaW5rIEludGVydmFsI2hhc1NhbWV9LCB7QGxpbmsgSW50ZXJ2YWwjY29udGFpbnN9LCB7QGxpbmsgSW50ZXJ2YWwjaXNBZnRlcn0sIG9yIHtAbGluayBJbnRlcnZhbCNpc0JlZm9yZX0uXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKiBUbyBjcmVhdGUgb3RoZXIgSW50ZXJ2YWxzIG91dCBvZiB0aGlzIG9uZSwgdXNlIHtAbGluayBJbnRlcnZhbCNzZXR9LCB7QGxpbmsgSW50ZXJ2YWwjc3BsaXRBdH0sIHtAbGluayBJbnRlcnZhbCNzcGxpdEJ5fSwge0BsaW5rIEludGVydmFsI2RpdmlkZUVxdWFsbHl9LCB7QGxpbmsgSW50ZXJ2YWwubWVyZ2V9LCB7QGxpbmsgSW50ZXJ2YWwueG9yfSwge0BsaW5rIEludGVydmFsI3VuaW9ufSwge0BsaW5rIEludGVydmFsI2ludGVyc2VjdGlvbn0sIG9yIHtAbGluayBJbnRlcnZhbCNkaWZmZXJlbmNlfS5cbiAqICogKipDb21wYXJpc29uKiogVG8gY29tcGFyZSB0aGlzIEludGVydmFsIHRvIGFub3RoZXIgb25lLCB1c2Uge0BsaW5rIEludGVydmFsI2VxdWFsc30sIHtAbGluayBJbnRlcnZhbCNvdmVybGFwc30sIHtAbGluayBJbnRlcnZhbCNhYnV0c1N0YXJ0fSwge0BsaW5rIEludGVydmFsI2FidXRzRW5kfSwge0BsaW5rIEludGVydmFsI2VuZ3VsZnN9XG4gKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgSW50ZXJ2YWwgaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgSW50ZXJ2YWwjdG9TdHJpbmd9LCB7QGxpbmsgSW50ZXJ2YWwjdG9Mb2NhbGVTdHJpbmd9LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU099LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU09EYXRlfSwge0BsaW5rIEludGVydmFsI3RvSVNPVGltZX0sIHtAbGluayBJbnRlcnZhbCN0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgSW50ZXJ2YWwjdG9EdXJhdGlvbn0uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVydmFsIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnMgPSBjb25maWcuc3RhcnQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5lID0gY29uZmlnLmVuZDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkludGVydmFsID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgSW50ZXJ2YWwgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBJbnRlcnZhbCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkSW50ZXJ2YWxFcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7IGludmFsaWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGFuIGVuZCBEYXRlVGltZS4gSW5jbHVzaXZlIG9mIHRoZSBzdGFydCBidXQgbm90IHRoZSBlbmQuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCBidWlsdFN0YXJ0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCksXG4gICAgICBidWlsdEVuZCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcblxuICAgIGNvbnN0IHZhbGlkYXRlRXJyb3IgPSB2YWxpZGF0ZVN0YXJ0RW5kKGJ1aWx0U3RhcnQsIGJ1aWx0RW5kKTtcblxuICAgIGlmICh2YWxpZGF0ZUVycm9yID09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoe1xuICAgICAgICBzdGFydDogYnVpbHRTdGFydCxcbiAgICAgICAgZW5kOiBidWlsdEVuZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVFcnJvcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgYWZ0ZXIoc3RhcnQsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0LCBkdC5wbHVzKGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIGVuZCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgYmFja3dhcmRzIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBiZWZvcmUoZW5kLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLFxuICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQubWludXMoZHVyKSwgZHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIElTTyA4NjAxIHN0cmluZy5cbiAgICogQWNjZXB0cyBgPHN0YXJ0Pi88ZW5kPmAsIGA8c3RhcnQ+LzxkdXJhdGlvbj5gLCBhbmQgYDxkdXJhdGlvbj4vPGVuZD5gIGZvcm1hdHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIG9wdGlvbnMgdG8gcGFzcyB7QGxpbmsgRGF0ZVRpbWUjZnJvbUlTT30gYW5kIG9wdGlvbmFsbHkge0BsaW5rIER1cmF0aW9uI2Zyb21JU099XG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgY29uc3QgW3MsIGVdID0gKHRleHQgfHwgXCJcIikuc3BsaXQoXCIvXCIsIDIpO1xuICAgIGlmIChzICYmIGUpIHtcbiAgICAgIGxldCBzdGFydCwgc3RhcnRJc1ZhbGlkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSBEYXRlVGltZS5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBzdGFydElzVmFsaWQgPSBzdGFydC5pc1ZhbGlkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzdGFydElzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGVuZCwgZW5kSXNWYWxpZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGVuZCA9IERhdGVUaW1lLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGVuZElzVmFsaWQgPSBlbmQuaXNWYWxpZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZW5kSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhcnRJc1ZhbGlkICYmIGVuZElzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydElzVmFsaWQpIHtcbiAgICAgICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUlTTyhlLCBvcHRzKTtcbiAgICAgICAgaWYgKGR1ci5pc1ZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIEludGVydmFsLmFmdGVyKHN0YXJ0LCBkdXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZElzVmFsaWQpIHtcbiAgICAgICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUlTTyhzLCBvcHRzKTtcbiAgICAgICAgaWYgKGR1ci5pc1ZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIEludGVydmFsLmJlZm9yZShlbmQsIGR1cik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIEludGVydmFsLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNJbnRlcnZhbChvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkludGVydmFsKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdGFydCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHR5cGUge0RhdGVUaW1lfVxuICAgKi9cbiAgZ2V0IHN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnMgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVuZCBvZiB0aGUgSW50ZXJ2YWwuIFRoaXMgaXMgdGhlIGZpcnN0IGluc3RhbnQgd2hpY2ggaXMgbm90IHBhcnQgb2YgdGhlIGludGVydmFsXG4gICAqIChJbnRlcnZhbCBpcyBoYWxmLW9wZW4pLlxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxhc3QgRGF0ZVRpbWUgaW5jbHVkZWQgaW4gdGhlIGludGVydmFsIChzaW5jZSBlbmQgaXMgbm90IHBhcnQgb2YgdGhlIGludGVydmFsKVxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgbGFzdERhdGVUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyAodGhpcy5lID8gdGhpcy5lLm1pbnVzKDEpIDogbnVsbCkgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkUmVhc29uID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbCBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIHJldHVybiB0aGUgbGVuZ3RoIGluLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBsZW5ndGgodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0R1cmF0aW9uKC4uLlt1bml0XSkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LlxuICAgKiBVbmxpa2Uge0BsaW5rIEludGVydmFsI2xlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheSdcbiAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPydcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnVzZUxvY2FsZVdlZWtzPWZhbHNlXSAtIElmIHRydWUsIHVzZSB3ZWVrcyBiYXNlZCBvbiB0aGUgbG9jYWxlLCBpLmUuIHVzZSB0aGUgbG9jYWxlLWRlcGVuZGVudCBzdGFydCBvZiB0aGUgd2VlazsgdGhpcyBvcGVyYXRpb24gd2lsbCBhbHdheXMgdXNlIHRoZSBsb2NhbGUgb2YgdGhlIHN0YXJ0IERhdGVUaW1lXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvdW50KHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiLCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCwgb3B0cyk7XG4gICAgbGV0IGVuZDtcbiAgICBpZiAob3B0cz8udXNlTG9jYWxlV2Vla3MpIHtcbiAgICAgIGVuZCA9IHRoaXMuZW5kLnJlY29uZmlndXJlKHsgbG9jYWxlOiBzdGFydC5sb2NhbGUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZCA9IHRoaXMuZW5kO1xuICAgIH1cbiAgICBlbmQgPSBlbmQuc3RhcnRPZih1bml0LCBvcHRzKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihlbmQuZGlmZihzdGFydCwgdW5pdCkuZ2V0KHVuaXQpKSArIChlbmQudmFsdWVPZigpICE9PSB0aGlzLmVuZC52YWx1ZU9mKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgYW5kIGVuZCBhcmUgYm90aCBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNTYW1lKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5pc0VtcHR5KCkgfHwgdGhpcy5lLm1pbnVzKDEpLmhhc1NhbWUodGhpcy5zLCB1bml0KSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgRGF0ZVRpbWVzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zLnZhbHVlT2YoKSA9PT0gdGhpcy5lLnZhbHVlT2YoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWZ0ZXIgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQWZ0ZXIoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPiBkYXRlVGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGJlZm9yZSB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNCZWZvcmUoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLmUgPD0gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBjb250YWlucyB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgY29udGFpbnMoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPD0gZGF0ZVRpbWUgJiYgdGhpcy5lID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRzXCIgdGhlIHN0YXJ0IGFuZC9vciBlbmQgZGF0ZXMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSB2YWx1ZXMgdG8gc2V0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5zdGFydCAtIHRoZSBzdGFydGluZyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuZW5kIC0gdGhlIGVuZGluZyBEYXRlVGltZVxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHNldCh7IHN0YXJ0LCBlbmQgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0IHx8IHRoaXMucywgZW5kIHx8IHRoaXMuZSk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBhdCBlYWNoIG9mIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRBdCguLi5kYXRlVGltZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHNvcnRlZCA9IGRhdGVUaW1lc1xuICAgICAgICAubWFwKGZyaWVuZGx5RGF0ZVRpbWUpXG4gICAgICAgIC5maWx0ZXIoKGQpID0+IHRoaXMuY29udGFpbnMoZCkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnRvTWlsbGlzKCkgLSBiLnRvTWlsbGlzKCkpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpID0gMDtcblxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBjb25zdCBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRCeShkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpZHggPSAxLFxuICAgICAgbmV4dDtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgY29uc3QgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKCh4KSA9PiB4ICogaWR4KSk7XG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIG92ZXJsYXBzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzRW5kKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgSW50ZXJ2YWwgZnVsbHkgY29udGFpbnMgdGhlIHNwZWNpZmllZCBJbnRlcnZhbCwgc3BlY2lmaWNhbGx5IGlmIHRoZSBpbnRlcnNlY3QgKG9mIHRoaXMgSW50ZXJ2YWwgYW5kIHRoZSBvdGhlciBJbnRlcnZhbCkgaXMgZXF1YWwgdG8gdGhlIG90aGVyIEludGVydmFsOyBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID49IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYW4gZXF1aXZhbGVudCBtaW5pbWFsIHNldCBvZiBJbnRlcnZhbHMuXG4gICAqIENvbWJpbmVzIG92ZXJsYXBwaW5nIGFuZCBhZGphY2VudCBJbnRlcnZhbHMuXG4gICAqIFRoZSByZXN1bHRpbmcgYXJyYXkgd2lsbCBjb250YWluIHRoZSBJbnRlcnZhbHMgaW4gYXNjZW5kaW5nIG9yZGVyLCB0aGF0IGlzLCBzdGFydGluZyB3aXRoIHRoZSBlYXJsaWVzdCBJbnRlcnZhbFxuICAgKiBhbmQgZW5kaW5nIHdpdGggdGhlIGxhdGVzdC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmdlKGludGVydmFscykge1xuICAgIGNvbnN0IFtmb3VuZCwgZmluYWxdID0gaW50ZXJ2YWxzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zIC0gYi5zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFtzb2ZhciwgY3VycmVudF0sIGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGN1cnJlbnQudW5pb24oaXRlbSldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtbXSwgbnVsbF1cbiAgICAgICk7XG4gICAgaWYgKGZpbmFsKSB7XG4gICAgICBmb3VuZC5wdXNoKGZpbmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgeG9yKGludGVydmFscykge1xuICAgIGxldCBzdGFydCA9IG51bGwsXG4gICAgICBjdXJyZW50Q291bnQgPSAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKChpKSA9PiBbXG4gICAgICAgIHsgdGltZTogaS5zLCB0eXBlOiBcInNcIiB9LFxuICAgICAgICB7IHRpbWU6IGkuZSwgdHlwZTogXCJlXCIgfSxcbiAgICAgIF0pLFxuICAgICAgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKSxcbiAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGlmZmVyZW5jZSguLi5pbnRlcnZhbHMpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSlcbiAgICAgIC5tYXAoKGkpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxuICAgICAgLmZpbHRlcigoaSkgPT4gaSAmJiAhaS5pc0VtcHR5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGBbJHt0aGlzLnMudG9JU08oKX0g4oCTICR7dGhpcy5lLnRvSVNPKCl9KWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciB0aGUgUkVQTC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgW1N5bWJvbC5mb3IoXCJub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbVwiKV0oKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGBJbnRlcnZhbCB7IHN0YXJ0OiAke3RoaXMucy50b0lTTygpfSwgZW5kOiAke3RoaXMuZS50b0lTTygpfSB9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBJbnRlcnZhbCB7IEludmFsaWQsIHJlYXNvbjogJHt0aGlzLmludmFsaWRSZWFzb259IH1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBJbnRlcnZhbC4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZVxuICAgKiBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzXG4gICAqIHtAbGluayBEYXRlVGltZS5EQVRFX0ZVTEx9IG9yIHtAbGluayBEYXRlVGltZS5USU1FX1NJTVBMRX0uIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZFxuICAgKiBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvbiBvZiB0aGVcbiAgICogSW50ZXJ2YWwgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS4gRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW5cbiAgICogc3BlY2lmaWVkLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZm9ybWF0T3B0cz1EYXRlVGltZS5EQVRFX1NIT1JUXSAtIEVpdGhlciBhIERhdGVUaW1lIHByZXNldCBvclxuICAgKiBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgc3RhcnQgRGF0ZVRpbWUuXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21JU08oJzIwMjItMTEtMDdUMDk6MDBaLzIwMjItMTEtMDhUMDk6MDBaJykudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiAxMS83LzIwMjIg4oCTIDExLzgvMjAyMlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDA5OjAwWi8yMDIyLTExLTA4VDA5OjAwWicpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7IC8vPT4gTm92ZW1iZXIgNyDigJMgOCwgMjAyMlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDA5OjAwWi8yMDIyLTExLTA4VDA5OjAwWicpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCwgeyBsb2NhbGU6ICdmci1GUicgfSk7IC8vPT4gN+KAkzggbm92ZW1icmUgMjAyMlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDE3OjAwWi8yMDIyLTExLTA3VDE5OjAwWicpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiA2OjAwIOKAkyA4OjAwIFBNXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21JU08oJzIwMjItMTEtMDdUMTc6MDBaLzIwMjItMTEtMDdUMTk6MDBaJykudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gTW9uLCBOb3YgMDcsIDY6MDAg4oCTIDg6MDAgcFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0xvY2FsZVN0cmluZyhmb3JtYXRPcHRzID0gRm9ybWF0cy5EQVRFX1NIT1JULCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5zLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0SW50ZXJ2YWwodGhpcylcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTyhvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU08ob3B0cyl9LyR7dGhpcy5lLnRvSVNPKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGRhdGUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIHRpbWUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT0RhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU09EYXRlKCl9LyR7dGhpcy5lLnRvSVNPRGF0ZSgpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRpbWUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIGRhdGUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPVGltZShvcHRzKX0vJHt0aGlzLmUudG9JU09UaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXRcbiAgICogc3RyaW5nLiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIEludGVydmFsI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlXG4gICAqIGZvcm1hdHRpbmcgdG9vbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgLSBUaGUgZm9ybWF0IHN0cmluZy4gVGhpcyBzdHJpbmcgZm9ybWF0cyB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLlxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSBmb3IgZGV0YWlscy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gQSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZFxuICAgKiByZXByZXNlbnRhdGlvbnMuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGRhdGVGb3JtYXQsIHsgc2VwYXJhdG9yID0gXCIg4oCTIFwiIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRDtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvRm9ybWF0KGRhdGVGb3JtYXQpfSR7c2VwYXJhdG9yfSR7dGhpcy5lLnRvRm9ybWF0KGRhdGVGb3JtYXQpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmUuZGlmZih0aGlzLnMsIHVuaXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKVxuICAgKi9cbiAgbWFwRW5kcG9pbnRzKG1hcEZuKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMobWFwRm4odGhpcy5zKSwgbWFwRm4odGhpcy5lKSk7XG4gIH1cbn1cbiIsICJpbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IExvY2FsZSBmcm9tIFwiLi9pbXBsL2xvY2FsZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuXG5pbXBvcnQgeyBoYXNMb2NhbGVXZWVrSW5mbywgaGFzUmVsYXRpdmUgfSBmcm9tIFwiLi9pbXBsL3V0aWwuanNcIjtcblxuLyoqXG4gKiBUaGUgSW5mbyBjbGFzcyBjb250YWlucyBzdGF0aWMgbWV0aG9kcyBmb3IgcmV0cmlldmluZyBnZW5lcmFsIHRpbWUgYW5kIGRhdGUgcmVsYXRlZCBkYXRhLiBGb3IgZXhhbXBsZSwgaXQgaGFzIG1ldGhvZHMgZm9yIGZpbmRpbmcgb3V0IGlmIGEgdGltZSB6b25lIGhhcyBhIERTVCwgZm9yIGxpc3RpbmcgdGhlIG1vbnRocyBpbiBhbnkgc3VwcG9ydGVkIGxvY2FsZSwgYW5kIGZvciBkaXNjb3ZlcmluZyB3aGljaCBvZiBMdXhvbiBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIHtcbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBjb250YWlucyBhIERTVC5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBab25lIHRvIGNoZWNrLiBEZWZhdWx0cyB0byB0aGUgZW52aXJvbm1lbnQncyBsb2NhbCB6b25lLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGhhc0RTVCh6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmUpIHtcbiAgICBjb25zdCBwcm90byA9IERhdGVUaW1lLm5vdygpLnNldFpvbmUoem9uZSkuc2V0KHsgbW9udGg6IDEyIH0pO1xuXG4gICAgcmV0dXJuICF6b25lLmlzVW5pdmVyc2FsICYmIHByb3RvLm9mZnNldCAhPT0gcHJvdG8uc2V0KHsgbW9udGg6IDYgfSkub2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBpcyBhIHZhbGlkIElBTkEgc3BlY2lmaWVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gem9uZSAtIFpvbmUgdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkWm9uZSh6b25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lI2lzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVab25lKGlucHV0KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWtkYXkgb24gd2hpY2ggdGhlIHdlZWsgc3RhcnRzIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gbG9jYWxlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBzdGFydCBvZiB0aGUgd2VlaywgMSBmb3IgTW9uZGF5IHRocm91Z2ggNyBmb3IgU3VuZGF5XG4gICAqL1xuICBzdGF0aWMgZ2V0U3RhcnRPZldlZWsoeyBsb2NhbGUgPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlKSkuZ2V0U3RhcnRPZldlZWsoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbmltdW0gbnVtYmVyIG9mIGRheXMgbmVjZXNzYXJ5IGluIGEgd2VlayBiZWZvcmUgaXQgaXMgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBuZXh0IHllYXIgYWNjb3JkaW5nXG4gICAqIHRvIHRoZSBnaXZlbiBsb2NhbGUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBnZXRNaW5pbXVtRGF5c0luRmlyc3RXZWVrKHsgbG9jYWxlID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSkpLmdldE1pbkRheXNJbkZpcnN0V2VlaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2Vla2RheXMsIHdoaWNoIGFyZSBjb25zaWRlcmVkIHRoZSB3ZWVrZW5kIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gbG9jYWxlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHJldHVybnMge251bWJlcltdfSBhbiBhcnJheSBvZiB3ZWVrZGF5cywgMSBmb3IgTW9uZGF5IHRocm91Z2ggNyBmb3IgU3VuZGF5XG4gICAqL1xuICBzdGF0aWMgZ2V0V2Vla2VuZFdlZWtkYXlzKHsgbG9jYWxlID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge30pIHtcbiAgICAvLyBjb3B5IHRoZSBhcnJheSwgYmVjYXVzZSB3ZSBjYWNoZSBpdCBpbnRlcm5hbGx5XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUpKS5nZXRXZWVrZW5kRGF5cygpLnNsaWNlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgbW9udGggbmFtZXMuXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygpWzBdIC8vPT4gJ0phbnVhcnknXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdzaG9ydCcpWzBdIC8vPT4gJ0phbidcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ251bWVyaWMnKVswXSAvLz0+ICcxJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9IClbMF0gLy89PiAnamFudi4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2aEnXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdsb25nJywgeyBvdXRwdXRDYWxlbmRhcjogJ2lzbGFtaWMnIH0pWzBdIC8vPT4gJ1JhYmnKuyBJJ1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtb250aHMoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsLCBvdXRwdXRDYWxlbmRhciA9IFwiZ3JlZ29yeVwiIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikpLm1vbnRocyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgbW9udGggbmFtZXMuXG4gICAqIEZvcm1hdCBtb250aHMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSBtb250aHMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIHRoZSBkYXkgb2YgdGhlIG1vbnRoLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyNtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbW9udGhzRm9ybWF0KFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSBcImdyZWdvcnlcIiB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSB3ZWVrIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSB3ZWVrZGF5IHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoKVswXSAvLz0+ICdNb25kYXknXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JylbMF0gLy89PiAnTW9uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnZnItQ0EnIH0pWzBdIC8vPT4gJ2x1bi4nXG4gICAqIEBleGFtcGxlIEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6ICdhcicgfSlbMF0gLy89PiAn2KfZhNin2KvZhtmK2YYnXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIHdlZWtkYXlzKGxlbmd0aCA9IFwibG9uZ1wiLCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCB3ZWVrIG5hbWVzLlxuICAgKiBGb3JtYXQgd2Vla2RheXMgZGlmZmVyIGZyb20gc3RhbmRhbG9uZSB3ZWVrZGF5cyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gbW9yZSBkYXRlIGluZm9ybWF0aW9uLiBJbiBzb21lIGxhbmd1YWdlcywgdGhhdFxuICAgKiBjaGFuZ2VzIHRoZSBzdHJpbmcuXG4gICAqIFNlZSB7QGxpbmsgSW5mbyN3ZWVrZGF5c31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPW51bGxdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgd2Vla2RheXNGb3JtYXQoXG4gICAgbGVuZ3RoID0gXCJsb25nXCIsXG4gICAgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fVxuICApIHtcbiAgICByZXR1cm4gKGxvY09iaiB8fCBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKSkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgbWVyaWRpZW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoKSAvLz0+IFsgJ0FNJywgJ1BNJyBdXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKHsgbG9jYWxlOiAnbXknIH0pIC8vPT4gWyAn4YCU4YC24YCU4YCA4YC6JywgJ+GAiuGAlOGAsScgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBtZXJpZGllbXMoeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGVyYXMsIHN1Y2ggYXMgWydCQycsICdBRCddLiBUaGUgbG9jYWxlIGNhbiBiZSBzcGVjaWZpZWQsIGJ1dCB0aGUgY2FsZW5kYXIgc3lzdGVtIGlzIGFsd2F5cyBHcmVnb3JpYW4uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdzaG9ydCddIC0gdGhlIGxlbmd0aCBvZiB0aGUgZXJhIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwic2hvcnRcIiBvciBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygpIC8vPT4gWyAnQkMnLCAnQUQnIF1cbiAgICogQGV4YW1wbGUgSW5mby5lcmFzKCdsb25nJykgLy89PiBbICdCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycsIHsgbG9jYWxlOiAnZnInIH0pIC8vPT4gWyAnYXZhbnQgSsOpc3VzLUNocmlzdCcsICdhcHLDqHMgSsOpc3VzLUNocmlzdCcgXVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyBlcmFzKGxlbmd0aCA9IFwic2hvcnRcIiwgeyBsb2NhbGUgPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVsbCwgXCJncmVnb3J5XCIpLmVyYXMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNldCBvZiBhdmFpbGFibGUgZmVhdHVyZXMgaW4gdGhpcyBlbnZpcm9ubWVudC5cbiAgICogU29tZSBmZWF0dXJlcyBvZiBMdXhvbiBhcmUgbm90IGF2YWlsYWJsZSBpbiBhbGwgZW52aXJvbm1lbnRzLiBGb3IgZXhhbXBsZSwgb24gb2xkZXIgYnJvd3NlcnMsIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGluZyBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgdGhhdCdzIHRoZSBjYXNlLlxuICAgKiBLZXlzOlxuICAgKiAqIGByZWxhdGl2ZWA6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmdcbiAgICogKiBgbG9jYWxlV2Vla2A6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyBkaWZmZXJlbnQgd2Vla2RheXMgZm9yIHRoZSBzdGFydCBvZiB0aGUgd2VlayBiYXNlZCBvbiB0aGUgbG9jYWxlXG4gICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgcmVsYXRpdmU6IGZhbHNlLCBsb2NhbGVXZWVrOiB0cnVlIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGZlYXR1cmVzKCkge1xuICAgIHJldHVybiB7IHJlbGF0aXZlOiBoYXNSZWxhdGl2ZSgpLCBsb2NhbGVXZWVrOiBoYXNMb2NhbGVXZWVrSW5mbygpIH07XG4gIH1cbn1cbiIsICJpbXBvcnQgRHVyYXRpb24gZnJvbSBcIi4uL2R1cmF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGRheURpZmYoZWFybGllciwgbGF0ZXIpIHtcbiAgY29uc3QgdXRjRGF5U3RhcnQgPSAoZHQpID0+IGR0LnRvVVRDKDAsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS5zdGFydE9mKFwiZGF5XCIpLnZhbHVlT2YoKSxcbiAgICBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcyhcImRheXNcIikpO1xufVxuXG5mdW5jdGlvbiBoaWdoT3JkZXJEaWZmcyhjdXJzb3IsIGxhdGVyLCB1bml0cykge1xuICBjb25zdCBkaWZmZXJzID0gW1xuICAgIFtcInllYXJzXCIsIChhLCBiKSA9PiBiLnllYXIgLSBhLnllYXJdLFxuICAgIFtcInF1YXJ0ZXJzXCIsIChhLCBiKSA9PiBiLnF1YXJ0ZXIgLSBhLnF1YXJ0ZXIgKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDRdLFxuICAgIFtcIm1vbnRoc1wiLCAoYSwgYikgPT4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyXSxcbiAgICBbXG4gICAgICBcIndlZWtzXCIsXG4gICAgICAoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gZGF5RGlmZihhLCBiKTtcbiAgICAgICAgcmV0dXJuIChkYXlzIC0gKGRheXMgJSA3KSkgLyA3O1xuICAgICAgfSxcbiAgICBdLFxuICAgIFtcImRheXNcIiwgZGF5RGlmZl0sXG4gIF07XG5cbiAgY29uc3QgcmVzdWx0cyA9IHt9O1xuICBjb25zdCBlYXJsaWVyID0gY3Vyc29yO1xuICBsZXQgbG93ZXN0T3JkZXIsIGhpZ2hXYXRlcjtcblxuICAvKiBUaGlzIGxvb3AgdHJpZXMgdG8gZGlmZiB1c2luZyBsYXJnZXIgdW5pdHMgZmlyc3QuXG4gICAgIElmIHdlIG92ZXJzaG9vdCwgd2UgYmFja3RyYWNrIGFuZCB0cnkgdGhlIG5leHQgc21hbGxlciB1bml0LlxuICAgICBcImN1cnNvclwiIHN0YXJ0cyBvdXQgYXQgdGhlIGVhcmxpZXIgdGltZXN0YW1wIGFuZCBtb3ZlcyBjbG9zZXIgYW5kIGNsb3NlciB0byBcImxhdGVyXCJcbiAgICAgYXMgd2UgdXNlIHNtYWxsZXIgYW5kIHNtYWxsZXIgdW5pdHMuXG4gICAgIGhpZ2hXYXRlciBrZWVwcyB0cmFjayBvZiB3aGVyZSB3ZSB3b3VsZCBiZSBpZiB3ZSBhZGRlZCBvbmUgbW9yZSBvZiB0aGUgc21hbGxlc3QgdW5pdCxcbiAgICAgdGhpcyBpcyB1c2VkIGxhdGVyIHRvIHBvdGVudGlhbGx5IGNvbnZlcnQgYW55IGRpZmZlcmVuY2Ugc21hbGxlciB0aGFuIHRoZSBzbWFsbGVzdCBoaWdoZXIgb3JkZXIgdW5pdFxuICAgICBpbnRvIGEgZnJhY3Rpb24gb2YgdGhhdCBzbWFsbGVzdCBoaWdoZXIgb3JkZXIgdW5pdFxuICAqL1xuICBmb3IgKGNvbnN0IFt1bml0LCBkaWZmZXJdIG9mIGRpZmZlcnMpIHtcbiAgICBpZiAodW5pdHMuaW5kZXhPZih1bml0KSA+PSAwKSB7XG4gICAgICBsb3dlc3RPcmRlciA9IHVuaXQ7XG5cbiAgICAgIHJlc3VsdHNbdW5pdF0gPSBkaWZmZXIoY3Vyc29yLCBsYXRlcik7XG4gICAgICBoaWdoV2F0ZXIgPSBlYXJsaWVyLnBsdXMocmVzdWx0cyk7XG5cbiAgICAgIGlmIChoaWdoV2F0ZXIgPiBsYXRlcikge1xuICAgICAgICAvLyB3ZSBvdmVyc2hvdCB0aGUgZW5kIHBvaW50LCBiYWNrdHJhY2sgY3Vyc29yIGJ5IDFcbiAgICAgICAgcmVzdWx0c1t1bml0XS0tO1xuICAgICAgICBjdXJzb3IgPSBlYXJsaWVyLnBsdXMocmVzdWx0cyk7XG5cbiAgICAgICAgLy8gaWYgd2UgYXJlIHN0aWxsIG92ZXJzaG9vdGluZyBub3csIHdlIG5lZWQgdG8gYmFja3RyYWNrIGFnYWluXG4gICAgICAgIC8vIHRoaXMgaGFwcGVucyBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgd2hlbiBkaWZmaW5nIHRpbWVzIGluIGRpZmZlcmVudCB6b25lcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGlzIGNhbGN1bGF0aW9uIGlnbm9yZXMgdGltZSB6b25lc1xuICAgICAgICBpZiAoY3Vyc29yID4gbGF0ZXIpIHtcbiAgICAgICAgICAvLyBrZWVwIHRoZSBcIm92ZXJzaG90IGJ5IDFcIiBhcm91bmQgYXMgaGlnaFdhdGVyXG4gICAgICAgICAgaGlnaFdhdGVyID0gY3Vyc29yO1xuICAgICAgICAgIC8vIGJhY2t0cmFjayBjdXJzb3IgYnkgMVxuICAgICAgICAgIHJlc3VsdHNbdW5pdF0tLTtcbiAgICAgICAgICBjdXJzb3IgPSBlYXJsaWVyLnBsdXMocmVzdWx0cyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvciA9IGhpZ2hXYXRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpIHtcbiAgbGV0IFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKTtcblxuICBjb25zdCByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjtcblxuICBjb25zdCBsb3dlck9yZGVyVW5pdHMgPSB1bml0cy5maWx0ZXIoXG4gICAgKHUpID0+IFtcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIl0uaW5kZXhPZih1KSA+PSAwXG4gICk7XG5cbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaGlnaFdhdGVyIDwgbGF0ZXIpIHtcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKHsgW2xvd2VzdE9yZGVyXTogMSB9KTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaFdhdGVyICE9PSBjdXJzb3IpIHtcbiAgICAgIHJlc3VsdHNbbG93ZXN0T3JkZXJdID0gKHJlc3VsdHNbbG93ZXN0T3JkZXJdIHx8IDApICsgcmVtYWluaW5nTWlsbGlzIC8gKGhpZ2hXYXRlciAtIGN1cnNvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZHVyYXRpb24gPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHJlc3VsdHMsIG9wdHMpO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKHJlbWFpbmluZ01pbGxpcywgb3B0cylcbiAgICAgIC5zaGlmdFRvKC4uLmxvd2VyT3JkZXJVbml0cylcbiAgICAgIC5wbHVzKGR1cmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBwYXJzZU1pbGxpcywgaXNVbmRlZmluZWQsIHVudHJ1bmNhdGVZZWFyLCBzaWduZWRPZmZzZXQsIGhhc093blByb3BlcnR5IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9mb3JtYXR0ZXIuanNcIjtcbmltcG9ydCBGaXhlZE9mZnNldFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IHsgZGlnaXRSZWdleCwgcGFyc2VEaWdpdHMgfSBmcm9tIFwiLi9kaWdpdHMuanNcIjtcbmltcG9ydCB7IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuXG5jb25zdCBNSVNTSU5HX0ZUUCA9IFwibWlzc2luZyBJbnRsLkRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMgc3VwcG9ydFwiO1xuXG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0ID0gKGkpID0+IGkpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoW3NdKSA9PiBwb3N0KHBhcnNlRGlnaXRzKHMpKSB9O1xufVxuXG5jb25zdCBOQlNQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xuY29uc3Qgc3BhY2VPck5CU1AgPSBgWyAke05CU1B9XWA7XG5jb25zdCBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsIFwiZ1wiKTtcblxuZnVuY3Rpb24gZml4TGlzdFJlZ2V4KHMpIHtcbiAgLy8gbWFrZSBkb3RzIG9wdGlvbmFsIGFuZCBhbHNvIG1ha2UgdGhlbSBsaXRlcmFsXG4gIC8vIG1ha2Ugc3BhY2UgYW5kIG5vbiBicmVha2FibGUgc3BhY2UgY2hhcmFjdGVycyBpbnRlcmNoYW5nZWFibGVcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuL2csIFwiXFxcXC4/XCIpLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIHNwYWNlT3JOQlNQKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9cXC4vZywgXCJcIikgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWxcbiAgICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgXCIgXCIpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXG4gICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oXCJ8XCIpKSxcbiAgICAgIGRlc2VyOiAoW3NdKSA9PlxuICAgICAgICBzdHJpbmdzLmZpbmRJbmRleCgoaSkgPT4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpKSArIHN0YXJ0SW5kZXgsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbLCBoLCBtXSkgPT4gc2lnbmVkT2Zmc2V0KGgsIG0pLCBncm91cHMgfTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcyB9O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB0b2tlblxuICogQHBhcmFtIHtMb2NhbGV9IGxvY1xuICovXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICBjb25zdCBvbmUgPSBkaWdpdFJlZ2V4KGxvYyksXG4gICAgdHdvID0gZGlnaXRSZWdleChsb2MsIFwiezJ9XCIpLFxuICAgIHRocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezN9XCIpLFxuICAgIGZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7NH1cIiksXG4gICAgc2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezZ9XCIpLFxuICAgIG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsIFwiezEsMn1cIiksXG4gICAgb25lVG9UaHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDN9XCIpLFxuICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezEsNn1cIiksXG4gICAgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsIFwiezEsOX1cIiksXG4gICAgdHdvVG9Gb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezIsNH1cIiksXG4gICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezQsNn1cIiksXG4gICAgbGl0ZXJhbCA9ICh0KSA9PiAoeyByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksIGRlc2VyOiAoW3NdKSA9PiBzLCBsaXRlcmFsOiB0cnVlIH0pLFxuICAgIHVuaXRhdGUgPSAodCkgPT4ge1xuICAgICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHQudmFsKSB7XG4gICAgICAgIC8vIGVyYVxuICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcInNob3J0XCIpLCAwKTtcbiAgICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKFwibG9uZ1wiKSwgMCk7XG4gICAgICAgIC8vIHllYXJzXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcInl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHNpeCk7XG4gICAgICAgIC8vIG1vbnRoc1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgdHJ1ZSksIDEpO1xuICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCB0cnVlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBkYXRlc1xuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgLy8gb3JkaW5hbHNcbiAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcbiAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgICAgLy8gdGltZVxuICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVUb05pbmUpO1xuICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIC8vIG1lcmlkaWVtXG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tZXJpZGllbXMoKSwgMCk7XG4gICAgICAgIC8vIHdlZWtZZWFyIChrKVxuICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgLy8gd2Vla051bWJlciAoVylcbiAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIHdlZWtkYXlzXG4gICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcbiAgICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwic2hvcnRcIiwgdHJ1ZSksIDEpO1xuICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIHRydWUpLCAxKTtcbiAgICAgICAgLy8gb2Zmc2V0L3pvbmVcbiAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoPzo6KCR7dHdvLnNvdXJjZX0pKT9gKSwgMik7XG4gICAgICAgIGNhc2UgXCJaWlpcIjpcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoYChbKy1dJHtvbmVPclR3by5zb3VyY2V9KSgke3R3by5zb3VyY2V9KT9gKSwgMik7XG4gICAgICAgIC8vIHdlIGRvbid0IHN1cHBvcnQgWlpaWiAoUFNUKSBvciBaWlpaWiAoUGFjaWZpYyBTdGFuZGFyZCBUaW1lKSBpbiBwYXJzaW5nXG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbnkgd2F5IHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGV5IGFyZVxuICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUoL1thLXpfKy0vXXsxLDI1Nn0/L2kpO1xuICAgICAgICAvLyB0aGlzIHNwZWNpYWwtY2FzZSBcInRva2VuXCIgcmVwcmVzZW50cyBhIHBsYWNlIHdoZXJlIGEgbWFjcm8tdG9rZW4gZXhwYW5kZWQgaW50byBhIHdoaXRlLXNwYWNlIGxpdGVyYWxcbiAgICAgICAgLy8gaW4gdGhpcyBjYXNlIHdlIGFjY2VwdCBhbnkgbm9uLW5ld2xpbmUgd2hpdGUtc3BhY2VcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKC9bXlxcU1xcblxccl0vKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFAsXG4gIH07XG5cbiAgdW5pdC50b2tlbiA9IHRva2VuO1xuXG4gIHJldHVybiB1bml0O1xufVxuXG5jb25zdCBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiLFxuICB9LFxuICBtb250aDoge1xuICAgIG51bWVyaWM6IFwiTVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIk1NXCIsXG4gICAgc2hvcnQ6IFwiTU1NXCIsXG4gICAgbG9uZzogXCJNTU1NXCIsXG4gIH0sXG4gIGRheToge1xuICAgIG51bWVyaWM6IFwiZFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImRkXCIsXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIixcbiAgfSxcbiAgZGF5cGVyaW9kOiBcImFcIixcbiAgZGF5UGVyaW9kOiBcImFcIixcbiAgaG91cjEyOiB7XG4gICAgbnVtZXJpYzogXCJoXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiaGhcIixcbiAgfSxcbiAgaG91cjI0OiB7XG4gICAgbnVtZXJpYzogXCJIXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiSEhcIixcbiAgfSxcbiAgbWludXRlOiB7XG4gICAgbnVtZXJpYzogXCJtXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwibW1cIixcbiAgfSxcbiAgc2Vjb25kOiB7XG4gICAgbnVtZXJpYzogXCJzXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwic3NcIixcbiAgfSxcbiAgdGltZVpvbmVOYW1lOiB7XG4gICAgbG9uZzogXCJaWlpaWlwiLFxuICAgIHNob3J0OiBcIlpaWlwiLFxuICB9LFxufTtcblxuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGZvcm1hdE9wdHMsIHJlc29sdmVkT3B0cykge1xuICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBwYXJ0O1xuXG4gIGlmICh0eXBlID09PSBcImxpdGVyYWxcIikge1xuICAgIGNvbnN0IGlzU3BhY2UgPSAvXlxccyskLy50ZXN0KHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogIWlzU3BhY2UsXG4gICAgICB2YWw6IGlzU3BhY2UgPyBcIiBcIiA6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IGZvcm1hdE9wdHNbdHlwZV07XG5cbiAgLy8gVGhlIHVzZXIgbWlnaHQgaGF2ZSBleHBsaWNpdGx5IHNwZWNpZmllZCBob3VyMTIgb3IgaG91ckN5Y2xlXG4gIC8vIGlmIHNvLCByZXNwZWN0IHRoZWlyIGRlY2lzaW9uXG4gIC8vIGlmIG5vdCwgcmVmZXIgYmFjayB0byB0aGUgcmVzb2x2ZWRPcHRzLCB3aGljaCBhcmUgYmFzZWQgb24gdGhlIGxvY2FsZVxuICBsZXQgYWN0dWFsVHlwZSA9IHR5cGU7XG4gIGlmICh0eXBlID09PSBcImhvdXJcIikge1xuICAgIGlmIChmb3JtYXRPcHRzLmhvdXIxMiAhPSBudWxsKSB7XG4gICAgICBhY3R1YWxUeXBlID0gZm9ybWF0T3B0cy5ob3VyMTIgPyBcImhvdXIxMlwiIDogXCJob3VyMjRcIjtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdE9wdHMuaG91ckN5Y2xlICE9IG51bGwpIHtcbiAgICAgIGlmIChmb3JtYXRPcHRzLmhvdXJDeWNsZSA9PT0gXCJoMTFcIiB8fCBmb3JtYXRPcHRzLmhvdXJDeWNsZSA9PT0gXCJoMTJcIikge1xuICAgICAgICBhY3R1YWxUeXBlID0gXCJob3VyMTJcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdHVhbFR5cGUgPSBcImhvdXIyNFwiO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0b2tlbnMgb25seSBkaWZmZXJlbnRpYXRlIGJldHdlZW4gMjQgaG91cnMgb3Igbm90LFxuICAgICAgLy8gc28gd2UgZG8gbm90IG5lZWQgdG8gY2hlY2sgaG91ckN5Y2xlIGhlcmUsIHdoaWNoIGlzIGxlc3Mgc3VwcG9ydGVkIGFueXdheXNcbiAgICAgIGFjdHVhbFR5cGUgPSByZXNvbHZlZE9wdHMuaG91cjEyID8gXCJob3VyMTJcIiA6IFwiaG91cjI0XCI7XG4gICAgfVxuICB9XG4gIGxldCB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFthY3R1YWxUeXBlXTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xuICB9XG5cbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgIHZhbCxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykge1xuICBjb25zdCByZSA9IHVuaXRzLm1hcCgodSkgPT4gdS5yZWdleCkucmVkdWNlKChmLCByKSA9PiBgJHtmfSgke3Iuc291cmNlfSlgLCBcIlwiKTtcbiAgcmV0dXJuIFtgXiR7cmV9JGAsIHVuaXRzXTtcbn1cblxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xuICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2gocmVnZXgpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgY29uc3QgYWxsID0ge307XG4gICAgbGV0IG1hdGNoSW5kZXggPSAxO1xuICAgIGZvciAoY29uc3QgaSBpbiBoYW5kbGVycykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xuICAgICAgICBjb25zdCBoID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgY29uc3QgdG9GaWVsZCA9ICh0b2tlbikgPT4ge1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICBjYXNlIFwic1wiOlxuICAgICAgICByZXR1cm4gXCJzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgY2FzZSBcImhcIjpcbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiBcImhvdXJcIjtcbiAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIFwib3JkaW5hbFwiO1xuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG4gICAgICBjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla2RheVwiO1xuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla051bWJlclwiO1xuICAgICAgY2FzZSBcImtcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla1llYXJcIjtcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBcInF1YXJ0ZXJcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBsZXQgem9uZSA9IG51bGw7XG4gIGxldCBzcGVjaWZpY09mZnNldDtcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnopKSB7XG4gICAgem9uZSA9IElBTkFab25lLmNyZWF0ZShtYXRjaGVzLnopO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLlopKSB7XG4gICAgaWYgKCF6b25lKSB7XG4gICAgICB6b25lID0gbmV3IEZpeGVkT2Zmc2V0Wm9uZShtYXRjaGVzLlopO1xuICAgIH1cbiAgICBzcGVjaWZpY09mZnNldCA9IG1hdGNoZXMuWjtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5xKSkge1xuICAgIG1hdGNoZXMuTSA9IChtYXRjaGVzLnEgLSAxKSAqIDMgKyAxO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLmgpKSB7XG4gICAgaWYgKG1hdGNoZXMuaCA8IDEyICYmIG1hdGNoZXMuYSA9PT0gMSkge1xuICAgICAgbWF0Y2hlcy5oICs9IDEyO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5oID09PSAxMiAmJiBtYXRjaGVzLmEgPT09IDApIHtcbiAgICAgIG1hdGNoZXMuaCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKG1hdGNoZXMuRyA9PT0gMCAmJiBtYXRjaGVzLnkpIHtcbiAgICBtYXRjaGVzLnkgPSAtbWF0Y2hlcy55O1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnUpKSB7XG4gICAgbWF0Y2hlcy5TID0gcGFyc2VNaWxsaXMobWF0Y2hlcy51KTtcbiAgfVxuXG4gIGNvbnN0IHZhbHMgPSBPYmplY3Qua2V5cyhtYXRjaGVzKS5yZWR1Y2UoKHIsIGspID0+IHtcbiAgICBjb25zdCBmID0gdG9GaWVsZChrKTtcbiAgICBpZiAoZikge1xuICAgICAgcltmXSA9IG1hdGNoZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gW3ZhbHMsIHpvbmUsIHNwZWNpZmljT2Zmc2V0XTtcbn1cblxubGV0IGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldER1bW15RGF0ZVRpbWUoKSB7XG4gIGlmICghZHVtbXlEYXRlVGltZUNhY2hlKSB7XG4gICAgZHVtbXlEYXRlVGltZUNhY2hlID0gRGF0ZVRpbWUuZnJvbU1pbGxpcygxNTU1NTU1NTU1NTU1KTtcbiAgfVxuXG4gIHJldHVybiBkdW1teURhdGVUaW1lQ2FjaGU7XG59XG5cbmZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7XG4gIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XG4gIGNvbnN0IHRva2VucyA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBsb2NhbGUpO1xuXG4gIGlmICh0b2tlbnMgPT0gbnVsbCB8fCB0b2tlbnMuaW5jbHVkZXModW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRNYWNyb1Rva2Vucyh0b2tlbnMsIGxvY2FsZSkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi50b2tlbnMubWFwKCh0KSA9PiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKSkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFRva2VuUGFyc2VyIHtcbiAgY29uc3RydWN0b3IobG9jYWxlLCBmb3JtYXQpIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB0aGlzLnRva2VucyA9IGV4cGFuZE1hY3JvVG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmb3JtYXQpLCBsb2NhbGUpO1xuICAgIHRoaXMudW5pdHMgPSB0aGlzLnRva2Vucy5tYXAoKHQpID0+IHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpKTtcbiAgICB0aGlzLmRpc3F1YWxpZnlpbmdVbml0ID0gdGhpcy51bml0cy5maW5kKCh0KSA9PiB0LmludmFsaWRSZWFzb24pO1xuXG4gICAgaWYgKCF0aGlzLmRpc3F1YWxpZnlpbmdVbml0KSB7XG4gICAgICBjb25zdCBbcmVnZXhTdHJpbmcsIGhhbmRsZXJzXSA9IGJ1aWxkUmVnZXgodGhpcy51bml0cyk7XG4gICAgICB0aGlzLnJlZ2V4ID0gUmVnRXhwKHJlZ2V4U3RyaW5nLCBcImlcIik7XG4gICAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgfVxuICB9XG5cbiAgZXhwbGFpbkZyb21Ub2tlbnMoaW5wdXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHsgaW5wdXQsIHRva2VuczogdGhpcy50b2tlbnMsIGludmFsaWRSZWFzb246IHRoaXMuaW52YWxpZFJlYXNvbiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBbcmF3TWF0Y2hlcywgbWF0Y2hlc10gPSBtYXRjaChpbnB1dCwgdGhpcy5yZWdleCwgdGhpcy5oYW5kbGVycyksXG4gICAgICAgIFtyZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0XSA9IG1hdGNoZXNcbiAgICAgICAgICA/IGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcylcbiAgICAgICAgICA6IFtudWxsLCBudWxsLCB1bmRlZmluZWRdO1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KG1hdGNoZXMsIFwiYVwiKSAmJiBoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcIkhcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICAgIFwiQ2FuJ3QgaW5jbHVkZSBtZXJpZGllbSB3aGVuIHNwZWNpZnlpbmcgMjQtaG91ciBmb3JtYXRcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIHRva2VuczogdGhpcy50b2tlbnMsXG4gICAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4LFxuICAgICAgICByYXdNYXRjaGVzLFxuICAgICAgICBtYXRjaGVzLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHpvbmUsXG4gICAgICAgIHNwZWNpZmljT2Zmc2V0LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzcXVhbGlmeWluZ1VuaXQ7XG4gIH1cblxuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNxdWFsaWZ5aW5nVW5pdCA/IHRoaXMuZGlzcXVhbGlmeWluZ1VuaXQuaW52YWxpZFJlYXNvbiA6IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCBwYXJzZXIgPSBuZXcgVG9rZW5QYXJzZXIobG9jYWxlLCBmb3JtYXQpO1xuICByZXR1cm4gcGFyc2VyLmV4cGxhaW5Gcm9tVG9rZW5zKGlucHV0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgY29uc3QgeyByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uIH0gPSBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpO1xuICByZXR1cm4gW3Jlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQsIGludmFsaWRSZWFzb25dO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSkge1xuICBpZiAoIWZvcm1hdE9wdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlciA9IEZvcm1hdHRlci5jcmVhdGUobG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgY29uc3QgZGYgPSBmb3JtYXR0ZXIuZHRGb3JtYXR0ZXIoZ2V0RHVtbXlEYXRlVGltZSgpKTtcbiAgY29uc3QgcGFydHMgPSBkZi5mb3JtYXRUb1BhcnRzKCk7XG4gIGNvbnN0IHJlc29sdmVkT3B0cyA9IGRmLnJlc29sdmVkT3B0aW9ucygpO1xuICByZXR1cm4gcGFydHMubWFwKChwKSA9PiB0b2tlbkZvclBhcnQocCwgZm9ybWF0T3B0cywgcmVzb2x2ZWRPcHRzKSk7XG59XG4iLCAiaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCB7XG4gIGlzVW5kZWZpbmVkLFxuICBtYXliZUFycmF5LFxuICBpc0RhdGUsXG4gIGlzTnVtYmVyLFxuICBiZXN0QnksXG4gIGRheXNJbk1vbnRoLFxuICBkYXlzSW5ZZWFyLFxuICBpc0xlYXBZZWFyLFxuICB3ZWVrc0luV2Vla1llYXIsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbiAgb2JqVG9Mb2NhbFRTLFxuICBwYWRTdGFydCxcbn0gZnJvbSBcIi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuaW1wb3J0IGRpZmYgZnJvbSBcIi4vaW1wbC9kaWZmLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVJGQzI4MjJEYXRlLCBwYXJzZUlTT0RhdGUsIHBhcnNlSFRUUERhdGUsIHBhcnNlU1FMIH0gZnJvbSBcIi4vaW1wbC9yZWdleFBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgcGFyc2VGcm9tVG9rZW5zLFxuICBleHBsYWluRnJvbVRva2VucyxcbiAgZm9ybWF0T3B0c1RvVG9rZW5zLFxuICBleHBhbmRNYWNyb1Rva2VucyxcbiAgVG9rZW5QYXJzZXIsXG59IGZyb20gXCIuL2ltcGwvdG9rZW5QYXJzZXIuanNcIjtcbmltcG9ydCB7XG4gIGdyZWdvcmlhblRvV2VlayxcbiAgd2Vla1RvR3JlZ29yaWFuLFxuICBncmVnb3JpYW5Ub09yZGluYWwsXG4gIG9yZGluYWxUb0dyZWdvcmlhbixcbiAgaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEsXG4gIGhhc0ludmFsaWRXZWVrRGF0YSxcbiAgaGFzSW52YWxpZE9yZGluYWxEYXRhLFxuICBoYXNJbnZhbGlkVGltZURhdGEsXG4gIHVzZXNMb2NhbFdlZWtWYWx1ZXMsXG4gIGlzb1dlZWtkYXlUb0xvY2FsLFxufSBmcm9tIFwiLi9pbXBsL2NvbnZlcnNpb25zLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2ltcGwvZm9ybWF0cy5qc1wiO1xuaW1wb3J0IHtcbiAgSW52YWxpZEFyZ3VtZW50RXJyb3IsXG4gIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yLFxuICBJbnZhbGlkVW5pdEVycm9yLFxuICBJbnZhbGlkRGF0ZVRpbWVFcnJvcixcbn0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5pbXBvcnQgSW52YWxpZCBmcm9tIFwiLi9pbXBsL2ludmFsaWQuanNcIjtcblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBEYXRlVGltZVwiO1xuY29uc3QgTUFYX0RBVEUgPSA4LjY0ZTE1O1xuXG5mdW5jdGlvbiB1bnN1cHBvcnRlZFpvbmUoem9uZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXCJ1bnN1cHBvcnRlZCB6b25lXCIsIGB0aGUgem9uZSBcIiR7em9uZS5uYW1lfVwiIGlzIG5vdCBzdXBwb3J0ZWRgKTtcbn1cblxuLy8gd2UgY2FjaGUgd2VlayBkYXRhIG9uIHRoZSBEVCBvYmplY3QgYW5kIHRoaXMgaW50ZXJtZWRpYXRlcyB0aGUgY2FjaGVcbi8qKlxuICogQHBhcmFtIHtEYXRlVGltZX0gZHRcbiAqL1xuZnVuY3Rpb24gcG9zc2libHlDYWNoZWRXZWVrRGF0YShkdCkge1xuICBpZiAoZHQud2Vla0RhdGEgPT09IG51bGwpIHtcbiAgICBkdC53ZWVrRGF0YSA9IGdyZWdvcmlhblRvV2VlayhkdC5jKTtcbiAgfVxuICByZXR1cm4gZHQud2Vla0RhdGE7XG59XG5cbi8qKlxuICogQHBhcmFtIHtEYXRlVGltZX0gZHRcbiAqL1xuZnVuY3Rpb24gcG9zc2libHlDYWNoZWRMb2NhbFdlZWtEYXRhKGR0KSB7XG4gIGlmIChkdC5sb2NhbFdlZWtEYXRhID09PSBudWxsKSB7XG4gICAgZHQubG9jYWxXZWVrRGF0YSA9IGdyZWdvcmlhblRvV2VlayhcbiAgICAgIGR0LmMsXG4gICAgICBkdC5sb2MuZ2V0TWluRGF5c0luRmlyc3RXZWVrKCksXG4gICAgICBkdC5sb2MuZ2V0U3RhcnRPZldlZWsoKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGR0LmxvY2FsV2Vla0RhdGE7XG59XG5cbi8vIGNsb25lIHJlYWxseSBtZWFucywgXCJtYWtlIGEgbmV3IG9iamVjdCB3aXRoIHRoZXNlIG1vZGlmaWNhdGlvbnNcIi4gYWxsIFwic2V0dGVyc1wiIHJlYWxseSB1c2UgdGhpc1xuLy8gdG8gY3JlYXRlIGEgbmV3IG9iamVjdCB3aGlsZSBvbmx5IGNoYW5naW5nIHNvbWUgb2YgdGhlIHByb3BlcnRpZXNcbmZ1bmN0aW9uIGNsb25lKGluc3QsIGFsdHMpIHtcbiAgY29uc3QgY3VycmVudCA9IHtcbiAgICB0czogaW5zdC50cyxcbiAgICB6b25lOiBpbnN0LnpvbmUsXG4gICAgYzogaW5zdC5jLFxuICAgIG86IGluc3QubyxcbiAgICBsb2M6IGluc3QubG9jLFxuICAgIGludmFsaWQ6IGluc3QuaW52YWxpZCxcbiAgfTtcbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IC4uLmN1cnJlbnQsIC4uLmFsdHMsIG9sZDogY3VycmVudCB9KTtcbn1cblxuLy8gZmluZCB0aGUgcmlnaHQgb2Zmc2V0IGEgZ2l2ZW4gbG9jYWwgdGltZS4gVGhlIG8gaW5wdXQgaXMgb3VyIGd1ZXNzLCB3aGljaCBkZXRlcm1pbmVzIHdoaWNoXG4vLyBvZmZzZXQgd2UnbGwgcGljayBpbiBhbWJpZ3VvdXMgY2FzZXMgKGUuZy4gdGhlcmUgYXJlIHR3byAzIEFNcyBiL2MgRmFsbGJhY2sgRFNUKVxuZnVuY3Rpb24gZml4T2Zmc2V0KGxvY2FsVFMsIG8sIHR6KSB7XG4gIC8vIE91ciBVVEMgdGltZSBpcyBqdXN0IGEgZ3Vlc3MgYmVjYXVzZSBvdXIgb2Zmc2V0IGlzIGp1c3QgYSBndWVzc1xuICBsZXQgdXRjR3Vlc3MgPSBsb2NhbFRTIC0gbyAqIDYwICogMTAwMDtcblxuICAvLyBUZXN0IHdoZXRoZXIgdGhlIHpvbmUgbWF0Y2hlcyB0aGUgb2Zmc2V0IGZvciB0aGlzIHRzXG4gIGNvbnN0IG8yID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcblxuICAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcbiAgaWYgKG8gPT09IG8yKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgb107XG4gIH1cblxuICAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxuICB1dGNHdWVzcyAtPSAobzIgLSBvKSAqIDYwICogMTAwMDtcblxuICAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcbiAgY29uc3QgbzMgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuICBpZiAobzIgPT09IG8zKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgbzJdO1xuICB9XG5cbiAgLy8gSWYgaXQncyBkaWZmZXJlbnQsIHdlJ3JlIGluIGEgaG9sZSB0aW1lLiBUaGUgb2Zmc2V0IGhhcyBjaGFuZ2VkLCBidXQgdGhlIHdlIGRvbid0IGFkanVzdCB0aGUgdGltZVxuICByZXR1cm4gW2xvY2FsVFMgLSBNYXRoLm1pbihvMiwgbzMpICogNjAgKiAxMDAwLCBNYXRoLm1heChvMiwgbzMpXTtcbn1cblxuLy8gY29udmVydCBhbiBlcG9jaCB0aW1lc3RhbXAgaW50byBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIHRoZSBnaXZlbiBvZmZzZXRcbmZ1bmN0aW9uIHRzVG9PYmoodHMsIG9mZnNldCkge1xuICB0cyArPSBvZmZzZXQgKiA2MCAqIDEwMDA7XG5cbiAgY29uc3QgZCA9IG5ldyBEYXRlKHRzKTtcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGQuZ2V0VVRDRnVsbFllYXIoKSxcbiAgICBtb250aDogZC5nZXRVVENNb250aCgpICsgMSxcbiAgICBkYXk6IGQuZ2V0VVRDRGF0ZSgpLFxuICAgIGhvdXI6IGQuZ2V0VVRDSG91cnMoKSxcbiAgICBtaW51dGU6IGQuZ2V0VVRDTWludXRlcygpLFxuICAgIHNlY29uZDogZC5nZXRVVENTZWNvbmRzKCksXG4gICAgbWlsbGlzZWNvbmQ6IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKCksXG4gIH07XG59XG5cbi8vIGNvbnZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBlcG9jaCB0aW1lc3RhbXBcbmZ1bmN0aW9uIG9ialRvVFMob2JqLCBvZmZzZXQsIHpvbmUpIHtcbiAgcmV0dXJuIGZpeE9mZnNldChvYmpUb0xvY2FsVFMob2JqKSwgb2Zmc2V0LCB6b25lKTtcbn1cblxuLy8gY3JlYXRlIGEgbmV3IERUIGluc3RhbmNlIGJ5IGFkZGluZyBhIGR1cmF0aW9uLCBhZGp1c3RpbmcgZm9yIERTVHNcbmZ1bmN0aW9uIGFkanVzdFRpbWUoaW5zdCwgZHVyKSB7XG4gIGNvbnN0IG9QcmUgPSBpbnN0Lm8sXG4gICAgeWVhciA9IGluc3QuYy55ZWFyICsgTWF0aC50cnVuYyhkdXIueWVhcnMpLFxuICAgIG1vbnRoID0gaW5zdC5jLm1vbnRoICsgTWF0aC50cnVuYyhkdXIubW9udGhzKSArIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSAqIDMsXG4gICAgYyA9IHtcbiAgICAgIC4uLmluc3QuYyxcbiAgICAgIHllYXIsXG4gICAgICBtb250aCxcbiAgICAgIGRheTpcbiAgICAgICAgTWF0aC5taW4oaW5zdC5jLmRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArXG4gICAgICAgIE1hdGgudHJ1bmMoZHVyLmRheXMpICtcbiAgICAgICAgTWF0aC50cnVuYyhkdXIud2Vla3MpICogNyxcbiAgICB9LFxuICAgIG1pbGxpc1RvQWRkID0gRHVyYXRpb24uZnJvbU9iamVjdCh7XG4gICAgICB5ZWFyczogZHVyLnllYXJzIC0gTWF0aC50cnVuYyhkdXIueWVhcnMpLFxuICAgICAgcXVhcnRlcnM6IGR1ci5xdWFydGVycyAtIE1hdGgudHJ1bmMoZHVyLnF1YXJ0ZXJzKSxcbiAgICAgIG1vbnRoczogZHVyLm1vbnRocyAtIE1hdGgudHJ1bmMoZHVyLm1vbnRocyksXG4gICAgICB3ZWVrczogZHVyLndlZWtzIC0gTWF0aC50cnVuYyhkdXIud2Vla3MpLFxuICAgICAgZGF5czogZHVyLmRheXMgLSBNYXRoLnRydW5jKGR1ci5kYXlzKSxcbiAgICAgIGhvdXJzOiBkdXIuaG91cnMsXG4gICAgICBtaW51dGVzOiBkdXIubWludXRlcyxcbiAgICAgIHNlY29uZHM6IGR1ci5zZWNvbmRzLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkdXIubWlsbGlzZWNvbmRzLFxuICAgIH0pLmFzKFwibWlsbGlzZWNvbmRzXCIpLFxuICAgIGxvY2FsVFMgPSBvYmpUb0xvY2FsVFMoYyk7XG5cbiAgbGV0IFt0cywgb10gPSBmaXhPZmZzZXQobG9jYWxUUywgb1ByZSwgaW5zdC56b25lKTtcblxuICBpZiAobWlsbGlzVG9BZGQgIT09IDApIHtcbiAgICB0cyArPSBtaWxsaXNUb0FkZDtcbiAgICAvLyB0aGF0IGNvdWxkIGhhdmUgY2hhbmdlZCB0aGUgb2Zmc2V0IGJ5IGdvaW5nIG92ZXIgYSBEU1QsIGJ1dCB3ZSB3YW50IHRvIGtlZXAgdGhlIHRzIHRoZSBzYW1lXG4gICAgbyA9IGluc3Quem9uZS5vZmZzZXQodHMpO1xuICB9XG5cbiAgcmV0dXJuIHsgdHMsIG8gfTtcbn1cblxuLy8gaGVscGVyIHVzZWZ1bCBpbiB0dXJuaW5nIHRoZSByZXN1bHRzIG9mIHBhcnNpbmcgaW50byByZWFsIGRhdGVzXG4vLyBieSBoYW5kbGluZyB0aGUgem9uZSBvcHRpb25zXG5mdW5jdGlvbiBwYXJzZURhdGFUb0RhdGVUaW1lKHBhcnNlZCwgcGFyc2VkWm9uZSwgb3B0cywgZm9ybWF0LCB0ZXh0LCBzcGVjaWZpY09mZnNldCkge1xuICBjb25zdCB7IHNldFpvbmUsIHpvbmUgfSA9IG9wdHM7XG4gIGlmICgocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB8fCBwYXJzZWRab25lKSB7XG4gICAgY29uc3QgaW50ZXJwcmV0YXRpb25ab25lID0gcGFyc2VkWm9uZSB8fCB6b25lLFxuICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QocGFyc2VkLCB7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIHpvbmU6IGludGVycHJldGF0aW9uWm9uZSxcbiAgICAgICAgc3BlY2lmaWNPZmZzZXQsXG4gICAgICB9KTtcbiAgICByZXR1cm4gc2V0Wm9uZSA/IGluc3QgOiBpbnN0LnNldFpvbmUoem9uZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXG4gICAgICBuZXcgSW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgJHtmb3JtYXR9YClcbiAgICApO1xuICB9XG59XG5cbi8vIGlmIHlvdSB3YW50IHRvIG91dHB1dCBhIHRlY2huaWNhbCBmb3JtYXQgKGUuZy4gUkZDIDI4MjIpLCB0aGlzIGhlbHBlclxuLy8gaGVscHMgaGFuZGxlIHRoZSBkZXRhaWxzXG5mdW5jdGlvbiB0b1RlY2hGb3JtYXQoZHQsIGZvcm1hdCwgYWxsb3daID0gdHJ1ZSkge1xuICByZXR1cm4gZHQuaXNWYWxpZFxuICAgID8gRm9ybWF0dGVyLmNyZWF0ZShMb2NhbGUuY3JlYXRlKFwiZW4tVVNcIiksIHtcbiAgICAgICAgYWxsb3daLFxuICAgICAgICBmb3JjZVNpbXBsZTogdHJ1ZSxcbiAgICAgIH0pLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm9ybWF0KVxuICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gdG9JU09EYXRlKG8sIGV4dGVuZGVkLCBwcmVjaXNpb24pIHtcbiAgY29uc3QgbG9uZ0Zvcm1hdCA9IG8uYy55ZWFyID4gOTk5OSB8fCBvLmMueWVhciA8IDA7XG4gIGxldCBjID0gXCJcIjtcbiAgaWYgKGxvbmdGb3JtYXQgJiYgby5jLnllYXIgPj0gMCkgYyArPSBcIitcIjtcbiAgYyArPSBwYWRTdGFydChvLmMueWVhciwgbG9uZ0Zvcm1hdCA/IDYgOiA0KTtcbiAgaWYgKHByZWNpc2lvbiA9PT0gXCJ5ZWFyXCIpIHJldHVybiBjO1xuICBpZiAoZXh0ZW5kZWQpIHtcbiAgICBjICs9IFwiLVwiO1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBpZiAocHJlY2lzaW9uID09PSBcIm1vbnRoXCIpIHJldHVybiBjO1xuICAgIGMgKz0gXCItXCI7XG4gIH0gZWxzZSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMubW9udGgpO1xuICAgIGlmIChwcmVjaXNpb24gPT09IFwibW9udGhcIikgcmV0dXJuIGM7XG4gIH1cbiAgYyArPSBwYWRTdGFydChvLmMuZGF5KTtcbiAgcmV0dXJuIGM7XG59XG5cbmZ1bmN0aW9uIHRvSVNPVGltZShcbiAgbyxcbiAgZXh0ZW5kZWQsXG4gIHN1cHByZXNzU2Vjb25kcyxcbiAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gIGluY2x1ZGVPZmZzZXQsXG4gIGV4dGVuZGVkWm9uZSxcbiAgcHJlY2lzaW9uXG4pIHtcbiAgbGV0IHNob3dTZWNvbmRzID0gIXN1cHByZXNzU2Vjb25kcyB8fCBvLmMubWlsbGlzZWNvbmQgIT09IDAgfHwgby5jLnNlY29uZCAhPT0gMCxcbiAgICBjID0gXCJcIjtcbiAgc3dpdGNoIChwcmVjaXNpb24pIHtcbiAgICBjYXNlIFwiZGF5XCI6XG4gICAgY2FzZSBcIm1vbnRoXCI6XG4gICAgY2FzZSBcInllYXJcIjpcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjICs9IHBhZFN0YXJ0KG8uYy5ob3VyKTtcbiAgICAgIGlmIChwcmVjaXNpb24gPT09IFwiaG91clwiKSBicmVhaztcbiAgICAgIGlmIChleHRlbmRlZCkge1xuICAgICAgICBjICs9IFwiOlwiO1xuICAgICAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xuICAgICAgICBpZiAocHJlY2lzaW9uID09PSBcIm1pbnV0ZVwiKSBicmVhaztcbiAgICAgICAgaWYgKHNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgYyArPSBcIjpcIjtcbiAgICAgICAgICBjICs9IHBhZFN0YXJ0KG8uYy5zZWNvbmQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xuICAgICAgICBpZiAocHJlY2lzaW9uID09PSBcIm1pbnV0ZVwiKSBicmVhaztcbiAgICAgICAgaWYgKHNob3dTZWNvbmRzKSB7XG4gICAgICAgICAgYyArPSBwYWRTdGFydChvLmMuc2Vjb25kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByZWNpc2lvbiA9PT0gXCJzZWNvbmRcIikgYnJlYWs7XG4gICAgICBpZiAoc2hvd1NlY29uZHMgJiYgKCFzdXBwcmVzc01pbGxpc2Vjb25kcyB8fCBvLmMubWlsbGlzZWNvbmQgIT09IDApKSB7XG4gICAgICAgIGMgKz0gXCIuXCI7XG4gICAgICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbGxpc2Vjb25kLCAzKTtcbiAgICAgIH1cbiAgfVxuXG4gIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgaWYgKG8uaXNPZmZzZXRGaXhlZCAmJiBvLm9mZnNldCA9PT0gMCAmJiAhZXh0ZW5kZWRab25lKSB7XG4gICAgICBjICs9IFwiWlwiO1xuICAgIH0gZWxzZSBpZiAoby5vIDwgMCkge1xuICAgICAgYyArPSBcIi1cIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vIC8gNjApKTtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAlIDYwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGMgKz0gXCIrXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vIC8gNjApKTtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vICUgNjApKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZXh0ZW5kZWRab25lKSB7XG4gICAgYyArPSBcIltcIiArIG8uem9uZS5pYW5hTmFtZSArIFwiXVwiO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG4vLyBkZWZhdWx0cyBmb3IgdW5zcGVjaWZpZWQgdW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnNcbmNvbnN0IGRlZmF1bHRVbml0VmFsdWVzID0ge1xuICAgIG1vbnRoOiAxLFxuICAgIGRheTogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH0sXG4gIGRlZmF1bHRXZWVrVW5pdFZhbHVlcyA9IHtcbiAgICB3ZWVrTnVtYmVyOiAxLFxuICAgIHdlZWtkYXk6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxuICB9LFxuICBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMgPSB7XG4gICAgb3JkaW5hbDogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH07XG5cbi8vIFVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzLCBzb3J0ZWQgYnkgYmlnbmVzc1xuY29uc3Qgb3JkZXJlZFVuaXRzID0gW1wieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdLFxuICBvcmRlcmVkV2Vla1VuaXRzID0gW1xuICAgIFwid2Vla1llYXJcIixcbiAgICBcIndlZWtOdW1iZXJcIixcbiAgICBcIndlZWtkYXlcIixcbiAgICBcImhvdXJcIixcbiAgICBcIm1pbnV0ZVwiLFxuICAgIFwic2Vjb25kXCIsXG4gICAgXCJtaWxsaXNlY29uZFwiLFxuICBdLFxuICBvcmRlcmVkT3JkaW5hbFVuaXRzID0gW1wieWVhclwiLCBcIm9yZGluYWxcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl07XG5cbi8vIHN0YW5kYXJkaXplIGNhc2UgYW5kIHBsdXJhbGl0eSBpbiB1bml0c1xuZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgZGF5OiBcImRheVwiLFxuICAgIGRheXM6IFwiZGF5XCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZFwiLFxuICAgIHdlZWtkYXk6IFwid2Vla2RheVwiLFxuICAgIHdlZWtkYXlzOiBcIndlZWtkYXlcIixcbiAgICB3ZWVrbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrc251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla251bWJlcnM6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWt5ZWFyOiBcIndlZWtZZWFyXCIsXG4gICAgd2Vla3llYXJzOiBcIndlZWtZZWFyXCIsXG4gICAgb3JkaW5hbDogXCJvcmRpbmFsXCIsXG4gIH1bdW5pdC50b0xvd2VyQ2FzZSgpXTtcblxuICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuXG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVVbml0V2l0aExvY2FsV2Vla3ModW5pdCkge1xuICBzd2l0Y2ggKHVuaXQudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJsb2NhbHdlZWtkYXlcIjpcbiAgICBjYXNlIFwibG9jYWx3ZWVrZGF5c1wiOlxuICAgICAgcmV0dXJuIFwibG9jYWxXZWVrZGF5XCI7XG4gICAgY2FzZSBcImxvY2Fsd2Vla251bWJlclwiOlxuICAgIGNhc2UgXCJsb2NhbHdlZWtudW1iZXJzXCI6XG4gICAgICByZXR1cm4gXCJsb2NhbFdlZWtOdW1iZXJcIjtcbiAgICBjYXNlIFwibG9jYWx3ZWVreWVhclwiOlxuICAgIGNhc2UgXCJsb2NhbHdlZWt5ZWFyc1wiOlxuICAgICAgcmV0dXJuIFwibG9jYWxXZWVrWWVhclwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbm9ybWFsaXplVW5pdCh1bml0KTtcbiAgfVxufVxuXG4vLyBjYWNoZSBvZmZzZXRzIGZvciB6b25lcyBiYXNlZCBvbiB0aGUgY3VycmVudCB0aW1lc3RhbXAgd2hlbiB0aGlzIGZ1bmN0aW9uIGlzXG4vLyBmaXJzdCBjYWxsZWQuIFdoZW4gd2UgYXJlIGhhbmRsaW5nIGEgZGF0ZXRpbWUgZnJvbSBjb21wb25lbnRzIGxpa2UgKHllYXIsXG4vLyBtb250aCwgZGF5LCBob3VyKSBpbiBhIHRpbWUgem9uZSwgd2UgbmVlZCBhIGd1ZXNzIGFib3V0IHdoYXQgdGhlIHRpbWV6b25lXG4vLyBvZmZzZXQgaXMgc28gdGhhdCB3ZSBjYW4gY29udmVydCBpbnRvIGEgVVRDIHRpbWVzdGFtcC4gT25lIHdheSBpcyB0byBmaW5kIHRoZVxuLy8gb2Zmc2V0IG9mIG5vdyBpbiB0aGUgem9uZS4gVGhlIGFjdHVhbCBkYXRlIG1heSBoYXZlIGEgZGlmZmVyZW50IG9mZnNldCAoZm9yXG4vLyBleGFtcGxlLCBpZiB3ZSBoYW5kbGUgYSBkYXRlIGluIEp1bmUgd2hpbGUgd2UncmUgaW4gRGVjZW1iZXIgaW4gYSB6b25lIHRoYXRcbi8vIG9ic2VydmVzIERTVCksIGJ1dCB3ZSBjYW4gY2hlY2sgYW5kIGFkanVzdCB0aGF0LlxuLy9cbi8vIFdoZW4gaGFuZGxpbmcgbWFueSBkYXRlcywgY2FsY3VsYXRpbmcgdGhlIG9mZnNldCBmb3Igbm93IGV2ZXJ5IHRpbWUgaXNcbi8vIGV4cGVuc2l2ZS4gSXQncyBqdXN0IGEgZ3Vlc3MsIHNvIHdlIGNhbiBjYWNoZSB0aGUgb2Zmc2V0IHRvIHVzZSBldmVuIGlmIHdlXG4vLyBhcmUgcmlnaHQgb24gYSB0aW1lIGNoYW5nZSBib3VuZGFyeSAod2UnbGwganVzdCBjb3JyZWN0IGluIHRoZSBvdGhlclxuLy8gZGlyZWN0aW9uKS4gVXNpbmcgYSB0aW1lc3RhbXAgZnJvbSBmaXJzdCByZWFkIGlzIGEgc2xpZ2h0IG9wdGltaXphdGlvbiBmb3Jcbi8vIGhhbmRsaW5nIGRhdGVzIGNsb3NlIHRvIHRoZSBjdXJyZW50IGRhdGUsIHNpbmNlIHRob3NlIGRhdGVzIHdpbGwgdXN1YWxseSBiZVxuLy8gaW4gdGhlIHNhbWUgb2Zmc2V0ICh3ZSBjb3VsZCBzZXQgdGhlIHRpbWVzdGFtcCBzdGF0aWNhbGx5LCBpbnN0ZWFkKS4gV2UgdXNlIGFcbi8vIHNpbmdsZSB0aW1lc3RhbXAgZm9yIGFsbCB6b25lcyB0byBtYWtlIHRoaW5ncyBhIGJpdCBtb3JlIHByZWRpY3RhYmxlLlxuLy9cbi8vIFRoaXMgaXMgc2FmZSBmb3IgcXVpY2tEVCAodXNlZCBieSBsb2NhbCgpIGFuZCB1dGMoKSkgYmVjYXVzZSB3ZSBkb24ndCBmaWxsIGluXG4vLyBoaWdoZXItb3JkZXIgdW5pdHMgZnJvbSB0c05vdyAoYXMgd2UgZG8gaW4gZnJvbU9iamVjdCwgdGhpcyByZXF1aXJlcyB0aGF0XG4vLyBvZmZzZXQgaXMgY2FsY3VsYXRlZCBmcm9tIHRzTm93KS5cbi8qKlxuICogQHBhcmFtIHtab25lfSB6b25lXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGd1ZXNzT2Zmc2V0Rm9yWm9uZSh6b25lKSB7XG4gIGlmICh6b25lT2Zmc2V0VHMgPT09IHVuZGVmaW5lZCkge1xuICAgIHpvbmVPZmZzZXRUcyA9IFNldHRpbmdzLm5vdygpO1xuICB9XG5cbiAgLy8gRG8gbm90IGNhY2hlIGFueXRoaW5nIGJ1dCBJQU5BIHpvbmVzLCBiZWNhdXNlIGl0IGlzIG5vdCBzYWZlIHRvIGRvIHNvLlxuICAvLyBHdWVzc2luZyBhbiBvZmZzZXQgd2hpY2ggaXMgbm90IHByZXNlbnQgaW4gdGhlIHpvbmUgY2FuIGNhdXNlIHdyb25nIHJlc3VsdHMgZnJvbSBmaXhPZmZzZXRcbiAgaWYgKHpvbmUudHlwZSAhPT0gXCJpYW5hXCIpIHtcbiAgICByZXR1cm4gem9uZS5vZmZzZXQoem9uZU9mZnNldFRzKTtcbiAgfVxuICBjb25zdCB6b25lTmFtZSA9IHpvbmUubmFtZTtcbiAgbGV0IG9mZnNldEd1ZXNzID0gem9uZU9mZnNldEd1ZXNzQ2FjaGUuZ2V0KHpvbmVOYW1lKTtcbiAgaWYgKG9mZnNldEd1ZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHpvbmVPZmZzZXRUcyk7XG4gICAgem9uZU9mZnNldEd1ZXNzQ2FjaGUuc2V0KHpvbmVOYW1lLCBvZmZzZXRHdWVzcyk7XG4gIH1cbiAgcmV0dXJuIG9mZnNldEd1ZXNzO1xufVxuXG4vLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXG5mdW5jdGlvbiBxdWlja0RUKG9iaiwgb3B0cykge1xuICBjb25zdCB6b25lID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgaWYgKCF6b25lLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZSkpO1xuICB9XG5cbiAgY29uc3QgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob3B0cyk7XG5cbiAgbGV0IHRzLCBvO1xuXG4gIC8vIGFzc3VtZSB3ZSBoYXZlIHRoZSBoaWdoZXItb3JkZXIgdW5pdHNcbiAgaWYgKCFpc1VuZGVmaW5lZChvYmoueWVhcikpIHtcbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgICBvYmpbdV0gPSBkZWZhdWx0VW5pdFZhbHVlc1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB8fCBoYXNJbnZhbGlkVGltZURhdGEob2JqKTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb2Zmc2V0UHJvdmlzID0gZ3Vlc3NPZmZzZXRGb3Jab25lKHpvbmUpO1xuICAgIFt0cywgb10gPSBvYmpUb1RTKG9iaiwgb2Zmc2V0UHJvdmlzLCB6b25lKTtcbiAgfSBlbHNlIHtcbiAgICB0cyA9IFNldHRpbmdzLm5vdygpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IHRzLCB6b25lLCBsb2MsIG8gfSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZSZWxhdGl2ZShzdGFydCwgZW5kLCBvcHRzKSB7XG4gIGNvbnN0IHJvdW5kID0gaXNVbmRlZmluZWQob3B0cy5yb3VuZCkgPyB0cnVlIDogb3B0cy5yb3VuZCxcbiAgICByb3VuZGluZyA9IGlzVW5kZWZpbmVkKG9wdHMucm91bmRpbmcpID8gXCJ0cnVuY1wiIDogb3B0cy5yb3VuZGluZyxcbiAgICBmb3JtYXQgPSAoYywgdW5pdCkgPT4ge1xuICAgICAgYyA9IHJvdW5kVG8oYywgcm91bmQgfHwgb3B0cy5jYWxlbmRhcnkgPyAwIDogMiwgb3B0cy5jYWxlbmRhcnkgPyBcInJvdW5kXCIgOiByb3VuZGluZyk7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBlbmQubG9jLmNsb25lKG9wdHMpLnJlbEZvcm1hdHRlcihvcHRzKTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGMsIHVuaXQpO1xuICAgIH0sXG4gICAgZGlmZmVyID0gKHVuaXQpID0+IHtcbiAgICAgIGlmIChvcHRzLmNhbGVuZGFyeSkge1xuICAgICAgICBpZiAoIWVuZC5oYXNTYW1lKHN0YXJ0LCB1bml0KSkge1xuICAgICAgICAgIHJldHVybiBlbmQuc3RhcnRPZih1bml0KS5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpLmdldCh1bml0KTtcbiAgICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCk7XG4gICAgICB9XG4gICAgfTtcblxuICBpZiAob3B0cy51bml0KSB7XG4gICAgcmV0dXJuIGZvcm1hdChkaWZmZXIob3B0cy51bml0KSwgb3B0cy51bml0KTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdW5pdCBvZiBvcHRzLnVuaXRzKSB7XG4gICAgY29uc3QgY291bnQgPSBkaWZmZXIodW5pdCk7XG4gICAgaWYgKE1hdGguYWJzKGNvdW50KSA+PSAxKSB7XG4gICAgICByZXR1cm4gZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdChzdGFydCA+IGVuZCA/IC0wIDogMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTtcbn1cblxuZnVuY3Rpb24gbGFzdE9wdHMoYXJnTGlzdCkge1xuICBsZXQgb3B0cyA9IHt9LFxuICAgIGFyZ3M7XG4gIGlmIChhcmdMaXN0Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ0xpc3RbYXJnTGlzdC5sZW5ndGggLSAxXSA9PT0gXCJvYmplY3RcIikge1xuICAgIG9wdHMgPSBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV07XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCkuc2xpY2UoMCwgYXJnTGlzdC5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzID0gQXJyYXkuZnJvbShhcmdMaXN0KTtcbiAgfVxuICByZXR1cm4gW29wdHMsIGFyZ3NdO1xufVxuXG4vKipcbiAqIFRpbWVzdGFtcCB0byB1c2UgZm9yIGNhY2hlZCB6b25lIG9mZnNldCBndWVzc2VzIChleHBvc2VkIGZvciB0ZXN0KVxuICovXG5sZXQgem9uZU9mZnNldFRzO1xuLyoqXG4gKiBDYWNoZSBmb3Igem9uZSBvZmZzZXQgZ3Vlc3NlcyAoZXhwb3NlZCBmb3IgdGVzdCkuXG4gKlxuICogVGhpcyBvcHRpbWl6ZXMgcXVpY2tEVCB2aWEgZ3Vlc3NPZmZzZXRGb3Jab25lIHRvIGF2b2lkIHJlcGVhdGVkIGNhbGxzIG9mXG4gKiB6b25lLm9mZnNldCgpLlxuICovXG5jb25zdCB6b25lT2Zmc2V0R3Vlc3NDYWNoZSA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBBIERhdGVUaW1lIGlzIGFuIGltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIGFuZCBhY2NvbXBhbnlpbmcgbWV0aG9kcy4gSXQgY29udGFpbnMgY2xhc3MgYW5kIGluc3RhbmNlIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uXG4gKlxuICogQSBEYXRlVGltZSBjb21wcmlzZXMgb2Y6XG4gKiAqIEEgdGltZXN0YW1wLiBFYWNoIERhdGVUaW1lIGluc3RhbmNlIHJlZmVycyB0byBhIHNwZWNpZmljIG1pbGxpc2Vjb25kIG9mIHRoZSBVbml4IGVwb2NoLlxuICogKiBBIHRpbWUgem9uZS4gRWFjaCBpbnN0YW5jZSBpcyBjb25zaWRlcmVkIGluIHRoZSBjb250ZXh0IG9mIGEgc3BlY2lmaWMgem9uZSAoYnkgZGVmYXVsdCB0aGUgbG9jYWwgc3lzdGVtJ3Mgem9uZSkuXG4gKiAqIENvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IGVmZmVjdCBob3cgb3V0cHV0IHN0cmluZ3MgYXJlIGZvcm1hdHRlZCwgc3VjaCBhcyBgbG9jYWxlYCwgYG51bWJlcmluZ1N5c3RlbWAsIGFuZCBgb3V0cHV0Q2FsZW5kYXJgLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIGZ1bmN0aW9uYWxpdHkgaXQgcHJvdmlkZXM6XG4gKlxuICogKiAqKkNyZWF0aW9uKio6IFRvIGNyZWF0ZSBhIERhdGVUaW1lIGZyb20gaXRzIGNvbXBvbmVudHMsIHVzZSBvbmUgb2YgaXRzIGZhY3RvcnkgY2xhc3MgbWV0aG9kczoge0BsaW5rIERhdGVUaW1lLmxvY2FsfSwge0BsaW5rIERhdGVUaW1lLnV0Y30sIGFuZCAobW9zdCBmbGV4aWJseSkge0BsaW5rIERhdGVUaW1lLmZyb21PYmplY3R9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBzdGFuZGFyZCBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lLmZyb21JU099LCB7QGxpbmsgRGF0ZVRpbWUuZnJvbUhUVFB9LCBhbmQge0BsaW5rIERhdGVUaW1lLmZyb21SRkMyODIyfS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgY3VzdG9tIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUZvcm1hdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIG5hdGl2ZSBKUyBkYXRlLCB1c2Uge0BsaW5rIERhdGVUaW1lLmZyb21KU0RhdGV9LlxuICogKiAqKkdyZWdvcmlhbiBjYWxlbmRhciBhbmQgdGltZSoqOiBUbyBleGFtaW5lIHRoZSBHcmVnb3JpYW4gcHJvcGVydGllcyBvZiBhIERhdGVUaW1lIGluZGl2aWR1YWxseSAoaS5lIGFzIG9wcG9zZWQgdG8gY29sbGVjdGl2ZWx5IHRocm91Z2gge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSksIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbW9udGh9LFxuICoge0BsaW5rIERhdGVUaW1lI2RheX0sIHtAbGluayBEYXRlVGltZSNob3VyfSwge0BsaW5rIERhdGVUaW1lI21pbnV0ZX0sIHtAbGluayBEYXRlVGltZSNzZWNvbmR9LCB7QGxpbmsgRGF0ZVRpbWUjbWlsbGlzZWNvbmR9IGFjY2Vzc29ycy5cbiAqICogKipXZWVrIGNhbGVuZGFyKio6IEZvciBJU08gd2VlayBjYWxlbmRhciBhdHRyaWJ1dGVzLCBzZWUgdGhlIHtAbGluayBEYXRlVGltZSN3ZWVrWWVhcn0sIHtAbGluayBEYXRlVGltZSN3ZWVrTnVtYmVyfSwgYW5kIHtAbGluayBEYXRlVGltZSN3ZWVrZGF5fSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSB0aGUge0BsaW5rIERhdGVUaW1lI2xvY2FsZX0gYW5kIHtAbGluayBEYXRlVGltZSNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqOiBUbyB0cmFuc2Zvcm0gdGhlIERhdGVUaW1lIGludG8gb3RoZXIgRGF0ZVRpbWVzLCB1c2Uge0BsaW5rIERhdGVUaW1lI3NldH0sIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0sIHtAbGluayBEYXRlVGltZSNzZXRab25lfSwge0BsaW5rIERhdGVUaW1lI3NldExvY2FsZX0sIHtAbGluayBEYXRlVGltZS5wbHVzfSwge0BsaW5rIERhdGVUaW1lI21pbnVzfSwge0BsaW5rIERhdGVUaW1lI2VuZE9mfSwge0BsaW5rIERhdGVUaW1lI3N0YXJ0T2Z9LCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9LCBhbmQge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9LlxuICogKiAqKk91dHB1dCoqOiBUbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmV9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZUNhbGVuZGFyfSwge0BsaW5rIERhdGVUaW1lI3RvSlNPTn0sIHtAbGluayBEYXRlVGltZSN0b0lTT30sIHtAbGluayBEYXRlVGltZSN0b0hUVFB9LCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SRkMyODIyfSwge0BsaW5rIERhdGVUaW1lI3RvU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSwge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvSlNEYXRlfS5cbiAqXG4gKiBUaGVyZSdzIHBsZW50eSBvdGhlcnMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRpbWUgem9uZXMsIGFsdGVybmF0aXZlIGNhbGVuZGFycywgdmFsaWRpdHksIGFuZCBzbyBvbiwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVGltZSB7XG4gIC8qKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbnN0IHpvbmUgPSBjb25maWcuem9uZSB8fCBTZXR0aW5ncy5kZWZhdWx0Wm9uZTtcblxuICAgIGxldCBpbnZhbGlkID1cbiAgICAgIGNvbmZpZy5pbnZhbGlkIHx8XG4gICAgICAoTnVtYmVyLmlzTmFOKGNvbmZpZy50cykgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsKSB8fFxuICAgICAgKCF6b25lLmlzVmFsaWQgPyB1bnN1cHBvcnRlZFpvbmUoem9uZSkgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRzID0gaXNVbmRlZmluZWQoY29uZmlnLnRzKSA/IFNldHRpbmdzLm5vdygpIDogY29uZmlnLnRzO1xuXG4gICAgbGV0IGMgPSBudWxsLFxuICAgICAgbyA9IG51bGw7XG4gICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICBjb25zdCB1bmNoYW5nZWQgPSBjb25maWcub2xkICYmIGNvbmZpZy5vbGQudHMgPT09IHRoaXMudHMgJiYgY29uZmlnLm9sZC56b25lLmVxdWFscyh6b25lKTtcblxuICAgICAgaWYgKHVuY2hhbmdlZCkge1xuICAgICAgICBbYywgb10gPSBbY29uZmlnLm9sZC5jLCBjb25maWcub2xkLm9dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgYW4gb2Zmc2V0IGhhcyBiZWVuIHBhc3NlZCBhbmQgd2UgaGF2ZSBub3QgYmVlbiBjYWxsZWQgZnJvbVxuICAgICAgICAvLyBjbG9uZSgpLCB3ZSBjYW4gdHJ1c3QgaXQgYW5kIGF2b2lkIHRoZSBvZmZzZXQgY2FsY3VsYXRpb24uXG4gICAgICAgIGNvbnN0IG90ID0gaXNOdW1iZXIoY29uZmlnLm8pICYmICFjb25maWcub2xkID8gY29uZmlnLm8gOiB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgYyA9IHRzVG9PYmoodGhpcy50cywgb3QpO1xuICAgICAgICBpbnZhbGlkID0gTnVtYmVyLmlzTmFOKGMueWVhcikgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsO1xuICAgICAgICBjID0gaW52YWxpZCA/IG51bGwgOiBjO1xuICAgICAgICBvID0gaW52YWxpZCA/IG51bGwgOiBvdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl96b25lID0gem9uZTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGludmFsaWQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy53ZWVrRGF0YSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sb2NhbFdlZWtEYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmMgPSBjO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubyA9IG87XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uRGF0ZVRpbWUgPSB0cnVlO1xuICB9XG5cbiAgLy8gQ09OU1RSVUNUXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZvciB0aGUgY3VycmVudCBpbnN0YW50LCBpbiB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKlxuICAgKiBVc2UgU2V0dGluZ3MgdG8gb3ZlcnJpZGUgdGhlc2UgZGVmYXVsdCB2YWx1ZXMgaWYgbmVlZGVkLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vfj4gbm93IGluIHRoZSBJU08gZm9ybWF0XG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoeyB6b25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIiB9KSAgICAgIC8vfj4gbm93LCBpbiBVUyBlYXN0IGNvYXN0IHRpbWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIHsgbG9jYWxlOiBcImZyXCIgfSkgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMCwgd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIHsgem9uZTogXCJ1dGNcIiB9KSAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMCwgaW4gVVRDXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBsb2NhbCgpIHtcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xuICAgIHJldHVybiBxdWlja0RUKHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLndlZWtTZXR0aW5nc10gLSB0aGUgd2VlayBzZXR0aW5ncyB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSwgeyBsb2NhbGU6IFwiZnJcIiB9KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1WiB3aXRoIGEgRnJlbmNoIGxvY2FsZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyB1dGMoKSB7XG4gICAgY29uc3QgW29wdHMsIGFyZ3NdID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgIFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdID0gYXJncztcblxuICAgIG9wdHMuem9uZSA9IEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtcbiAgICByZXR1cm4gcXVpY2tEVCh7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCB9LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdC4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgLSBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUpTRGF0ZShkYXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB0cyA9IGlzRGF0ZShkYXRlKSA/IGRhdGUudmFsdWVPZigpIDogTmFOO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odHMpKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcImludmFsaWQgaW5wdXRcIik7XG4gICAgfVxuXG4gICAgY29uc3Qgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICB0czogdHMsXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgLSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMud2Vla1NldHRpbmdzIC0gdGhlIHdlZWsgc2V0dGluZ3MgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbU1pbGxpcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghaXNOdW1iZXIobWlsbGlzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgICBgZnJvbU1pbGxpcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dCwgYnV0IHJlY2VpdmVkIGEgJHt0eXBlb2YgbWlsbGlzZWNvbmRzfSB3aXRoIHZhbHVlICR7bWlsbGlzZWNvbmRzfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChtaWxsaXNlY29uZHMgPCAtTUFYX0RBVEUgfHwgbWlsbGlzZWNvbmRzID4gTUFYX0RBVEUpIHtcbiAgICAgIC8vIHRoaXMgaXNuJ3QgcGVyZmVjdCBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydFxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJUaW1lc3RhbXAgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLndlZWtTZXR0aW5ncyAtIHRoZSB3ZWVrIHNldHRpbmdzIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICghaXNOdW1iZXIoc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21TZWNvbmRzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IHNlY29uZHMgKiAxMDAwLFxuICAgICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcicgYW5kICdob3VyJyB3aXRoIHJlYXNvbmFibGUgZGVmYXVsdHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IHRvIGNyZWF0ZSB0aGUgRGF0ZVRpbWUgZnJvbVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnllYXIgLSBhIHllYXIsIHN1Y2ggYXMgMTk4N1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoIC0gYSBtb250aCwgMS0xMlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmRheSAtIGEgZGF5IG9mIHRoZSBtb250aCwgMS0zMSwgZGVwZW5kaW5nIG9uIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm9yZGluYWwgLSBkYXkgb2YgdGhlIHllYXIsIDEtMzY1IG9yIDM2NlxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtZZWFyIC0gYW4gSVNPIHdlZWsgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtOdW1iZXIgLSBhbiBJU08gd2VlayBudW1iZXIsIGJldHdlZW4gMSBhbmQgNTIgb3IgNTMsIGRlcGVuZGluZyBvbiB0aGUgeWVhclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtkYXkgLSBhbiBJU08gd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5sb2NhbFdlZWtZZWFyIC0gYSB3ZWVrIHllYXIsIGFjY29yZGluZyB0byB0aGUgbG9jYWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubG9jYWxXZWVrTnVtYmVyIC0gYSB3ZWVrIG51bWJlciwgYmV0d2VlbiAxIGFuZCA1MiBvciA1MywgZGVwZW5kaW5nIG9uIHRoZSB5ZWFyLCBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmxvY2FsV2Vla2RheSAtIGEgd2Vla2RheSwgMS03LCB3aGVyZSAxIGlzIHRoZSBmaXJzdCBhbmQgNyBpcyB0aGUgbGFzdCBkYXkgb2YgdGhlIHdlZWssIGFjY29yZGluZyB0byB0aGUgbG9jYWxlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91ciAtIGhvdXIgb2YgdGhlIGRheSwgMC0yM1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZSAtIG1pbnV0ZSBvZiB0aGUgaG91ciwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZCAtIHNlY29uZCBvZiB0aGUgbWludXRlLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmQgLSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCAwLTk5OVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGludGVycHJldCB0aGUgbnVtYmVycyBpbiB0aGUgY29udGV4dCBvZiBhIHBhcnRpY3VsYXIgem9uZS4gQ2FuIHRha2UgYW55IHZhbHVlIHRha2VuIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBzZXRab25lKClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtXFwncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy53ZWVrU2V0dGluZ3MgLSB0aGUgd2VlayBzZXR0aW5ncyB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiwgbW9udGg6IDUsIGRheTogMjV9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiB9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9KSAvL34+IHRvZGF5IGF0IDEwOjI2OjA2XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ3V0YycgfSksXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0sIHsgem9uZTogJ2xvY2FsJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgd2Vla1llYXI6IDIwMTYsIHdlZWtOdW1iZXI6IDIsIHdlZWtkYXk6IDMgfSkudG9JU09EYXRlKCkgLy89PiAnMjAxNi0wMS0xMydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGxvY2FsV2Vla1llYXI6IDIwMjIsIGxvY2FsV2Vla051bWJlcjogMSwgbG9jYWxXZWVrZGF5OiAxIH0sIHsgbG9jYWxlOiBcImVuLVVTXCIgfSkudG9JU09EYXRlKCkgLy89PiAnMjAyMS0xMi0yNidcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xuICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdHMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKTtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplVW5pdFdpdGhMb2NhbFdlZWtzKTtcbiAgICBjb25zdCB7IG1pbkRheXNJbkZpcnN0V2Vlaywgc3RhcnRPZldlZWsgfSA9IHVzZXNMb2NhbFdlZWtWYWx1ZXMobm9ybWFsaXplZCwgbG9jKTtcblxuICAgIGNvbnN0IHRzTm93ID0gU2V0dGluZ3Mubm93KCksXG4gICAgICBvZmZzZXRQcm92aXMgPSAhaXNVbmRlZmluZWQob3B0cy5zcGVjaWZpY09mZnNldClcbiAgICAgICAgPyBvcHRzLnNwZWNpZmljT2Zmc2V0XG4gICAgICAgIDogem9uZVRvVXNlLm9mZnNldCh0c05vdyksXG4gICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyO1xuXG4gICAgLy8gY2FzZXM6XG4gICAgLy8ganVzdCBhIHdlZWtkYXkgLT4gdGhpcyB3ZWVrJ3MgaW5zdGFuY2Ugb2YgdGhhdCB3ZWVrZGF5LCBubyB3b3JyaWVzXG4gICAgLy8gKGdyZWdvcmlhbiBkYXRhIG9yIG9yZGluYWwpICsgKHdlZWtZZWFyIG9yIHdlZWtOdW1iZXIpIC0+IGVycm9yXG4gICAgLy8gKGdyZWdvcmlhbiBtb250aCBvciBkYXkpICsgb3JkaW5hbCAtPiBlcnJvclxuICAgIC8vIG90aGVyd2lzZSBqdXN0IHVzZSB3ZWVrcyBvciBvcmRpbmFscyBvciBncmVnb3JpYW4sIGRlcGVuZGluZyBvbiB3aGF0J3Mgc3BlY2lmaWVkXG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlV2Vla0RhdGEgPSBkZWZpbml0ZVdlZWtEZWYgfHwgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiAhY29udGFpbnNHcmVnb3IpO1xuXG4gICAgLy8gY29uZmlndXJlIG91cnNlbHZlcyB0byBkZWFsIHdpdGggZ3JlZ29yaWFuIGRhdGVzIG9yIHdlZWsgc3R1ZmZcbiAgICBsZXQgdW5pdHMsXG4gICAgICBkZWZhdWx0VmFsdWVzLFxuICAgICAgb2JqTm93ID0gdHNUb09iaih0c05vdywgb2Zmc2V0UHJvdmlzKTtcbiAgICBpZiAodXNlV2Vla0RhdGEpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZFdlZWtVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0V2Vla1VuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub1dlZWsob2JqTm93LCBtaW5EYXlzSW5GaXJzdFdlZWssIHN0YXJ0T2ZXZWVrKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkT3JkaW5hbFVuaXRzO1xuICAgICAgZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcztcbiAgICAgIG9iak5vdyA9IGdyZWdvcmlhblRvT3JkaW5hbChvYmpOb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcbiAgICB9XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG1pc3Npbmcgc3R1ZmZcbiAgICBsZXQgZm91bmRGaXJzdCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgdSBvZiB1bml0cykge1xuICAgICAgY29uc3QgdiA9IG5vcm1hbGl6ZWRbdV07XG4gICAgICBpZiAoIWlzVW5kZWZpbmVkKHYpKSB7XG4gICAgICAgIGZvdW5kRmlyc3QgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChmb3VuZEZpcnN0KSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBkZWZhdWx0VmFsdWVzW3VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IG9iak5vd1t1XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtYWtlIHN1cmUgdGhlIHZhbHVlcyB3ZSBoYXZlIGFyZSBpbiByYW5nZVxuICAgIGNvbnN0IGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQsIG1pbkRheXNJbkZpcnN0V2Vlaywgc3RhcnRPZldlZWspXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICBpbnZhbGlkID0gaGlnaGVyT3JkZXJJbnZhbGlkIHx8IGhhc0ludmFsaWRUaW1lRGF0YShub3JtYWxpemVkKTtcblxuICAgIGlmIChpbnZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkKTtcbiAgICB9XG5cbiAgICAvLyBjb21wdXRlIHRoZSBhY3R1YWwgdGltZVxuICAgIGNvbnN0IGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhXG4gICAgICAgID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQsIG1pbkRheXNJbkZpcnN0V2Vlaywgc3RhcnRPZldlZWspXG4gICAgICAgIDogY29udGFpbnNPcmRpbmFsXG4gICAgICAgID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpXG4gICAgICAgIDogbm9ybWFsaXplZCxcbiAgICAgIFt0c0ZpbmFsLCBvZmZzZXRGaW5hbF0gPSBvYmpUb1RTKGdyZWdvcmlhbiwgb2Zmc2V0UHJvdmlzLCB6b25lVG9Vc2UpLFxuICAgICAgaW5zdCA9IG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiB0c0ZpbmFsLFxuICAgICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICAgIG86IG9mZnNldEZpbmFsLFxuICAgICAgICBsb2MsXG4gICAgICB9KTtcblxuICAgIC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxuICAgIGlmIChub3JtYWxpemVkLndlZWtkYXkgJiYgY29udGFpbnNHcmVnb3IgJiYgb2JqLndlZWtkYXkgIT09IGluc3Qud2Vla2RheSkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXG4gICAgICAgIFwibWlzbWF0Y2hlZCB3ZWVrZGF5XCIsXG4gICAgICAgIGB5b3UgY2FuJ3Qgc3BlY2lmeSBib3RoIGEgd2Vla2RheSBvZiAke25vcm1hbGl6ZWQud2Vla2RheX0gYW5kIGEgZGF0ZSBvZiAke2luc3QudG9JU08oKX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghaW5zdC5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnN0LmludmFsaWQpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyXSAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbV0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMud2Vla1NldHRpbmdzXSAtIHRoZSB3ZWVrIHNldHRpbmdzIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcsIHtzZXRab25lOiB0cnVlfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnLCB7em9uZTogJ3V0Yyd9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LVcwNS00JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZUlTT0RhdGUodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJJU08gODYwMVwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSB0aGUgb2Zmc2V0IGlzIGFsd2F5cyBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLndlZWtTZXR0aW5ncyAtIHRoZSB3ZWVrIHNldHRpbmdzIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMzoxMiBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignRnJpLCAyNSBOb3YgMjAxNiAxMzoyMzoxMiArMDYwMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMyBaJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJGQzI4MjIodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VSRkMyODIyRGF0ZSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIlJGQyAyODIyXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgSFRUUCBkYXRlcyBhcmUgYWx3YXlzIGluIFVUQywgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggdGhlIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nLiBGb3IgSFRUUCBkYXRlcywgdGhpcyBpcyBhbHdheXMgVVRDLCBzbyB0aGlzIG9wdGlvbiBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGB6b25lYCBvcHRpb24gdG8gJ3V0YycsIGJ1dCB0aGlzIG9wdGlvbiBpcyBpbmNsdWRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCBzaW1pbGFyIG1ldGhvZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLndlZWtTZXR0aW5ncyAtIHRoZSB3ZWVrIHNldHRpbmdzIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4sIDA2IE5vdiAxOTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW5kYXksIDA2LU5vdi05NCAwODo0OTozNyBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSFRUUCgnU3VuIE5vdiAgNiAwODo0OTozNyAxOTk0JylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUhUVFAodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VIVFRQRGF0ZSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIkhUVFBcIiwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBpbnB1dCBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmcuXG4gICAqIERlZmF1bHRzIHRvIGVuLVVTIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWQsIHJlZ2FyZGxlc3Mgb2YgdGhlIHN5c3RlbSdzIGxvY2FsZS4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvcGFyc2luZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIHRoZSBsaW5rIGJlbG93IGZvciB0aGUgZm9ybWF0cylcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy53ZWVrU2V0dGluZ3MgLSB0aGUgd2VlayBzZXR0aW5ncyB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMgPSB7fSkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh0ZXh0KSB8fCBpc1VuZGVmaW5lZChmbXQpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJmcm9tRm9ybWF0IHJlcXVpcmVzIGFuIGlucHV0IHN0cmluZyBhbmQgYSBmb3JtYXRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSBvcHRzLFxuICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgZGVmYXVsdFRvRU46IHRydWUsXG4gICAgICB9KSxcbiAgICAgIFt2YWxzLCBwYXJzZWRab25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZF0gPSBwYXJzZUZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBgZm9ybWF0ICR7Zm10fWAsIHRleHQsIHNwZWNpZmljT2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGZyb21Gb3JtYXQgaW5zdGVhZFxuICAgKi9cbiAgc3RhdGljIGZyb21TdHJpbmcodGV4dCwgZm10LCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdCh0ZXh0LCBmbXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBTUUwgZGF0ZSwgdGltZSwgb3IgZGF0ZXRpbWVcbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLndlZWtTZXR0aW5ncyAtIHRoZSB3ZWVrIHNldHRpbmdzIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIrMDY6MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDIgQW1lcmljYS9Mb3NfQW5nZWxlcycsIHsgc2V0Wm9uZTogdHJ1ZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MicsIHsgem9uZTogJ0FtZXJpY2EvTG9zX0FuZ2VsZXMnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzA5OjEyOjM0LjM0MicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21TUUwodGV4dCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgW3ZhbHMsIHBhcnNlZFpvbmVdID0gcGFyc2VTUUwodGV4dCk7XG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJTUUxcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIERhdGVUaW1lIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEYXRlVGltZShvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkRhdGVUaW1lKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlIHRoZSBmb3JtYXQgc3RyaW5nIGZvciBhIHNldCBvZiBvcHRpb25zXG4gICAqIEBwYXJhbSBmb3JtYXRPcHRzXG4gICAqIEBwYXJhbSBsb2NhbGVPcHRzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgcGFyc2VGb3JtYXRGb3JPcHRzKGZvcm1hdE9wdHMsIGxvY2FsZU9wdHMgPSB7fSkge1xuICAgIGNvbnN0IHRva2VuTGlzdCA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XG4gICAgcmV0dXJuICF0b2tlbkxpc3QgPyBudWxsIDogdG9rZW5MaXN0Lm1hcCgodCkgPT4gKHQgPyB0LnZhbCA6IG51bGwpKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgdGhlIHRoZSBmdWxseSBleHBhbmRlZCBmb3JtYXQgdG9rZW4gZm9yIHRoZSBsb2NhbGVcbiAgICogRG9lcyBOT1QgcXVvdGUgY2hhcmFjdGVycywgc28gcXVvdGVkIHRva2VucyB3aWxsIG5vdCByb3VuZCB0cmlwIGNvcnJlY3RseVxuICAgKiBAcGFyYW0gZm10XG4gICAqIEBwYXJhbSBsb2NhbGVPcHRzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZXhwYW5kRm9ybWF0KGZtdCwgbG9jYWxlT3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgTG9jYWxlLmZyb21PYmplY3QobG9jYWxlT3B0cykpO1xuICAgIHJldHVybiBleHBhbmRlZC5tYXAoKHQpID0+IHQudmFsKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgem9uZU9mZnNldFRzID0gdW5kZWZpbmVkO1xuICAgIHpvbmVPZmZzZXRHdWVzc0NhY2hlLmNsZWFyKCk7XG4gIH1cblxuICAvLyBJTkZPXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ21vbnRoJyk7IC8vPT4gN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA3LCA0KS5nZXQoJ2RheScpOyAvLz0+IDRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1t1bml0XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIHZhbGlkLiBJbnZhbGlkIERhdGVUaW1lcyBvY2N1ciB3aGVuOlxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBmcm9tIGludmFsaWQgY2FsZW5kYXIgaW5mb3JtYXRpb24sIHN1Y2ggYXMgdGhlIDEzdGggbW9udGggb3IgRmVicnVhcnkgMzBcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgYnkgYW4gb3BlcmF0aW9uIG9uIGFub3RoZXIgaW52YWxpZCBkYXRlXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRSZWFzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZEV4cGxhbmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9jYWxlIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2VuLUdCJy4gVGhlIGxvY2FsZSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBsb2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLmxvY2FsZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXJpbmcgc3lzdGVtIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2JlbmcnLiBUaGUgbnVtYmVyaW5nIHN5c3RlbSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBudW1iZXJpbmdTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvdXRwdXQgY2FsZW5kYXIgb2YgYSBEYXRlVGltZSwgc3VjaCAnaXNsYW1pYycuIFRoZSBvdXRwdXQgY2FsZW5kYXIgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm91dHB1dENhbGVuZGFyIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRpbWUgem9uZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBEYXRlVGltZS5cbiAgICogQHR5cGUge1pvbmV9XG4gICAqL1xuICBnZXQgem9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIHRpbWUgem9uZS5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB6b25lTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLm5hbWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhclxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkueWVhciAvLz0+IDIwMTdcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB5ZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMueWVhciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHF1YXJ0ZXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnF1YXJ0ZXIgLy89PiAyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgcXVhcnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9udGggKDEtMTIpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuZGF5IC8vPT4gMjVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBkYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5kYXkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBob3VyIG9mIHRoZSBkYXkgKDAtMjMpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSkuaG91ciAvLz0+IDlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBob3VyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuaG91ciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciAoMC01OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzBcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtaW51dGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIpLnNlY29uZCAvLz0+IDUyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuc2Vjb25kIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCAoMC05OTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyLCA2NTQpLm1pbGxpc2Vjb25kIC8vPT4gNjU0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWlsbGlzZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taWxsaXNlY29uZCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWsgeWVhclxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTIsIDMxKS53ZWVrWWVhciAvLz0+IDIwMTVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrWWVhciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSB3ZWVrIHllYXIgKDEtNTJpc2gpLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay5cbiAgICogMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla2RheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGRhdGUgaXMgb24gYSB3ZWVrZW5kIGFjY29yZGluZyB0byB0aGUgbG9jYWxlLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNXZWVrZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgJiYgdGhpcy5sb2MuZ2V0V2Vla2VuZERheXMoKS5pbmNsdWRlcyh0aGlzLndlZWtkYXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIGFjY29yZGluZyB0byB0aGUgbG9jYWxlLlxuICAgKiAxIGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgYW5kIDcgaXMgdGhlIGxhc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgKiBJZiB0aGUgbG9jYWxlIGFzc2lnbnMgU3VuZGF5IGFzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssIHRoZW4gYSBkYXRlIHdoaWNoIGlzIGEgU3VuZGF5IHdpbGwgcmV0dXJuIDEsXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbG9jYWxXZWVrZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZExvY2FsV2Vla0RhdGEodGhpcykud2Vla2RheSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlZWsgbnVtYmVyIG9mIHRoZSB3ZWVrIHllYXIgYWNjb3JkaW5nIHRvIHRoZSBsb2NhbGUuIERpZmZlcmVudCBsb2NhbGVzIGFzc2lnbiB3ZWVrIG51bWJlcnMgZGlmZmVyZW50bHksXG4gICAqIGJlY2F1c2UgdGhlIHdlZWsgY2FuIHN0YXJ0IG9uIGRpZmZlcmVudCBkYXlzIG9mIHRoZSB3ZWVrIChzZWUgbG9jYWxXZWVrZGF5KSBhbmQgYmVjYXVzZSBhIGRpZmZlcmVudCBudW1iZXIgb2YgZGF5c1xuICAgKiBpcyByZXF1aXJlZCBmb3IgYSB3ZWVrIHRvIGNvdW50IGFzIHRoZSBmaXJzdCB3ZWVrIG9mIGEgeWVhci5cbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldCBsb2NhbFdlZWtOdW1iZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkTG9jYWxXZWVrRGF0YSh0aGlzKS53ZWVrTnVtYmVyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2VlayB5ZWFyIGFjY29yZGluZyB0byB0aGUgbG9jYWxlLiBEaWZmZXJlbnQgbG9jYWxlcyBhc3NpZ24gd2VlayBudW1iZXJzIChhbmQgdGhlcmVmb3Igd2VlayB5ZWFycylcbiAgICogZGlmZmVyZW50bHksIHNlZSBsb2NhbFdlZWtOdW1iZXIuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbG9jYWxXZWVrWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRMb2NhbFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3JkaW5hbCAobWVhbmluZyB0aGUgZGF5IG9mIHRoZSB5ZWFyKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkub3JkaW5hbCAvLz0+IDE0NVxuICAgKiBAdHlwZSB7bnVtYmVyfERhdGVUaW1lfVxuICAgKi9cbiAgZ2V0IG9yZGluYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLm9yZGluYWwgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCBtb250aCBuYW1lLCBzdWNoIGFzICdPY3QnLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbW9udGhTaG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJzaG9ydFwiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0b2JlcicuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoTG9uZyAvLz0+IE9jdG9iZXJcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBtb250aExvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKFwibG9uZ1wiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IHdlZWtkYXksIHN1Y2ggYXMgJ01vbicuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlTaG9ydCAvLz0+IE1vblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXlTaG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcInNob3J0XCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIHdlZWtkYXksIHN1Y2ggYXMgJ01vbmRheScuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgd2Vla2RheUxvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJsb25nXCIsIHsgbG9jT2JqOiB0aGlzLmxvYyB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBVVEMgb2Zmc2V0IG9mIHRoaXMgRGF0ZVRpbWUgaW4gbWludXRlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5vZmZzZXQgLy89PiAtMjQwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLm9mZnNldCAvLz0+IDBcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/ICt0aGlzLm8gOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBzaG9ydCBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVTVFwiIG9yIFwiRURUXCIuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG9mZnNldE5hbWVTaG9ydCgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lLm9mZnNldE5hbWUodGhpcy50cywge1xuICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb25nIGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRWFzdGVybiBTdGFuZGFyZCBUaW1lXCIgb3IgXCJFYXN0ZXJuIERheWxpZ2h0IFRpbWVcIi5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb2Zmc2V0TmFtZUxvbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcImxvbmdcIixcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhpcyB6b25lJ3Mgb2Zmc2V0IGV2ZXIgY2hhbmdlcywgYXMgaW4gYSBEU1QuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzT2Zmc2V0Rml4ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5pc1VuaXZlcnNhbCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIGluIGEgRFNULlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luRFNUKCkge1xuICAgIGlmICh0aGlzLmlzT2Zmc2V0Rml4ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7IG1vbnRoOiAxLCBkYXk6IDEgfSkub2Zmc2V0IHx8XG4gICAgICAgIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogNSB9KS5vZmZzZXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aG9zZSBEYXRlVGltZXMgd2hpY2ggaGF2ZSB0aGUgc2FtZSBsb2NhbCB0aW1lIGFzIHRoaXMgRGF0ZVRpbWUsIGJ1dCBhIGRpZmZlcmVudCBvZmZzZXQgZnJvbSBVVENcbiAgICogaW4gdGhpcyBEYXRlVGltZSdzIHpvbmUuIER1cmluZyBEU1QgY2hhbmdlcyBsb2NhbCB0aW1lIGNhbiBiZSBhbWJpZ3VvdXMsIGZvciBleGFtcGxlXG4gICAqIGAyMDIzLTEwLTI5VDAyOjMwOjAwYCBpbiBgRXVyb3BlL0JlcmxpbmAgY2FuIGhhdmUgb2Zmc2V0IGArMDE6MDBgIG9yIGArMDI6MDBgLlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBib3RoIHBvc3NpYmxlIERhdGVUaW1lcyBpZiB0aGlzIERhdGVUaW1lJ3MgbG9jYWwgdGltZSBpcyBhbWJpZ3VvdXMuXG4gICAqIEByZXR1cm5zIHtEYXRlVGltZVtdfVxuICAgKi9cbiAgZ2V0UG9zc2libGVPZmZzZXRzKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8IHRoaXMuaXNPZmZzZXRGaXhlZCkge1xuICAgICAgcmV0dXJuIFt0aGlzXTtcbiAgICB9XG4gICAgY29uc3QgZGF5TXMgPSA4NjQwMDAwMDtcbiAgICBjb25zdCBtaW51dGVNcyA9IDYwMDAwO1xuICAgIGNvbnN0IGxvY2FsVFMgPSBvYmpUb0xvY2FsVFModGhpcy5jKTtcbiAgICBjb25zdCBvRWFybGllciA9IHRoaXMuem9uZS5vZmZzZXQobG9jYWxUUyAtIGRheU1zKTtcbiAgICBjb25zdCBvTGF0ZXIgPSB0aGlzLnpvbmUub2Zmc2V0KGxvY2FsVFMgKyBkYXlNcyk7XG5cbiAgICBjb25zdCBvMSA9IHRoaXMuem9uZS5vZmZzZXQobG9jYWxUUyAtIG9FYXJsaWVyICogbWludXRlTXMpO1xuICAgIGNvbnN0IG8yID0gdGhpcy56b25lLm9mZnNldChsb2NhbFRTIC0gb0xhdGVyICogbWludXRlTXMpO1xuICAgIGlmIChvMSA9PT0gbzIpIHtcbiAgICAgIHJldHVybiBbdGhpc107XG4gICAgfVxuICAgIGNvbnN0IHRzMSA9IGxvY2FsVFMgLSBvMSAqIG1pbnV0ZU1zO1xuICAgIGNvbnN0IHRzMiA9IGxvY2FsVFMgLSBvMiAqIG1pbnV0ZU1zO1xuICAgIGNvbnN0IGMxID0gdHNUb09iaih0czEsIG8xKTtcbiAgICBjb25zdCBjMiA9IHRzVG9PYmoodHMyLCBvMik7XG4gICAgaWYgKFxuICAgICAgYzEuaG91ciA9PT0gYzIuaG91ciAmJlxuICAgICAgYzEubWludXRlID09PSBjMi5taW51dGUgJiZcbiAgICAgIGMxLnNlY29uZCA9PT0gYzIuc2Vjb25kICYmXG4gICAgICBjMS5taWxsaXNlY29uZCA9PT0gYzIubWlsbGlzZWNvbmRcbiAgICApIHtcbiAgICAgIHJldHVybiBbY2xvbmUodGhpcywgeyB0czogdHMxIH0pLCBjbG9uZSh0aGlzLCB7IHRzOiB0czIgfSldO1xuICAgIH1cbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIERhdGVUaW1lIGlzIGluIGEgbGVhcCB5ZWFyLCBmYWxzZSBvdGhlcndpc2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuaXNJbkxlYXBZZWFyIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luTGVhcFllYXIoKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMikuZGF5c0luTW9udGggLy89PiAyOVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAzKS5kYXlzSW5Nb250aCAvLz0+IDMxXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luTW9udGgoKSB7XG4gICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5kYXlzSW5ZZWFyIC8vPT4gMzY1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5c0luWWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZGF5c0luWWVhcih0aGlzLnllYXIpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB3ZWVrcyBpbiB0aGlzIERhdGVUaW1lJ3MgeWVhclxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAwNCkud2Vla3NJbldlZWtZZWFyIC8vPT4gNTNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykud2Vla3NJbldlZWtZZWFyIC8vPT4gNTJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrc0luV2Vla1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHdlZWtzSW5XZWVrWWVhcih0aGlzLndlZWtZZWFyKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgaW4gdGhpcyBEYXRlVGltZSdzIGxvY2FsIHdlZWsgeWVhclxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDIwLCA2LCB7bG9jYWxlOiAnZW4tVVMnfSkud2Vla3NJbkxvY2FsV2Vla1llYXIgLy89PiA1MlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDIwLCA2LCB7bG9jYWxlOiAnZGUtREUnfSkud2Vla3NJbkxvY2FsV2Vla1llYXIgLy89PiA1M1xuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtzSW5Mb2NhbFdlZWtZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gd2Vla3NJbldlZWtZZWFyKFxuICAgICAgICAgIHRoaXMubG9jYWxXZWVrWWVhcixcbiAgICAgICAgICB0aGlzLmxvYy5nZXRNaW5EYXlzSW5GaXJzdFdlZWsoKSxcbiAgICAgICAgICB0aGlzLmxvYy5nZXRTdGFydE9mV2VlaygpXG4gICAgICAgIClcbiAgICAgIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc29sdmVkIEludGwgb3B0aW9ucyBmb3IgdGhpcyBEYXRlVGltZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gdW5kZXJzdGFuZGluZyB0aGUgYmVoYXZpb3Igb2YgZm9ybWF0dGluZyBtZXRob2RzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gdGhlIHNhbWUgb3B0aW9ucyBhcyB0b0xvY2FsZVN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICByZXNvbHZlZExvY2FsZU9wdGlvbnMob3B0cyA9IHt9KSB7XG4gICAgY29uc3QgeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXIgfSA9IEZvcm1hdHRlci5jcmVhdGUoXG4gICAgICB0aGlzLmxvYy5jbG9uZShvcHRzKSxcbiAgICAgIG9wdHNcbiAgICApLnJlc29sdmVkT3B0aW9ucyh0aGlzKTtcbiAgICByZXR1cm4geyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXI6IGNhbGVuZGFyIH07XG4gIH1cblxuICAvLyBUUkFOU0ZPUk1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIFVUQy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBFcXVpdmFsZW50IHRvIHtAbGluayBEYXRlVGltZSNzZXRab25lfSgndXRjJylcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBvcHRpb25hbGx5LCBhbiBvZmZzZXQgZnJvbSBVVEMgaW4gbWludXRlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dIC0gb3B0aW9ucyB0byBwYXNzIHRvIGBzZXRab25lKClgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgdG9VVEMob2Zmc2V0ID0gMCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHRoZSBob3N0J3MgbG9jYWwgem9uZS4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBFcXVpdmFsZW50IHRvIGBzZXRab25lKCdsb2NhbCcpYFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHRvTG9jYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHNwZWNpZmllZCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBzZXR0ZXIga2VlcHMgdGhlIHVuZGVybHlpbmcgdGltZSB0aGUgc2FtZSAoYXMgaW4sIHRoZSBzYW1lIHRpbWVzdGFtcCksIGJ1dCB0aGUgbmV3IGluc3RhbmNlIHdpbGwgcmVwb3J0IGRpZmZlcmVudCBsb2NhbCB0aW1lcyBhbmQgY29uc2lkZXIgRFNUcyB3aGVuIG1ha2luZyBjb21wdXRhdGlvbnMsIGFzIHdpdGgge0BsaW5rIERhdGVUaW1lI3BsdXN9LiBZb3UgbWF5IHdpc2ggdG8gdXNlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvVVRDfSB3aGljaCBwcm92aWRlIHNpbXBsZSBjb252ZW5pZW5jZSB3cmFwcGVycyBmb3IgY29tbW9ubHkgdXNlZCB6b25lcy5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBhIHpvbmUgaWRlbnRpZmllci4gQXMgYSBzdHJpbmcsIHRoYXQgY2FuIGJlIGFueSBJQU5BIHpvbmUgc3VwcG9ydGVkIGJ5IHRoZSBob3N0IGVudmlyb25tZW50LCBvciBhIGZpeGVkLW9mZnNldCBuYW1lIG9mIHRoZSBmb3JtICdVVEMrMycsIG9yIHRoZSBzdHJpbmdzICdsb2NhbCcgb3IgJ3V0YycuIFlvdSBtYXkgYWxzbyBzdXBwbHkgYW4gaW5zdGFuY2Ugb2YgYSB7QGxpbmsgRGF0ZVRpbWUjWm9uZX0gY2xhc3MuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmtlZXBMb2NhbFRpbWU9ZmFsc2VdIC0gSWYgdHJ1ZSwgYWRqdXN0IHRoZSB1bmRlcmx5aW5nIHRpbWUgc28gdGhhdCB0aGUgbG9jYWwgdGltZSBzdGF5cyB0aGUgc2FtZSwgYnV0IGluIHRoZSB0YXJnZXQgem9uZS4gWW91IHNob3VsZCByYXJlbHkgbmVlZCB0aGlzLlxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldFpvbmUoem9uZSwgeyBrZWVwTG9jYWxUaW1lID0gZmFsc2UsIGtlZXBDYWxlbmRhclRpbWUgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB6b25lID0gbm9ybWFsaXplWm9uZSh6b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKHpvbmUuZXF1YWxzKHRoaXMuem9uZSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSBpZiAoIXpvbmUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQodW5zdXBwb3J0ZWRab25lKHpvbmUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1RTID0gdGhpcy50cztcbiAgICAgIGlmIChrZWVwTG9jYWxUaW1lIHx8IGtlZXBDYWxlbmRhclRpbWUpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0R3Vlc3MgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgY29uc3QgYXNPYmogPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgICAgIFtuZXdUU10gPSBvYmpUb1RTKGFzT2JqLCBvZmZzZXRHdWVzcywgem9uZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xvbmUodGhpcywgeyB0czogbmV3VFMsIHpvbmUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvciBvdXRwdXRDYWxlbmRhci4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyAtIHRoZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcbiAgICBjb25zdCBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9KTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyBsb2MgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEp1c3QgYSBjb252ZW5pZW50IGFsaWFzIGZvciByZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuc2V0TG9jYWxlKCdlbi1HQicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0TG9jYWxlKGxvY2FsZSkge1xuICAgIHJldHVybiB0aGlzLnJlY29uZmlndXJlKHsgbG9jYWxlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogWW91IGNhbiBvbmx5IHNldCB1bml0cyB3aXRoIHRoaXMgbWV0aG9kOyBmb3IgXCJzZXR0aW5nXCIgbWV0YWRhdGEsIHNlZSB7QGxpbmsgRGF0ZVRpbWUjcmVjb25maWd1cmV9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0uXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGFsc28gc3VwcG9ydHMgc2V0dGluZyBsb2NhbGUtYmFzZWQgd2VlayB1bml0cywgaS5lLiBgbG9jYWxXZWVrZGF5YCwgYGxvY2FsV2Vla051bWJlcmAgYW5kIGBsb2NhbFdlZWtZZWFyYC5cbiAgICogVGhleSBjYW5ub3QgYmUgbWl4ZWQgd2l0aCBJU08td2VlayB1bml0cyBsaWtlIGB3ZWVrZGF5YC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgbm9ybWFsaXplVW5pdFdpdGhMb2NhbFdlZWtzKTtcbiAgICBjb25zdCB7IG1pbkRheXNJbkZpcnN0V2Vlaywgc3RhcnRPZldlZWsgfSA9IHVzZXNMb2NhbFdlZWtWYWx1ZXMobm9ybWFsaXplZCwgdGhpcy5sb2MpO1xuXG4gICAgY29uc3Qgc2V0dGluZ1dlZWtTdHVmZiA9XG4gICAgICAgICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtZZWFyKSB8fFxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrTnVtYmVyKSB8fFxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrZGF5KSxcbiAgICAgIGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpLFxuICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1ELFxuICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXI7XG5cbiAgICBpZiAoKGNvbnRhaW5zR3JlZ29yIHx8IGNvbnRhaW5zT3JkaW5hbCkgJiYgZGVmaW5pdGVXZWVrRGVmKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChjb250YWluc0dyZWdvck1EICYmIGNvbnRhaW5zT3JkaW5hbCkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IG9yZGluYWwgZGF0ZXMgd2l0aCBtb250aC9kYXlcIik7XG4gICAgfVxuXG4gICAgbGV0IG1peGVkO1xuICAgIGlmIChzZXR0aW5nV2Vla1N0dWZmKSB7XG4gICAgICBtaXhlZCA9IHdlZWtUb0dyZWdvcmlhbihcbiAgICAgICAgeyAuLi5ncmVnb3JpYW5Ub1dlZWsodGhpcy5jLCBtaW5EYXlzSW5GaXJzdFdlZWssIHN0YXJ0T2ZXZWVrKSwgLi4ubm9ybWFsaXplZCB9LFxuICAgICAgICBtaW5EYXlzSW5GaXJzdFdlZWssXG4gICAgICAgIHN0YXJ0T2ZXZWVrXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCkpIHtcbiAgICAgIG1peGVkID0gb3JkaW5hbFRvR3JlZ29yaWFuKHsgLi4uZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYyksIC4uLm5vcm1hbGl6ZWQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1peGVkID0geyAuLi50aGlzLnRvT2JqZWN0KCksIC4uLm5vcm1hbGl6ZWQgfTtcblxuICAgICAgLy8gaWYgd2UgZGlkbid0IHNldCB0aGUgZGF5IGJ1dCB3ZSBlbmRlZCB1cCBvbiBhbiBvdmVyZmxvdyBkYXRlLFxuICAgICAgLy8gdXNlIHRoZSBsYXN0IGRheSBvZiB0aGUgcmlnaHQgbW9udGhcbiAgICAgIGlmIChpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSkpIHtcbiAgICAgICAgbWl4ZWQuZGF5ID0gTWF0aC5taW4oZGF5c0luTW9udGgobWl4ZWQueWVhciwgbWl4ZWQubW9udGgpLCBtaXhlZC5kYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFt0cywgb10gPSBvYmpUb1RTKG1peGVkLCB0aGlzLm8sIHRoaXMuem9uZSk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdHMsIG8gfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICpcbiAgICogQWRkaW5nIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBvciBtaWxsaXNlY29uZHMgaW5jcmVhc2VzIHRoZSB0aW1lc3RhbXAgYnkgdGhlIHJpZ2h0IG51bWJlciBvZiBtaWxsaXNlY29uZHMuIEFkZGluZyBkYXlzLCBtb250aHMsIG9yIHllYXJzIHNoaWZ0cyB0aGUgY2FsZW5kYXIsIGFjY291bnRpbmcgZm9yIERTVHMgYW5kIGxlYXAgeWVhcnMgYWxvbmcgdGhlIHdheS4gVGh1cywgYGR0LnBsdXMoeyBob3VyczogMjQgfSlgIG1heSByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdGltZSB0aGFuIGBkdC5wbHVzKHsgZGF5czogMSB9KWAgaWYgdGhlcmUncyBhIERTVCBzaGlmdCBpbiBiZXR3ZWVuLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoMTIzKSAvL34+IGluIDEyMyBtaWxsaXNlY29uZHNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IG1pbnV0ZXM6IDE1IH0pIC8vfj4gaW4gMTUgbWludXRlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KSAvL34+IHRoaXMgdGltZSB0b21vcnJvd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogLTEgfSkgLy9+PiB0aGlzIHRpbWUgeWVzdGVyZGF5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBob3VyczogMywgbWludXRlczogMTMgfSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyhEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pKSAvL34+IGluIDMgaHIsIDEzIG1pblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbik7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogU3VidHJhY3QgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI3BsdXN9XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBtaW51cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKS5uZWdhdGUoKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHVuaXQgb2YgdGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgYmVnaW5uaW5nIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy51c2VMb2NhbGVXZWVrcz1mYWxzZV0gLSBJZiB0cnVlLCB1c2Ugd2Vla3MgYmFzZWQgb24gdGhlIGxvY2FsZSwgaS5lLiB1c2UgdGhlIGxvY2FsZS1kZXBlbmRlbnQgc3RhcnQgb2YgdGhlIHdlZWtcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd3ZWVrJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDMnLCB3ZWVrcyBhbHdheXMgc3RhcnQgb24gTW9uZGF5c1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXJ0T2YodW5pdCwgeyB1c2VMb2NhbGVXZWVrcyA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG8gPSB7fSxcbiAgICAgIG5vcm1hbGl6ZWRVbml0ID0gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KTtcbiAgICBzd2l0Y2ggKG5vcm1hbGl6ZWRVbml0KSB7XG4gICAgICBjYXNlIFwieWVhcnNcIjpcbiAgICAgICAgby5tb250aCA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwicXVhcnRlcnNcIjpcbiAgICAgIGNhc2UgXCJtb250aHNcIjpcbiAgICAgICAgby5kYXkgPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcIndlZWtzXCI6XG4gICAgICBjYXNlIFwiZGF5c1wiOlxuICAgICAgICBvLmhvdXIgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcImhvdXJzXCI6XG4gICAgICAgIG8ubWludXRlID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJtaW51dGVzXCI6XG4gICAgICAgIG8uc2Vjb25kID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJzZWNvbmRzXCI6XG4gICAgICAgIG8ubWlsbGlzZWNvbmQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaWxsaXNlY29uZHNcIjpcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBubyBkZWZhdWx0LCBpbnZhbGlkIHVuaXRzIHRocm93IGluIG5vcm1hbGl6ZVVuaXQoKVxuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJ3ZWVrc1wiKSB7XG4gICAgICBpZiAodXNlTG9jYWxlV2Vla3MpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRPZldlZWsgPSB0aGlzLmxvYy5nZXRTdGFydE9mV2VlaygpO1xuICAgICAgICBjb25zdCB7IHdlZWtkYXkgfSA9IHRoaXM7XG4gICAgICAgIGlmICh3ZWVrZGF5IDwgc3RhcnRPZldlZWspIHtcbiAgICAgICAgICBvLndlZWtOdW1iZXIgPSB0aGlzLndlZWtOdW1iZXIgLSAxO1xuICAgICAgICB9XG4gICAgICAgIG8ud2Vla2RheSA9IHN0YXJ0T2ZXZWVrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgby53ZWVrZGF5ID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwicXVhcnRlcnNcIikge1xuICAgICAgY29uc3QgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7XG4gICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldChvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy51c2VMb2NhbGVXZWVrcz1mYWxzZV0gLSBJZiB0cnVlLCB1c2Ugd2Vla3MgYmFzZWQgb24gdGhlIGxvY2FsZSwgaS5lLiB1c2UgdGhlIGxvY2FsZS1kZXBlbmRlbnQgc3RhcnQgb2YgdGhlIHdlZWtcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ21vbnRoJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd5ZWFyJykudG9JU08oKTsgLy89PiAnMjAxNC0xMi0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd3ZWVrJykudG9JU08oKTsgLy8gPT4gJzIwMTQtMDMtMDlUMjM6NTk6NTkuOTk5LTA1OjAwJywgd2Vla3Mgc3RhcnQgb24gTW9uZGF5c1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2RheScpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2hvdXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDA1OjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBlbmRPZih1bml0LCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyB0aGlzLnBsdXMoeyBbdW5pdF06IDEgfSlcbiAgICAgICAgICAuc3RhcnRPZih1bml0LCBvcHRzKVxuICAgICAgICAgIC5taW51cygxKVxuICAgICAgOiB0aGlzO1xuICB9XG5cbiAgLy8gT1VUUFVUXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogKipZb3UgbWF5IG5vdCB3YW50IHRoaXMuKiogU2VlIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9yIGEgbW9yZSBmbGV4aWJsZSBmb3JtYXR0aW5nIHRvb2wuIEZvciBhIHRhYmxlIG9mIHRva2VucyBhbmQgdGhlaXIgaW50ZXJwcmV0YXRpb25zLCBzZWUgW2hlcmVdKGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi8jL2Zvcm1hdHRpbmc/aWQ9dGFibGUtb2YtdG9rZW5zKS5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IEFwciAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKCdmcicpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJywgeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KFwiSEggJ2hvdXJzIGFuZCcgbW0gJ21pbnV0ZXMnXCIpIC8vPT4gJzIwIGhvdXJzIGFuZCA1NSBtaW51dGVzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChmbXQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5yZWRlZmF1bHRUb0VOKG9wdHMpKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcywgZm10KVxuICAgICAgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2NhbGl6ZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGlzIGRhdGUuIEFjY2VwdHMgdGhlIHNhbWUgb3B0aW9ucyBhcyB0aGUgSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBhbmQgYW55IHByZXNldHMgZGVmaW5lZCBieSBMdXhvbiwgc3VjaCBhcyBgRGF0ZVRpbWUuREFURV9GVUxMYCBvciBgRGF0ZVRpbWUuVElNRV9TSU1QTEVgLlxuICAgKiBUaGUgZXhhY3QgYmVoYXZpb3Igb2YgdGhpcyBtZXRob2QgaXMgYnJvd3Nlci1zcGVjaWZpYywgYnV0IGluIGdlbmVyYWwgaXQgd2lsbCByZXR1cm4gYW4gYXBwcm9wcmlhdGUgcmVwcmVzZW50YXRpb25cbiAgICogb2YgdGhlIERhdGVUaW1lIGluIHRoZSBhc3NpZ25lZCBsb2NhbGUuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSBmb3JtYXRPcHRzIHtPYmplY3R9IC0gSW50bC5EYXRlVGltZUZvcm1hdCBjb25zdHJ1Y3RvciBvcHRpb25zIGFuZCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRzIHRvIG92ZXJyaWRlIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgb24gdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZygpOyAvLz0+IDQvMjAvMjAxN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2VuLWdiJykudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiAnMjAvMDQvMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMKTsgLy89PiAnQXByaWwgMjAsIDIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCwgeyBsb2NhbGU6ICdmcicgfSk7IC8vPT4gJzI4IGFvw7t0IDIwMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiAnMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX1NIT1JUKTsgLy89PiAnNC8yMC8yMDE3LCAxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHVyc2RheSwgQXByaWwgMjAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgd2Vla2RheTogJ3Nob3J0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHUsIEFwciAyMCwgMTE6MjcgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JywgaG91ckN5Y2xlOiAnaDIzJyB9KTsgLy89PiAnMTE6MzInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvTG9jYWxlU3RyaW5nKGZvcm1hdE9wdHMgPSBGb3JtYXRzLkRBVEVfU0hPUlQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcylcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZvcm1hdCBcInBhcnRzXCIsIG1lYW5pbmcgaW5kaXZpZHVhbCB0b2tlbnMgYWxvbmcgd2l0aCBtZXRhZGF0YS4gVGhpcyBpcyBhbGxvd3MgY2FsbGVycyB0byBwb3N0LXByb2Nlc3MgaW5kaXZpZHVhbCBzZWN0aW9ucyBvZiB0aGUgZm9ybWF0dGVkIG91dHB1dC5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvZm9ybWF0VG9QYXJ0c1xuICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucywgc2FtZSBhcyBgdG9Mb2NhbGVTdHJpbmdgLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gW1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cbiAgICovXG4gIHRvTG9jYWxlUGFydHMob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpXG4gICAgICA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT1mYWxzZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMucHJlY2lzaW9uPSdtaWxsaXNlY29uZHMnXSAtIHRydW5jYXRlIG91dHB1dCB0byBkZXNpcmVkIHByZXNpY2lvbjogJ3llYXJzJywgJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycgb3IgJ21pbGxpc2Vjb25kcycuIFdoZW4gcHJlY2lzaW9uIGFuZCBzdXBwcmVzc1NlY29uZHMgb3Igc3VwcHJlc3NNaWxsaXNlY29uZHMgYXJlIHVzZWQgdG9nZXRoZXIsIHByZWNpc2lvbiBzZXRzIHRoZSBtYXhpbXVtIHVuaXQgc2hvd24gaW4gdGhlIG91dHB1dCwgaG93ZXZlciBzZWNvbmRzIG9yIG1pbGxpc2Vjb25kcyB3aWxsIHN0aWxsIGJlIHN1cHByZXNzZWQgaWYgdGhleSBhcmUgMC5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODMsIDUsIDI1KS50b0lTTygpIC8vPT4gJzE5ODItMDUtMjVUMDA6MDA6MDAuMDAwWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNS0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMjAxNzA0MjJUMjA0NzA1LjMzNS0wNDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IHByZWNpc2lvbjogJ2RheScgfSkgLy89PiAnMjAxNy0wNC0yMlonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvSVNPKHsgcHJlY2lzaW9uOiAnbWludXRlJyB9KSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3WidcbiAgICogQHJldHVybiB7c3RyaW5nfG51bGx9XG4gICAqL1xuICB0b0lTTyh7XG4gICAgZm9ybWF0ID0gXCJleHRlbmRlZFwiLFxuICAgIHN1cHByZXNzU2Vjb25kcyA9IGZhbHNlLFxuICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gZmFsc2UsXG4gICAgaW5jbHVkZU9mZnNldCA9IHRydWUsXG4gICAgZXh0ZW5kZWRab25lID0gZmFsc2UsXG4gICAgcHJlY2lzaW9uID0gXCJtaWxsaXNlY29uZHNcIixcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByZWNpc2lvbiA9IG5vcm1hbGl6ZVVuaXQocHJlY2lzaW9uKTtcbiAgICBjb25zdCBleHQgPSBmb3JtYXQgPT09IFwiZXh0ZW5kZWRcIjtcblxuICAgIGxldCBjID0gdG9JU09EYXRlKHRoaXMsIGV4dCwgcHJlY2lzaW9uKTtcbiAgICBpZiAob3JkZXJlZFVuaXRzLmluZGV4T2YocHJlY2lzaW9uKSA+PSAzKSBjICs9IFwiVFwiO1xuICAgIGMgKz0gdG9JU09UaW1lKFxuICAgICAgdGhpcyxcbiAgICAgIGV4dCxcbiAgICAgIHN1cHByZXNzU2Vjb25kcyxcbiAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICAgICAgaW5jbHVkZU9mZnNldCxcbiAgICAgIGV4dGVuZGVkWm9uZSxcbiAgICAgIHByZWNpc2lvblxuICAgICk7XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyBkYXRlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5wcmVjaXNpb249J2RheSddIC0gdHJ1bmNhdGUgb3V0cHV0IHRvIGRlc2lyZWQgcHJlY2lzaW9uOiAneWVhcnMnLCAnbW9udGhzJywgb3IgJ2RheXMnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzE5ODIwNTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSh7IHByZWNpc2lvbjogJ21vbnRoJyB9KSAvLz0+ICcxOTgyLTA1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIHRvSVNPRGF0ZSh7IGZvcm1hdCA9IFwiZXh0ZW5kZWRcIiwgcHJlY2lzaW9uID0gXCJkYXlcIiB9ID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgZm9ybWF0ID09PSBcImV4dGVuZGVkXCIsIG5vcm1hbGl6ZVVuaXQocHJlY2lzaW9uKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB3ZWVrIGRhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT1dlZWtEYXRlKCkgLy89PiAnMTk4Mi1XMjEtMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09XZWVrRGF0ZSgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwia2tray0nVydXVy1jXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgdGltZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZXh0ZW5kZWRab25lPXRydWVdIC0gYWRkIHRoZSB0aW1lIHpvbmUgZm9ybWF0IGV4dGVuc2lvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVQcmVmaXg9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgYFRgIHByZWZpeFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLnByZWNpc2lvbj0nbWlsbGlzZWNvbmRzJ10gLSB0cnVuY2F0ZSBvdXRwdXQgdG8gZGVzaXJlZCBwcmVzaWNpb246ICdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnIG9yICdtaWxsaXNlY29uZHMnLiBXaGVuIHByZWNpc2lvbiBhbmQgc3VwcHJlc3NTZWNvbmRzIG9yIHN1cHByZXNzTWlsbGlzZWNvbmRzIGFyZSB1c2VkIHRvZ2V0aGVyLCBwcmVjaXNpb24gc2V0cyB0aGUgbWF4aW11bSB1bml0IHNob3duIGluIHRoZSBvdXRwdXQsIGhvd2V2ZXIgc2Vjb25kcyBvciBtaWxsaXNlY29uZHMgd2lsbCBzdGlsbCBiZSBzdXBwcmVzc2VkIGlmIHRoZXkgYXJlIDAuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKCkgLy89PiAnMDc6MzQ6MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCwgc2Vjb25kczogMCwgbWlsbGlzZWNvbmRzOiAwIH0pLnRvSVNPVGltZSh7IHN1cHByZXNzU2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcwNzozNFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQgfSkudG9JU09UaW1lKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzA3MzQxOS4zNjFaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGluY2x1ZGVQcmVmaXg6IHRydWUgfSkgLy89PiAnVDA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZDogNTYgfSkudG9JU09UaW1lKHsgcHJlY2lzaW9uOiAnbWludXRlJyB9KSAvLz0+ICcwNzozNFonXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPVGltZSh7XG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcbiAgICBpbmNsdWRlUHJlZml4ID0gZmFsc2UsXG4gICAgZXh0ZW5kZWRab25lID0gZmFsc2UsXG4gICAgZm9ybWF0ID0gXCJleHRlbmRlZFwiLFxuICAgIHByZWNpc2lvbiA9IFwibWlsbGlzZWNvbmRzXCIsXG4gIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcmVjaXNpb24gPSBub3JtYWxpemVVbml0KHByZWNpc2lvbik7XG4gICAgbGV0IGMgPSBpbmNsdWRlUHJlZml4ICYmIG9yZGVyZWRVbml0cy5pbmRleE9mKHByZWNpc2lvbikgPj0gMyA/IFwiVFwiIDogXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgYyArXG4gICAgICB0b0lTT1RpbWUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiLFxuICAgICAgICBzdXBwcmVzc1NlY29uZHMsXG4gICAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICAgICAgICBpbmNsdWRlT2Zmc2V0LFxuICAgICAgICBleHRlbmRlZFpvbmUsXG4gICAgICAgIHByZWNpc2lvblxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlpcIiwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy4gVGhlIG91dHB1dCBpcyBhbHdheXMgZXhwcmVzc2VkIGluIEdNVC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAgICovXG4gIHRvU1FMRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0b0lTT0RhdGUodGhpcywgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldFNwYWNlPXRydWVdIC0gaW5jbHVkZSB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdGltZSBhbmQgdGhlIG9mZnNldCwgc3VjaCBhcyAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkudG9TUUwoKSAvLz0+ICcwNToxNToxNi4zNDUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSBBbWVyaWNhL05ld19Zb3JrJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1NRTFRpbWUoeyBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSwgaW5jbHVkZVpvbmUgPSBmYWxzZSwgaW5jbHVkZU9mZnNldFNwYWNlID0gdHJ1ZSB9ID0ge30pIHtcbiAgICBsZXQgZm10ID0gXCJISDptbTpzcy5TU1NcIjtcblxuICAgIGlmIChpbmNsdWRlWm9uZSB8fCBpbmNsdWRlT2Zmc2V0KSB7XG4gICAgICBpZiAoaW5jbHVkZU9mZnNldFNwYWNlKSB7XG4gICAgICAgIGZtdCArPSBcIiBcIjtcbiAgICAgIH1cbiAgICAgIGlmIChpbmNsdWRlWm9uZSkge1xuICAgICAgICBmbXQgKz0gXCJ6XCI7XG4gICAgICB9IGVsc2UgaWYgKGluY2x1ZGVPZmZzZXQpIHtcbiAgICAgICAgZm10ICs9IFwiWlpcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIGZtdCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXRTcGFjZT10cnVlXSAtIGluY2x1ZGUgdGhlIHNwYWNlIGJldHdlZW4gdGhlIHRpbWUgYW5kIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlWm9uZTogdHJ1ZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBBbWVyaWNhL05ld19Zb3JrJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1NRTChvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3RoaXMudG9TUUxEYXRlKCl9ICR7dGhpcy50b1NRTFRpbWUob3B0cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0lTTygpIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHRoZSBSRVBMLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBbU3ltYm9sLmZvcihcIm5vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tXCIpXSgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gYERhdGVUaW1lIHsgdHM6ICR7dGhpcy50b0lTTygpfSwgem9uZTogJHt0aGlzLnpvbmUubmFtZX0sIGxvY2FsZTogJHt0aGlzLmxvY2FsZX0gfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgRGF0ZVRpbWUgeyBJbnZhbGlkLCByZWFzb246ICR7dGhpcy5pbnZhbGlkUmVhc29ufSB9YDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuIEFsaWFzIG9mIHtAbGluayBEYXRlVGltZSN0b01pbGxpc31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIChpbmNsdWRpbmcgbWlsbGlzZWNvbmRzIGluIHRoZSBmcmFjdGlvbmFsIHBhcnQpIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyAoYXMgYSB3aG9sZSBudW1iZXIpIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvVW5peEludGVnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguZmxvb3IodGhpcy50cyAvIDEwMDApIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBCU09OIHNlcmlhbGl6YWJsZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge0RhdGV9XG4gICAqL1xuICB0b0JTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU0RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIERhdGVUaW1lJ3MgeWVhciwgbW9udGgsIGRheSwgYW5kIHNvIG9uLlxuICAgKiBAcGFyYW0gb3B0cyAtIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVDb25maWc9ZmFsc2VdIC0gaW5jbHVkZSBjb25maWd1cmF0aW9uIGF0dHJpYnV0ZXMgaW4gdGhlIG91dHB1dFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b09iamVjdCgpIC8vPT4geyB5ZWFyOiAyMDE3LCBtb250aDogNCwgZGF5OiAyMiwgaG91cjogMjAsIG1pbnV0ZTogNDksIHNlY29uZDogNDIsIG1pbGxpc2Vjb25kOiAyNjggfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICB0b09iamVjdChvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuXG4gICAgY29uc3QgYmFzZSA9IHsgLi4udGhpcy5jIH07XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLm91dHB1dENhbGVuZGFyID0gdGhpcy5vdXRwdXRDYWxlbmRhcjtcbiAgICAgIGJhc2UubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtO1xuICAgICAgYmFzZS5sb2NhbGUgPSB0aGlzLmxvYy5sb2NhbGU7XG4gICAgfVxuICAgIHJldHVybiBiYXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhU2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgdG9KU0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU4pO1xuICB9XG5cbiAgLy8gQ09NUEFSRVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gRGF0ZVRpbWVzIGFzIGEgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgRGF0ZVRpbWUgdG8gY29tcGFyZSB0aGlzIG9uZSB0b1xuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciBhcnJheSBvZiB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgaTEgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgyLTA1LTI1VDA5OjQ1JyksXG4gICAqICAgICBpMiA9IERhdGVUaW1lLmZyb21JU08oJzE5ODMtMTAtMTRUMTA6MzAnKTtcbiAgICogaTIuZGlmZihpMSkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA0MzgwNzUwMDAwMCB9XG4gICAqIGkyLmRpZmYoaTEsICdob3VycycpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMjE2OC43NSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTkuMDMxMjUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LCBob3VyczogMC43NSB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgZGlmZihvdGhlckRhdGVUaW1lLCB1bml0ID0gXCJtaWxsaXNlY29uZHNcIiwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyRGF0ZVRpbWUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJjcmVhdGVkIGJ5IGRpZmZpbmcgYW4gaW52YWxpZCBEYXRlVGltZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJPcHRzID0geyBsb2NhbGU6IHRoaXMubG9jYWxlLCBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLCAuLi5vcHRzIH07XG5cbiAgICBjb25zdCB1bml0cyA9IG1heWJlQXJyYXkodW5pdCkubWFwKER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQpLFxuICAgICAgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKSxcbiAgICAgIGVhcmxpZXIgPSBvdGhlcklzTGF0ZXIgPyB0aGlzIDogb3RoZXJEYXRlVGltZSxcbiAgICAgIGxhdGVyID0gb3RoZXJJc0xhdGVyID8gb3RoZXJEYXRlVGltZSA6IHRoaXMsXG4gICAgICBkaWZmZWQgPSBkaWZmKGVhcmxpZXIsIGxhdGVyLCB1bml0cywgZHVyT3B0cyk7XG5cbiAgICByZXR1cm4gb3RoZXJJc0xhdGVyID8gZGlmZmVkLm5lZ2F0ZSgpIDogZGlmZmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIHJpZ2h0IG5vdy5cbiAgICogU2VlIHtAbGluayBEYXRlVGltZSNkaWZmfVxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgZGlmZk5vdyh1bml0ID0gXCJtaWxsaXNlY29uZHNcIiwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5ub3coKSwgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHNwYW5uaW5nIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgYW5vdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIGVuZCBwb2ludCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHJldHVybiB7SW50ZXJ2YWx8RGF0ZVRpbWV9XG4gICAqL1xuICB1bnRpbChvdGhlckRhdGVUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEludGVydmFsLmZyb21EYXRlVGltZXModGhpcywgb3RoZXJEYXRlVGltZSkgOiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWUuXG4gICAqIEhpZ2hlci1vcmRlciB1bml0cyBtdXN0IGFsc28gYmUgaWRlbnRpY2FsIGZvciB0aGlzIGZ1bmN0aW9uIHRvIHJldHVybiBgdHJ1ZWAuXG4gICAqIE5vdGUgdGhhdCB0aW1lIHpvbmVzIGFyZSAqKmlnbm9yZWQqKiBpbiB0aGlzIGNvbXBhcmlzb24sIHdoaWNoIGNvbXBhcmVzIHRoZSAqKmxvY2FsKiogY2FsZW5kYXIgdGltZS4gVXNlIHtAbGluayBEYXRlVGltZSNzZXRab25lfSB0byBjb252ZXJ0IG9uZSBvZiB0aGUgZGF0ZXMgaWYgbmVlZGVkLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy51c2VMb2NhbGVXZWVrcz1mYWxzZV0gLSBJZiB0cnVlLCB1c2Ugd2Vla3MgYmFzZWQgb24gdGhlIGxvY2FsZSwgaS5lLiB1c2UgdGhlIGxvY2FsZS1kZXBlbmRlbnQgc3RhcnQgb2YgdGhlIHdlZWs7IG9ubHkgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lIGlzIHVzZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuaGFzU2FtZShvdGhlckRULCAnZGF5Jyk7IC8vfj4gdHJ1ZSBpZiBvdGhlckRUIGlzIGluIHRoZSBzYW1lIGN1cnJlbnQgY2FsZW5kYXIgZGF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQsIG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgaW5wdXRNcyA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xuICAgIGNvbnN0IGFkanVzdGVkVG9ab25lID0gdGhpcy5zZXRab25lKG90aGVyRGF0ZVRpbWUuem9uZSwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pO1xuICAgIHJldHVybiAoXG4gICAgICBhZGp1c3RlZFRvWm9uZS5zdGFydE9mKHVuaXQsIG9wdHMpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSBhZGp1c3RlZFRvWm9uZS5lbmRPZih1bml0LCBvcHRzKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIERhdGVUaW1lcyBhcmUgZXF1YWwgaWYgYW5kIG9ubHkgaWYgdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbWlsbGlzZWNvbmQsIGhhdmUgdGhlIHNhbWUgem9uZSBhbmQgbG9jYXRpb24sIGFuZCBhcmUgYm90aCB2YWxpZC5cbiAgICogVG8gY29tcGFyZSBqdXN0IHRoZSBtaWxsaXNlY29uZCB2YWx1ZXMsIHVzZSBgK2R0MSA9PT0gK2R0MmAuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5pc1ZhbGlkICYmXG4gICAgICBvdGhlci5pc1ZhbGlkICYmXG4gICAgICB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXIudmFsdWVPZigpICYmXG4gICAgICB0aGlzLnpvbmUuZXF1YWxzKG90aGVyLnpvbmUpICYmXG4gICAgICB0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRoaXMgdGltZSByZWxhdGl2ZSB0byBub3csIHN1Y2ggYXMgXCJpbiB0d28gZGF5c1wiLiBDYW4gb25seSBpbnRlcm5hdGlvbmFsaXplIGlmIHlvdXJcbiAgICogcGxhdGZvcm0gc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuIFJvdW5kcyB0b3dhcmRzIHplcm8gYnkgZGVmYXVsdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIHRoZSBzdHlsZSBvZiB1bml0cywgbXVzdCBiZSBcImxvbmdcIiwgXCJzaG9ydFwiLCBvciBcIm5hcnJvd1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0IG9yIGFycmF5IG9mIHVuaXRzOyBpZiBvbWl0dGVkLCBvciBhbiBhcnJheSwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIGJlc3QgdW5pdC4gVXNlIGFuIGFycmF5IG9yIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgb3IgXCJzZWNvbmRzXCJcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nPVwidHJ1bmNcIl0gLSByb3VuZGluZyBtZXRob2QgdG8gdXNlIHdoZW4gcm91bmRpbmcgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC4gQ2FuIGJlIFwidHJ1bmNcIiAodG93YXJkIHplcm8pLCBcImV4cGFuZFwiIChhd2F5IGZyb20gemVybyksIFwicm91bmRcIiwgXCJmbG9vclwiLCBvciBcImNlaWxcIi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcImluIDEgZGF5XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikudG9SZWxhdGl2ZSh7IGRheXM6IDEgfSkgLy89PiBcImRlbnRybyBkZSAxIGTDrWFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRhbnMgMjMgaGV1cmVzXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogXCJob3Vyc1wiIH0pIC8vPT4gXCI0OCBob3VycyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGhvdXJzOiAzNiB9KS50b1JlbGF0aXZlKHsgcm91bmQ6IGZhbHNlIH0pIC8vPT4gXCIxLjUgZGF5cyBhZ29cIlxuICAgKi9cbiAgdG9SZWxhdGl2ZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgPyAodGhpcyA8IGJhc2UgPyAtb3B0aW9ucy5wYWRkaW5nIDogb3B0aW9ucy5wYWRkaW5nKSA6IDA7XG4gICAgbGV0IHVuaXRzID0gW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXTtcbiAgICBsZXQgdW5pdCA9IG9wdGlvbnMudW5pdDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnVuaXQpKSB7XG4gICAgICB1bml0cyA9IG9wdGlvbnMudW5pdDtcbiAgICAgIHVuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbnVtZXJpYzogXCJhbHdheXNcIixcbiAgICAgIHVuaXRzLFxuICAgICAgdW5pdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZGF0ZSByZWxhdGl2ZSB0byB0b2RheSwgc3VjaCBhcyBcInllc3RlcmRheVwiIG9yIFwibmV4dCBtb250aFwiLlxuICAgKiBPbmx5IGludGVybmF0aW9uYWxpemVzIG9uIHBsYXRmb3JtcyB0aGF0IHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQ7IGlmIG9taXR0ZWQsIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSB1bml0LiBVc2Ugb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIG9yIFwiZGF5c1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcInRvbW9ycm93XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJcIm1hw7FhbmFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGVtYWluXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICovXG4gIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSwgdGhpcywge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG51bWVyaWM6IFwiYXV0b1wiLFxuICAgICAgdW5pdHM6IFtcInllYXJzXCIsIFwibW9udGhzXCIsIFwiZGF5c1wiXSxcbiAgICAgIGNhbGVuZGFyeTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1pbiBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWluaW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1pbiBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWluKC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtaW4gcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1heCBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWF4aW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1heCBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWF4KC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtYXggcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWF4KTtcbiAgfVxuXG4gIC8vIE1JU0NcblxuICAvKipcbiAgICogRXhwbGFpbiBob3cgYSBzdHJpbmcgd291bGQgYmUgcGFyc2VkIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIGRlc2NyaXB0aW9uKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0aW9ucyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSk7XG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBhIHBhcnNlciBmb3IgYGZtdGAgdXNpbmcgdGhlIGdpdmVuIGxvY2FsZS4gVGhpcyBwYXJzZXIgY2FuIGJlIHBhc3NlZFxuICAgKiB0byB7QGxpbmsgRGF0ZVRpbWUuZnJvbUZvcm1hdFBhcnNlcn0gdG8gYSBwYXJzZSBhIGRhdGUgaW4gdGhpcyBmb3JtYXQuIFRoaXNcbiAgICogY2FuIGJlIHVzZWQgdG8gb3B0aW1pemUgY2FzZXMgd2hlcmUgbWFueSBkYXRlcyBuZWVkIHRvIGJlIHBhcnNlZCBpbiBhXG4gICAqIHNwZWNpZmljIGZvcm1hdC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlXG4gICAqIGRlc2NyaXB0aW9uKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdXNlZCB0byBzZXQgbG9jYWxlIGFuZCBudW1iZXJpbmdTeXN0ZW1cbiAgICogZm9yIHBhcnNlclxuICAgKiBAcmV0dXJucyB7VG9rZW5QYXJzZXJ9IC0gb3BhcXVlIG9iamVjdCB0byBiZSB1c2VkXG4gICAqL1xuICBzdGF0aWMgYnVpbGRGb3JtYXRQYXJzZXIoZm10LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IG9wdGlvbnMsXG4gICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIHJldHVybiBuZXcgVG9rZW5QYXJzZXIobG9jYWxlVG9Vc2UsIGZtdCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBpbnB1dCBzdHJpbmcgYW5kIGZvcm1hdCBwYXJzZXIuXG4gICAqXG4gICAqIFRoZSBmb3JtYXQgcGFyc2VyIG11c3QgaGF2ZSBiZWVuIGNyZWF0ZWQgd2l0aCB0aGUgc2FtZSBsb2NhbGUgYXMgdGhpcyBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtUb2tlblBhcnNlcn0gZm9ybWF0UGFyc2VyIC0gcGFyc2VyIGZyb20ge0BsaW5rIERhdGVUaW1lLmJ1aWxkRm9ybWF0UGFyc2VyfVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpXG4gICAqIEByZXR1cm5zIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0UGFyc2VyKHRleHQsIGZvcm1hdFBhcnNlciwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZvcm1hdFBhcnNlcikpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgXCJmcm9tRm9ybWF0UGFyc2VyIHJlcXVpcmVzIGFuIGlucHV0IHN0cmluZyBhbmQgYSBmb3JtYXQgcGFyc2VyXCJcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0cyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICBpZiAoIWxvY2FsZVRvVXNlLmVxdWFscyhmb3JtYXRQYXJzZXIubG9jYWxlKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgICBgZnJvbUZvcm1hdFBhcnNlciBjYWxsZWQgd2l0aCBhIGxvY2FsZSBvZiAke2xvY2FsZVRvVXNlfSwgYCArXG4gICAgICAgICAgYGJ1dCB0aGUgZm9ybWF0IHBhcnNlciB3YXMgY3JlYXRlZCBmb3IgJHtmb3JtYXRQYXJzZXIubG9jYWxlfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgeyByZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uIH0gPSBmb3JtYXRQYXJzZXIuZXhwbGFpbkZyb21Ub2tlbnModGV4dCk7XG5cbiAgICBpZiAoaW52YWxpZFJlYXNvbikge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZFJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIHpvbmUsXG4gICAgICAgIG9wdHMsXG4gICAgICAgIGBmb3JtYXQgJHtmb3JtYXRQYXJzZXIuZm9ybWF0fWAsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHNwZWNpZmljT2Zmc2V0XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZPUk1BVCBQUkVTRVRTXG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX1NIT1JUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfU0hPUlQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX01FRCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX01FRDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIE9jdCAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9NRURfV0lUSF9XRUVLREFZKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX0ZVTEwoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9GVUxMO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ1R1ZXNkYXksIE9jdG9iZXIgMTQsIDE5ODMnXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVfSFVHRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX0hVR0U7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9TSU1QTEUoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9TSU1QTEU7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX0xPTkdfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfV0lUSF9MT05HX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1NJTVBMRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1NJTVBMRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfU0hPUlQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfU0hPUlQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRUQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfTUVEO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCAxNCBPY3QgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9GVUxMO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9IVUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFM7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xuICBpZiAoRGF0ZVRpbWUuaXNEYXRlVGltZShkYXRlVGltZWlzaCkpIHtcbiAgICByZXR1cm4gZGF0ZVRpbWVpc2g7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgZGF0ZVRpbWVpc2gudmFsdWVPZiAmJiBpc051bWJlcihkYXRlVGltZWlzaC52YWx1ZU9mKCkpKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIHR5cGVvZiBkYXRlVGltZWlzaCA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICBgVW5rbm93biBkYXRldGltZSBhcmd1bWVudDogJHtkYXRlVGltZWlzaH0sIG9mIHR5cGUgJHt0eXBlb2YgZGF0ZVRpbWVpc2h9YFxuICAgICk7XG4gIH1cbn1cbiIsICJpbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCBEdXJhdGlvbiBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IEludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQgSW5mbyBmcm9tIFwiLi9pbmZvLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi96b25lLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuL3pvbmVzL2ZpeGVkT2Zmc2V0Wm9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuL3pvbmVzL0lBTkFab25lLmpzXCI7XG5pbXBvcnQgSW52YWxpZFpvbmUgZnJvbSBcIi4vem9uZXMvaW52YWxpZFpvbmUuanNcIjtcbmltcG9ydCBTeXN0ZW1ab25lIGZyb20gXCIuL3pvbmVzL3N5c3RlbVpvbmUuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBWRVJTSU9OID0gXCIzLjcuMlwiO1xuXG5leHBvcnQge1xuICBWRVJTSU9OLFxuICBEYXRlVGltZSxcbiAgRHVyYXRpb24sXG4gIEludGVydmFsLFxuICBJbmZvLFxuICBab25lLFxuICBGaXhlZE9mZnNldFpvbmUsXG4gIElBTkFab25lLFxuICBJbnZhbGlkWm9uZSxcbiAgU3lzdGVtWm9uZSxcbiAgU2V0dGluZ3MsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUU87OztBQ0hQLElBQU0sYUFBTixjQUF5QixNQUFNO0FBQUE7QUFLeEIsSUFBTSx1QkFBTixjQUFtQyxXQUFXO0VBQ25ELFlBQVksUUFBUTtBQUNsQixVQUFNLHFCQUFxQixPQUFPLFVBQVMsQ0FBRSxFQUFFO0VBQ25EO0FBQ0E7QUFLTyxJQUFNLHVCQUFOLGNBQW1DLFdBQVc7RUFDbkQsWUFBWSxRQUFRO0FBQ2xCLFVBQU0scUJBQXFCLE9BQU8sVUFBUyxDQUFFLEVBQUU7RUFDbkQ7QUFDQTtBQUtPLElBQU0sdUJBQU4sY0FBbUMsV0FBVztFQUNuRCxZQUFZLFFBQVE7QUFDbEIsVUFBTSxxQkFBcUIsT0FBTyxVQUFTLENBQUUsRUFBRTtFQUNuRDtBQUNBO0FBS08sSUFBTSxnQ0FBTixjQUE0QyxXQUFXO0FBQUE7QUFLdkQsSUFBTSxtQkFBTixjQUErQixXQUFXO0VBQy9DLFlBQVksTUFBTTtBQUNoQixVQUFNLGdCQUFnQixJQUFJLEVBQUU7RUFDaEM7QUFDQTtBQUtPLElBQU0sdUJBQU4sY0FBbUMsV0FBVztBQUFBO0FBSzlDLElBQU0sc0JBQU4sY0FB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U0FBUyxTQUFkLEVBQXNCLE9BQU0sZ0VBQzFCLHNCQUFZLElBQUksQ0FBQyxNQUNoQiw0Q0FBQyxnQkFBSyxTQUFTLE1BQWQsRUFBMkIsT0FBTyxHQUFHLE9BQU8sS0FBcEIsQ0FBdUIsQ0FDakQsR0FDSDtBQUFBLFdBQ0Y7QUFBQSxRQUNBLDRDQUFDLGdCQUFLLFdBQUwsRUFBZTtBQUFBLFFBQ2YsZUFBZSxNQUFNLDRDQUFDLGdCQUFLLGFBQUwsRUFBaUIsT0FBTSx3Q0FBUyxNQUFNLFlBQVk7QUFBQSxRQUN6RSw0Q0FBQyxnQkFBSyxhQUFMLEVBQWlCLE9BQU0sNEJBQU8sTUFBTSxjQUFjLFVBQUs7QUFBQTtBQUFBO0FBQUEsRUFDMUQ7QUFFSjsiLAogICJuYW1lcyI6IFsic2luZ2xldG9uIiwgInMiLCAiRW5nbGlzaC5mb3JtYXRSZWxhdGl2ZVRpbWUiLCAiRW5nbGlzaC5tb250aHMiLCAiRW5nbGlzaC53ZWVrZGF5cyIsICJFbmdsaXNoLm1lcmlkaWVtcyIsICJFbmdsaXNoLmVyYXMiLCAib2Zmc2V0IiwgImRlZmF1bHRab25lIiwgIm4iLCAiRm9ybWF0cy5EQVRFX1NIT1JUIiwgIkZvcm1hdHMuREFURV9NRUQiLCAiRm9ybWF0cy5EQVRFX0ZVTEwiLCAiRm9ybWF0cy5EQVRFX0hVR0UiLCAiRm9ybWF0cy5USU1FX1NJTVBMRSIsICJGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTIiwgIkZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVCIsICJGb3JtYXRzLlRJTUVfV0lUSF9MT05HX09GRlNFVCIsICJGb3JtYXRzLlRJTUVfMjRfU0lNUExFIiwgIkZvcm1hdHMuVElNRV8yNF9XSVRIX1NFQ09ORFMiLCAiRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUIiwgIkZvcm1hdHMuVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUIiwgIkZvcm1hdHMuREFURVRJTUVfU0hPUlQiLCAiRm9ybWF0cy5EQVRFVElNRV9NRUQiLCAiRm9ybWF0cy5EQVRFVElNRV9GVUxMIiwgIkZvcm1hdHMuREFURVRJTUVfSFVHRSIsICJGb3JtYXRzLkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyIsICJGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMiLCAiRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyIsICJGb3JtYXRzLkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTIiwgImZvcm1hdE9mZnNldCIsICJFbmdsaXNoLm1lcmlkaWVtRm9yRGF0ZVRpbWUiLCAiRW5nbGlzaC5tb250aEZvckRhdGVUaW1lIiwgIkVuZ2xpc2gud2Vla2RheUZvckRhdGVUaW1lIiwgIkVuZ2xpc2guZXJhRm9yRGF0ZVRpbWUiLCAibWF0Y2giLCAiRW5nbGlzaC5tb250aHNTaG9ydCIsICJFbmdsaXNoLndlZWtkYXlzTG9uZyIsICJFbmdsaXNoLndlZWtkYXlzU2hvcnQiLCAiSU5WQUxJRCIsICJvcmRlcmVkVW5pdHMiLCAiY2xvbmUiLCAibCIsICJlIiwgIkZvcm1hdHMuREFURV9NRURfV0lUSF9XRUVLREFZIiwgIkZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSIsICJub3ciLCAiZGlmZiJdCn0K
