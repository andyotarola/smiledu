import { Grade } from "./grade";

export interface Person{
    _id?:string;
    nombres: string;
    apellido_materno: string;
    apellido_paterno: string;
    fecha_nacimiento: string;
    foto: string | File;
    edad: string;
    grado: string;
}