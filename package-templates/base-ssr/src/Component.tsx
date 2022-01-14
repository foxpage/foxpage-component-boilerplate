/* foxpage-template-ignore-start */
/* eslint-disable no-underscore-dangle */
/* foxpage-template-ignore-end */
import React from 'react';
import { FoxpageComponentSsrLifecycle } from '@foxpage/foxpage-component-storybook-addon';
import { ComponentProps } from './typing';
import './index.scss';

// please import `CustomerSsrCtxType` from your plugin-type package.
type CustomerSsrCtxType = {};

const ___ComponentName___: React.FC<ComponentProps> &
  FoxpageComponentSsrLifecycle<ComponentProps, CustomerSsrCtxType> = ({ url, ssrData, children }) => {
  return (
    <div>
      <h1>Hello world!</h1>
      <div>
        <h3>url</h3>
        <p>{url}</p>
      </div>
      <div>
        <h3>ssrData</h3>
        <p>{ssrData}</p>
      </div>
      {children}
    </div>
  );
};

___ComponentName___.beforeNodeBuild = async (ctx, nodeData) => {
  console.debug('beforeNodeBuild ctx: ', ctx);
  console.debug('beforeNodeBuild nodeData: ', nodeData);
  const { props = {} } = nodeData;
  const { url } = props;
  const ssrData = await Promise.resolve(`get ssrData with url ${url}`);
  return {
    ssrData,
  };
};

export default ___ComponentName___;
