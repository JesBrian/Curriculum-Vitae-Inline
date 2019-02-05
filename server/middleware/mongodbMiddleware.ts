/**
 * mongoose操作类(封装mongodb)
 */

const fs = require('fs');
const path = require('path');
// @ts-ignore
const mongoose = require('mongoose');
const logger = require('pomelo-logger').getLogger('mongodb-log');

// @ts-ignore
const DB_CONF = require('mongodb.conf.json');
const DB_URL = "mongodb://" + DB_CONF.USER + ":" + DB_CONF.PASSWORD + "@" + DB_CONF.HOST + ":" + DB_CONF.PORT + "/" + DB_CONF.DB_NAME;

mongoose.connect(DB_URL);

mongoose.connection.on('connected', (err: any) => {
  if (err) logger.error('Database connection failure');
});

mongoose.connection.on('error', (err: string) => {
  logger.error('Mongoose connected error ' + err);
});

mongoose.connection.on('disconnected', () => {
  logger.error('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    logger.info('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

class DB {
  private mongoClient: any;
  private tabConf: any;
  private readonly filename: any;

  constructor () {
    this.mongoClient = {};
    this.filename = path.join(path.dirname(__dirname).replace('app', ''), 'config/table.json');
    this.tabConf = JSON.parse(fs.readFileSync(path.normalize(this.filename)));
  }

  /**
   * 初始化mongoose model
   * @param table_name 表名称(集合名称)
   */
  getConnection (table_name: string | number) {
    if (!table_name) return;
    if (!this.tabConf[table_name]) {
      logger.error('No table structure');
      return false;
    }
    let client = this.mongoClient[table_name];
    if (!client) {
      //构建用户信息表结构
      let nodeSchema = new mongoose.Schema(this.tabConf[table_name]);
      //构建model
      client = mongoose.model(table_name, nodeSchema, table_name);
      this.mongoClient[table_name] = client;
    }
    return client;
  }

  /**
   * 保存数据
   * @param table_name 表名
   * @param fields 表数据
   * @param callback 回调方法
   */
  save (table_name: string | number, fields: any, callback: { (arg0: { msg: string; }): void; (arg0: { msg: string; }): void; (arg0: any): void; (arg0: any, arg1: any): void; }) {
    if (!fields) {
      if (callback) callback({msg: 'Field is not allowed for null'});
      return false;
    }
    let err_num = 0;
    for (let i in fields) {
      if (!this.tabConf[table_name][i]) err_num ++;
    }
    if (err_num > 0) {
      if (callback) callback({msg: 'Wrong field name'});
      return false;
    }
    let node_model = this.getConnection(table_name);
    let mongooseEntity = new node_model(fields);
    mongooseEntity.save((err: any, res: any) => {
      if (err) {
        if (callback) callback(err);
      } else {
        if (callback) callback(null, res);
      }
    });
  }

  /**
   * 更新数据
   * @param table_name 表名
   * @param conditions 更新需要的条件 {_id: id, user_name: name}
   * @param update_fields 要更新的字段 {age: 21, sex: 1}
   * @param callback 回调方法
   */
  update (table_name: any, conditions: any, update_fields: any, callback: { (arg0: { msg: string; }): void; (arg0: any): void; (arg0: any, arg1: any): void; }) {
    if (!update_fields || !conditions) {
      if (callback) callback({msg: 'Parameter error'});
      return;
    }
    let node_model = this.getConnection(table_name);
    node_model.update(conditions, {$set: update_fields}, {multi: true, upsert: true}, (err: any, res: any) => {
      if (err) {
        if (callback) callback(err);
      } else {
        if (callback) callback(null, res);
      }
    });
  }

  /**
   * 更新数据方法(带操作符的)
   * @param table_name 数据表名
   * @param conditions 更新条件 {_id: id, user_name: name}
   * @param update_fields 更新的操作符 {$set: {id: 123}}
   * @param callback 回调方法
   */
  updateData (table_name: any, conditions: any, update_fields: any, callback: { (arg0: { msg: string; }): void; (arg0: any, arg1: any): void; }) {
    if (!update_fields || !conditions) {
      if (callback) callback({msg: 'Parameter error'});
      return;
    }
    let node_model = this.getConnection(table_name);
    node_model.findOneAndUpdate(conditions, update_fields, {multi: true, upsert: true}, (err: any, data: any) => {
      if (callback) callback(err, data);
    });
  }

  /**
   * 删除数据
   * @param table_name 表名
   * @param conditions 删除需要的条件 {_id: id}
   * @param callback 回调方法
   */
  remove (table_name: any, conditions: any, callback: { (arg0: any): void; (arg0: any, arg1: any): void; }) {
    let node_model = this.getConnection(table_name);
    node_model.remove(conditions, (err: any, res: any) => {
      if (err) {
        if (callback) callback(err);
      } else {
        if (callback) callback(null, res);
      }
    });
  }

  /**
   * 查询数据
   * @param table_name 表名
   * @param conditions 查询条件
   * @param fields 待返回字段
   * @param callback 回调方法
   */
  find (table_name: any, conditions: any, fields: any, callback: { (arg0: any): void; (arg0: any, arg1: any): void; }) {
    let node_model = this.getConnection(table_name);
    node_model.find(conditions, fields || null, {}, (err: any, res: any) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }

  /**
   * 查询单条数据
   * @param table_name 表名
   * @param conditions 查询条件
   * @param callback 回调方法
   */
  findOne (table_name: any, conditions: any, callback: { (arg0: any): void; (arg0: any, arg1: any): void; }) {
    let node_model = this.getConnection(table_name);
    node_model.findOne(conditions, (err: any, res: any) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }

  /**
   * 根据_id查询指定的数据
   * @param table_name 表名
   * @param _id 可以是字符串或 ObjectId 对象。
   * @param callback 回调方法
   */
  findById (table_name: any, _id: any, callback: { (arg0: any): void; (arg0: any, arg1: any): void; }) {
    let node_model = this.getConnection(table_name);
    node_model.findById(_id, (err: any, res: any) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }

  /**
   * 返回符合条件的文档数
   * @param table_name 表名
   * @param conditions 查询条件
   * @param callback 回调方法
   */
  count (table_name: any, conditions: any, callback: { (arg0: any): void; (arg0: any, arg1: any): void; }) {
    let node_model = this.getConnection(table_name);
    node_model.count(conditions, (err: any, res: any) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }

  /**
   * 查询符合条件的文档并返回根据键分组的结果
   * @param table_name 表名
   * @param field 待返回的键值
   * @param conditions 查询条件
   * @param callback 回调方法
   */
  distinct (table_name: any, field: any, conditions: any, callback: { (arg0: any): void; (arg0: any, arg1: any): void; }) {
    let node_model = this.getConnection(table_name);
    node_model.distinct(field, conditions, (err: any, res: any) => {
      if (err) {
        callback(err);
      } else {
        callback(null, res);
      }
    });
  }

  /**
   * 连写查询
   * @param table_name 表名
   * @param conditions 查询条件 {a:1, b:2}
   * @param options 选项：{fields: "a b c", sort: {time: -1}, limit: 10}
   * @param callback 回调方法
   */
  where (table_name: any, conditions: any, options: { fields: any; sort: any; limit: any; }, callback: { (arg0: any): void; (arg0: any, arg1: any): void; }) {
    let node_model = this.getConnection(table_name);
    node_model.find(conditions)
      .select(options.fields || '')
      .sort(options.sort || {})
      .limit(options.limit || {})
      .exec((err: any, res: any) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      });
  }
}

// @ts-ignore
module.exports = new DB();
