import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IRole from '../interface/IRole'

const RoleSchema: Schema = new Schema({
  name: String,
  powers: Array,
  cTime: {
    type: Date,
    default: Date
  },
  status: {
    type: Boolean,
    default: true
  }
}, {versionKey: false});

const Role: Model<IRole> = model<IRole>('Role', RoleSchema);

export default Role;
