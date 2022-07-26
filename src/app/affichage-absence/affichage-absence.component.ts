import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ServiceAbsenceService } from '../services/service-absence.service';

@Component({
  selector: 'app-affichage-absence',
  templateUrl: './affichage-absence.component.html',
  styleUrls: ['./affichage-absence.component.css']
})
export class AffichageAbsenceComponent implements OnInit {
  absence : any;
  constructor(private s : ServiceAbsenceService, private router:Router) {



  }

  ngOnInit(): void {
    this.s.getAbsence().subscribe(
      res=>{
        this.absence=res;

      }

    )
  }

  deleteAbsence(noteid:any,index:any){
    this.s.delAbse(noteid).subscribe(
      () => {
        this.absence = this.absence.filter(a => a._id !== noteid);
        this.absence.splice(index,1);

      }

    )
    window.location.href="/#/afficherAbsence"
  }
  @ViewChild('content', {static : false}) el!:ElementRef;
  generatePdf(){
    let pdf = new jsPDF('l','pt','a3');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("RapportAbsence");
      }
    })



  }

  h!: null;
  exportData(f:any){
    this.s.exportData(null).subscribe(
      ()=>{

      }

    );
    alert("Data has expoted")
  }

}
