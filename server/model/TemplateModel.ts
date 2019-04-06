import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import ITemplate from '../interface/ITemplate'

const TemplateSchema: Schema = new Schema({
  name: String,
  logo: String,
  formatId: String,
  author: String,
  tags: Array,
  bg: String,
  cell: Array,
  system: Boolean,
  status: {
    type: Boolean,
    default: true
  },
}, {versionKey: false});

const Template: Model<ITemplate> = model<ITemplate>('Template', TemplateSchema);

export default Template;
