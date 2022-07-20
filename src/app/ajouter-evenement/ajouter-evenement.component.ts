import { Component, OnInit } from '@angular/core';
import {EvenementService} from "../../../service/evenement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.component.html',
  styleUrls: ['./ajouter-evenement.component.css']
})
export class AjouterEvenementComponent implements OnInit {

  constructor(private evenementserv:EvenementService, private r:Router) { }

  ngOnInit(): void {
  }
ajouter(f:any){
    console.log(f.value);
    this.evenementserv.ajouterEvenement(f.value).subscribe(
      ()=>{this.r.navigate(['/afficher'])}
    )
}
}
