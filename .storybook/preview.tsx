import type { Preview } from '@storybook/react';
import { DialogProvider } from '../lib/components/Dialog';
import React from 'react';
import '@/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f0f0f0',
        },
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <DialogProvider>
      <Story />
    </DialogProvider>
  ),
];

export default preview;
