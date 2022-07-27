import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Evenement} from "../models/evenement";
import {DetailsEvenement} from "../models/detailsEvenement";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private httpClient:HttpClient) { }


  afficherEvenement(){
   return this.httpClient.get('http://localhost:3000/evenement');
  }
  oneEvent(id:any):Observable<Evenement>{
    return this.httpClient.get<Evenement>('http://localhost:3000/evenement/event/'+id);
  }
  afficherDetailsEvenement(id:any):Observable<DetailsEvenement>{
    return this.httpClient.get<DetailsEvenement>('http://localhost:3000/evenement/details/'+id);
  }
  afficherDetails(){
    return this.httpClient.get('http://localhost:3000/evenement/details');
  }
  ajouterEvenement(data:any){
    return this.httpClient.post('http://localhost:3000/evenement/ajoutevenement',data,{responseType:'text'});
  }
  updateEvenement(id1:any,id2:any,data:any){
    return this.httpClient.post('http://localhost:3000/evenement/modifier/'+id1+'/'+id2,data)
  }
  deleteEvenement(id:any){
    console.log('id1 ==> '+ id);
    return this.httpClient.delete('http://localhost:3000/evenement/delete/'+id);

  }
  afficherParticipant(){
    return this.httpClient.get('http://localhost:3000/evenement/participant');
  }
  oneParticipant(id:any){
    return this.httpClient.get('http://localhost:3000/evenement/participant/'+id);
  }
  ajouterParticipant(data:any){
    return this.httpClient.post('http://localhost:3000/evenement/ajoutParticipant',data,{responseType:'text'});
  }
  deleteParticipant(id:any){
    console.log('id1 ==> '+ id);
    return this.httpClient.delete('http://localhost:3000/evenement/deleteparticipant/'+id);

  }
  modifierNbrParticipant(id:any){
    return this.httpClient.get('http://localhost:3000/evenement/modifierNbrParticipant/'+id);
  }
  modifierNbrLike(id:any){
    return this.httpClient.get('http://localhost:3000/evenement/modifierNbrLike/'+id);
  }
  modifierEtat(id:any){
    return this.httpClient.get('http://localhost:3000/evenement/modifierEtat/'+id);
  }
  envoyerEmail(email:any){
    return this.httpClient.get('http://localhost:3000/evenement/envoyer/'+email);

  }

}
