import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

const accents = ['#B23A3A', '#E3B23C', '#2E4057', '#8AA48D', '#C86F5E'];

export const PaperBackground: React.FC<{sceneIndex: number}> = ({sceneIndex}) => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 1759], [-70, 90]);
  const accent = accents[(sceneIndex - 1) % accents.length];

  return (
    <AbsoluteFill style={{backgroundColor: '#F2E8D5', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          opacity: 0.22,
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(29,29,27,.22) 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(29,29,27,.13) 0 1.5px, transparent 2.5px)',
          backgroundSize: '31px 31px, 23px 23px',
          transform: `translateY(${drift}px)`,
        }}
      />
      <div style={{position: 'absolute', left: -180, top: 540, width: 640, height: 80, background: accent, opacity: 0.72, transform: 'rotate(-7deg)'}} />
      <div style={{position: 'absolute', right: -140, bottom: 600, width: 520, height: 68, background: '#2E4057', opacity: 0.6, transform: 'rotate(9deg)'}} />
      <div style={{position: 'absolute', inset: 80, border: '5px solid rgba(29,29,27,.12)'}} />
      <div style={{position: 'absolute', top: 108, left: 116, color: '#1D1D1B', fontFamily: 'Arial Black, Arial, sans-serif', fontWeight: 900, fontSize: 58, letterSpacing: 8}}>
        ARGENTINA / 2026
      </div>
      <div style={{position: 'absolute', top: 184, left: 120, width: 520, height: 10, background: accent}} />
      <div style={{position: 'absolute', right: 114, top: 108, color: '#1D1D1B', fontFamily: 'Arial, sans-serif', fontWeight: 800, fontSize: 48}}>
        0{sceneIndex}
      </div>
    </AbsoluteFill>
  );
};
