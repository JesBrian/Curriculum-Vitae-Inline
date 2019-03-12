import '../helper/MongodbHelper'

import { Schema, Model, model } from 'mongoose'
import IDesign from '../interface/IDesign'

const DesignSchema: Schema = new Schema({
}, {versionKey: false});

const Design: Model<IDesign> = model<IDesign>('Design', DesignSchema);

export default Design;
