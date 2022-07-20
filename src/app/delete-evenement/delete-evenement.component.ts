import { Component, OnInit } from '@angular/core';
import {EvenementService} from "../../../service/evenement.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-evenement',
  templateUrl: './delete-evenement.component.html',
  styleUrls: ['./delete-evenement.component.css']
})
export class DeleteEvenementComponent implements OnInit {
 id!:any ;
  constructor(private acr:ActivatedRoute ,private r:Router,private eventserv : EvenementService) { }

  ngOnInit(): void {
   this.id = this.acr.snapshot.params['id'] ;
   console.log(this.id);
  this.eventserv.deleteEvenement(this.id)
  this.r.navigate(['/afficher']);

  }

}
