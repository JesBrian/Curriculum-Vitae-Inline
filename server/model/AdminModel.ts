import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IAdmin from '../interface/IAdmin'

const AdminSchema: Schema = new Schema({
  userId: String,
  nickName: String,
  trueName: String,
  roleId: String,
  salt: String,
  password: String,
  cTime: {
    type: Date,
    default: Date
  },
  lTime: {
    type: Date,
    default: Date
  },
  status: {
    type: Boolean,
    default: true
  }
}, {versionKey: false});

const Admin: Model<IAdmin> = model<IAdmin>('Admin', AdminSchema);

export default Admin;
