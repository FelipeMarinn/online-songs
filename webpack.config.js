const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './js/allSongs.js',
    mix: './js/mix.js',
    topSong: './js/topSong.js',
    validacion: './js/validacion.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './index.html',
          chunks: ['main'],
      }),
      new HtmlWebpackPlugin({
          filename: 'screens/canciones.html',
          template: './screens/canciones.html',
          chunks: ['canciones'],
      }),
      new HtmlWebpackPlugin({
          filename: 'screens/inicioSesion.html',
          template: './screens/inicioSesion.html',
          chunks: ['sesion'],
      }),
      new HtmlWebpackPlugin({
          filename: 'screens/registro.html',
          template: './screens/registro.html',
          chunks: ['registro'],
      })
  ]
}