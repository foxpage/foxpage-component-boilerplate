/* foxpage-template-ignore-start */
/* eslint-disable react/jsx-pascal-case */
/* foxpage-template-ignore-end */
import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
// You need to import editor by yourself
// import Editor from 'common-editor';
import ___ComponentName___ from '../src';

___ComponentName___.displayName = '___Name___';

export default {
  title: '___ComponentName___',
  component: ___ComponentName___,
  decorators: [withFoxpageEditor],
};

export const BaseUsage = () => <___ComponentName___ />;

export const WithEditor = () => {
  // You need to use editor by yourself
  // const props = mountEditor(Editor, {});
  const props = {};
  return <___ComponentName___ {...props} />;
};
