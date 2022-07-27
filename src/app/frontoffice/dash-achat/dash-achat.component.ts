import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ServiceAchatService } from 'src/app/services/service-achat.service';


@Component({
  selector: 'app-dash-achat',
  templateUrl: './dash-achat.component.html',
  styleUrls: ['./dash-achat.component.css']
})
export class DashAchatComponent implements OnInit {
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
      let pdf = new jsPDF('p','pt','a2');
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
