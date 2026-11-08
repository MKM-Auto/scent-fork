# Equal-distance relocation experiment

Run `node experiment-mirrored.cjs` from scent-fork. Same model, seeds 1000–1029, four arms, fork at 600, stop at 1200. Only this runner changes remaining food coordinates to (68,44)/(78,14). Production UI is unchanged.

All paired effects are rain-minus-kept food deliveries. Every seed is reported; no selection.

- 1000: mirrored -98; prior nearer +45; stationary -62; mirrored-minus-prior -143
- 1001: mirrored +40; prior nearer +169; stationary -28; mirrored-minus-prior -129
- 1002: mirrored -53; prior nearer +190; stationary -1; mirrored-minus-prior -243
- 1003: mirrored +6; prior nearer +93; stationary -59; mirrored-minus-prior -87
- 1004: mirrored -60; prior nearer +178; stationary -51; mirrored-minus-prior -238
- 1005: mirrored -119; prior nearer +175; stationary +25; mirrored-minus-prior -294
- 1006: mirrored -87; prior nearer +85; stationary -13; mirrored-minus-prior -172
- 1007: mirrored -75; prior nearer +146; stationary -40; mirrored-minus-prior -221
- 1008: mirrored -67; prior nearer +157; stationary -85; mirrored-minus-prior -224
- 1009: mirrored +12; prior nearer +138; stationary -58; mirrored-minus-prior -126
- 1010: mirrored -47; prior nearer +215; stationary -80; mirrored-minus-prior -262
- 1011: mirrored -86; prior nearer +132; stationary -110; mirrored-minus-prior -218
- 1012: mirrored -78; prior nearer +114; stationary +34; mirrored-minus-prior -192
- 1013: mirrored -13; prior nearer +137; stationary -58; mirrored-minus-prior -150
- 1014: mirrored +14; prior nearer +141; stationary -40; mirrored-minus-prior -127
- 1015: mirrored -31; prior nearer +166; stationary -27; mirrored-minus-prior -197
- 1016: mirrored +1; prior nearer +111; stationary -44; mirrored-minus-prior -110
- 1017: mirrored -40; prior nearer +153; stationary -75; mirrored-minus-prior -193
- 1018: mirrored -1; prior nearer +109; stationary -78; mirrored-minus-prior -110
- 1019: mirrored -41; prior nearer +107; stationary +4; mirrored-minus-prior -148
- 1020: mirrored +6; prior nearer +187; stationary -12; mirrored-minus-prior -181
- 1021: mirrored -81; prior nearer +201; stationary -58; mirrored-minus-prior -282
- 1022: mirrored -22; prior nearer +141; stationary -18; mirrored-minus-prior -163
- 1023: mirrored -4; prior nearer +105; stationary -44; mirrored-minus-prior -109
- 1024: mirrored -25; prior nearer +96; stationary -64; mirrored-minus-prior -121
- 1025: mirrored -79; prior nearer +238; stationary -24; mirrored-minus-prior -317
- 1026: mirrored +16; prior nearer +43; stationary -2; mirrored-minus-prior -27
- 1027: mirrored -46; prior nearer +222; stationary +5; mirrored-minus-prior -268
- 1028: mirrored -121; prior nearer +162; stationary -135; mirrored-minus-prior -283
- 1029: mirrored -45; prior nearer +193; stationary -36; mirrored-minus-prior -238

## Distributions

- mirrored: positive/zero/negative 7/0/23; median -43; range -121 to +40; mean -40.800.
- priorNearer: positive/zero/negative 30/0/0; median +143.5; range +43 to +238; mean 144.967.
- stationary: positive/zero/negative 4/0/26; median -42; range -135 to +34; mean -41.133.
- changeFromPrior: positive/zero/negative 0/0/30; median -186.5; range -317 to -27; mean -185.767.

## Checks and limits

{"equalSquaredNestDistances":true,"onlyFoodCoordinatesChanged":true,"conservationEveryPostInterventionTick":true,"stationaryGainsAndTracesExactlyMatchPrior":true}

Same previously tested seeds; this is a geometry control, not a fresh held-out seed replication. Reflection controls nest distance, not path overlap, boundary effects or discovery difficulty. Divergent random streams, toy rules and one horizon remain. No biological inference.
