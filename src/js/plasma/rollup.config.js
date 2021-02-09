import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

const devOutputPath = 'docs/js/plasma.js';
const prodOutputPath = 'pages/_buildoutput/plasma.js';
const outputPath = (process.env.NODE_ENV === 'development') ? devOutputPath : prodOutputPath;

export default {
  input: 'src/js/plasma/index.js',
  output: {
    file: outputPath,
    format: 'esm'
  },
  plugins: [resolve(), json(), terser()]
};
