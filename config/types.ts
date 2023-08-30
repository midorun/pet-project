export type BuildMode = 'production' | 'development'

export type BuildPaths = {
  entry: string
  build: string
  html: string
  src: string
}

export type BuildEnv = Partial<{
  mode: BuildMode
  port: number
  apiBaseUrl: string
}>

export type BuildOptions = {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  apiBaseUrl?: string
}
