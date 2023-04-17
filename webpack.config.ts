import path from 'path';

import { Env } from './config/types';

import buildRules from './config/buildRules';
import plugins from './config/plugins';

import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

export default (env: Env) => {
  const {mode, port = 3000} = env

  const config: webpack.Configuration = {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins,
    module: {
      rules: buildRules(env),
    },

    ...(mode === 'development' ?
      {
        devtool: 'inline-source-map',
        devServer: {
          port,
          open: false
        }
      } :
      undefined
    )
  }

  return config
}