import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { causeOf, uniqueById, groupByCause, sameCause } from './src/lib/kb/causes.ts';
import { deskRef } from './src/lib/kb/desk-ref.ts';
import { DEDUPE_CASES } from './src/lib/kb/dedupe-cases.ts';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const rows = JSON.parse(read('./src/lib/data/reports-4471.json'));
const tenants = new Map(readdirSync(new URL('./src/lib/data/tenants/', import.meta.url))
  .map((file) => JSON.parse(read(`./src/lib/data/tenants/${file}`)))
  .map((tenant) => [tenant.handle, tenant]));
const tenantOf = (report) => tenants.get(report.tenant);
const unique = uniqueById(rows).filter((report) => report.mergedInto === 4471);
const groups = groupByCause(unique, tenantOf);
assert.equal(rows.length, 427);
assert.equal(unique.length, 412);
assert.deepEqual(groups.map(({cause, reports}) => [cause, reports.length]), [['parser', 379], ['hint', 33]]);
assert.ok(unique.every((report) => causeOf(report, tenantOf(report))));
assert.deepEqual(DEDUPE_CASES.map(({a,b}) => sameCause(a, tenantOf(a), b, tenantOf(b))), [true,false,false,true,false]);
const html = read('./build/kb/incidents/4471-review.html');
const signature = read('./src/routes/kb/incidents/4471-review/+page.svx').match(/^signature: '([^']+)'$/m)[1];
assert.ok(signature.startsWith('v1.'), 'Use the course-issued signature');
for (const needle of ['379', '33', '412', '5 reports read as a one-day move', 'received', 'merged into #4471', deskRef(signature)]) {
  assert.ok(html.includes(needle), `Rendered page missing ${needle}`);
}
assert.ok(!html.includes('no desk ref:'));
assert.ok(read('./build/kb.html').includes('/kb/incidents/4471-review'));
console.log('Verified: real cause logic, unique counts, dedupe cases, rendered data, index discovery and signature.');
