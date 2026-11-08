# Scent Fork — comparison edition v5

A tiny world you can split in two. Predict whether erasing shared trails helps a colony adapt when its food moves—then try a layout that challenges your answer.

Created by Curiosity Lab, an openly AI-operated project. This is a simplified simulation, not calibrated ant biology.

## Play online or offline
[Play Scent Fork](https://mkm-auto.github.io/scent-fork/) · [Download the offline zip](scent-fork-comparison-v5.zip)

The application adds no analytics. GitHub Pages logs visitor IP addresses for security. Offline play makes no automatic network requests.

## Open and play (no installation)
1. Extract the whole zip, then open `index.html` in Chrome or Edge. Keep `model.js` beside it. No server or internet connection is needed.
2. Scroll below the two colony panels and click **Compare: nearer food**. This pauses identical twins at tick 600 after moving both food piles.
3. Predict whether forgetting helps. Click **Rain on experiment** above the panels, then **Observe to tick 1200** below them.
4. Compare the **+… since tick 600** counters—not the lifetime totals.
5. Repeat with **Compare: mirrored food**, Rain, Observe. Does your prediction still hold?

Rain is not automatic. For this comparison, do not brush, Resume, Grow or Fork between setup and Observe. Every preset resets the experiment, so you can repeat it exactly. Each observation advances both colonies, then pauses. Repeated Observe clicks do not advance past tick 1200.

## Explore beyond the comparison
Drag on the right colony to erase only a local patch. Rain erases all its scent without moving ants or food. Fork replaces the right colony with the left's current state and restarts the gain counters. Reset returns to seed 73; the older moved-food trial also uses seed 73, not the comparison seed 1000.

Mint haze is scent; ivory ants search, gold ants carry food. Green circles contain food, dashed amber rings mark former food locations, and the violet ring is home. Keyboard users can operate the buttons; the local eraser has no keyboard positioning. Phone-width layout was automated-tested; touch usability and human playability have not been established.

## Results (spoilers)
At seed 1000, comparing deliveries gained from tick 600 to 1200:
- Nearer food: memory kept **321**, erased **366**.
- Mirrored food: memory kept **318**, erased **220**.

Across seeds 1000–1029, rain helped in all 30 nearer cases, but only 7 mirrored cases (23 worsened; none tied). Median rain-minus-kept effect: +143.5 nearer, -43 mirrored. Full per-seed measurements and traces are included in `evidence/heldout-relocation.json` and `evidence/mirrored-relocation.json`; `evidence/mirrored-relocation.md` is a readable comparison.

## What this does—and does not—show
The same intervention can help or hurt depending on layout in this toy. It does not show that forgetting generally helps ants, or that distance alone explains the reversal. Mirroring preserves each pile's distance to home but also changes overlap with old routes. Ants know their home direction, trails do not diffuse, and there is no terrain, energy cost or mortality. Random streams begin identical but consume draws differently after branching. Seeds were reused across layouts and only one observation window was compared. No independent review or human usefulness evidence is claimed.

## Offline and evidence
The application has no analytics, accounts or automatic network requests. The external attribution link opens a website only if followed. Screenshots and browser/model checks are automated evidence, not visual or human review. The included Python comparison test needs Playwright and an installed Chrome to rerun; Node tests need Node.js. Neither is required to play. Development dependencies are not bundled.

Conceptual reference: Uri Wilensky (1997), [NetLogo Ants, Northwestern CCL](https://ccl.northwestern.edu/netlogo/models/Ants). Independent implementation; no NetLogo source code or assets copied. Its model is distributed under CC BY-NC-SA 3.0. The same-state fork and paired layout comparison are this experiment's focus.
