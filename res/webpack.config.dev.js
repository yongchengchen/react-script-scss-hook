// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const paths = require('./paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var rawConfigs = require('./webpack.config.dev.raw');

rawConfigs.output['path'] = paths.appBuild;
rawConfigs.resolve.extensions.push('.scss');

for(let rule of rawConfigs.module.rules) {
    if (rule.oneOf !== undefined) {
        for(let idx in rule.oneOf) {
            const sub = rule.oneOf[idx];
            if (sub.exclude !== undefined) {
                sub.exclude.push(/\.scss$/);
            }
        }
    }
}

rawConfigs.module.rules.push({
    test: /\.scss$/,
    loaders: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('sass-loader')
    ]
  }
);

rawConfigs.plugins.push(new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }));

module.exports = rawConfigs;
