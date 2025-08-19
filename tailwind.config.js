/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const odsTwPreset = require('./lib/tailwind.preset.js');
const plugin = require('tailwindcss/plugin');

const drawerWidth = '12.5em';
const headerHeight = '4em';

module.exports = {
  presets: [odsTwPreset],
  content: ['./lib/**/*.{js,jsx,ts,tsx}'],
  prefix: 'ods-',
  plugins: [],
};
