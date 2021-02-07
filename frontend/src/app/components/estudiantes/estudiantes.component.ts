import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Store } from '@ngrx/store';
import { Person } from 'src/app/data/schemas/person';
import { RemovePerson } from 'src/app/store/actions/person.actions';
import { AppState } from 'src/app/store/app.reducer';
import { CrearEstudianteComponent } from '../crear-estudiante/crear-estudiante.component'
import { ConfirmRemoveComponent } from '../confirm-remove/confirm-remove.component'

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {

  persons:Person[]

  constructor(
    public dialog:MatDialog,
    public store:Store<AppState>
  ){}

  ngOnInit(): void {

    this.store.select('persons')
      .subscribe(data => {
        this.persons = data.persons
      })

  }


  openDialog(): void{
    this.dialog.open(CrearEstudianteComponent, {disableClose: true})
  }

  onRemovePerson(_id:string): void{

    const dialogRef = this.dialog.open(ConfirmRemoveComponent, {disableClose: true})

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.store.dispatch(new RemovePerson(_id))
      }
    })


  }

}
