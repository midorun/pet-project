import { buildWebpackConfig } from './config/buildWebpackConfig'
import path from 'path'
import { BuildEnv, BuildPaths } from './config/types'
import webpack from 'webpack'

export default (env: BuildEnv) => {
  const { mode = 'development', port = 3000 } = env

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
  }

  const config: webpack.Configuration = buildWebpackConfig(options)

  return config
}
