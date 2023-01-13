// module.exports = {
//   pages: {
//     index: {
//       entry: 'examples/main.js',
//       template: 'public/index.html',
//       filename: 'index.html'
//     }
//   }
// }
module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
