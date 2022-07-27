import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ServiceComptaService } from 'src/app/services/service-compta.service';

@Component({
  selector: 'app-dash-compta',
  templateUrl: './dash-compta.component.html',
  styleUrls: ['./dash-compta.component.css']
})
export class DashComptaComponent implements OnInit {

  compta : any;


  constructor(private s : ServiceComptaService, private router:Router) { }

  ngOnInit(): void {
    this.s.getCompta().subscribe(
      res=>{
        this.compta=res;
        console.log(this.compta);  
        }
    )
  }
  afficherSum () : void{
    this.s.getSumCompta().subscribe(
      res=>{
        alert("Balance actuelle est "+res);
      })
  }
  h:null;
  exportData(f:any){
    
    this.s.exportData(null).subscribe(
      ()=>{
      
        
    
      }
    );
    alert("data has exported on Downloads");
 


  
      }


  deleteCompta(noteid:any,index:any){
    this.s.delCompta(noteid).subscribe(
      res=>{
        this.compta.splice(index,1);
        
      }
    )
    }
    @ViewChild('content', {static : false}) el!:ElementRef;
    generatePdf(){
      let pdf = new jsPDF('l','pt','a4');
      pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
          pdf.save("RapportAchat");
        }
      })



    }
 
}