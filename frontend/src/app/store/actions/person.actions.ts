import  { Action } from '@ngrx/store'
import { Person } from '../../data/schemas/person'

export const GET_PERSONS = '[persona] cargando persona ...'
export const GET_PERSONS_SUCCESS = '[persona] personas cargadas.'

export const ADD_PERSON  = '[persona] agregando persona ...'
export const ADD_PERSON_SUCCESS = '[persona] persona agregada'

export const REMOVE_PERSON =  '[persona] eliminando persona ...'

export const REMOVE_PERSON_SUCCESS = '[persona] persona eliminada'

export class GetPersons implements Action {

    readonly type = GET_PERSONS

}

export class GetPersonsSuccess implements Action{

    readonly type = GET_PERSONS_SUCCESS

    constructor(
        public persons:Person[]
    ){}

}

export class AddPerson implements Action{ 
    readonly type  = ADD_PERSON

    constructor(public person:Person){}
}


export class AddPersonSuccess implements Action {
    readonly type = ADD_PERSON_SUCCESS

    constructor(public person:Person){}
}

export class RemovePerson implements Action{ 

    readonly type = REMOVE_PERSON

    constructor(public _id:string){}

}


export class RemovePersonSuccess implements Action{
    readonly type = REMOVE_PERSON_SUCCESS

    constructor(public _id:string){}
}

export type actions = GetPersons | GetPersonsSuccess |  AddPerson | AddPersonSuccess | RemovePerson | RemovePersonSuccess;