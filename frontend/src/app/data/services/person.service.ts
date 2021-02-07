import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Person } from '../schemas/person'
import  { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http$:HttpClient
  ){}

  getPersons(): Observable<Person[]>{
    
    return this.http$.get<Person[]>(`${environment.API_URL}/persona`)

  }


  addPerson(data: Person): Observable<Person>{

    const formData = new FormData()

    formData.append('nombres', data.nombres)
    formData.append('apellido_materno', data.apellido_materno)
    formData.append('apellido_paterno', data.apellido_paterno)
    formData.append('foto', data.foto)
    formData.append('fecha_nacimiento', data.fecha_nacimiento)
    formData.append('grado', data.grado)
    formData.append('edad', data.edad)


    return this.http$.post<Person>(`${environment.API_URL}/persona`, formData)

  }


  removePerson(_id:string): Observable<string>{
    return this.http$.delete<string>(`${environment.API_URL}/persona/${_id}`)
  }

}
