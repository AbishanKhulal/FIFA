# VOX Style Lock — Argentina 2026

## Visual source of truth

This project follows the editorial collage language documented by `ston6919/vox-style-video`: warm paper, grayscale halftone cutouts, torn/sticker silhouettes, restrained accent colors, bold geometric statement stamps, shallow layering, and narration-led motion.

## Locked palette

- Paper: `#F2E8D5`
- Ink: `#1D1D1B`
- Brick red: `#B23A3A`
- Mustard: `#E3B23C`
- Navy: `#2E4057`
- Sage: `#8AA48D`
- Coral: `#C86F5E`

See `palette.png` for the visual swatch.

## Asset treatment

- Cutouts remain grayscale RGBA with visible halftone texture.
- Editorial labels are baked into standalone RGBA stamp assets; Remotion does not re-typeset them.
- Transparent borders remain clear and assets are tightly cropped.
- Drop shadows are hard-offset, low-opacity ink shadows—not soft cinematic glows.
- No logos, watermarks, sponsor marks, or readable incidental text.

## Layout and motion lock

- Master canvas: `2160 × 3840`, 30 fps, 9:16.
- Keep primary content inside the 5% side and 8% top/bottom safe zones.
- Maximum full-opacity generated pieces at once: 4; authored plan peaks at 2.
- Every entrance lands on its exact `anchor_word_start`.
- Stamps enter with a short overshoot; cutouts slide from their storyboard direction.
- Every piece exits at `exit_at_seconds`; no stale-element accumulation.
- Background motion stays subtle and never competes with narration.

## Prohibited drift

Do not add photorealistic full-frame backgrounds, gradients associated with sports broadcast graphics, glossy 3D type, neon lighting, extra captions over generated labels, unauthorized marks, or more than four simultaneous generated pieces.
