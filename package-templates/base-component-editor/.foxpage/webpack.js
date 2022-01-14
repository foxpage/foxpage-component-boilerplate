/**
 * You can customize the Webpack configuration
 * The webpackFinal function will be run for 'production', 'node', 'debug', 'editor' mode.
 * notice: It is recommended that you modify only externals and loader
 */

// const webpackFinal = (mode, config) => {
//   if (['debug', 'production', 'node'].includes(mode)) {
//     config.externals['antd'] = {
//       root: "antd",
//       commonjs: "antd",
//       commonjs2: "antd",
//       amd: 'antd',
//     };
//   }
//   return config;
// };

// module.exports = webpackFinal;
