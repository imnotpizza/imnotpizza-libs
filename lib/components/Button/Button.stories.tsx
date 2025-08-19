// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)

import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    usageType: {
      name: '타입',
      control: { type: 'radio' },
      options: ['box', 'line'],
      description: '버튼의 사용 타입',
    },
    children: {
      name: '내용',
      control: 'text',
      description: '버튼에 나타낼 내용',
    },
    size: {
      name: '크기',
      control: { type: 'select' },
      options: ['full', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'],
      description: '버튼 사이즈 크기',
    },
    disabled: {
      name: '비활성화',
      control: 'boolean',
      description: '비활성화 사용 여부 선택',
    },
    loading: {
      name: '로딩',
      control: 'boolean',
      description: '버튼에 로딩 아이콘 사용 여부 선택',
    },
    withLoading: {
      name: '로딩 & 텍스트',
      control: 'boolean',
      description: '버튼에 로딩 아이콘과 텍스트 함께 사용 여부 선택',
    },
    withIcon: {
      name: '아이콘 사용 유무',
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: 'I am Button',
    usageType: 'box',
    size: 'full',
    disabled: false,
    loading: false,
    withLoading: false,
    withIcon: false,
  },
};
