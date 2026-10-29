Booking-v3 prints `MM/DD/YYYY` for day-first tenants while interpreting input in the tenant's day-first order.

## Scope

33 unique reports currently merged into #4471: Alder Physio 12, Copper Studio 11, Pale Harbour 10. All use the form channel and booking-v3. Classification follows `causeOf` in `src/lib/kb/causes.ts`, using tenant locale and form version. Of these, intake tagged 15 as `parser` and 18 as `hint`; tags alone give the wrong split.

## Reproduction

Open a booking-v3 form for Alder Physio (`de-DE`), Copper Studio (`es-ES`) or Pale Harbour (`pt-PT`). The hint says `MM/DD/YYYY`. Following it, enter `04/07/2026` for 7 April. The form reads it day first, producing 4 July.

Expected: the visible hint and input interpretation agree for the tenant. Fix the hint/format contract rather than treating every form report as a shared-parser failure. The same tenants' app and email reports belong to the parser issue.

First received 2026-04-17; last received 2026-09-22 in this export. The July bulk merge obscures earlier reports. These reports need their own issue and owner rather than remaining inside #4471's one-fix claim.

## Acceptance

The displayed format matches the actual form parser for each locale. Verify both ambiguous date directions for all three affected tenants. Preserve report IDs and check counts against the accompanying audit.
