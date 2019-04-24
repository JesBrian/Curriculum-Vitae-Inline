import '../helper/MongodbHelper'

import {Schema, Model, model} from 'mongoose'
import IFormatLog from '../interface/IFormatLog'

const FormatLogSchema: Schema = new Schema({
  FormatId: String,
  userId: String,
  time: {
    type: Date,
    default: Date
  }
}, {versionKey: false});

const FormatLog: Model<IFormatLog> = model<IFormatLog>('FormatLog', FormatLogSchema);

export default FormatLog;
