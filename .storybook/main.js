/**
 * this file is for config storybook
 * @see https://storybook.js.org/docs/react/configure/overview
 */
const { mergeConfig } = require('vite');

module.exports = {
  // add your stories paths, use glob syntax
  // default: "../packages/**/*.{stories,story}.{tsx,js,jsx}"
  stories: [
    "../packages/**/*.{stories,story}.{tsx,js,jsx}"
  ],

  core: {
    builder: process.env.STORYBOOK_BUILDER === 'vite' ? '@storybook/builder-vite' : 'webpack4'
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
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.js')).default.resolve,
      // Add dependencies to pre-optimization
      // optimizeDeps: {
      //   include: ['storybook-dark-mode'],
      // },
    });
  },
};
