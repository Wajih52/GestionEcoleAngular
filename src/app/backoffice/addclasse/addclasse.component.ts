import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { ServiceClasseService } from 'src/app/services/service-classe.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import { classe } from '../../model/classe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addclasse',
  templateUrl: './addclasse.component.html',
  styleUrls: ['./addclasse.component.css']
})
export class AddclasseComponent implements OnInit {

  classe:classe=new classe()
  arrayBuffer: any;
  filelist:any
  filelisttosend:any
  file:any;
  csvRecords=[];
  header: boolean = true;
// @ts-ignore
  formNote: FormGroup
  valid: boolean = false;
  constructor(private s:ServiceClasseService,
    private router:Router ) { }
    

  ngOnInit(): void {
  }
  savedata(f:any){
    
    this.s.addClasse(f).subscribe(
      ()=>{
      
        alert("classe created successfully.");
     
        if(localStorage.getItem("roleUser")=="enseignant"){
          window.location.href="#/enseignant/afficheClasse" 
        }else if(localStorage.getItem("roleUser")=="Admin") {
              window.location.href="#/admin/afficheClasse"
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
                  var classe= new classetosend()
                  classe.nom=res['nom']
                  classe.nbretudiant=res['nbretudiant']
                  classe.nbrprof=res['nbrprof']
                  classe.specialite=res['specialite']
                  classe.nbrmatiere=res['nbrmatiere']
                  
                
                  this.filelisttosend.push(classe);
                }) 
                console.log(this.filelisttosend);
                
              this.s.insertClasse(this.filelisttosend).subscribe((res)=>{
        let text= "A new note has been added !"

              });
            }
          }

}
export class classetosend{
  nom=""
  nbretudiant=""
  nbrprof=""
  specialite=""
  nbrmatiere=""
  
}
