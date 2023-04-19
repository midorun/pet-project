import { buildResolvers } from './buildResolvers'
import { buildRules } from './buildRules'
import { buildDevServer } from './buildDevServer'
import { buildPlugins } from './buildPlugins'
import webpack from 'webpack'
import { BuildOptions } from './types'

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolvers(options),
    ...(isDev ? buildDevServer(options) : undefined),
  }
}
