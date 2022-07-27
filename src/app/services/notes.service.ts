import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})

export class notesService {
  
  constructor(private http:HttpClient) { }
  getnotes() {
    return this.http.get('http://localhost:3000/notes/afficher')
  }

  adddnotes(data:any) {
    return this.http.post('http://localhost:3000/notes/add', data)
  }
  delnotes(id:any) {
    return this.http.delete('http://localhost:3000/notes/delete/'+id)
  }
  updatenotes(data:any) {
    return this.http.post('http://localhost:3000/notes/putform/',data);
  }
  getnotebyid(id:any) {
    return this.http.get<Note>('http://localhost:3000/notes/details/'+id);
  }
  bulkInsert(notes : any){
    
      return this.http.post<any>("http://localhost:3000/notes/bulkinsertnotes", notes );
  }
  getmoyennebyMatiere(matiere:any,etudiant:any,data:any){
    return this.http.post<any>("http://localhost:3000/notes/find/"+matiere+"/"+etudiant, data );

  }
  sendemail(data:string){
    return this.http.post<any>("http://localhost:3000/send-email",{data:data});
  }
  listbyMatiere(matiere:any,data:any){
    return this.http.post<any>("http://localhost:3000/notes/rechmatiere/"+matiere, data );

  }
  listbyNote(note:any,data:any){
    return this.http.post<any>("http://localhost:3000/notes/rechnote/"+note, data );

  }
  listbyType(type:any,data:any){
    return this.http.post<any>("http://localhost:3000/notes/rechtype/"+type, data );

  }
  exportexcel(data:any){
    return this.http.post<any>("http://localhost:3000/notes/export/", data );

  }


}
