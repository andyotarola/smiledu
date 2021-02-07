import { Request, Response } from 'express'

import Persona, { IPersona } from '../models/Persona';
import Movimiento, { IMovimiento } from '../models/Movimiento';
import Grado, { IGrado } from '../models/Grado'

export const agregarPersona = (req: Request, res:Response) => {

    const split_path = req.file.path.split("\\")
    const foto = "assets/estudiantes/"+split_path[split_path.length - 1]


    const agregarPersona:IPersona  = {
        grado: req.body.grado,
        apellido_materno: req.body.apellido_materno,
        apellido_paterno: req.body.apellido_paterno,
        fecha_nacimiento: req.body.fecha_nacimiento,
        edad: req.body.edad,
        foto,
        nombres: req.body.nombres
    }

    Persona.create({...agregarPersona},async(err:any, persona)=> {

        if(err) return res.json(err)

        await Grado.findById(req.body.grado, (error:any, grado:IGrado)=> {

            let monto = 0

            if(grado.nivel ===  'INI'){
                monto = 300
            }else if(grado.nivel === 'PRI'){
                monto = 450
            }else if(grado.nivel === 'SEC'){
                monto = 540
            }

            const pagos = [
                'MATRICULA', 
                'MARZO', 
                'ABRIL', 
                'MAYO', 
                'JUNIO', 
                'JULIO', 
                'AGOSTO', 
                'SEPTIEMBRE',
                'OCTUBRE',
                'NOVIEMBRE',
                'DICIEMBRE'
            ]

            let movimientos:IMovimiento[] = [];

            pagos.forEach((pago)=>{
                movimientos.push(
                    {
                        monto,
                        tipo_movimiento: 'INGRESO',
                        estado: 'POR PAGAR',
                        id_detalle_cronograma: pago,
                        id_persona: persona._id,
                        fecha_pago: ''
                    },
                )
            })

            
            Movimiento.insertMany(movimientos)

            res.json({  
                _id: persona._id,
                nombres: persona.nombres,
                grado,
                apellido_materno: persona.apellido_materno,
                apellido_paterno: persona.apellido_paterno,
                fecha_nacimiento: persona.fecha_nacimiento,
                foto: persona.foto,
                edad: persona.edad
            })

        })

    })

}

export const obtenerPersonas = (req:Request, res:Response)=> {

    Persona.find({},{},{populate: 'grado'},(err, data)=> {
        
        if(err) return res.json(err)

        res.json(data)
    })

}

export const quitarPersona = (req:Request, res:Response) => {

    const _id = req.params._id

    Persona.deleteOne({_id},{},(err:any)=> {
        if(err) return res.json(err)

        res.json(_id)

    })


}