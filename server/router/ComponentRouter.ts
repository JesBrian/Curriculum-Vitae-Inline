const {
  getComponentConfCtr,
  saveComponentCtr,
  allSystemComponentListCtr,
  allExtendComponentListCtr
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
 * 获取系统设置组件列表 - 后台管理使用
 */
router.get('/allSystemComponentList', allSystemComponentListCtr);

router.get('/allExtendComponentList', allExtendComponentListCtr);

module.exports = router;
