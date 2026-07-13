import React from 'react';
import {Composition} from 'remotion';
import storyboardData from '../storyboard/storyboard.json';
import {ArgentinaVoxVideo} from './Video';
import type {Storyboard} from './types';

const storyboard = storyboardData as Storyboard;

export const RemotionRoot: React.FC = () => (
  <Composition
    id="ArgentinaWorldCup2026"
    component={ArgentinaVoxVideo}
    durationInFrames={storyboard.audio.total_frames}
    fps={storyboard.video.fps}
    width={storyboard.video.width}
    height={storyboard.video.height}
    defaultProps={{storyboard}}
  />
);
