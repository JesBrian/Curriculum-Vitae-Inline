const Koa = require('koa');
const registerRouter = require('./router/index.js');

// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
// const devMiddleware = require('./middleware/devMiddleware.js');
// const hotMiddleware = require('./middleware/hotMiddleware.js');
// const compiler = webpack(webpackConfig);

const app = new Koa();
// app.use(devMiddleware(compiler));
// app.use(hotMiddleware(compiler));

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  next();
});

app.use(registerRouter());
app.listen(3000);
