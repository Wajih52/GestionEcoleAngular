import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../services/cours.service';
import {Router,ActivatedRoute} from "@angular/router";
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { cours } from '../../models/cours';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coursfile } from '../../models/file';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common'
@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.scss']
})
export class AddcoursComponent implements OnInit {
  isuploaded=false
  uploadedfilenow:coursfile=new coursfile()
  allfiles=[]
  liste:any=[]
  filename:any
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  existfiles=[]
  filesnow=[]
  shortLink: string = "";
    loading: boolean = false; // Flag variable
  // @ts-ignore
  file: File = null;
  // @ts-ignore
  uploadedFiles: Array < File > ;
  cours:cours=new cours();
// @ts-ignore
  formCours: FormGroup
  valid: boolean = false;
  constructor(private location:Location,private doct:CoursService,
    private router:Router,private route: ActivatedRoute, private formBuilder: FormBuilder,private http: HttpClient,private toastr: ToastrService) {
      this.route.paramMap.subscribe(
        params => {

          if(this.router.url.includes('admin')){
            console.log("admin");
            localStorage.setItem("roleUser","Admin")

          }else if(this.router.url.includes('enseignant')){
            console.log("enseignant");
            localStorage.setItem("roleUser","enseignant")

          }else{
            console.log("student");
            localStorage.setItem("roleUser","student") 
          }
        }
        
      );
     }

  ngOnInit(): void {
         
    this.formCours = this.formBuilder.group({
      
      nom: [null, Validators.required],
      classe: [null, Validators.required],
      matiere: [null, Validators.required],
      nomprof: [null, Validators.required],
      piece:[null, Validators.required]
    

    });
    this.fileInfos = this.doct.getFiles();
    // @ts-ignore
    this.existfiles = this.doct.getFiles();
    this.existfiles.forEach(res=>{
      this.filesnow=res
    })
    
  }
   
selectFile(event: any): void {
  this.selectedFiles = event.target.files;
}
upload(): void {
  let exist=false
  this.progress = 0;
  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);
    if (file) {
      this.currentFile = file;
      console.log(this.currentFile);
      
      this.filesnow.forEach(res=>{
        // @ts-ignore
        if (res.name==file.name){
          exist=true
          
        }
      })
      setTimeout(() => {
        if(exist==false){
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
        }else{
          this.toastr.error('fichier déja ajoutée.', 'Form validation!');
        }
      }, 3000);
     
     
    }
    this.selectedFiles = undefined;
  }
}
savedata(f:cours){
  this.doct.getFiles().subscribe(res=>{
    let files=[]
    files=res
    files.forEach((res1:uploadfile)=>{
    if(res1.name == this.currentFile?.name){
        this.uploadedfilenow=res1
        console.log(this.uploadedfilenow);
        f.piece=this.uploadedfilenow
        
      }
    })
  })
  console.log(this.uploadedfilenow);
  
  
  console.log(f.piece);
  
  setTimeout(() => {
  console.log(f.piece);
    console.log(f);
    console.log(this.formCours.value);
   if(this.formCours.controls['nom'].value == '' || this.formCours.controls['classe'].value == '' || this.formCours.controls['matiere'].value == '' || this.formCours.controls['nomprof'].value == ''){
     this.valid=false
   }else{
     this.valid=true
   }

    
    if(!this.valid){
    this.toastr.error('champ vide.', 'Form validation!');

    }
    if(this.valid){
      let text= "A new course has been added !"

      this.doct.sendemail(text).subscribe(res=>{
        console.log("enpmmail sent");
        
      })
      this.doct.adddcours(f).subscribe(
        (res)=>{
          if (res.status == 200) {
            console.log(res);
            console.log("if fine");
            
          }
          // console.log("done");
          
        //  this.router.navigate(['add'])
        },(err)=>{
          this.toastr.success('donnée ajouté', 'Form validation!');
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
