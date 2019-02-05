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
 * 创建新组件
 */
router.put('/createComponent', saveComponentCtr);

/**
 * 更新组件信息
 */
router.put('/updateComponent', saveComponentCtr);

/**
 * 获取组件列表
 */
router.get('/componentList', getComponentListCtr);

module.exports = router;
