require('../helper/MongodbHelper');

// @ts-ignore
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  phone: String,
  mail: String,
  c_time: Date,
  l_time: Date,
  status: Boolean
}, {versionKey: false});

const User = mongoose.model('User', UserSchema);

const user = new User({
  name: 'SuperAdmin',
  avatar: '',
  phone: '10000000000',
  mail: 'superadmin@gmail.com',
  c_time: new Date(),
  l_time: new Date(),
  status: true
});

user.save();
