import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cours } from '../../models/cours';
import { coursfile } from '../../models/file';
import { CoursService } from '../../services/cours.service';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'updatecours',
  templateUrl: './updatecours.component.html',
  styleUrls: ['./updatecours.component.scss']
})
export class UpdatecoursComponent implements OnInit {
  isuploaded=false
  uploadedfilenow:coursfile=new coursfile()
  allfiles=[]
  filename:any
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  cours:cours=new cours();
  coursupdate:cours=new cours();
  // @ts-ignore
  formNote: FormGroup
  valid=false
    constructor(private location:Location,private toastr: ToastrService, private route: ActivatedRoute ,private doct:CoursService,private formBuilder: FormBuilder) { 
    
    }
  
    ngOnInit(): void {
         
      this.formNote = this.formBuilder.group({
      
        nom: [null, Validators.required],
        classe: [null, Validators.required],
        matiere: [null, Validators.required],
        nomprof: [null, Validators.required],
        piece: [null, Validators.required],
      });
         
  
      this.route.paramMap.subscribe(
        params => {
          let selectedId = params.get('id');
          if (selectedId) {
            this.doct.getcoursbyid(selectedId).subscribe(comp => {
              this.cours = comp;
              console.log(this.cours)
            });
  
          }
  
        }
  
      );
   
      console.log(this.cours)
    }
    selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }
    upload(): void {
      this.progress = 0;
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
        if (file) {
          this.currentFile = file;
          this.doct.upload(this.currentFile).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.doct.getFiles();
                this.filename=file.name
            this.isuploaded=true
               
              }
              
              
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              this.currentFile = undefined;
            });
        }
        this.selectedFiles = undefined;
      }
    }
    updatecours(f:cours){
      this.coursupdate=f
      this.coursupdate._id=this.cours._id

      this.doct.getFiles().subscribe(res=>{
        let files=[]
        files=res
        files.forEach((res1:uploadfile)=>{
        if(res1.name == this.currentFile?.name){
            this.uploadedfilenow=res1
            console.log(this.uploadedfilenow);
            f.piece=this.uploadedfilenow
            this.coursupdate.piece=this.uploadedfilenow
          }
        })
      })
      console.log(this.formNote.value);
      setTimeout(() => {
        if(this.formNote.controls['nom'].value == '' || this.formNote.controls['classe'].value == '' || this.formNote.controls['matiere'].value == '' || this.formNote.controls['nomprof'].value == ''){
          this.valid=false
        }else{
          this.valid=true
        }
        if(!this.valid){
          this.toastr.error('champ vide');
      
          }
    if(this.valid){

        this.doct.updatecours(this.coursupdate).subscribe(
          ()=>{
           console.log('updated');
           
            
          },(err)=>{
            this.toastr.success('cours updated');
            setTimeout(() => {
              if(localStorage.getItem("roleUser")=="enseignant"){
                window.location.href="#/enseignant/listecours" 
              }else if(localStorage.getItem("roleUser")=="Admin") {
                    window.location.href="#/admin/listecours"
                   }
              
            }, 500);
            }
        );
      }
      }, 2000);
    
  }
  
  goback(){
    this.location.back();
  }
}
export class uploadfile{
  name:string=''
  url:string=''
}
