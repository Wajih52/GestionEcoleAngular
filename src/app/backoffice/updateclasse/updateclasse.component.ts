import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceClasseService } from 'src/app/services/service-classe.service';
import { classe } from '../../model/classe';

@Component({
  selector: 'app-updateclasse',
  templateUrl: './updateclasse.component.html',
  styleUrls: ['./updateclasse.component.sass']
})
export class UpdateClasseComponent implements OnInit {

  classe:classe=new classe()
  classeupdate:classe=new classe()

  formClasse: FormGroup
  constructor(private router: Router , private route: ActivatedRoute ,private doct:ServiceClasseService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formClasse = this.formBuilder.group({
    
      nom: [null, Validators.required],
      nbretudiant: [null, Validators.required],
      nbrprof: [null, Validators.required],
      specialite: [null, Validators.required],
      nbrmatiere: [null, Validators.required],
     
    });
       

    this.route.paramMap.subscribe(
      params => {
        let selectedId = params.get('id');
        if (selectedId) {
          this.doct.getClassebyid(selectedId).subscribe(comp => {
            this.classe = comp;
            console.log(this.classe)
          });

        }

      }

    );
 
    console.log(this.classe)
  }
  updateMatiere(data:any){
    console.log(data);
    console.log(this.formClasse.value);
    this.classeupdate=this.formClasse.value
    this.classeupdate._id=this.classe._id
    this.doct.updateClasse(this.classeupdate).subscribe(
      ()=>{
       console.log('updated');
       
        
      }
    );
   
}
}