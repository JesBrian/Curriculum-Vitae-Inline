require('../helper/MongodbHelper');

// @ts-ignore
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  user_id: String,
  true_name: String,
  c_time: Date,
  l_time: Date,
  status: Boolean
}, {versionKey: false});

const Admin = mongoose.model('Admin', AdminSchema);

const admin = new Admin({
  user_id: '',
  true_name: '超级管理员',
  c_time: new Date(),
  l_time: new Date(),
  status: true
});

admin.save();
