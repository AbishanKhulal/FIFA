import {Config} from '@remotion/cli/config';

// Required for crash-safe, memory-bounded verification and local rendering.
Config.setConcurrency(1);
Config.setOverwriteOutput(true);
