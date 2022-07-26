import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../../models/note';
import { notesService } from '../../services/notes.service';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common'

@Component({
  selector: 'updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  note:Note=new Note()
  noteupdate:Note=new Note()
  // @ts-ignore
  formNote: FormGroup
  valid: boolean = false;
    constructor( private location:Location,private route: ActivatedRoute ,private doct:notesService,private toastr: ToastrService,private formBuilder: FormBuilder) { 
    
    }
  
    ngOnInit(): void {
         
      this.formNote = this.formBuilder.group({
      
        matiere: [null, Validators.required],
        type: [null, Validators.required],
        note: [null, Validators.required],
        etudiant: [null, Validators.required],
      });
         
  
      this.route.paramMap.subscribe(
        params => {
          let selectedId = params.get('id');
          if (selectedId) {
            this.doct.getnotebyid(selectedId).subscribe(comp => {
              this.note = comp;
              console.log(this.note)
            });
  
          }
  
        }
  
      );
   
      console.log(this.note)
    }
    updatenote(data:any){
      if(this.formNote.controls['matiere'].value == '' || this.formNote.controls['type'].value == '' || this.formNote.controls['note'].value == '' || this.formNote.controls['etudiant'].value == ''){
        this.valid=false
      }else{
        this.valid=true
      }
  
      if(!this.valid){
        this.toastr.error('champs vide');
    
        }
        if(this.valid){
      
      console.log(data);
      console.log(this.formNote.value);
      this.noteupdate=this.formNote.value
      this.noteupdate._id=this.note._id
      this.doct.updatenotes(this.noteupdate).subscribe(
        ()=>{
          this.toastr.success('note updated');
  
         console.log('updated');
         
          
        },(err)=>{
          this.toastr.success('note updated');
          setTimeout(() => {
            if(localStorage.getItem("roleUser")=="enseignant"){
              window.location.href="#/enseignant/liste" 
            }else if(localStorage.getItem("roleUser")=="Admin") {
                  window.location.href="#/admin/liste"
                 } 
            
          }, 500);
          }
      );
    }
    
  }
  goback(){
    this.location.back();
  }
  }
  