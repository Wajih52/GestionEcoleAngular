import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { matiere } from '../model/matiere';

@Injectable({
  providedIn: 'root'
})
export class ServiceMatiereService {

  constructor(private http:HttpClient) { }
  getMatieres(){
    return this.http.get('http://localhost:3000/matiere');
  }
  addMatiere(data:any){
    return this.http.post('http://localhost:3000/matiere/addmatiere',data,{responseType: 'text'})
  }
  delMatiere(id:any){
    return this.http.delete('http://localhost:3000/matiere/delete/'+id,{responseType: 'text'});
  }
  updateMatiere(data:any){
    return this.http.post('http://localhost:3000/matiere/update/',data)
  }
  getMatierebyid(id:any) {
    return this.http.get<matiere>('http://localhost:3000/matiere/'+id);
  } 
  insertMatiere(data:any){
    return this.http.post('http://localhost:3000/matiere/Matiere',data,{responseType: 'text'})
  }
}
