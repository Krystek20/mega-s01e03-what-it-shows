import{a as c,f as l}from"./DNOFrePK.js";import{R as u}from"./DRKZ-9qc.js";import{w as e,g}from"./mwnwQr1J.js";import{l as m,s as f}from"./C2nIJTmf.js";import{C as b,Q as w}from"./l8h9xZhz.js";import{D as v}from"./BXP6Ng1B.js";import{R as y}from"./riERsbBm.js";const t={layout:"runbook",title:"#4471 review: two causes behind one known ticket",owner:"support desk",status:"proposed",reviewed:"2026-10-29T00:00:00.000Z",signature:"S01E03 student and Codex — 4471 review"},{layout:I,title:P,owner:C,status:H,reviewed:K,signature:k}=t;var x=l(`<p>The export contradicts #4471’s “one issue, one fix” description. The table below
counts unique report IDs, resolves each tenant’s locale and booking form, and
classifies by cause. Browser locale and intake tags are clues, not the decision.
These are observations of the 4 October export, not a live queue total.</p> <h2>Separate the fixes</h2> <p>Filed findings: <a href="https://github.com/Krystek20/mega-s01e03-what-it-shows/issues/1" rel="nofollow">parser issue</a> and <a href="https://github.com/Krystek20/mega-s01e03-what-it-shows/issues/2" rel="nofollow">form-hint issue</a>.
These tickets record the review; this kb export contains no production booking
service, so delivering the findings does not establish that either fix shipped.</p> <!> <p><strong>Parser:</strong> the shared parser reads month first for tenants who write day first.
Harbour Dental’s R-41200 describes 7 April turning into 4 July; R-41201 describes
the reverse. Honor the tenant’s explicit input format and test both ambiguous
directions, plus dates whose day exceeds twelve.</p> <p><strong>Hint:</strong> booking-v3 prints <code>MM/DD/YYYY</code> while its form reads the tenant’s date
order. Following that hint produces the wrong date for day-first tenants. Align
the displayed hint with the form’s interpretation. This affects the form route
at Alder Physio, Copper Studio and Pale Harbour. Their app and email reports
still belong to the parser group. Two causes require two fixes and two tickets.</p> <p>The export’s pages overlap. Deduplicate by report ID before counting; matching
subjects, repeated export rows and intake labels do not define distinct bugs.
The component computes the totals and tag disagreements directly from the data.</p> <h2>Preserve what the classifier does not explain</h2> <p>The desk flagged R-41202, R-41209, R-41236, R-41344 and R-41620 as one-day moves.
Their bodies include a one-day discrepancy, an invite preceding its booking and
different days for clients in Lisbon and Toronto. The supplied classifier places
them under parser by tenant and route; that does not establish that a month/day
swap explains their symptoms. Keep the IDs and request original inputs, stored
timestamps, time zones and delivered invites. Do not invent a confirmed third
cause or discard these reports.</p> <h2>The queue kept moving</h2> <!> <p>Reports begin in April, before the July bulk merge. Received time measures when
people reported a problem; merged time measures desk processing. A merge spike
is not an onset spike. Reports continue after the bulk merge, including the
October one-day symptom. “Known” and “fix queued” do not establish resolution.</p> <h2>Change triage before the next merge</h2> <p>The accepted subject-only decision remains a historical record. <a href="/kb/decisions/0002-dedupe-by-cause">Decision 0002</a> proposes its replacement,
and the <a href="/kb/triage/dedupe">triage guide</a> now flags the rule for review.
First resolve tenant, locale, channel and form
version. Merge only when the failure mechanism matches. Same subjects can hide
different causes, and different subjects can describe the same cause. If the
tenant or mechanism is unknown, hold for investigation rather than merging.</p> <!> <p>The explorer runs the cause-based rule. Its results contradicted the exported
triage prose. That page and decision 0001 were reviewed in June 2024;
the layout’s stale warning is a reason to recheck their claims against the
components, not proof that any individual report is wrong.</p> <p>Assign an owner to each fix, attach the matching report IDs, and verify the
rendered page and counts after each export. Review fresh reports by cause before
closing either ticket. Update the incident narrative and triage guidance through
a reviewed replacement decision, preserving the accepted record’s history.</p> <!>`,1);function _(i,n){const d=m(n,["children","$$slots","$$events","$$legacy"]);u(i,f(()=>d,()=>t,{children:(p,T)=>{var s=x(),r=e(g(s),6);b(r,{ticket:4471});var o=e(r,14);w(o,{ticket:4471});var a=e(o,8);v(a,{});var h=e(a,6);y(h,{get signature(){return k}}),c(p,s)},$$slots:{default:!0}}))}const M=Object.freeze(Object.defineProperty({__proto__:null,default:_,metadata:t},Symbol.toStringTag,{value:"Module"}));export{M as _,_ as a};
