import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceComptaService } from 'src/app/services/service-compta.service';
import { compta } from '../../model/compta';

@Component({
  selector: 'app-update-compta',
  templateUrl: './update-compta.component.html',
  styleUrls: ['./update-compta.component.css']
})
export class UpdateComptaComponent implements OnInit {

  compta:compta=new compta()
  comptaupdate:compta=new compta()

  formCompta: FormGroup 
  constructor(private router: Router , private route: ActivatedRoute ,private doct:ServiceComptaService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCompta = this.formBuilder.group({
    
      montant: [null, Validators.required],
      sens: [null, Validators.required],
      desc: [null, Validators.required],
      balance: [null, Validators.required],
      date: [null, Validators.required],
    });
       

    this.route.paramMap.subscribe(
      params => {
        let selectedId = params.get('id');
        if (selectedId) {
          this.doct.getComptabyid(selectedId).subscribe(comp => {
            this.compta = comp;
            console.log(this.compta)
          });

        }

      }

    );
 
    console.log(this.compta)
  }
  updateCompta(data:any){
    console.log(data);
    console.log(this.formCompta.value);
    this.comptaupdate=this.formCompta.value
    this.comptaupdate._id=this.compta._id
    this.doct.updateCompta(this.comptaupdate).subscribe(
      ()=>{
       console.log('updated');
       
        
      }
    );
  
}
}
