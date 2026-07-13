import React from 'react';
import {AbsoluteFill, Audio, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {BeatElement} from './components/BeatElement';
import {PaperBackground} from './components/PaperBackground';
import type {Storyboard} from './types';

export const ArgentinaVoxVideo: React.FC<{storyboard: Storyboard}> = ({storyboard}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const time = frame / fps;
  const activeScene = storyboard.scenes.find((scene) => time >= scene.start_time_seconds && time < scene.end_time_seconds) ?? storyboard.scenes[storyboard.scenes.length - 1];
  const beats = storyboard.scenes.flatMap((scene) => scene.beats);

  return (
    <AbsoluteFill style={{backgroundColor: '#F2E8D5'}}>
      <Audio src={staticFile('voiceover.mp3')} />
      <PaperBackground sceneIndex={activeScene.scene_index} />
      {beats.map((beat) => <BeatElement key={beat.beat_id} beat={beat} />)}
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          bottom: 108,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          color: '#1D1D1B',
          fontFamily: 'Arial, sans-serif',
          fontSize: 38,
          fontWeight: 800,
          letterSpacing: 3,
          zIndex: 20,
        }}
      >
        <span style={{width: 86, height: 12, background: activeScene.beats[activeScene.beats.length - 1]?.accent_hex ?? '#B23A3A'}} />
        WHAT IF ARGENTINA WINS?
      </div>
    </AbsoluteFill>
  );
};
