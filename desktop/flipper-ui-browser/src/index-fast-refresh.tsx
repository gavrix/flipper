/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {default as HmrClient} from './HMRClient';
// @ts-ignore
import {default as ReactRefreshRuntime} from 'react-refresh/runtime';

HmrClient.setup(
  'web',
  (window as any).flipperConfig.entryPoint,
  'localhost',
  window.location.port,
  true,
);

ReactRefreshRuntime.injectIntoGlobalHook(window);

const Refresh = {
  performFullRefresh(reason: string) {
    console.log('Perform full refresh', reason);
    window.location.reload();
  },

  createSignatureFunctionForTransform:
    ReactRefreshRuntime.createSignatureFunctionForTransform,

  isLikelyComponentType: ReactRefreshRuntime.isLikelyComponentType,

  getFamilyByType: ReactRefreshRuntime.getFamilyByType,

  register: ReactRefreshRuntime.register,

  performReactRefresh() {
    if (ReactRefreshRuntime.hasUnrecoverableErrors()) {
      console.error('Fast refresh - Unrecolverable');
      window.location.reload();
      return;
    }
    ReactRefreshRuntime.performReactRefresh();
    console.log('Perform react refresh');
  },
};

(require as any).Refresh = Refresh;

// eslint-disable-next-line import/no-commonjs
require('./index.tsx');
