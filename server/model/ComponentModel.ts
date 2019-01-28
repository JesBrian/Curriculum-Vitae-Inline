require('../helper/MongodbHelper');

// @ts-ignore
const mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
  name: String,
  logo: String,
  tag: String,
  config: Object,
  cTime: Date,
  pTime: Date,
  status: Boolean
}, {versionKey: false});

const Component = mongoose.model('Admin', ComponentSchema);

const component = new Component({
});

admin.save();
