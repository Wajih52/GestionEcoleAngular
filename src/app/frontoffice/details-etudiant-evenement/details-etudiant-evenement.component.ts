import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EvenementService} from "../../services/evenement.service";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-details-etudiant-evenement',
  templateUrl: './details-etudiant-evenement.component.html',
  styleUrls: ['./details-etudiant-evenement.component.css']
})
export class DetailsEtudiantEvenementComponent implements OnInit {

  id!:any;
  details !: any ;
  constructor(private location:LocationStrategy,private acr:ActivatedRoute, private s:EvenementService) { }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];
    //console.log(this.id)
    this.s.afficherDetailsEvenement(this.id).subscribe(
      (d)=>{
        console.log(d)
        this.details = d ;
        this.details = Array.of(this.details);
        //  console.log('type retour de details  ==> '+typeof this.details);

      }
    )

  }
  retour(){
    this.location.back();
  }

}
