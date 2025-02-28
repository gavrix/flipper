/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

export default Object.freeze({
  // Only WebSocket requests from the following origin prefixes will be accepted
  VALID_WEB_SOCKET_REQUEST_ORIGIN_PREFIXES: [
    'chrome-extension://',
    'localhost:',
    'http://localhost:',
    'app://',
  ],
});
