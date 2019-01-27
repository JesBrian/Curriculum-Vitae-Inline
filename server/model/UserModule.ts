import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import { IUser } from '../interface/IUser'

const UserSchema: Schema = new Schema({
  name: String,
  avatar: String,
  phone: String,
  mail: String,
  c_time: Date,
  l_time: Date,
  status: Boolean
}, {versionKey: false});

export const User: Model<IUser> = model<IUser>('User', UserSchema);
