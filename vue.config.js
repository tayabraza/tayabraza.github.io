module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/247propertycare/'
  : '/',
  runtimeCompiler: true,
  lintOnSave: false,
  productionSourceMap: false
}