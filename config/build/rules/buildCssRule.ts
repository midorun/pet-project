export const buildCssRule = (isDev: boolean) => {
  // return {
  //   test: /\.s[ac]ss$/i,
  //   use: [
  //     // Creates `style` nodes from JS strings
  //     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  //     // Translates CSS into CommonJS
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: {
  //           auto: (resPath: string) => Boolean(resPath.includes('.module.')),
  //           localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
  //         },
  //       },
  //     },
  //     // Compiles Sass to CSS
  //     'sass-loader',
  //   ],
  // }
  return {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  }
}
