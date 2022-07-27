import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {EvenementService} from "../../services/evenement.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-afficher-participant',
  templateUrl: './afficher-participant.component.html',
  styleUrls: ['./afficher-participant.component.css']
})
export class AfficherParticipantComponent implements OnInit {
  searchText : any;
  listParticipant: any;
  idevenement : any ;
  constructor(private location:LocationStrategy, private eventServ: EvenementService, private r: Router) {
  }

  ngOnInit(): void {

    this.eventServ.afficherParticipant().subscribe(
      (P) => {
        this.listParticipant = P;
        console.log(this.listParticipant);
      })
  }

  envoyer(f:any,index:any){
    console.log(f.value)
    this.eventServ.envoyerEmail(f.value).subscribe(
      ()=>{
        this.listParticipant.splice(index,1)
     //   this.r.navigate(['/etudiant/listevenement'])
      }
    )
  }

  valider(id:any,email:any,index:any){
    console.log(id);
    console.log(email);
    console.log(index);
    this.eventServ.envoyerEmail(email).subscribe(
      ()=>{
        //this.listParticipant.splice(index,1)
          //this.r.navigate(['/etudiant/listevenement'])
      }
    );
    this.eventServ.modifierEtat(id).subscribe(
      ()=>{

      }
    );



  }

  supprimer(id:any,index:any){
    Swal.fire({
      title: 'êtes-vous sûre?',
      showCancelButton: true,
      confirmButtonColor: '#e3454b',
      cancelButtonColor: '#084f08',
      confirmButtonText: 'Oui',
    }).then((result) => {
      if (result.value) {
        this.eventServ.deleteParticipant(id).subscribe(
          ()=>{
            this.listParticipant.splice(index,1)
            this.r.navigate(['/admin/afficherparticipant'])
          }
        )
      }
    });

  }

  // afficher(id:any) {
  //   console.log(id);
  //   this.eventServ.afficherDetailsEvenement(id).subscribe(
  //     (E) => {
  //       this.Details = E;
  //     }
  //   )
  //   this.r.navigate(['home/details'],)
  // }

  // supprimer(id1:any,index:any){
  //   console.log('id1 event ==> '+id1);
  //   this.eventServ.deleteEvenement(id1).subscribe(
  //     res=>{
  //       this..splice(index,1)
  //
  //     })
  //   this.location.back();
  // }

}
