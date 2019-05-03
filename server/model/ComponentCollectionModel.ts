import '../helper/MongodbHelper'

import {Schema, Model, model} from 'mongoose'
import IComponentCollection from '../interface/IComponentCollection'

const ComponentCollectionSchema: Schema = new Schema({
  componentId: String,
  userId: String,
  time: {
    type: Date,
    default: Date
  }
}, {versionKey: false});

const ComponentCollection: Model<IComponentCollection> = model<IComponentCollection>('ComponentCollection', ComponentCollectionSchema);

export default ComponentCollection;
