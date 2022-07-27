import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Absence } from '../model/Absence';
@Injectable({
  providedIn: 'root'
})
export class AfficherAbsenceFrontService {
  navigate(arg0: string[]): ((error: any) => void) | undefined {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { 

  }
  getAbs() {
    return this.http.get('http://localhost:3000/absences/');
  }
}
