import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import Editor from 'common-editor';
import HelloComponent from '../src';

HelloComponent.displayName = 'hello-component';

export default {
  title: 'HelloComponent',
  component: HelloComponent,
  decorators: [withFoxpageEditor],
};

export const BaseUsage = () => <HelloComponent />;

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    text: `I'm text from common-editor`,
  });
  return <HelloComponent {...props} />;
};
