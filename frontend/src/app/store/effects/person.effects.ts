import { Injectable } from '@angular/core'
import { Actions,Effect } from  '@ngrx/effects'
import { ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'

import { PersonService } from '../../data/services/person.service'
import * as fromPerson from '../actions/person.actions'


@Injectable()
export class PersonEfeect {

    constructor(
        public actions$:Actions,
        public personService: PersonService,
    ){}


    @Effect()
    LoadingPersons = this.actions$.pipe(
        ofType(fromPerson.GET_PERSONS),
        switchMap(() => {

            return this.personService.getPersons()
                .pipe(
                    map(persons => {
                        return new fromPerson.GetPersonsSuccess(persons)
                    })
                )

        })
    )

    @Effect()
    CreatePerson = this.actions$.pipe(
        ofType<fromPerson.AddPerson>(fromPerson.ADD_PERSON),
        switchMap((action) => {
            return this.personService.addPerson(action.person)
                .pipe(
                    map(person => {

                        return new fromPerson.AddPersonSuccess(person)
                    }),
                    catchError(err => {
                        return of(err)
                    })
                )
        })

    )

    @Effect()
    RemovePerson$ =  this.actions$.pipe(
        ofType<fromPerson.RemovePerson>(fromPerson.REMOVE_PERSON),
        switchMap((action)=> {

            return this.personService.removePerson(action._id)
                .pipe(
                    map((_id) => {
                        return new fromPerson.RemovePersonSuccess(_id)
                    })
                )

        })
    )

}
