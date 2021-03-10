module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/tayabraza.github.io.git/'
  : '/',
  runtimeCompiler: true,
  lintOnSave: false,
  productionSourceMap: false
}