import '../helper/MongodbHelper'

import {Schema, Model, model} from 'mongoose'
import IComponent from '../interface/IComponent'

const ComponentSchema: Schema = new Schema({
  name: String,
  logo: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'extend'
  },
  graphics: {
    type: Boolean,
    default: true
  },
  special: String,
  tags: Array,
  conf: Object,
  status: Boolean
}, {versionKey: false});

const Component: Model<IComponent> = model<IComponent>('Component', ComponentSchema);

export default Component;
