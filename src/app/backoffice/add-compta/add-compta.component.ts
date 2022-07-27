import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { compta } from '../../model/compta';
import { ServiceComptaService } from 'src/app/services/service-compta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-add-compta',
  templateUrl: './add-compta.component.html',
  styleUrls: ['./add-compta.component.css']
})
export class AddComptaComponent implements OnInit {
  compta:compta=new compta();
  arrayBuffer: any;
  filelist:any
  filelisttosend:any
  file:any;
  csvRecords=[];
  header: boolean = true;
// @ts-ignore
  formNote: FormGroup
  valid: boolean = false;
  constructor(private s:ServiceComptaService,
    private router:Router ) { }

  ngOnInit(): void {
  }
  savedata(f:any){
    if (f.montant!=''&& f.desc!='' && f.date!='' && f.sens!='' ){
      
    this.s.addCompta(f).subscribe(
      ()=>{
      
        console.log("add");
    
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
                    var compta= new comptatosend()
                    compta.montant=res['montant']
                    compta.sens=res['sens']
                    compta.desc=res['desc']
                    compta.balance=res['balance']
                    compta.date=res['date']
                  
                    this.filelisttosend.push(compta);
                  }) 
                  console.log(this.filelisttosend);
                  
                this.s.insertCompta(this.filelisttosend).subscribe((res)=>{
          let text= "A new note has been added !"
  
                });
              }
              alert("Achat created successfully.");
           
            if(localStorage.getItem("roleUser")=="enseignant"){
              window.location.href="#/enseignant/afficherCompta" 
            }else if(localStorage.getItem("roleUser")=="Admin") {
                  window.location.href="#/admin/afficherCompta"
                 }
            }

}
export class comptatosend{
  montant=""
  sens=""
  desc=""
  balance=""
  date=""
}
