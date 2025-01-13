import React from 'react';

import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';

import Editor from '../editor';
import HelloWorld from '../src/index';

export default {
  title: 'HelloWorld',
  decorators: [withFoxpageEditor],
  component: HelloWorld,
};

export const BaseUsage = () => <HelloWorld />;

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    text: `text from editor`,
  });
  return <HelloWorld {...props} />;
};
