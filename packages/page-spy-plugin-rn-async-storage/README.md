[npm-image]: https://img.shields.io/npm/v/@lastos/page-spy-plugin-rn-async-storage?logo=npm&label=version
[npm-url]: https://www.npmjs.com/package/@lastos/page-spy-plugin-rn-async-storage
[minified-image]: https://img.shields.io/bundlephobia/min/@lastos/page-spy-plugin-rn-async-storage
[minified-url]: https://unpkg.com/browse/@lastos/page-spy-plugin-rn-async-storage/dist/iife/index.min.js

English | [中文](./README_ZH.md)

# `@lastos/page-spy-plugin-rn-async-storage`

[![SDK version][npm-image]][npm-url]
[![SDK size][minified-image]][minified-url]

This plugin is used in React Native environment to inspect the data in AsyncStorage.

This plugin can only be registered in PageSpy ReactNative SDK: [`@lastos/page-spy-react-native`](https://www.npmjs.com/package/@lastos/page-spy-react-native).

## Usage

```ts
// In your entry file like "main.ts"
import PageSpy from '@lastos/page-spy-react-native';
import AsyncStoragePlugin from '@lastos/page-spy-plugin-rn-async-storage';

// Register plugin
PageSpy.registerPlugin(new AsyncStoragePlugin());
// Init PageSpy
const pageSpy = new PageSpy();
```

After that, enter the debug room on PageSpy web page and you can see the data in Storage -> AsyncStorage.
