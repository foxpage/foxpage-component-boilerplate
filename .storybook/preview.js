import { makeFoxpageContextDecorator } from '@foxpage/foxpage-component-storybook-addon';
// import { FoxpageCustomerContextDecorator } from './addons/customer-ctx-addon/decorator';
// import { ThemeDecorator } from './addons/theme-addon/decorator';

export const decorators = [
  // FoxpageCustomerContextDecorator,
  // ThemeDecorator,
  makeFoxpageContextDecorator(),
];

export const parameters = {
  // FoxpageContext 的配置参数, 可设置默认 context 参数
  foxpageContext: {
    context: {},
  },
  // themeDemo 的配置参数, 可删除
  themeDemo: {
    theme: 'dark',
    testFun: function (data) {
      console.log(data);
      window.localStorage.setItem('test-theme', data);
    }
  },
};
