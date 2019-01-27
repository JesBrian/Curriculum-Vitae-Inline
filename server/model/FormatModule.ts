require('../helper/MongodbHelper');

// @ts-ignore
const mongoose = require('mongoose');

const FormatSchema = new mongoose.Schema({
  name: String,
  size: [Number, Number]
}, {versionKey: false});

const Format = mongoose.model('Format', FormatSchema);

Format.find((err: any, res: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});

