import { Component, Input, OnInit } from '@angular/core';
import { notesService } from '../../services/notes.service';
import {Router,ActivatedRoute} from "@angular/router";
import * as XLSX from 'xlsx';
import { Note } from '../../models/note';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common'
@Component({
  selector: 'app-addcours',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.scss']
})
export class AddnotesComponent implements OnInit {

  arrayBuffer: any;
  filelist:any
  filelisttosend:any
  file:any;
  csvRecords=[];
  header: boolean = true;
// @ts-ignore
  formNote: FormGroup
  note:Note=new Note();
  valid: boolean = false;
 

  constructor(private location:Location,private doct:notesService,private router:Router,private route: ActivatedRoute,private toastr: ToastrService,private formBuilder: FormBuilder ) { 
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
    this.formNote = this.formBuilder.group({
      
      matiere: [null, Validators.required],
      type: [null, Validators.required],
      note: [null, Validators.required,Validators.pattern(/^[0-20]?$/)],
      etudiant: [null, Validators.required]
    

    });
  }
 
  savedata(f:any){
    if(this.formNote.controls['matiere'].value == '' || this.formNote.controls['type'].value == '' || this.formNote.controls['note'].value == '' || this.formNote.controls['etudiant'].value == ''){
      this.valid=false
    }else{
      this.valid=true
    }
    if(!this.valid){
      this.toastr.error('champ vide');
  
      }
      if(this.valid){
        let text= "A new note has been added !"
    this.doct.sendemail(text).subscribe(res=>{
      console.log("enpmmail sent");
      
    })
    this.doct.adddnotes(f).subscribe(
      ()=>{
        
        console.log("add");
    
      },(err)=>{
        this.toastr.success('donnée ajouté');
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

      addfile(event)     
      {    
      this.file= event.target.files[0];     
      let fileReader = new FileReader();    
      fileReader.readAsArrayBuffer(this.file);     
      fileReader.onload = (e) => {    
          this.arrayBuffer = fileReader.result;    
          var data = new Uint8Array(this.arrayBuffer);    
          var arr = new Array();    
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
          var bstr = arr.join("");    
          var workbook = XLSX.read(bstr, {type:"binary"});    
          var first_sheet_name = workbook.SheetNames[0];    
          var worksheet = workbook.Sheets[first_sheet_name];    
          console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
            var arraylist = XLSX.utils.sheet_to_json(worksheet,{raw:true});     
                this.filelist = [];  
                this.filelist=arraylist
                this.filelisttosend=[]
                
                
                this.filelist.forEach(res=>{
                  var note= new notetosend()
                  note.matiere=res['matiere']
                  note.type=res['type']
                  note.note=res['note']
                  note.etudiant=res['etudiant']
                 
                
                  this.filelisttosend.push(note);
                }) 
                console.log(this.filelisttosend);
                
              this.doct.bulkInsert(this.filelisttosend).subscribe((res)=>{
        let text= "A new note has been added !"

                this.doct.sendemail(text).subscribe(res=>{
                  console.log("enpmmail sent");
                  
                })
                console.log("doneeeee");
                
              },(err)=>{
        let text= "A new note has been added !"

                this.toastr.success('fichier ajoutée', 'Form validation!');
                this.doct.sendemail(text).subscribe(res=>{
                  console.log("enpmmail sent");
                  
                })
                setTimeout(() => {
                  if(localStorage.getItem("roleUser")=="enseignant"){
                    window.location.href="#/enseignant/liste" 
                  }else if(localStorage.getItem("roleUser")=="Admin") {
                        window.location.href="#/admin/liste"
                       }
                }, 500);
                })
            
               
               // this.router.navigate([this.path]);
    
    
                 
        
      }    
    } 
  
goback(){
  this.location.back();
}
}
export class notetosend{
  matiere=""
  type=""
  note=""
  etudiant=""
}