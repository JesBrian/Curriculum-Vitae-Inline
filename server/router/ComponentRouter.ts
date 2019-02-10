const {
  getComponentConfCtr,
  saveComponentCtr,
  getComponentListCtr
} = require('../controller/ComponentController');

// @ts-ignore
const Router = require('koa-router');

// @ts-ignore
const router = new Router();

/**
 * 获取组件基础配置
 */
router.get('/componentConf', getComponentConfCtr);

/**
 * 创建/更新组件
 */
router.put('/saveComponent', saveComponentCtr);

/**
 * 获取组件列表
 */
router.get('/componentList', getComponentListCtr);

module.exports = router;
