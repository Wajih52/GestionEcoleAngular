import { Component, OnInit } from '@angular/core';
import {EvenementService} from "../../../service/evenement.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-afficher-evenement',
  templateUrl: './afficher-evenement.component.html',
  styleUrls: ['./afficher-evenement.component.css']
})
export class AfficherEvenementComponent implements OnInit {

  listEvenement: any;
  Details : any ;
  constructor(private eventServ: EvenementService, private r: Router) {
  }

  ngOnInit(): void {

    this.eventServ.afficherEvenement().subscribe(
      (E) => {
        this.listEvenement = E;
        // console.log('les evenements : ');
        // console.log('type retour ==> '+typeof this.listEvenement);
        console.log(this.listEvenement);
      })
  }

  afficher(id:any) {
    console.log(id);
    this.eventServ.afficherDetailsEvenement(id).subscribe(
      (E) => {
        this.Details = E;
      }
    )
    this.r.navigate(['home/details'],)
  }

  supprimer(id1:any){
    console.log('id1 event ==> '+id1);
    this.eventServ.deleteEvenement(id1)
   // this.r.navigate(['/afficher'])
  }

}
