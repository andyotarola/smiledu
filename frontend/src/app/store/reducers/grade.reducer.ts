import { Grade } from '../../data/schemas/grade';
import * as fromGrade from '../actions/grade.actions';

export interface GradeState {
    grades: Grade[],
    loading:boolean,
    loaded: boolean
}

const initialState:GradeState = {
    grades: [],
    loaded: false,
    loading: false
}

export const gradeReducer = (state = initialState, action:fromGrade.actions):GradeState => {

    switch(action.type){

        case fromGrade.GET_ALL_GRADES:
            return {
                grades:[],
                loaded: false,
                loading: true
            }

        case fromGrade.GET_ALL_GRADES_SUCCESS:
            return {
                loading: false,
                loaded: true,
                grades: [...action.grades]
            }

        default:
            return state

    }

}
