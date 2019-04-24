import '../helper/MongodbHelper'

import {Schema, Model, model} from 'mongoose'
import IComponentLog from '../interface/IComponentLog'

const ComponentLogSchema: Schema = new Schema({
  componentId: String,
  userId: String,
  time: {
    type: Date,
    default: Date
  }
}, {versionKey: false});

const ComponentLog: Model<IComponentLog> = model<IComponentLog>('ComponentLog', ComponentLogSchema);

export default ComponentLog;
