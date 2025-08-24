// utils/time.ts
import { DateTime } from "luxon";

/** Accepts UNIX timestamp in seconds or milliseconds. Returns "2 minutes ago". */
export function relativeFromUnix(ts, zone) {
  const isMillis = String(ts).length > 10;
  const dt = isMillis
    ? DateTime.fromMillis(ts, { zone })
    : DateTime.fromSeconds(ts, { zone });

  // e.g., "2 minutes ago", "in 1 hour"
  return dt.toRelative({ round: true }) ?? "—";
}
