import{a as c,f as d}from"./DNOFrePK.js";import{R as l}from"./DRKZ-9qc.js";import{w as r,g as m}from"./mwnwQr1J.js";import{l as u,s as h}from"./C2nIJTmf.js";import{R as f}from"./riERsbBm.js";import{D as g}from"./BXP6Ng1B.js";const e={layout:"runbook",title:"0002 · Merge reports by verified cause",owner:"support desk",status:"proposed",reviewed:"2026-10-29T00:00:00.000Z",signature:"v1.eyJzdWIiOiIyMDIyIiwiYXVkIjoiY2hhbGxlbmdlOndoYXQtaXQtc2hvd3MiLCJpYXQiOjE3OTMyOTYxOTMsImV4cCI6MTc5MzM4MjU5M30.RJPESoD6LrYMNUpVRN_wXifapMyvL6yLm26ZisnVFKA"},{layout:T,title:x,owner:O,status:R,reviewed:D,signature:v}=e;var y=d(`<h2>Context</h2> <p>The rendered <a href="/kb/incidents/4471-review">#4471 review</a> shows distinct parser and
form-hint causes merged into one ticket. Subject-only matching in decision 0001
combines different bugs and separates equivalent reports with different wording.
Intake tags also disagree with tenant-based classification.</p> <h2>Proposed replacement for decision 0001</h2> <p>Resolve the tenant’s locale and booking-form version, then inspect the channel
and failure mechanism. Merge reports only when their causes match. A matching
subject is insufficient; a different subject does not prevent a merge. Missing
tenant or cause information requires investigation, not an automatic merge.
Keep a report once per ID and attach all IDs to the cause’s ticket.</p> <!> <h2>Consequences and review</h2> <p>Reading and tenant lookup take longer than matching subjects. They preserve
distinct fixes and trustworthy counts. Keep anomalous one-day reports visible
even when the current classifier assigns them to parser; classification is not
proof that every symptom is explained. Compare received and merged timestamps
separately when reviewing the queue.</p> <p>This record proposes the replacement; the support desk must accept it. Decision
0001 remains intact as historical evidence. Until acceptance, suspend automatic
subject-only merges and review uncertain reports manually.</p> <!>`,1);function b(a,n){const i=u(n,["children","$$slots","$$events","$$legacy"]);l(a,h(()=>i,()=>e,{children:(o,_)=>{var t=y(),s=r(m(t),8);g(s,{});var p=r(s,8);f(p,{get signature(){return v}}),c(o,t)},$$slots:{default:!0}}))}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:b,metadata:e},Symbol.toStringTag,{value:"Module"}));export{Y as _,b as a};
