[npm-image]: https://img.shields.io/npm/v/@lastos/page-spy-alipay?logo=npm&label=version
[npm-url]: https://www.npmjs.com/package/@lastos/page-spy-alipay
[minified-image]: https://img.shields.io/bundlephobia/min/@lastos/page-spy-alipay
[minified-url]: https://unpkg.com/browse/@lastos/page-spy-alipay/dist/iife/index.min.js

[English](./README.md) | 中文

# `@lastos/page-spy-alipay`

[![SDK version][npm-image]][npm-url]
[![SDK size][minified-image]][minified-url]

用于调试支付宝小程序的 [PageSpy](https://www.pagespy.org) 客户端 SDK.

## 使用

```ts
import PageSpy from '@lastos/page-spy-alipay';

const pageSpy = new PageSpy({
  api: 'example.com',
});
```

详细的 API 定义请参考官方文档 [PageSpy API](https://www.pagespy.org/#/docs/api)。

## 其他 SDK

如果你使用 UniAPP 或者 Taro，推荐使用相应的 SDK：

- [@lastos/page-spy-uniapp](https://www.npmjs.com/package/@lastos/page-spy-uniapp)
- [@lastos/page-spy-taro](https://www.npmjs.com/package/@lastos/page-spy-taro)
