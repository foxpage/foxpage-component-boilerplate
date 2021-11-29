# foxpage-component-boilerplate

foxpage 组件开发项目, 用于foxpage组件的开发, 构建, 发布

本项目基于 [lerna](https://www.lernajs.cn/), [storybook](https://storybook.js.org/), [react](https://reactjs.org/) 框架搭建, 开发的组件既支持用于 `foxpage` 平台发布, 也支持常规的 `npm (或私有仓库)` 包发布流程

## 文件结构
``` text
── foxpage-component-boilerplate
  ├── .editorconfig   // @see: https://editorconfig.org/
  ├── .eslintrc       // eslint 配置
  ├── .gitignore
  ├── .prettierrc.js  // Prettier 格式化配置 @see: https://prettier.io/docs/en/configuration.html
  ├── README.md
  ├── babel.config.js // babel 配置 @see: https://babeljs.io/docs/en/configuration
  ├── jest.config.js  // jest 配置 @see: https://jestjs.io/docs/en/configuration
  ├── lerna.json      // lerna 配置 @see: https://github.com/lerna/lerna#lernajson
  ├── package.json
  ├── postcss.config.js // postcss 配置 @see: https://github.com/postcss/postcss#usage
  ├── schema.config.js  // schema 配置 @see: https://github.com/YousefED/typescript-json-schema#command-line
  ├── tsconfig.json     // typescript 配置 @see: https://www.typescriptlang.org/docs/handbook/tsconfig-json
  ├── typing.d.ts       // 类型声明扩展
  ├── .foxpage          // foxpage 配置文件的标识目录
  │  ├── webpack.js     // 所有组件 `build:foxpage` 构建时可以自定义 webpack 配置
  │  └── jest           // jest 配置文件入口, foxpage 内置了 setup, setupEnv, 无需用户手动指定文件入口
  │     ├── setup.js    // jest 配置的 setupFiles 参数内置指向该文件
  │     └── setupEnv.js // jest 配置的 setupFilesAfterEnv 参数内置指向该文件
  ├── .storybook        // storybook 配置 @see: https://storybook.js.org/docs/react/configure/overview#configure-your-storybook-project
  │  ├── main.js
  │  ├── middleware.js
  │  ├── preview.js
  │  └── decorators     // 一个 storybook decorators 插件示例
  │     └── foxpage-customer-ctx.js
  ├── dist              // 组件 foxpage 资源集合
  ├── package-templates // 组件模板, 用于创建新的组件
  │  ├── base-template
  │  └── ssr-template
  └── packages          // 组件文件夹
     ├── assets-dist-demo
     ├── hello-world
     └── hello-world-ssr
```

## 安装

`yarn boot` 安装或更新依赖
## 启动

`yarn start` 启动本地组件开发环境

## 组件开发

本项目基于 [storybook](https://storybook.js.org/) 搭建, 如需良好的开发体验需要对 storybook 有一点的了解, 了解后才能更好的开发组件

### 创建组件

在根目录运行 `yarn package:new` 或 `yarn package:select` 新建按指引新建组件

### 如何开发

在 `<root>/packages/<package>` 目录下开发对应组件, 有提供几个基础的组件示例, 可自行查看

- `/src`: 开发组件的代码, 用 `react` 自由发挥
- `/editor`: 为你的组件编写 editor 编辑器, 可用于本地或foxpage平台。已提供很多基础组件, 可根据 type 定义直接使用
- `/test`: 为你的组件编写测试用例
- `/stories`: 为你的组件编写 storybook 能够识别的 `stories` 用于本地开发组件

## 资源构建

单个组件:

- `yarn build:foxpage`: 构建出 `/dist` 用于 `foxpage` 平台注册的组件静态资源
- `yarn build:lib`: 构建出 `/lib` 用于 `npm` 包的发布注册 (私有仓库请自行修改仓库地址, 或者自行提供 pipeline 运行的脚本)
- `yarn build:es`: 构建出 `/es` 用于 `npm` 包的发布注册 (私有仓库请自行修改仓库地址, 或者自行提供 pipeline 运行的脚本)
- `yarn build:md`: 基于 `src/typing.ts`(需要遵循 [schema规范](https://github.com/YousefED/typescript-json-schema/blob/master/api.md)) 构建出 `schema.md`, 快速生成组件的 `Props` 说明文档, 对外方便接入

全部组件(项目根目录):

- `yarn build:foxpage`: 将所有组件的 `/dist` 提取到根目录, 用于 `foxpage` 平台, 组件资源可以按项目维度整体发布(支持缓存, 详情自行查看foxpage脚手架说明文档)

## 组件发布

### npm 包发布

组件构建完成后, 运行 `yarn version` 对更改的包进行版本升级, 如需直接发布可运行 `lerna publish` 发布, 可查看官网了解 [lerna](https://lerna.js.org/) 包管理工具

### foxpage 平台

foxpage 不提供资源服务, 需要自行上传到你自己的服务器内 (项目所有组件打包上传还是仅上传单个组件资源可视你实际的资源服务器而定)

上传后需要在 `foxpage` 平台注册资源及组件, 详请请产考 foxpage 平台相关文档
