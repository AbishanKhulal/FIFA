import React from 'react';
import {Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import type {Beat} from '../types';

const directionOffset = (direction: string) => {
  if (direction === 'left') return {x: -420, y: 0};
  if (direction === 'right') return {x: 420, y: 0};
  if (direction === 'bottom') return {x: 0, y: 520};
  if (direction === 'top') return {x: 0, y: -420};
  return {x: 0, y: 0};
};

export const BeatElement: React.FC<{beat: Beat}> = ({beat}) => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();
  const landFrame = Math.round(beat.land_at_seconds * fps);
  const enterFrames = Math.round(beat.entrance_duration_seconds * fps);
  const startFrame = Math.max(0, landFrame - enterFrames);
  const exitFrame = Math.round(beat.exit_at_seconds * fps);

  if (frame < startFrame || frame > exitFrame + Math.round(0.24 * fps)) return null;

  const progress = enterFrames === 0 ? 1 : interpolate(frame, [startFrame, landFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(1.25)),
  });
  const fadeOut = interpolate(frame, [exitFrame, exitFrame + Math.round(0.22 * fps)], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const offset = directionOffset(beat.enter_from);
  const stamp = beat.piece_type === 'stat-stamp';
  const scale = stamp ? interpolate(progress, [0, 1], [1.55, 1]) : interpolate(progress, [0, 1], [0.88, 1]);
  const x = interpolate(progress, [0, 1], [offset.x, 0]);
  const y = interpolate(progress, [0, 1], [offset.y, 0]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${beat.final_position.x}%`,
        top: `${beat.final_position.y}%`,
        width: width * (beat.size_pct / 100),
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${beat.rotation_deg}deg) scale(${scale})`,
        transformOrigin: 'center center',
        opacity: fadeOut,
        zIndex: beat.z,
        filter: stamp ? 'drop-shadow(20px 24px 0 rgba(29,29,27,.18))' : 'drop-shadow(20px 28px 0 rgba(29,29,27,.2))',
      }}
    >
      <Img src={staticFile(beat.asset)} style={{display: 'block', width: '100%', height: 'auto'}} />
    </div>
  );
};
