import path from 'path'

import webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/types'

export default (env: BuildEnv) => {
  const { mode = 'development', port = 3000, apiBaseUrl } = env

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const isDev = mode === 'development'

  const options = {
    mode,
    port,
    paths,
    isDev,
    apiBaseUrl,
  }

  const config: webpack.Configuration = buildWebpackConfig(options)

  return config
}
