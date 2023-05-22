import React from 'react';
import { useFoxpageContext } from '@foxpage/foxpage-component-context';
import { FoxpageComponentSsrLifecycle } from '@foxpage/foxpage-component-storybook-addon';
import { ComponentProps } from './typing';
import './index.scss';

// please import `CustomerSsrCtxType` from your plugin-type package.
type CustomerSsrCtxType = {
  axios: any;
};

const HelloWorldSsr: React.FC<ComponentProps> & FoxpageComponentSsrLifecycle<ComponentProps, CustomerSsrCtxType> =
  props => {
    const { text = 'default text', ssrText = '' } = props;
    const foxpageContext = useFoxpageContext();
    console.debug('HelloWorldSsr foxpageContext: ', foxpageContext);
    return (
      <div>
        <h1>Hello World</h1>
        <div className="text">
          text:
          <span className="text-bold">{text}</span>
        </div>
        <div className="text">
          ssrText:
          <span className="text-bold">{ssrText}</span>
        </div>
      </div>
    );
  };

HelloWorldSsr.beforeNodeBuild = async (ctx, nodeData) => {
  console.debug('beforeNodeBuild ctx: ', ctx);
  console.debug('beforeNodeBuild nodeData: ', nodeData);
  const { props } = nodeData;
  const { text } = props;
  const ssrText = await Promise.resolve(`I am get in beforeNodeBuild. \n text: ${text}`);

  return {
    ssrText,
  };
};

export default HelloWorldSsr;
