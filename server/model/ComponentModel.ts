import '../helper/MongodbHelper'

import {Schema, Model, model} from 'mongoose'
import IComponent from '../interface/IComponent'

const ComponentSchema: Schema = new Schema({
  name: String,
  logo: {
    type: String,
    default: ''
  },
  tags: Array,
  conf: Object,
  status: Boolean
}, {versionKey: false});

const Component: Model<IComponent> = model<IComponent>('Component', ComponentSchema);

export default Component;
