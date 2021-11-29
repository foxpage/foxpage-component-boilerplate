/* foxpage-template-ignore-start */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-underscore-dangle */
/* foxpage-template-ignore-end */
import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { withFoxpageSsr } from '@foxpage/foxpage-component-storybook-addon';
import ___ComponentName___ from '../src';
import { ComponentProps } from '../src/typing';
import Editor from '../editor';

___ComponentName___.displayName = '___Name___';

export default {
  title: '___ComponentName___',
  component: ___ComponentName___,
  decorators: [withFoxpageEditor],
};

const ___ComponentName___Wrap = withFoxpageSsr<ComponentProps>({
  // 强制设置或扩展 ssrContext
  // 正常流程一般会用, 应该交给插件去做而不是组件开发组, 但组件开发者在开发环境有能力覆盖其值
  ssrContext: {},
  // 强制设置或扩展 context
  // 如果逐渐开发者不想 context 数据受外部插件控制, 可以自行 mock
  context: {},
  // 强制设置或扩展 nodeData
  nodeData: {
    // id: 'test-123',
    // 强制设置 props
    // props: {
    //   url: 'http://api.com/test/b',
    // },
  },
})(___ComponentName___);

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    url: 'http://api.com/test/a',
  });
  return <___ComponentName___Wrap {...props} />;
};
