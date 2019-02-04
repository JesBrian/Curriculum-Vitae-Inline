import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IFormat from '../interface/IFormat'

const FormatSchema: Schema = new Schema({
  name: String,
  logo: String,
  size: Array,
  cTime: Date,
  status: Boolean
}, {versionKey: false});

const Format: Model<IFormat> = model<IFormat>('Format', FormatSchema);

export default Format;
