[npm-image]: https://img.shields.io/npm/v/@lastos/page-spy-wechat?logo=npm&label=version
[npm-url]: https://www.npmjs.com/package/@lastos/page-spy-wechat
[minified-image]: https://img.shields.io/bundlephobia/min/@lastos/page-spy-wechat
[minified-url]: https://unpkg.com/browse/@lastos/page-spy-wechat/dist/iife/index.min.js

English | [中文](./README_ZH.md)

# `@lastos/page-spy-wechat`

[![SDK version][npm-image]][npm-url]
[![SDK size][minified-image]][minified-url]

The client SDK of [PageSpy](https://www.pagespy.org) used in wechat miniprogram environment.

## Usage

```ts
import PageSpy from '@lastos/page-spy-wechat';

const pageSpy = new PageSpy({
  api: 'example.com',
});
```

Please refer to the official documentation for more details [PageSpy API](https://www.pagespy.org/#/docs/api)。

## Other SDKs

If you are using UniAPP or Taro, we recommend using below SDKs respectively:

- [@lastos/page-spy-uniapp](https://www.npmjs.com/package/@lastos/page-spy-uniapp)
- [@lastos/page-spy-taro](https://www.npmjs.com/package/@lastos/page-spy-taro)
