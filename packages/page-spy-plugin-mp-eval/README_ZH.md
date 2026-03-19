[npm-image]: https://img.shields.io/npm/v/@lastos/page-spy-plugin-mp-eval?logo=npm&label=version
[npm-url]: https://www.npmjs.com/package/@lastos/page-spy-plugin-mp-eval
[minified-image]: https://img.shields.io/bundlephobia/min/@lastos/page-spy-plugin-mp-eval
[minified-url]: https://unpkg.com/browse/@lastos/page-spy-plugin-mp-eval/dist/iife/index.min.js

[English](./README.md) | 中文

# `@lastos/page-spy-plugin-mp-eval`

[![SDK version][npm-image]][npm-url]
[![SDK size][minified-image]][minified-url]

PageSpy SDK 的小程序插件，用于小程序环境，使得在小程序环境中动态执行脚本成为可能。

可用于下述小程序 SDK：

- [@lastos/page-spy-wechat](https://www.npmjs.com/package/@lastos/page-spy-wechat)
- [@lastos/page-spy-alipay](https://www.npmjs.com/package/@lastos/page-spy-alipay)
- [@lastos/page-spy-uniapp](https://www.npmjs.com/package/@lastos/page-spy-uniapp)
- [@lastos/page-spy-taro](https://www.npmjs.com/package/@lastos/page-spy-taro)

> [!CAUTION]
> 小程序提交审核时请务必删除代码中的该插件，否则会导致审核失败。

## 用法

```ts
// In your entry file like "main.ts"
import PageSpy from '@lastos/page-spy-wechat';
import MPEvalPlugin from '@lastos/page-spy-plugin-mp-eval';

// Register plugin
PageSpy.registerPlugin(new MPEvalPlugin());
// Init PageSpy
const pageSpy = new PageSpy();
```
