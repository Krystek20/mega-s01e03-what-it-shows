The shared date parser reads month first for day-first tenants.

## Scope

379 unique reports currently merged into #4471, across all 11 tenants in the 2026-10-04 export. Count by report ID, not export row: the full export has 427 rows but 412 unique reports. Classification follows `causeOf` in `src/lib/kb/causes.ts`, using the tenant directory, channel and form version. Intake tags are not authoritative: 23 of these reports were tagged `hint`.

## Evidence and reproduction

- R-41200: Harbour Dental (`en-GB`, app) reports 7 April becoming 4 July.
- R-41201: the same tenant reports 4 July becoming 7 April.
- Enter `07/04/2026` for a day-first tenant through the shared parser. Expected: 7 April. Actual described behavior: 4 July.
- Fix the parser to honor an explicit date format/tenant locale. Test ambiguous dates in both directions and unambiguous dates with day > 12.

Reports arrived from 2026-04-01 through 2026-10-04. Their July merge dates do not mark the incident's beginning. New parser reports continue after the bulk merge.

## Unresolved symptoms

The desk's notes identify R-41202, R-41209, R-41236, R-41344 and R-41620 as one-day moves. They remain in this count under the supplied classifier, but their bodies describe one-day changes, an invite arriving before booking, or different days across cities. A month/day swap does not explain all of those descriptions. Preserve these IDs for investigation; do not assert a proven timezone cause or silently count them as a third confirmed bug.

## Acceptance

Day-first tenant input yields the intended calendar date. Regression checks cover app, email and booking-v2 form input. Investigate the five anomalous reports separately. Keep the booking-v3 hint issue separate because it needs a different fix.
