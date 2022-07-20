import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private httpClient:HttpClient) { }


  afficherEvenement(){
   return this.httpClient.get('http://localhost:3000/evenement');
  }
  oneEvent(id:any){
    return this.httpClient.get('http://localhost:3000/evenement/event/'+id);
  }
  afficherDetailsEvenement(id:any){
    return this.httpClient.get('http://localhost:3000/evenement/details/'+id);
  }
  ajouterEvenement(data:any){
    return this.httpClient.post('http://localhost:3000/evenement/ajoutevenement',data,{responseType:'text'});
  }
  updateEvenement(data:any){
    return this.httpClient.post('http://localhost:3000/evenement/modifier',data)
  }
  deleteEvenement(id:any){
    console.log('id1 ==> '+ id);
    return this.httpClient.get('http://localhost:3000/evenement/delete/'+id);

  }
  envoyerEmail(data:any){
    return this.httpClient.post('http://localhost:3000/evenement/envoyer',data,{responseType:'text'});

  }

}
