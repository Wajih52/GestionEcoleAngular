import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Absence } from '../model/Absence';

@Injectable({
  providedIn: 'root'
})
export class ServiceAbsenceService {
  navigate(arg0: string[]): ((error: any) => void) | undefined {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  getAbsence() {
    return this.http.get('http://localhost:3000/absences/');
  }


  delAbse(id: number){
    return this.http.get('http://localhost:3000/absences/delete/' + id);
  }
  addAbsence(data: Absence){
    return this.http.post('http://localhost:3000/absences/addAbsence', data);
  }
  updateAbsence(data: Absence){
    return this.http.post('http://localhost:3000/absences/putAbsence', data);
  }
  getAbsencebyid(id: string) {
    return this.http.get<Absence>('http://localhost:3000/absences/abse/' + id);
  }
  exportData(data:any|null){
    return this.http.post('http://localhost:3000/absences/exportdata',data)
  }

}
