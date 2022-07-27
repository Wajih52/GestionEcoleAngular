import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { cours } from '../../models/cours';
import { CoursService } from '../../services/cours.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute,Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'listecours',
  templateUrl: './listecours.component.html',
  styleUrls: ['./listecours.component.scss']
})
export class ListecoursComponent implements OnInit {
  pdfSource =  "";
  title = 'ng-bootstrap-modal-demo';
  closeResult:any;
  modalOptions:NgbModalOptions;
  listecours:any;
  currentuser:any;
  
 
  public page = 2;
 
  public pageLabel!: string;
  constructor(private location:Location,private doct:CoursService,
    private toastr: ToastrService,private modalService: NgbModal,private router:Router,private route: ActivatedRoute) { 
      this.modalOptions = {
        backdrop:'static',
        backdropClass:'customBackdrop'
      }
      this.route.paramMap.subscribe(
        params => {

          if(this.router.url.includes('admin')){
            console.log("admin");
            localStorage.setItem("roleUser","Admin")
            this.currentuser='admin'

          }else if(this.router.url.includes('enseignant')){
            console.log("enseignant");
            localStorage.setItem("roleUser","enseignant")
            this.currentuser='enseignant'
          }else{
            console.log("student");
            localStorage.setItem("roleUser","student") 

          }
        }
        
      );
    }

  ngOnInit(): void {
    this.doct.getcours().subscribe(
      res=>{
      this.listecours=res;
      console.log(this.listecours);  
      }
    )
  }
  deletenote(noteid:any,index:any){
  this.doct.delcours(noteid).subscribe(
    res=>{
      this.listecours.splice(index,1)

      
    },(err)=>{
      this.toastr.success('cours supprimée');
      setTimeout(() => {
        if(localStorage.getItem("roleUser")=="enseignant"){
          window.location.href="#/enseignant/listecours" 
        }else if(localStorage.getItem("roleUser")=="Admin") {
              window.location.href="#/admin/listecours"
             } 
        
      }, 500);
      }
  )
  }
  open(content,id) {
    this.doct.getcoursbyid(id).subscribe(res=>{

     let obj:cours=res;
     
      
       this.pdfSource='assets/'+obj.piece.name;
       console.log(this.pdfSource);
       
      // this.pdfSource=obj.piece.name;
      // this.openFile(this.pdfSource);
    })
    this.modalService.open(content, {size:'xl',ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  

  openFile(fileName) {
       window.open("assets/" + fileName);
   }


 
   goback(){
    this.location.back();
  }
}
