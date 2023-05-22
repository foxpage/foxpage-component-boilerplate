import React from 'react';
import { FoxpageSsrCtxOverridesProvider } from '@foxpage/foxpage-component-storybook-addon';
import { FoxpageCtxOverridesProvider } from '@foxpage/foxpage-component-context';

export const FoxpageCustomerContextDecorator = (StoryFn) => {
  const ctx = {
    locale: 'en-US',
  };
  const ssrCtx = {
    ssrData: 'ssr data or api',
  };
  return (
    <FoxpageSsrCtxOverridesProvider value={{
      ...ssrCtx,
      ...ctx,
    }}>
      <FoxpageCtxOverridesProvider value={ctx}>
        <StoryFn />
      </FoxpageCtxOverridesProvider>
    </FoxpageSsrCtxOverridesProvider>
  )
};
