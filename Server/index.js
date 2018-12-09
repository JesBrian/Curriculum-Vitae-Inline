const Koa = require('koa');
// const serve = require('koa-static');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
// const registerRouter = require('./router/index.js');
// const devMiddleware = require('./middleware/devMiddleware.js');
// const hotMiddleware = require('./middleware/hotMiddleware.js');

const app = new Koa();

// const compiler = webpack(webpackConfig);
// app.use(devMiddleware(compiler));
// app.use(hotMiddleware(compiler));

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  next();
});

app.use(registerRouter())
// app.use(serve(__dirname + "/dist/", {extensions: ['html']}));
app.listen(3000);
