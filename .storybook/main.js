/**
 * this file is for config storybook
 * @see https://storybook.js.org/docs/react/configure/overview
 */
const config = {
  stories: ['../packages/*/stories/**/*.stories.@(ts|tsx|js|jsx)'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  addons: [
    {
      name: '@foxpage/foxpage-component-storybook-preset/preset',
      options: {},
    },
    // 插件示例, 可自行删除引入代码及 "./addons" 下示例代码
    './addons/theme-addon/register.js',
  ],

  core: {
    disableTelemetry: true,
  },

  webpackFinal: async config => {
    // Filter out stories loader and keep only babel-loader
    console.log('!~~~', config.module.rules[1], config.module.rules[0], config.module.rules);

    return config;
  },
};

export default config;
