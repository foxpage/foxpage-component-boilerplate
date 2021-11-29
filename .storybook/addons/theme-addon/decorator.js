import React from 'react';
import { FoxpageCtxOverridesProvider } from '@foxpage/foxpage-component-context';
import { makeDecorator, useChannel, useState, useMemo } from '@storybook/addons';
import { PARAMETERS_KEY, PARAMETERS_NAME, ThemeOptions, ON_THEME_CHANGE } from  './constants';

export const ThemeDecoratorWrap = ({ ctx = {}, children }) => {
  return (
    <FoxpageCtxOverridesProvider value={ctx}>
      {children}
    </FoxpageCtxOverridesProvider>
  )
};

export const ThemeDecorator = makeDecorator({
  name: PARAMETERS_NAME,
  parameterName: PARAMETERS_KEY,
  wrapper: (storyFn, context, options) => {
    const { parameters = {} } = options;
    if (parameters.disable) {
      return storyFn(context);
    }
    const { theme: pTheme = ThemeOptions[0] } = parameters;
    const [theme, setTheme] = useState(pTheme);
    useChannel({
      [ON_THEME_CHANGE]: (val) => setTheme(val),
    });
    const ctx = useMemo(() => {
      return {
        theme,
      };
    }, [theme]);
    return (
      <ThemeDecoratorWrap ctx={ctx}>
        {storyFn(context)}
      </ThemeDecoratorWrap>
    );
  }
});
