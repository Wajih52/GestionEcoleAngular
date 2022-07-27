import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfficherAbsenceFrontService } from '../../services/afficher-absence-front.service';

@Component({
  selector: 'app-info-etudiant',
  templateUrl: './info-etudiant.component.html',
  styleUrls: ['./info-etudiant.component.css']
})
export class InfoEtudiantComponent implements OnInit {

  absence : any;
  constructor(private s : AfficherAbsenceFrontService, private router:Router) {



  }

  ngOnInit(): void {
    this.s.getAbs().subscribe(
      res=>{
        this.absence=res;

      }

    )
  }


}