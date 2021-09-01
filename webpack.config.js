const path = require('path');

module.exports = {
  mode: "production",

  entry: {
    index: './src/index.js',
    product: '/src/product.js',
    panier: '/src/panier.js',
    confirmation: '/src/confirmation.js',
  }, 

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};