import { model, Schema, Document } from 'mongoose'

export interface IGrado {
    _id?:string;
    desc_grado: string;
    nivel: 'PRI' | 'SEC' | 'INI';
}

export interface IGradoDocument extends Document, IGrado {
    _id:string;
}

const GradoSchema = new Schema({
    desc_grado: String,
    nivel: String
},{
    versionKey: false
})

export default model<IGradoDocument>('Grado', GradoSchema)

