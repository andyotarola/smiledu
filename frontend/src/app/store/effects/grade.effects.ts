import { Injectable } from '@angular/core'
import { Actions,Effect } from  '@ngrx/effects'
import { ofType } from '@ngrx/effects'
import { map, switchMap } from 'rxjs/operators'

import { GradeService } from '../../data/services/grade.service'
import * as fromGrade from '../actions/grade.actions'


@Injectable()
export class GradeEfeect {

    constructor(
        public actions$:Actions,
        public gradeService: GradeService
    ){}


    @Effect()
    LoadingPersons = this.actions$.pipe(
        ofType(fromGrade.GET_ALL_GRADES),
        switchMap(() => {

            return this.gradeService.getAllGrades()
                .pipe(
                    map(grades => {
                        return new fromGrade.GetAllGradesSuccess(grades)
                    })
                )

        })
    )
}
