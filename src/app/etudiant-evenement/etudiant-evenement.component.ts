import { Component, OnInit } from '@angular/core';
import {EvenementService} from "../../../service/evenement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-etudiant-evenement',
  templateUrl: './etudiant-evenement.component.html',
  styleUrls: ['./etudiant-evenement.component.css']
})
export class EtudiantEvenementComponent implements OnInit {
  listEvenement: any;
  Details : any ;
  constructor(private eventServ: EvenementService, private r: Router) { }

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

}
