import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ServiceClasseService } from 'src/app/services/service-classe.service';


@Component({
  selector: 'app-dashclasse',
  templateUrl: './dashclasse.component.html',
  styleUrls: ['./dashclasse.component.css']
})
export class DashclasseComponent implements OnInit {

  classe : any;

  constructor(private s : ServiceClasseService, private router:Router) { }

  ngOnInit(): void {
    this.s.getClasses().subscribe(
      res=>{
        this.classe=res;
        console.log(this.classe);  
        }
    )
  }
  
  deleteClasse(noteid:any,index:any){
    this.s.delClasse(noteid).subscribe(
      res=>{
        this.classe.splice(index,1);
        
      }
    )
    }
    @ViewChild('content', {static : false}) el!:ElementRef;
    generatePdf(){
      let pdf = new jsPDF('l','pt','a3');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
          pdf.save("RapportClasse");
        }
      })



    }
 
}
