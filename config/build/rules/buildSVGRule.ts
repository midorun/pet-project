export const buildSVGRule = () => {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }
}
