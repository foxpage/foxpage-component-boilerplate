/* foxpage-template-ignore-start */
/* eslint-disable react/jsx-pascal-case */
/* foxpage-template-ignore-end */
import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import ___ComponentName___ from '../src';
import Editor from '../editor';

___ComponentName___.displayName = '___Name___';

export default {
  title: '___ComponentName___',
  component: ___ComponentName___,
  decorators: [withFoxpageEditor],
};

export const BaseUsage = () => <___ComponentName___ />;

export const WithEditor = () => {
  const props = mountEditor(Editor, {});
  return <___ComponentName___ {...props} />;
};
