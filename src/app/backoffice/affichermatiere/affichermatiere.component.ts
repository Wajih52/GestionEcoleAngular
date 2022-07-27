import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ServiceMatiereService } from 'src/app/services/service-matiere.service';

@Component({
  selector: 'app-affichermatiere',
  templateUrl: './affichermatiere.component.html',
  styleUrls: ['./affichermatiere.component.css']
})
export class AfficherMatiereComponent implements OnInit {

  matiere : any;

  constructor(private s : ServiceMatiereService, private router:Router) { }

  ngOnInit(): void {
    this.s.getMatieres().subscribe(
      res=>{
        this.matiere=res;
        console.log(this.matiere);  
        }
    )
  }
  
  deleteMatiere(noteid:any,index:any){
    this.s.delMatiere(noteid).subscribe(
      res=>{
        this.matiere.splice(index,1);
        
      }
    )
    }
    @ViewChild('content', {static : false}) el!:ElementRef;
    generatePdf(){
      let pdf = new jsPDF('l','pt','a3');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
          pdf.save("RapportMatiere");
        }
      })



    }
 
}
