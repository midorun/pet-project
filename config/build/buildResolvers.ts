import path from 'path'

import { ResolveOptions } from 'webpack'

import { BuildOptions } from '../types'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@entities': path.resolve(__dirname, '..', '..', 'src', 'entities'),
    },
    modules: [options.paths.src, 'node_modules'],
  }
}
