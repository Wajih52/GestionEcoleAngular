import { Component, OnInit } from '@angular/core';
import { notesService } from '../../services/notes.service';
import {Router,ActivatedRoute} from "@angular/router";

import { ToastrService } from 'ngx-toastr';
import * as fs from 'file-saver';
import { Workbook } from 'exceljs';
import {Location} from '@angular/common'

@Component({
  selector: 'listenotes',
  templateUrl: './listenotes.component.html',
  styleUrls: ['./listenotes.component.scss']
})
export class ListenotesComponent implements OnInit {

  active;
  listenote:any;
  arrayUniqueByKey:any;
  list1=[]
  list2=[]
  list3=[]
  showmatiere=false
  shownote=false
  showfilter=false
  
  constructor(private location:Location,private router:Router,private route: ActivatedRoute,private doct:notesService,private toastr: ToastrService) {
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
          localStorage.setItem("roleUser","Student") 
        }
      }
      
    );
   }
  
    ngOnInit(): void {
      this.doct.getnotes().subscribe(
        res=>{
        this.listenote=res;
        this.distinctlist()
        console.log(this.listenote);  
        }
      )
    }
    deletenote(noteid:any,index:any){
    this.doct.delnotes(noteid).subscribe(
      res=>{
        this.listenote.splice(index,1)
        
      },(err)=>{
        this.toastr.success('note supprimée');
        setTimeout(() => {
        window.location.href="/liste" 
          
        }, 500);
        }
    )
    // window.location.href="/liste" 
    }
    selectOption(type: any) {
      //getted from event
      console.log(type);
      //getted from binding
      this.doct.listbyType(type,this.listenote).subscribe(res=>{
        console.log(res);
        this.list1=res
        this.showmatiere=true
      })
  
    }
    selectOption2(matiere: any) {
      //getted from event
      console.log(matiere);
      //getted from binding
      this.doct.listbyMatiere(matiere,this.list1).subscribe(res=>{
        console.log(res);
        this.list2=res
        this.shownote=true
        
      })
    }
    selectOption3(note: any) {
      this.list3=[]
      //getted from event
      console.log(note);
      if(note=="+10"){
        this.list2.forEach(res=>{
          // console.log(res);
          // @ts-ignore
          if(res.note > 10){
            this.list3.push(res)
          }
        })
        this.showfilter=true
      }else{
        this.list2.forEach(res=>{
          // console.log(res);
          // @ts-ignore
          if(res.note <= 10){
            this.list3.push(res)
          }
        })
        this.showfilter=true
      }
      
  
    }
    filter(){
      this.listenote=this.list3
    }
     //  calculer moyenne par matière
     moyenneByMatiere(matiere:any,etudiant:any){
      this.doct.getmoyennebyMatiere(matiere,etudiant,this.listenote).subscribe(res=>{
        return res;
      })
    }
    filllistmoy(){
      let moy:any[]=[]
      this.listenote.forEach(elem=>{
        this.doct.getmoyennebyMatiere(elem.matiere,elem.etudiant,this.listenote).subscribe(res=>{
          moy.push(res)
        })
      //  let value= this.moyenneByMatiere(elem.matiere,elem.etudiant)
       
      })
      return moy;
      
    }
    exportexcel(){
      this.doct.exportexcel(this.listenote).subscribe(res=>{
        console.log("done");
        
      })
    }
    exportExcel() {
   
      let workbook = new Workbook();
      let worksheet = workbook.addWorksheet('ProductSheet');
     
      worksheet.columns = [
        { header: 'matiere', key: 'matiere', width: 10 },
        { header: 'type', key: 'type', width: 32 },
        { header: 'note', key: 'note', width: 10 },
        { header: 'etudiant', key: 'etudiant', width: 10 }
      ];
     
      this.listenote.forEach(e => {
        worksheet.addRow({matiere: e.matiere, type: e.type, note:e.note, etudiant:e.etudiant },"n");
      });
     
      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, 'ProductData.xlsx');
      })
     
    }
    distinctlist(){
      let newlist:moyenne[]=[]
    let listemoyenne= this.filllistmoy()
    console.log(listemoyenne);
    setTimeout(() => {
      for(let i=0;i<this.listenote.length;i++){
        let moy= new moyenne()
        moy.matiere=this.listenote[i].matiere
        moy.etudiant=this.listenote[i].etudiant
        moy.moyenne=listemoyenne[i]
        newlist.push(moy)
      }
      const key = 'matiere';
  
  this.arrayUniqueByKey = [...new Map(newlist.map(item =>
    [item[key], item])).values()];
      console.log(this.arrayUniqueByKey);
    }, 2000);
      
      
  
    }
 
goback(){
  this.location.back();
} 
  }
  export class moyenne{
    matiere:any=''
    etudiant:any=''
    moyenne:any=''
  }
  