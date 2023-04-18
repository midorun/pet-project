import path from 'path'

import { Env } from './config/types'

import buildRules from './config/buildRules'
import plugins from './config/plugins'

import webpack from 'webpack'

export default (env: Env) => {
  const { mode, port = 3000 } = env

  const config: webpack.Configuration = {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins,
    module: {
      rules: buildRules(env),
    },

    ...(mode === 'development'
      ? {
          devtool: 'inline-source-map',
          devServer: {
            port,
            open: false,
            historyApiFallback: true,
          },
        }
      : undefined),
  }

  return config
}
