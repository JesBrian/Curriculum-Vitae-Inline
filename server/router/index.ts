const compose = require('koa-compose');
const glob = require('glob');
const { resolve } = require('path');

// @ts-ignore
const registerRouter = () => {
  let routers: any[] = [];
  glob.sync(resolve(__dirname, './', '*.js'))
    .filter((value: { indexOf: (arg0: string) => number; }) => (value.indexOf('index.js') === -1))
    .map((router: string) => {
      routers.push(require(router).routes());
      routers.push(require(router).allowedMethods());
    });
  return compose(routers);
};

module.exports = registerRouter;
