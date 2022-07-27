import { Component, OnInit } from '@angular/core';
import {EvenementService} from "../../services/evenement.service";
import {Router} from "@angular/router";
import {LocationStrategy} from "@angular/common";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-afficher-evenement',
  templateUrl: './afficher-evenement.component.html',
  styleUrls: ['./afficher-evenement.component.css']
})
export class AfficherEvenementComponent implements OnInit {
  searchText: any;
  listEvenement: any;
  Details : any ;
  constructor(private location:LocationStrategy, private eventServ: EvenementService, private r: Router) {
  }

  ngOnInit(): void {

    this.eventServ.afficherEvenement().subscribe(
      (E) => {
        this.listEvenement = E;

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

  supprimer(id1:any,index:any){
    Swal.fire({
      title: 'êtes-vous sûre?',
      showCancelButton: true,
      confirmButtonColor: '#ec0a0a',
      cancelButtonColor: '#084f08',
      confirmButtonText: 'Oui',
    }).then((result) => {
      if (result.value) {
        console.log('id1 event ==> '+id1);
        this.eventServ.deleteEvenement(id1).subscribe(
          res=>{
            this.listEvenement.splice(index,1)

          })
        this.location.back();
      }
    });
  }

}
