import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import HelloWorld from '../src/index';
import Editor from '../editor';

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
