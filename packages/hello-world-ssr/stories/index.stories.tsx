import React from 'react';
import { mountEditor, withFoxpageEditor } from '@foxpage/foxpage-component-editor-storybook-addon';
import { withFoxpageSsr } from '@foxpage/foxpage-component-storybook-addon';
import HelloWorldSsr from '../src/index';
import Editor from '../editor';
import { ComponentProps } from '../src/typing';

HelloWorldSsr.displayName = 'foxpage-component-demo-hello-world-ssr';

export default {
  title: 'HelloWorldSsr',
  decorators: [withFoxpageEditor],
  component: HelloWorldSsr,
};

const HelloWorldSsrWrap = withFoxpageSsr<ComponentProps>({
  // 强制设置或扩展 ssrContext
  // 正常流程一般会用, 应该交给插件去做而不是组件开发组, 但组件开发者在开发环境有能力覆盖其值
  ssrContext: {
    mockSsrCtx: 'mockSsrCtx',
  },
  // 强制设置或扩展 context
  // 如果逐渐开发者不想 context 数据受外部插件控制, 可以自行 mock
  context: {
    otherData: 'force set other data',
  },
  // 强制设置或扩展 nodeData
  nodeData: {
    id: 'test-123',
  },
})(HelloWorldSsr);

export const BaseUsage = () => <HelloWorldSsrWrap />;

export const WithEditor = () => {
  const props = mountEditor(Editor, {
    text: `text from editor`,
  });
  return <HelloWorldSsrWrap {...props} />;
};
