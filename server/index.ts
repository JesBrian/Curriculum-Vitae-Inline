const Koa = require('koa');
// @ts-ignore
const registerRouter = require('./router/index.js');
// const historyApiFallback = require('koa2-history-api-fallback');

// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
// const devMiddleware = require('./middleware/devMiddleware.js');
// const hotMiddleware = require('./middleware/hotMiddleware.js');
// const compiler = webpack(webpackConfig);

const app = new Koa();
// app.use(devMiddleware(compiler));
// app.use(hotMiddleware(compiler));

app.use(async (ctx: any, next: any) => {
    ctx.body = '';
    next();
});

// app.use(historyApiFallback());
app.use(registerRouter());

app.listen(3000, () => {
    console.log('Koa2 API 服务 dev 启动完成 ！');
});
