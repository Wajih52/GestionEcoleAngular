import { Component, OnInit } from '@angular/core';
import {EvenementService} from "../../services/evenement.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.component.html',
  styleUrls: ['./ajouter-evenement.component.css']
})
export class AjouterEvenementComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private evenementserv:EvenementService, private r:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nom: ['',Validators.required],
      responsable: ['', [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      datedebut: ['', Validators.required],
      heuredebut: ['', Validators.required],
      datefin: ['', Validators.required],
      heurefin: ['', Validators.required],
      capacite: ['', [Validators.required,Validators.max(1000)]],
      description: ['', Validators.required],
      lieu: ['', Validators.required],
      typelieu: ['', Validators.required],
      typeevenement: ['', Validators.required],
      paiement: ['', Validators.required],
    })
  }

  ajouter(f:any){
    console.log(f.value);
    this.evenementserv.ajouterEvenement(f.value).subscribe(
      ()=>{
        { if(localStorage.getItem("roleUser")=="enseignant"){
          window.location.href="#/enseignant/afficher" 
        }else if(localStorage.getItem("roleUser")=="Admin") {
              window.location.href="#/admin/afficher"
             }
            }
          }
    
    )
  }

  get f() { return this.registerForm.controls; }
  onSubmit(form:any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }else {
      console.log(form.value);
      this.evenementserv.ajouterEvenement(form.value).subscribe(
        ()=>{this.r.navigate(['admin/afficher'])}
      )
    }




    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
