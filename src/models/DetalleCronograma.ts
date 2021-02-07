import { model, Schema, Types, Document } from 'mongoose'

export interface IDetalleCronograma {
    id_detalle_cronograma: number;
    pago: string;
    fecha_vencimiento: string;

}

export interface IDetalleCronogramaDocument extends Document, IDetalleCronograma {
}

const DetalleCronogramaSchema = new Schema({
    id_detalle_cronograma: Number,
    pago: String,
    fecha_vencimiento: String
},{
    versionKey: false
})

export default model<IDetalleCronogramaDocument>('DetalleCronograma', DetalleCronogramaSchema)

