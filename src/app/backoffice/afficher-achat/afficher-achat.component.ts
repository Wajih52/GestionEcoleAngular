import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ServiceAchatService } from 'src/app/services/service-achat.service';


@Component({
  selector: 'app-afficher-achat',
  templateUrl: './afficher-achat.component.html',
  styleUrls: ['./afficher-achat.component.css']
})
export class AfficherAchatComponent implements OnInit {
  achat : any;

  constructor(private s : ServiceAchatService, private router:Router) { }

  ngOnInit(): void {
    this.s.getAchats().subscribe(
      res=>{
        this.achat=res;
        console.log(this.achat);  
        }
    )
  }
  
  deleteAchat(noteid:any,index:any){
    this.s.delAchat(noteid).subscribe(
      res=>{
        this.achat.splice(index,1);
        
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
    h:null;
    exportData(f:any){
      
      this.s.exportData(null).subscribe(
        ()=>{
        
          
      
        }
      );
      alert("data has exported on Downloads");
   
  
  
    
        }
  
 
}
