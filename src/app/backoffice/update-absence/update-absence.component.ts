import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence } from '../../model/Absence';
import { ServiceAbsenceService } from '../../services/service-absence.service';
import {Piece} from "../../model/Piece";
import {PieceService} from "../../services/piece.service";

@Component({
  selector: 'app-update-absence',
  templateUrl: './update-absence.component.html',
  styleUrls: ['./update-absence.component.css']
})
export class UpdateAbsenceComponent implements OnInit {

  absence: Absence;
  absenceUpdatee: Absence;
  pieces: Piece[];
// @ts-ignore
  formAchat: FormGroup;

  constructor(private router: Router , private route: ActivatedRoute , private doct: ServiceAbsenceService, private formBuilder: FormBuilder, private pieceService: PieceService) {

  }

  ngOnInit(): void {
    this.pieceService.getPiece().subscribe((res) => this.pieces = res);
    this.absence = new Absence();
    this.formAchat = this.formBuilder.group({

      etudiant: [null, Validators.required],
      matiere: [null, Validators.required],
      justificatif: [null, Validators.required],
      piece: [null, Validators.required],

      date: [null, Validators.required],
    });


    this.route.paramMap.subscribe(
      params => {
        let selectedId = params.get('id');
        if (selectedId) {
          this.doct.getAbsencebyid(selectedId).subscribe(abse => {
            this.absence = abse;
            console.log(this.absence);
          });

        }

      }

    );
  }
  updateAbsence(data: Absence){
    console.log(data);
    console.log(this.formAchat.value);
    this.absenceUpdatee = this.formAchat.value;
    this.absenceUpdatee._id = this.absence._id;
    this.doct.updateAbsence(this.absenceUpdatee).subscribe(
      () => {
        console.log('updated');
      }
    );
    if(localStorage.getItem("roleUser")=="enseignant"){
      window.location.href="#/enseignant/afficherAbsence" 
    }else if(localStorage.getItem("roleUser")=="Admin") {
          window.location.href="#/admin/afficherAbsence"
         }
  }

}
