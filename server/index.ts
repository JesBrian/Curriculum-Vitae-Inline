const Koa = require('koa');
const app = new Koa();

// CorsMiddleware - 跨域
const corsMiddleware = require('./middleware/CorsMiddleware');
app.use(corsMiddleware);

// FormDataMiddleware - 表单参数
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// const historyApiFallback = require('koa2-history-api-fallback');
// app.use(historyApiFallback());

// 注册路由
const registerRouter = require('./router/index.js');
app.use(registerRouter());

// ResponseMiddleware - 请求响应
// const responseMiddleware = require('./middleware/ResponseMiddleware');
// app.use(responseMiddleware);

app.listen(3000, () => {
    console.log('Koa2 API 服务 dev 启动完成 ！\r\n');
});
