
const Koa = require('koa');
const app = new Koa();
const registerRouter = require('./Router/index.js');

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
  next();
});

app.use(registerRouter())

app.listen(3000);
