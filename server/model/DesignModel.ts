import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IDesign from '../interface/IDesign'

const DesignSchema: Schema = new Schema({
  name: String,
  logo: String,
  author: String,
  tags: Array,
  size: Array,
  cell: Array,
  cTime: {
    type: Date,
    default: Date
  },
  pTime: {
    type: Date,
    default: Date
  },
  status: Boolean
}, {versionKey: false});

const Design: Model<IDesign> = model<IDesign>('Design', DesignSchema);

export default Design;
