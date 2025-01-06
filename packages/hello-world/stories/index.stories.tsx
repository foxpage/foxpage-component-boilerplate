import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';

import Editor from '../editor';
import HelloWorld from '../src/index';

const meta = {
  title: 'HelloWorld',
  component: HelloWorld,
  decorators: [withFoxpageEditor],
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof HelloWorld>;

export const BaseUsage: Story = {
  render: () => <HelloWorld />,
};

export const WithEditor: Story = {
  render: () => {
    const props = mountEditor(Editor, {
      text: `text from editor`,
    });
    return <HelloWorld {...props} />;
  },
};
