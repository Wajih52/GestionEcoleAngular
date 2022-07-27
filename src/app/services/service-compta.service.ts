import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { compta } from '../model/compta';

@Injectable({
  providedIn: 'root'
})
export class ServiceComptaService {

  constructor(private http:HttpClient) { }
  getCompta(){
    return this.http.get('http://localhost:3000/compta/compta')
  }
  addCompta(data:any){
    return this.http.post('http://localhost:3000/compta/addCompta',data,{responseType: 'text'})
  }
  delCompta(id:any){
    return this.http.delete('http://localhost:3000/compta/deleteCompta/'+id,{responseType: 'text'})
  }
  updateCompta(data:any){
    return this.http.post('http://localhost:3000/compta/updateCompta',data,{responseType: 'text'})
  }
  getComptabyid(id:any) {
    return this.http.get<compta>('http://localhost:3000/compta/compta/'+id);
  } 
  getSumCompta(){
    return this.http.get('http://localhost:3000/compta/compta/sum')
  }
  importData(data : any|null){
    return this.http.post('http://localhost:3000/compta/importdata',data)
  }
  exportData(data : any|null){
    return this.http.post('http://localhost:3000/compta/exportdata',data)
  }
  insertCompta(data:any){
    return this.http.post('http://localhost:3000/compta/inserlistetAchat',data,{responseType: 'text'})
  }
}