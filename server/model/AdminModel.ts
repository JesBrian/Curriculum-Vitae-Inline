require('../helper/MongodbHelper');

// @ts-ignore
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  userId: String,
  trueName: String,
  cTime: Date,
  lTime: Date,
  status: Boolean
}, {versionKey: false});

const Admin = mongoose.model('Admin', AdminSchema);

const admin = new Admin({
  userId: '',
  trueName: '超级管理员',
  cTime: new Date(),
  lTime: new Date(),
  status: true
});

admin.save();
