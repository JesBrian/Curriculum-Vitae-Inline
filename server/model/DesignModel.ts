import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IDesign from '../interface/IDesign'

const DesignSchema: Schema = new Schema({
  name: String,
  logo: String,
  author: String,
  tags: Array,
  bg: String,
  size: Array,
  cell: Array,
  cTime: {
    type: Date,
    default: Date
  },
  mTime: {
    type: Date,
    default: Date
  },
  status: {
    type: Boolean,
    default: true
  },
}, {versionKey: false});

const Design: Model<IDesign> = model<IDesign>('Design', DesignSchema);

export default Design;
