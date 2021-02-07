import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Grade } from './data/schemas/grade'
import { GetAllGrades } from './store/actions/grade.actions';
import { GetPersons } from './store/actions/person.actions';
import { AppState } from './store/app.reducer';
// import { GradeService } from './data/services/grade.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'smiledu';

  grades:Grade[]


  constructor(
    private store:Store<AppState>
  ){}

  ngOnInit():void{

    this.store.dispatch(new GetAllGrades)

    this.store.dispatch(new GetPersons())

  }

}
