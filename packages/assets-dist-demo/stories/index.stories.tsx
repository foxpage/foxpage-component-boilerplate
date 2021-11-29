import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import AssetsDistDemo from '../src';
import Editor from '../editor';

export default {
  title: 'AssetsDistDemo',
  component: AssetsDistDemo,
  decorators: [withFoxpageEditor],
};

export const BaseUsage = () => <AssetsDistDemo />;

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <AssetsDistDemo {...props} />;
};
