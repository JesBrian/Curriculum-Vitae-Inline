const {
  getComponentConfCtr,
  saveComponentCtr,
  allComponentListCtr
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
 * 获取组件列表 - 后台管理使用
 */
router.get('/allComponentList', allComponentListCtr);

module.exports = router;
