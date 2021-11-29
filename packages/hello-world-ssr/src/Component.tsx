import React from 'react';
import { useFoxpageContext } from '@foxpage/foxpage-component-context';
import { FoxpageComponentSsrLifecycle } from '@foxpage/foxpage-component-storybook-addon';
import { ComponentProps } from './typing';
import './index.scss';

// please import `CustomerSsrCtxType` from your plugin-type package.
type CustomerSsrCtxType = {
  axios: any;
};

const HelloWorld: React.FC<ComponentProps> &
  FoxpageComponentSsrLifecycle<ComponentProps, CustomerSsrCtxType> = props => {
  const { text = 'Hello, world!', number = 1, ssrText = '' } = props;
  const foxpageContext = useFoxpageContext();
  console.debug('HelloWorld foxpageContext: ', foxpageContext);
  return (
    <div>
      <h1>Hello World</h1>
      <div className="text">
        text:
        <span className="text-bold">{text}</span>
      </div>

      <div>
        Input Number: <span style={{ fontSize: 30 }}>{number}</span>
      </div>

      <div className="text">
        ssrText:
        <span className="text-bold">{ssrText}</span>
      </div>
    </div>
  );
};

HelloWorld.beforeNodeBuild = async (ctx, nodeData) => {
  console.debug('beforeNodeBuild ctx: ', ctx);
  console.debug('beforeNodeBuild nodeData: ', nodeData);
  const { props } = nodeData;
  const { text, number } = props;
  const ssrText = await Promise.resolve(`I am get in beforeNodeBuild. \n text: ${text} and number: ${number}`);

  return {
    ssrText,
  };
};

export default HelloWorld;
