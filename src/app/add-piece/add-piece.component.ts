import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from '../model/Piece';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-add-piece',
  templateUrl: './add-piece.component.html',
  styleUrls: ['./add-piece.component.css']
})
export class AddPieceComponent implements OnInit {

  piece: Piece;
  constructor(private s: PieceService, private router: Router) { }

  ngOnInit(): void {
    this.piece = new Piece();
  }
  savedata(){

    this.s.addPiece(this.piece).subscribe(
      () => {
        alert("Piece created successfully.");
      }
    );
    window.location.href = "/#/afficherPiece";

  }

  file=null;
onFileSelected(event:any){
  this.file=event.target.files[0];
  let link = document.createElement('a');
  link.href = URL.createObjectURL(this.file=event.target.files[0]);
  console.log(URL);
  link.download = 'Importdata.xlsx';
  link.click();
  link.remove();
}

onUpload() : void{
  this.s.importData(null).subscribe(
    ()=>{

    }
  );
  alert("data has exported");
}

}
