import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import  { environment } from 'src/environments/environment'
import  { Grade } from '../schemas/grade'

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(
    private http$:HttpClient
  ){}

  getAllGrades(): Observable<Grade[]>{
    return this.http$.get<Grade[]>(`${environment.API_URL}/grado`)
  }

}
