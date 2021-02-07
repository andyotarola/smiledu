import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/app/data/schemas/person';

@Pipe({
  name: 'filterPersonas'
})
export class FilterPipe implements PipeTransform {

  transform(persons: Person[], filter): Person[] {

    let filterPersonas:Person[];

    if(persons !== null && filter){

      filterPersonas =  persons.filter(person => this._normalizeValue(person.nombres+" "+person.apellido_paterno).indexOf(this._normalizeValue(filter)) !== -1)

      return filterPersonas

    }else{
      return persons
    }

  }

  _normalizeValue(value:string){
    return value.toLowerCase()
  }

}
