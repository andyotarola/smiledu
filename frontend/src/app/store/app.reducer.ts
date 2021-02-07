import  { ActionReducerMap } from '@ngrx/store'
import * as fromPerson from './reducers/person.reducer'
import * as fromGrade from './reducers/grade.reducer'

export interface AppState {

    persons: fromPerson.PersonState,
    grades: fromGrade.GradeState

}

export const appReducer:ActionReducerMap<AppState> = {
    persons: fromPerson.personReducer,
    grades: fromGrade.gradeReducer
}