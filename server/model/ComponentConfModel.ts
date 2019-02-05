import '../helper/MongodbHelper'

import {Schema, Model, model} from 'mongoose'
import IComponentConf from '../interface/IComponentConf'

const ComponentConfSchema: Schema = new Schema({
  special: Object,
  format: Object,
  input: Object,
  style: Object
}, {versionKey: false});

const ComponentConf: Model<IComponentConf> = model<IComponentConf>('Component_Conf', ComponentConfSchema);

export default ComponentConf;
