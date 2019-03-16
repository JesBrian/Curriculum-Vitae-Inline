const {
  getComponentConfCtr,
  saveComponentCtr,
  allSystemComponentListCtr,
  allExtendComponentListCtr,
  systemComponentListCtr,
  selfComponentListCtr,
  collectionComponentListCtr,
  extendComponentListCtr
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
router.get('/allSystemComponentList', allSystemComponentListCtr);
router.get('/allExtendComponentList', allExtendComponentListCtr);

/**
 * 获取组件列表 - 前台组件使用
 */
router.get('/systemComponentList', systemComponentListCtr);
router.get('/selfComponentList', selfComponentListCtr);
router.get('/collectionComponentList', collectionComponentListCtr);
router.get('/extendComponentList', extendComponentListCtr);

module.exports = router;
