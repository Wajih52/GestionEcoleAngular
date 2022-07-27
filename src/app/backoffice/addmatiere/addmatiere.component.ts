import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { ServiceMatiereService } from 'src/app/services/service-matiere.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import { matiere } from '../../model/matiere';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-matiere',
  templateUrl: './addmatiere.component.html',
  styleUrls: ['./addmatiere.component.css'],
  
})
export class AddMatiereComponent implements OnInit {
  matiere:matiere=new matiere()
  arrayBuffer: any;
  filelist:any
  filelisttosend:any
  file:any;
  csvRecords=[];
  header: boolean = true;
// @ts-ignore
  formNote: FormGroup
  valid: boolean = false;
  constructor(private s:ServiceMatiereService,
    private router:Router ) { }
    

  ngOnInit(): void {
  }
  savedata(f:any){
    
    this.s.addMatiere(f).subscribe(
      ()=>{
      
        alert("matiere created successfully.");
        
        if(localStorage.getItem("roleUser")=="enseignant"){
          window.location.href="#/enseignant/afficherMatiere" 
        }else if(localStorage.getItem("roleUser")=="Admin") {
              window.location.href="#/admin/afficherMatiere"
             }
      }
    );  
 
  
      }


      addfile(event)     {    
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
                  var matiere= new matieretosend()
                  matiere.nom=res['nom']
                  matiere.specialite=res['specialite']
                  matiere.nbrheure=res['nbrheure']
                  
                
                  this.filelisttosend.push(matiere);
                }) 
                console.log(this.filelisttosend);
                
              this.s.insertMatiere(this.filelisttosend).subscribe((res)=>{
        let text= "A new note has been added !"

              });
            }
          }

}
export class matieretosend{
  nom=""
  specialite=""
  nbrheure=""
  
}
