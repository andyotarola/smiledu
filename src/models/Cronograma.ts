import { model, Schema, Document, Types } from 'mongoose'

export interface ICronograma {
    id_cronograma: number;
    year: number;
}

export interface ICronogramaDocument extends Document, ICronograma {
}

const CronogramaSchema = new Schema({
    id_cronograma: Number,
    year: Number
},{
    versionKey: false
})

export default model<ICronogramaDocument>('Cronograma', CronogramaSchema)

