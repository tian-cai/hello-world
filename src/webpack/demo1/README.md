# demo1
使用externals选项，将不需要打包的静态资源从构建逻辑中剔除出去，而使用 CDN 的方式，去引用它们。

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
