const Koa = require('koa');
const app = new Koa();

// CorsMiddleware
const corsMiddleware = require('./middleware/CorsMiddleware');
app.use(corsMiddleware);

// const historyApiFallback = require('koa2-history-api-fallback');
// app.use(historyApiFallback());

// @ts-ignore
const registerRouter = require('./router/index.js');
app.use(registerRouter());

app.listen(3000, () => {
    console.log('Koa2 API 服务 dev 启动完成 ！\r\n');
});
