import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Piece } from '../../model/Piece';
import { PieceService } from '../../services/piece.service';

@Component({
  selector: 'app-update-piece',
  templateUrl: './update-piece.component.html',
  styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit {

  piece: Piece;
  pieceUpdate: Piece = new Piece()

  formpPiece!: FormGroup;
  constructor(private router: Router , private route: ActivatedRoute , private doct: PieceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.piece = new Piece();
    this.formpPiece = this.formBuilder.group({

      description: [null, Validators.required],
      validation: [null, Validators.required],

      date: [null, Validators.required],
    });

    this.route.paramMap.subscribe(
      params => {
        const selectedId = params.get('id');
        if (selectedId) {
          this.doct.getAbsencebyid(selectedId).subscribe(pi => {
            this.piece = pi;
            console.log(this.piece);
          });

        }

      }

    );

    console.log(this.piece)
  }
  updateAbsence(data:any){
    console.log(data);
    console.log(this.formpPiece.value);
    this.pieceUpdate=this.formpPiece.value
    this.pieceUpdate._id=this.piece._id
    this.doct.updatePiece(this.pieceUpdate).subscribe(
      ()=>{
       console.log('updated');


      }
    );
    if(localStorage.getItem("roleUser")=="enseignant"){
      window.location.href="#/enseignant/afficherPiece" 
    }else if(localStorage.getItem("roleUser")=="Admin") {
          window.location.href="#/admin/afficherPiece"
         }
}

}
