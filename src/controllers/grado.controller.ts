import { Response, Request } from 'express'

import Grado from '../models/Grado'


export const obtenerGrados = (req:Request, res:Response) => {


    Grado.find((err, grados)=> {

        if(err) return res.json(err)

        res.json(grados)

    })

}