import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import { IUser } from '../interface/IUser'

const UserSchema: Schema = new Schema({
  name: String,
  avatar: String,
  phone: String,
  mail: String,
  cTime: Date,
  lTime: Date,
  status: Boolean
}, {versionKey: false});

const User: Model<IUser> = model<IUser>('User', UserSchema);

export default User;
