import { Component, OnInit } from '@angular/core';
import {EvenementService} from "../../services/evenement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-etudiant-evenement',
  templateUrl: './etudiant-evenement.component.html',
  styleUrls: ['./etudiant-evenement.component.css']
})
export class EtudiantEvenementComponent implements OnInit {
  searchText:any;
  listEvenement: any;
  Details : any ;
  l:any;
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

  like(id:any,index:any){
this.eventServ.modifierNbrLike(id).subscribe(
  ()=>{
    this.l.splice(index,1)
  }
)

    this.r.navigate(['etudiant/listeevenement'],)
  }

}
