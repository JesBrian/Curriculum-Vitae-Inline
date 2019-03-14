import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import ICollection from '../interface/ICollection'

const CollectionSchema: Schema = new Schema({
  userId: String,
  componentId: String,
  time: {
    type: Date,
    default: Date
  }
}, {versionKey: false});

const Collection: Model<ICollection> = model<ICollection>('Collection', CollectionSchema);

export default Collection;
