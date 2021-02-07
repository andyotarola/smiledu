import { model, Schema, Types, Document } from 'mongoose'

export interface IMovimiento {
    _id?:string;
    tipo_movimiento: 'INGRESO' | 'EGRESO';
    monto: number;
    estado: 'POR PAGAR' | 'PAGADO' | 'VENCIDO' | 'ANULADO';
    fecha_pago?: String;
    id_persona: string;
    id_detalle_cronograma: string;
}

export interface IMovimientoDocument extends Document, IMovimiento {
    _id?:string;
}

const MovimientoSchema = new Schema({
    tipo_movimiento: String,
    monto: Number,
    estado: String,
    fecha_pago: String,
    id_persona: Types.ObjectId,
    id_detalle_cronograma: String

},{
    versionKey: false
})

export default model<IMovimientoDocument>('Movimiento', MovimientoSchema)

