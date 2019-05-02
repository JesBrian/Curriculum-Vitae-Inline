import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IPower from '../interface/IPower'

const PowerSchema: Schema = new Schema({
  name: String,
  route: String,
  parent: String,
  cTime: {
    type: Date,
    default: Date
  },
  status: {
    type: Boolean,
    default: true
  }
}, {versionKey: false});

const Power: Model<IPower> = model<IPower>('Power', PowerSchema);

export default Power;
