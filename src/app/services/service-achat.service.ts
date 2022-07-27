import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { achat } from '../model/achat';



@Injectable({
  providedIn: 'root'
})
export class ServiceAchatService {

  constructor(private http:HttpClient) { }
  getAchats(){
    return this.http.get('http://localhost:3000/achat/achats');
  }
  addAchat(data:any){
    return this.http.post('http://localhost:3000/achat/addAchats',data,{responseType: 'text'})
  }
  delAchat(id:any){
    return this.http.delete('http://localhost:3000/achat/deleteAchat/'+id,{responseType: 'text'});
  }
  updateAchat(data:any){
    return this.http.post('http://localhost:3000/achat/updateAchat',data)
  }
  getAchatbyid(id:any) {
    return this.http.get<achat>('http://localhost:3000/achat/achat/'+id);
  } 
  insertAchat(data:any){
    return this.http.post('http://localhost:3000/achat/inserlistetAchat',data,{responseType: 'text'})
  }
  exportData(data : any|null){
    return this.http.post('http://localhost:3000/compta/exportdata',data)
  }
}
