import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { ServiceAchatService } from 'src/app/services/service-achat.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import { achat } from '../../model/achat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-achat',
  templateUrl: './add-achat.component.html',
  styleUrls: ['./add-achat.component.css'],
  
})
export class AddAchatComponent implements OnInit {
  achat:achat=new achat()
  arrayBuffer: any;
  filelist:any
  filelisttosend:any
  file:any;
  csvRecords=[];
  header: boolean = true;
// @ts-ignore
  formNote: FormGroup
  valid: boolean = false;
  constructor(private s:ServiceAchatService,
    private router:Router ) { }
    

  ngOnInit(): void {
  }
  savedata(f:any){
    if (f.montant!=''&& f.desc!='' && f.date!='' && f.sens!='' && f.qte!='' && f.fournisseur!=''){
      
    
    this.s.addAchat(f).subscribe(
      ()=>{
   console.log(f);
        alert("Achat created successfully.");
       
        if(localStorage.getItem("roleUser")=="enseignant"){
          window.location.href="#/enseignant/afficherAchat" 
        }else if(localStorage.getItem("roleUser")=="Admin") {
              window.location.href="#/admin/afficherAchat"
             }
      }

    );
    }
    else {
      alert("check your form");
    }
  
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
                  var achat= new achattosend()
                  achat.montant=res['montant']
                  achat.sens=res['sens']
                  achat.fournisseur=res['fournisseur']
                  achat.qte=res['qte']
                  achat.desc=res['desc']
                  achat.date=res['date']
                
                  this.filelisttosend.push(achat);
                }) 
                console.log(this.filelisttosend);
                
              this.s.insertAchat(this.filelisttosend).subscribe((res)=>{
        let text= "A new note has been added !"

              });
            }
            alert("Achat created successfully.");
            this.router.navigate(['/afficherAchat']);
          }

}
export class achattosend{
  montant=""
  sens=""
  fournisseur=""
  qte=""
  desc=""
  date=""
}
