# Argentina 2026 — VOX-Style Vertical Football Video

A narration-synchronized, editable Remotion project exploring what an Argentina victory at the 2026 FIFA World Cup could mean. The project uses a warm-paper editorial collage system, 18 individually generated transparent assets, and exact word-level entrance timing.

## Status

- Source and handoff contract: complete
- Generated elements: 18/18 QA-passed
- Narration sync audit: passed
- Remotion bundle/typecheck: passed
- Still verification: 9/9 scenes passed at half scale with concurrency 1
- Full video: intentionally not rendered; the editor renders locally

## Project specifications

- Composition: `ArgentinaWorldCup2026`
- Canvas: 2160×3840 (9:16)
- Frame rate: 30 fps
- Duration: 1759 frames / 58.618776 seconds
- Voiceover: `public/voiceover.mp3`
- Stack: React, TypeScript, Remotion 4
- Style reference: [ston6919/vox-style-video](https://github.com/ston6919/vox-style-video)

## Quick start

```bash
npm install
npm run compositions
npm run studio
```

Select `ArgentinaWorldCup2026` in Remotion Studio.

## Safe verification

The repository enforces `Config.setConcurrency(1)` in `remotion.config.ts`. Verify with individual half-scale stills only:

```bash
npx remotion still src/index.ts ArgentinaWorldCup2026 previews/scene-01.png --frame=66 --scale=0.5
```

Do not use a full-video render as part of automated verification. Nine verified stills and a contact sheet are committed under `previews/`.

## Directory guide

- `src/` — Remotion entry, composition, and animation components
- `public/elements/` — 18 transparent generated assets used by Remotion
- `public/images/` — non-element public imagery/contact-sheet copy
- `public/voiceover.mp3` — composition audio
- `elements/` and `voiceover.mp3` — portable handoff copies
- `storyboard/storyboard.json` — 9-scene creative and synchronization plan
- `handoff.json` — v4 machine-readable editor contract
- `qa_report.json` — per-element executable QA results
- `verification.json` — still frames, output paths, hashes, and verification settings
- `style/` — palette and visual lock
- `previews/` — nine half-scale scene stills and contact sheet
- `HANDOFF_README.md` — editor-specific assembly notes

## Timing and QA guarantees

- Every beat has `anchor_word`, `anchor_word_start`, `land_at_seconds`, entrance duration, exit time, and exit style.
- Maximum entrance timing delta: 0.0 seconds.
- Maximum empty-stage gap: 0.55 seconds.
- Phrase coverage: complete; no orphaned segments.
- Maximum full-opacity generated pieces: 2 against a cap of 4.
- All cutouts passed transparency, connected-component, grayscale, sharpness, watermark, and text checks.
- All editorial stamps passed OCR or documented 100% visual adjudication.

## Functional entry points

- Remotion entry: `src/index.ts`
- Composition ID: `ArgentinaWorldCup2026`
- Storyboard data: `storyboard/storyboard.json`
- Assembly contract: `handoff.json`

This is an offline editing project and does not expose web/API routes.

## Data model and storage

The project is file-backed and requires no runtime database. Storyboard, QA, handoff, and verification data are versioned JSON. Static media is loaded from `public/` by Remotion.

## Not implemented by design

- No final MP4 export is included.
- No Cloudflare deployment is required.
- No external runtime service or persistent database is used.

## Recommended next step

Open the project in Remotion Studio, review transitions at full timeline speed, and render locally using the editor's preferred codec and delivery settings.

## Repository

- GitHub: https://github.com/AbishanKhulal/FIFA
- Branch: `main`
