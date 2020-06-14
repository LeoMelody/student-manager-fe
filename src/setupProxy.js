const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:7070/',
    changeOrigin: true,
    // 这里一定要写pathRewrite 
    pathRewrite(path) {
      return path.replace('/api', '/')
    }
  }));
};