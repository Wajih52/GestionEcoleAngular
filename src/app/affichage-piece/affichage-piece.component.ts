import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PieceService } from '../services/piece.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-affichage-piece',
  templateUrl: './affichage-piece.component.html',
  styleUrls: ['./affichage-piece.component.css']
})
export class AffichagePieceComponent implements OnInit {

  piece : any;
  constructor(private s : PieceService, private router:Router) { }

  ngOnInit(): void {
    this.s.getPiece().subscribe(
      res=>{
        this.piece=res;

        }
    )
  }
  deletePiece(noteid:any,index:any){
    this.s.delPiece(noteid).subscribe(
      (res)=>{
        this.piece = this.piece.filter(p => p._id !== noteid);
        this.piece.splice(index,1);

      }
    )
    window.location.href="/#/afficherPiece"
    }

    @ViewChild('content', {static : false}) el!:ElementRef;
    generatePdf(){
      let pdf = new jsPDF('l','pt','a3');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
          pdf.save("RapportPiece");
        }
      })



    }
}
