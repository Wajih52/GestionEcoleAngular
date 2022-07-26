import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Absence } from '../model/Absence';
import { ServiceAbsenceService } from '../services/service-absence.service';
import {Piece} from "../model/Piece";
import {PieceService} from "../services/piece.service";

@Component({
  selector: 'app-add-absence',
  templateUrl: './add-absence.component.html',
  styleUrls: ['./add-absence.component.css']
})
export class AddAbsenceComponent implements OnInit {

  absence: Absence;
  pieces: Piece[];
  constructor(private s: ServiceAbsenceService, private router: Router, private pieceService: PieceService) { }

  ngOnInit(): void {
    this.absence = new Absence();
    this.pieceService.getPiece().subscribe((res) => this.pieces = res);
  }
  savedata(){
    console.log(this.absence);
    this.s.addAbsence(this.absence).subscribe(
      () => {
        alert("Absence created successfully.");
      }
    );
    window.location.href = "/#/afficherAbsence";
  }

}
