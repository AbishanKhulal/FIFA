# Argentina 2026 VOX Video — Editor Handoff

## Open locally

```bash
npm install
npm run studio
```

Open composition `ArgentinaWorldCup2026`. The master is 2160×3840, 30 fps, 1759 frames, with the supplied 58.618776-second voiceover.

## Verification constraint

Verification in this repository is deliberately limited to Remotion stills, one process at a time, at `--scale=0.5`. `remotion.config.ts` enforces `Config.setConcurrency(1)`. No full-video render is part of this handoff.

Example still command:

```bash
npx remotion still src/index.ts ArgentinaWorldCup2026 previews/scene-01.png --frame=59 --scale=0.5
```

## Timing contract

`handoff.json` is the assembly contract. Each generated piece includes:

- `anchor_word` and `anchor_word_start`
- `entrance_start_seconds` and `entrance_duration_seconds`
- `land_at_seconds`
- `exit_at_seconds` and `exit_style`
- final position, size, rotation, and z-index
- public asset path and QA record

All 18 elements land exactly on the planned narration timestamp. Maximum measured land delta is 0.0 seconds. Maximum empty-stage gap is 0.55 seconds. The composition never exceeds two full-opacity generated pieces against a cap of four.

## Important paths

- Composition entry: `src/index.ts`
- Composition: `src/Video.tsx`
- Concurrency config: `remotion.config.ts`
- Voiceover: `public/voiceover.mp3`
- Elements: `public/elements/`
- Storyboard: `storyboard/storyboard.json`
- Handoff contract: `handoff.json`
- QA results: `qa_report.json`
- Style lock: `style/STYLE-LOCK.md`

The root-level `voiceover.mp3` and `elements/` directory are retained for portable editor handoff compatibility.
