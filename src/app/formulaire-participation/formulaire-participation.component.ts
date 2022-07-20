import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EvenementService} from "../../../service/evenement.service";

@Component({
  selector: 'app-formulaire-participation',
  templateUrl: './formulaire-participation.component.html',
  styleUrls: ['./formulaire-participation.component.css']
})
export class FormulaireParticipationComponent implements OnInit {
id!:any;
  constructor(private acr:ActivatedRoute, private s:EvenementService,private r:Router) { }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];
  }
  envoyer(f:any){
    this.s.envoyerEmail(f.value).subscribe(
      ()=>{
        this.r.navigate(['/etudiant/afficher'])
      }
    )
  }
}
