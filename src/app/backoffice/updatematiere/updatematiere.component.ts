import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceMatiereService } from 'src/app/services/service-matiere.service';
import { matiere } from '../../model/matiere';

@Component({
  selector: 'app-updatematiere',
  templateUrl: './updatematiere.component.html',
  styleUrls: ['./updatematiere.component.sass']
})
export class UpdateMatiereComponent implements OnInit {

  matiere:matiere=new matiere()
  matiereupdate:matiere=new matiere()

  formMatiere: FormGroup
  constructor(private router: Router , private route: ActivatedRoute ,private doct:ServiceMatiereService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formMatiere = this.formBuilder.group({
    
      nom: [null, Validators.required],
      specialite: [null, Validators.required],
      nbrheure: [null, Validators.required],
     
    });
       

    this.route.paramMap.subscribe(
      params => {
        let selectedId = params.get('id');
        if (selectedId) {
          this.doct.getMatierebyid(selectedId).subscribe(comp => {
            this.matiere = comp;
            console.log(this.matiere)
          });

        }

      }

    );
 
    console.log(this.matiere)
  }
  updateMatiere(data:any){
    console.log(data);
    console.log(this.formMatiere.value);
    this.matiereupdate=this.formMatiere.value
    this.matiereupdate._id=this.matiere._id
    this.doct.updateMatiere(this.matiereupdate).subscribe(
      ()=>{
       console.log('updated');
        
      }
    );
    
    { if(localStorage.getItem("roleUser")=="enseignant"){
      window.location.href="#/enseignant/afficherMatiere" 
    }else if(localStorage.getItem("roleUser")=="Admin") {
          window.location.href="#/admin/afficherMatiere"
         }
        }

   
}
}