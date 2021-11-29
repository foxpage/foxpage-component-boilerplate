import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import HelloWorld from '../src/index';
import Editor from '../editor';

export default {
  title: 'HelloWorld',
  decorators: [withFoxpageEditor],
  component: HelloWorld,
};

export const BaseUsage = () => <HelloWorld text="test" number={1} />;

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <HelloWorld {...props} />;
};
