import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { classe } from '../model/classe';


@Injectable({
  providedIn: 'root'
})
export class ServiceClasseService {

  constructor(private http:HttpClient) { }
  getClasses(){
    return this.http.get('http://localhost:3000/classe');
  }
  addClasse(data:any){
    return this.http.post('http://localhost:3000/classe/addclasse',data,{responseType: 'text'})
  }
  delClasse(id:any){
    return this.http.delete('http://localhost:3000/classe/delete/'+id,{responseType: 'text'});
  }
  updateClasse(data:any){
    return this.http.post('http://localhost:3000/classe/update/',data)
  }
  getClassebyid(id:any) {
    return this.http.get<classe>('http://localhost:3000/classe/'+id);
  } 
  insertClasse(data:any){
    return this.http.post('http://localhost:3000/classe/Classe',data,{responseType: 'text'})
  }
}