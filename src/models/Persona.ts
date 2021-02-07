import { model, Schema, Document, Types } from 'mongoose'
import { IGrado } from './Grado'

export interface IPersona {
    _id?:string;
    nombres: string;
    apellido_materno: string;
    apellido_paterno: string;
    fecha_nacimiento: string;
    foto: string;
    edad: string;
    grado: IGrado
}

export interface IPersonaDocument extends Document, IPersona {
    _id:string;
}

const PersonaSchema = new Schema({
    nombres: String,
    apellido_materno: String,
    apellido_paterno: String,
    fecha_nacimiento: String,
    foto: String,
    edad: String,
    grado: {
        type: Types.ObjectId,
        ref: 'Grado'
    }
},{
    versionKey: false,
}) 

export default model<IPersonaDocument>('Persona', PersonaSchema)
