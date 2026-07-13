export type Position = {x: number; y: number};

export type Beat = {
  beat_id: string;
  concept: string;
  piece_type: 'cutout' | 'stat-stamp';
  anchor_word: string;
  anchor_word_start: number;
  land_at_seconds: number;
  entrance_duration_seconds: number;
  exit_at_seconds: number;
  exit_style: string;
  enter_from: string;
  final_position: Position;
  size_pct: number;
  rotation_deg: number;
  z: number;
  asset: string;
  label_text: string | null;
  accent_hex: string | null;
};

export type Scene = {
  scene_index: number;
  start_time_seconds: number;
  end_time_seconds: number;
  narration_text: string;
  beats: Beat[];
};

export type Storyboard = {
  project_name: string;
  video: {width: number; height: number; fps: number; aspect_ratio: string};
  audio: {duration_seconds: number; total_frames: number};
  scenes: Scene[];
};
