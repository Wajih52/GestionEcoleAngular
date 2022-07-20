import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EvenementService} from "../../../service/evenement.service";

@Component({
  selector: 'app-modifier-evenement',
  templateUrl: './modifier-evenement.component.html',
  styleUrls: ['./modifier-evenement.component.css']
})
export class ModifierEvenementComponent implements OnInit {
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
        console.log(this.evenement)
    })
    this.es.afficherDetailsEvenement(this.idDetails).subscribe(
      (D)=>{
        this.details = D ;
        console.log(this.details)
      }
    )
    }

  modifier(f:any){
    this.es.updateEvenement(f.value).subscribe(
      ()=>{
        this.r.navigate(['/afficher'])
      }
    )
  }

}
