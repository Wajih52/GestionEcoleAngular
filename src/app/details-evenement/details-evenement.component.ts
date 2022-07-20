import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EvenementService} from "../../../service/evenement.service";

@Component({
  selector: 'app-details-evenement',
  templateUrl: './details-evenement.component.html',
  styleUrls: ['./details-evenement.component.css']
})
export class DetailsEvenementComponent implements OnInit {
id!:any;
details !: any ;
  constructor(private acr:ActivatedRoute, private s:EvenementService) { }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];
    //console.log(this.id)
    this.s.afficherDetailsEvenement(this.id).subscribe(
      (d)=>{
        console.log(d)
        this.details = d ;
      //  console.log('type retour de details  ==> '+typeof this.details);

      }
    )

  }

}
