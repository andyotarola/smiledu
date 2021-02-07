import { registerLocaleData } from '@angular/common';
import { Person } from '../../data/schemas/person';
import * as fromPerson from '../actions/person.actions'

export interface PersonState {
    loading: boolean,
    loaded: boolean,
    persons: Person[],
    loadingAction: boolean;
}

const initialState:PersonState = {
    loaded: false,
    loading: false,
    persons: [],
    loadingAction: false
}

export const personReducer = (state = initialState, action:fromPerson.actions):PersonState => {

    switch(action.type){
        
        case fromPerson.GET_PERSONS:
            return  {
                loaded: false,
                loading: true,
                loadingAction: false,
                persons: []
            }

        case fromPerson.GET_PERSONS_SUCCESS:
            return {
                loaded: true,
                loading: false,
                loadingAction: false,
                persons: [...action.persons]
            }

        case fromPerson.ADD_PERSON: 
            return {
                ...state,
                loadingAction: true
            }
        
        case fromPerson.ADD_PERSON_SUCCESS:
            return {
                ...state,
                loadingAction: false,
                persons: [...state.persons, {...action.person}]
            }
        
        case fromPerson.REMOVE_PERSON:
            return {
                ...state,
                loadingAction: true,
            }

        case fromPerson.REMOVE_PERSON_SUCCESS:
            return  {
                ...state,
                loadingAction: false,
                persons: [...state.persons.filter(person => person._id !== action._id)]
            }

        default:
            return state
    }

}