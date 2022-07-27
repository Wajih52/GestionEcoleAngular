import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAchatService } from 'src/app/services/service-achat.service';
import { achat } from '../../model/achat';

@Component({
  selector: 'app-update-achat',
  templateUrl: './update-achat.component.html',
  styleUrls: ['./update-achat.component.css']
})
export class UpdateAchatComponent implements OnInit {
  achat:achat=new achat()
  achatupdate:achat=new achat()

  formAchat: FormGroup
  constructor(private router: Router , private route: ActivatedRoute ,private doct:ServiceAchatService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formAchat = this.formBuilder.group({
    
      montant: [null, Validators.required],
      sens: [null, Validators.required],
      fournisseur: [null, Validators.required],
      qte: [null, Validators.required],
      desc: [null, Validators.required],
      date: [null, Validators.required],
    });
       

    this.route.paramMap.subscribe(
      params => {
        let selectedId = params.get('id');
        if (selectedId) {
          this.doct.getAchatbyid(selectedId).subscribe(comp => {
            this.achat = comp;
            console.log(this.achat)
          });

        }

      }

    );
 
    console.log(this.achat)
  }
  updateAchat(data:any){
    console.log(data);
    console.log(this.formAchat.value);
    this.achatupdate=this.formAchat.value
    this.achatupdate._id=this.achat._id
    this.doct.updateAchat(this.achatupdate).subscribe(
      ()=>{
       console.log('updated');
       
        
      }
    );
   
}
}
