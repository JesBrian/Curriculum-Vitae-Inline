const Koa = require('koa');
const app = new Koa();

// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
// const devMiddleware = require('./middleware/devMiddleware.js');
// const hotMiddleware = require('./middleware/hotMiddleware.js');
// const compiler = webpack(webpackConfig);
// app.use(devMiddleware(compiler));
// app.use(hotMiddleware(compiler));

const cors = require('koa2-cors');
app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 300,
    credentials: false,
    allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// const historyApiFallback = require('koa2-history-api-fallback');
// app.use(historyApiFallback());

// @ts-ignore
const registerRouter = require('./router/index.js');
app.use(registerRouter());

app.listen(3000, () => {
    console.log('Koa2 API 服务 dev 启动完成 ！');
});
