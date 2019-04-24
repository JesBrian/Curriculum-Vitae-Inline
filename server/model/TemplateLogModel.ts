import '../helper/MongodbHelper'

import {Schema, Model, model} from 'mongoose'
import ITemplateLog from '../interface/ITemplateLog'

const TemplateLogSchema: Schema = new Schema({
  TemplateId: String,
  userId: String,
  time: {
    type: Date,
    default: Date
  }
}, {versionKey: false});

const TemplateLog: Model<ITemplateLog> = model<ITemplateLog>('TemplateLog', TemplateLogSchema);

export default TemplateLog;
