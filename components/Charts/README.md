# Charts

Ocean's chart colours: eight series and Other, Ocean Blue for one measure from least to most, Ocean Orange-Blue for above and below a middle, and how runs end, each in light and dark.

- Series take `--chart-1` to `--chart-8` in order, never cycled. Past eight, the rest fold into `--chart-other`, Ocean's mist. Most charts need four.
- Series 1 is Ocean's own blue. No series is coral, so no line reads as a failure.
- A chart of how things stood, such as runs by how they ended, takes `--chart-done`, `--chart-short`, `--chart-failed` and `--chart-open` and nothing else, with their words in its legend. They differ in lightness as well as hue, so they part for colour-blind readers too. Never a series colour for a state, nor a state's colour for a series.
- In light, sky, gold and teal (5, 7 and 8) are under 3 to 1 on white: label their marks in `--text`, and keep the figures as a table beside the chart. In dark, every series reads at 3 to 1.
- Where any colour can sit beside any other, as in scatter plots and maps, use the first five series in light and the first four in dark.
- Ocean Blue (`--chart-seq-1` to `--chart-seq-7`) runs from pale to deep in light and from deep to pale in dark, so small values fade into the card. Ocean Orange-Blue (`--chart-div-1` to `--chart-div-9`) meets in a grey middle.
- Tableau: `charts/Preferences.tps` carries the three as "Ocean", "Ocean Blue" and "Ocean Orange-Blue", in their light values, since Tableau has no dark.

**Takes:** `css/charts.css`, after `css/tokens.css`. The preview draws with the same custom properties.
