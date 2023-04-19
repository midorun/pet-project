import { BuildOptions } from './types'

export const buildDevServer = (options: BuildOptions) => {
  const { port } = options

  return {
    devtool: 'inline-source-map',
    devServer: {
      port,
      open: false,
      historyApiFallback: true,
    },
  }
}
