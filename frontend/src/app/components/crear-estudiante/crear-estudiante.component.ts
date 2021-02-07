import { Component, ElementRef, OnInit, ViewChild,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Grade } from 'src/app/data/schemas/grade';
import { Person } from 'src/app/data/schemas/person';
import { AddPerson } from 'src/app/store/actions/person.actions';
import { AppState } from 'src/app/store/app.reducer';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.scss']
})
export class CrearEstudianteComponent implements OnInit {

  personForm = new FormGroup({
    
    select : new FormControl('', [
      Validators.required
    ]),

    nombres: new FormControl('', [
      Validators.required
    ]),

    apellido_paterno: new FormControl('', [
      Validators.required

    ]),

    apellido_materno: new FormControl('', [
      Validators.required
    ]),

    nacimiento: new FormControl('', [
      Validators.required
    ]),

    foto: new FormControl(null, [
      Validators.required
    ])
    
    
  })

  grades:Grade[]

  minDate = new Date("1940/01/01")
  maxDate = new Date("2019/01/01")
  preview:any;

  selectedGrade : string = ''

  nacimiento = ''

  showPreview:boolean = false

  @ViewChild('edad') edad:ElementRef;

  constructor(
    private store:Store<AppState>,
    public dialogRef: MatDialogRef<CrearEstudianteComponent>
  ){}

  ngOnInit(): void {
    
    this.store.select('grades')
      .subscribe(data => {
        this.grades = data.grades
      })

  }

  onCreate():void {    
    if(this.personForm.valid){
      const person:Person = {
        grado: this.selectedGrade,
        apellido_materno: this.personForm.controls.apellido_materno.value,
        apellido_paterno: this.personForm.controls.apellido_paterno.value,
        foto: this.personForm.controls.foto.value,
        fecha_nacimiento: this.nacimiento,
        nombres: this.personForm.controls.nombres.value,
        edad: this.edad.nativeElement.value
      }
  
      this.store.dispatch(new AddPerson(person))
  
      this.dialogRef.close()
    }
  }

  onSelectDate():void{
    let mes_select = this.personForm.controls.nacimiento.value._i.month + 1
    let mes_act = new Date().getMonth() + 1

    let year_select = this.personForm.controls.nacimiento.value._i.year
    let year_now  = new Date().getFullYear()
    
    let day = this.personForm.controls.nacimiento.value._i.date

    this.nacimiento = `${day}/${mes_select}/${year_select}`


    let year = year_now - year_select
    
    let mes = 0
    
    if(mes_select > mes_act){
      mes = (12 - mes_select) + mes_act
      year = year - 1

    }else{
      mes = mes_act - mes_select
    }

    let resp_mes = ''

    if(mes === 1){
      resp_mes = 'mes'
    }else{
      resp_mes = 'meses'
    }

    
    this.edad.nativeElement.value = `${year} años y ${mes} ${resp_mes}` 

  }


  onChange(event):void{

    const reader = new FileReader()

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
    
      this.personForm.controls.foto.setValue(file)

      reader.readAsDataURL(file);

      reader.onload = () => {
        
        this.showPreview = true
        this.preview = reader.result
        
      }


    }

  }
}
