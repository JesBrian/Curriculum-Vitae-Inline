import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IUser from '../interface/IUser'

const UserSchema: Schema = new Schema({
  name: String,
  avatar: {
    type: String,
    default: ''
  },
  mail: String,
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

const User: Model<IUser> = model<IUser>('User', UserSchema);

export default User;
