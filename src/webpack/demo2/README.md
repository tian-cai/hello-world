# demo2
使用 webpack-dll-plugin 的方式，在首次构建时候将这些静态依赖单独打包.
webpack-bundle-analyzer该插件在有DllReferencePlugin插件的时候无法正常工作

## 目录说明
`src` : 源代码目录

`build`: 打包目录

`src/assets` :存放静态资源

`src/modules` : 模块

`src/style` : 公用样式

## 使用说明
```js
//安装依赖
npm install
//本地运行
npm run start
//打包
npm run build
// 生成stats.json文件，用于分析
npm run profile
// 分析bundle
npm run analyzer
```
