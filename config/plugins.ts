import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack  from 'webpack';

const plugins: webpack.WebpackPluginInstance[] = [
  new HtmlWebpackPlugin({ template: path.resolve( 'public', 'index.html') }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  })
]

export default plugins