import React from 'react';
import type { Decorator } from '@storybook/react';
import { FoxpageSsrCtxOverridesProvider } from '@foxpage/foxpage-component-storybook-addon';
import { FoxpageCtxOverridesProvider } from '@foxpage/foxpage-component-context';

export const FoxpageCustomerContextDecorator: Decorator = (Story, context) => {
  const ctx = {
    locale: 'en-US',
  };
  const ssrCtx = {
    ssrData: 'ssr data or api',
  };
  return (
    <FoxpageSsrCtxOverridesProvider
      value={{
        ...ssrCtx,
        ...ctx,
      }}
    >
      <FoxpageCtxOverridesProvider value={ctx}>
        <Story {...context} />
      </FoxpageCtxOverridesProvider>
    </FoxpageSsrCtxOverridesProvider>
  );
};
