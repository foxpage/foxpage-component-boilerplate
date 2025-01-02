/**
 * this file is for config storybook
 * @see https://storybook.js.org/docs/react/configure/overview
 */
const { mergeConfig } = require('vite');

module.exports = {
  // add your stories paths, use glob syntax
  // default: "../packages/**/*.{stories,story}.{tsx,js,jsx}"
  stories: ['../packages/**/*.{stories,story}.{tsx,js,jsx}'],

  core: {
    builder: 'webpack4',
  },

  addons: [
    {
      name: '@foxpage/foxpage-component-storybook-preset/preset',
      options: {},
    },
    // 插件示例, 可自行删除引入代码及 "./addons" 下示例代码
    './addons/theme-addon/register.js',
  ],
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
  },
  // 可自定义设置
  // webpackFinal: async config => {
  //   return config;
  // },
};
