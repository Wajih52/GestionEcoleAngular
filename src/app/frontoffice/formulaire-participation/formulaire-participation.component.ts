import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EvenementService} from "../../services/evenement.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire-participation',
  templateUrl: './formulaire-participation.component.html',
  styleUrls: ['./formulaire-participation.component.css']
})
export class FormulaireParticipationComponent implements OnInit {
  id!:any;
  evenement:any;
  nomEvenement :any ;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private acr:ActivatedRoute, private es:EvenementService,private r:Router) { }

  ngOnInit(): void {
    this.nomEvenement=this.acr.snapshot.params['nom'];
    this.id=this.acr.snapshot.params['id'];
    console.log(this.id);
    this.es.oneEvent(this.id).subscribe(
      (E)=>{
        this.evenement = E ;
        this.evenement = Array.of(this.evenement);
      })

    this.registerForm = this.formBuilder.group({
      nom: ['',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      profession: ['', [Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]+")]],
      ecole: ['', Validators.required],
      niveau: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")]],
      telephone: ['', [Validators.required,Validators.pattern("[0-9]{8}"),Validators.maxLength(8),Validators.minLength(8)]],
      commentaire: ['', [Validators.required]],
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit(f:any) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      this.es.ajouterParticipant(f.value).subscribe(
        ()=>{
          this.r.navigate(['/etudiant/listeevenement']);
        }
      )
    }
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
