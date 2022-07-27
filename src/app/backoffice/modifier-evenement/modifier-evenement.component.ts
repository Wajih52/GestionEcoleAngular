import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EvenementService} from "../../services/evenement.service";
import {Evenement} from "../../models/evenement";
import {DetailsEvenement} from "../../models/detailsEvenement";

@Component({
  selector: 'app-modifier-evenement',
  templateUrl: './modifier-evenement.component.html',
  styleUrls: ['./modifier-evenement.component.css']
})
export class ModifierEvenementComponent implements OnInit {
  event:Evenement=new Evenement();
  detail:DetailsEvenement=new DetailsEvenement();
  idEvent !: any ;
  idDetails !: any ;
  evenement !:any ;
  details !: any ;
  constructor(private acr: ActivatedRoute,private r:Router,private es:EvenementService) { }

  ngOnInit(): void {
    this.idEvent = this.acr.snapshot.params['id'] ;
    this.idDetails = this.acr.snapshot.params['id2'] ;

    this.es.oneEvent(this.idEvent).subscribe(
      (E)=>{
        this.evenement = E ;
          this.event=E;
        this.evenement = Array.of(this.evenement);
        console.log(this.event);
      })
    this.es.afficherDetailsEvenement(this.idDetails).subscribe(
      (D)=>{
        this.details = D ;
        this.detail = D ;
        this.details = Array.of(this.details);
        console.log(this.detail)
      }
    )
  }

  modifier(f:any){

    this.es.updateEvenement(this.idEvent,this.idDetails,f.value).subscribe(
      ()=>{
        { if(localStorage.getItem("roleUser")=="enseignant"){
          window.location.href="#/enseignant/afficher" 
        }else if(localStorage.getItem("roleUser")=="Admin") {
              window.location.href="#/admin/afficher"
             }
            }
      }
    )
  }

}
