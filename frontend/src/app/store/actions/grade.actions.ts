import { Grade } from '../../data/schemas/grade'
import { Action } from '@ngrx/store'

export const GET_ALL_GRADES = '[grades] cargando grados ...'
export const GET_ALL_GRADES_SUCCESS = '[grade] grados cargados.'

export class GetAllGrades implements Action{

    readonly type = GET_ALL_GRADES
}

export class GetAllGradesSuccess implements Action{
    readonly type = GET_ALL_GRADES_SUCCESS

    constructor(
        public grades:Grade[]
    ){}
}

export type actions = GetAllGrades | GetAllGradesSuccess
