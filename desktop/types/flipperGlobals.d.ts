/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

declare const __REVISION__: string | undefined;
declare const __VERSION__: string;
declare const electronRequire: {
  (name: string): any;
  resolve: (module: string) => string;
  cache: {[module: string]: any};
};

// For Electron
declare module NodeJS {
  interface Global {
    __REVISION__: string | undefined;
    __VERSION__: string;
    electronRequire: {
      (name: string): any;
      resolve: (module: string) => string;
      cache: {[module: string]: any};
    };
  }
}
