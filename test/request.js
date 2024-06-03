/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
const {expect} = require('@wdio/globals');

describe('browser.mock', () => {
  it('should catch request to x-origin-src.glitch.me/set-3pc.html', async () => {
    const mock = await browser.mock('**/set-3pc.html');
    await browser.url('https://third-party-cookies.glitch.me/');
    expect(mock).toBeRequested();
  });
});