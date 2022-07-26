import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DatatableComponent, id } from '@swimlane/ngx-datatable';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { UserService } from '../authentication/service/user.service';
import { User } from '../authentication/service/user';

@Component({
  selector: 'app-advance-table',
  templateUrl: './advance-table.component.html',
  styleUrls: ['./advance-table.component.sass'],
  providers: [ToastrService],
})
export class AdvanceTableComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  rows = [];
  scrollBarHorizontal = window.innerWidth < 1200;
  selectedRowData: selectRowInterface;
  newUserImg = 'assets/images/users/user-2.png';
  data = [];
  filteredData = [];
  editForm: FormGroup;
  register: FormGroup;
  loadingIndicator = true;
  isRowSelected = false;
  selectedOption: string;
  reorderable = true;
  public selected: any[] = [];
  columns = [
    { name: 'First Name' },
    { name: 'Last Name' },
    { name: 'Designation' },
    { name: 'Gender' },
    { name: 'Phone' },
    { name: 'Email' },
    { name: 'Status' },
    { name: 'Address' },
  ];
  genders = [
    { id: '1', value: 'male' },
    { id: '2', value: 'female' },
  ];
  statusType = [
    { id: '1', value: 'Active' },
    { id: '2', value: 'Completed' },
    { id: '3', value: 'Pending' },
  ];
  designationType = [
    { id: '1', value: 'Admin' },
    { id: '2', value: 'Teacher' },
    { id: '3', value: 'Student' },
  ];
  @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
  constructor(
    private s: UserService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {
    this.editForm = this.fb.group({
      id: new FormControl(),
      img: new FormControl(),
      name: new FormControl(),
      password: new FormControl(),
      role: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      status: new FormControl(),
      gender: new FormControl(),
      adress: new FormControl(),
    });
    window.onresize = () => {
      this.scrollBarHorizontal = window.innerWidth < 1200;
    };
  }
  // select record using check box
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if (this.selected.length === 0) {
      this.isRowSelected = false;
    } else {
      this.isRowSelected = true;
    }
  }
  deleteSelected() {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.selected.forEach((row) => {
          this.deleteRecord(row);
        });
        this.deleteRecordSuccess(this.selected.length);
        this.selected = [];
        this.isRowSelected = false;
      }
    });
  }
  ngOnInit() {
    this.fetch((data) => {
      this.data = data;
      this.filteredData = data;
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
    this.register = this.fb.group({
      id: [''],
      img: [''],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      password: [''],
      role: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [  
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      status: [''],
      address: [''],
    });
  }
  // fetch data
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3001/api/v1/users/');
    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };
    req.send();
  }
 

  // add new record
  addRow(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.register.patchValue({
      id: this.getId(10, 100),
      img: this.newUserImg,
    });
  }
  // edit record
  editRow(row, rowIndex, content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
    });
    this.editForm.patchValue({
      id: row.id,
      img: row.img,
      name: row.name,
      password: row.password,
      role: row.role,
      phone: row.phone,
      email: row.email,
      gender: row.gender,
      status: row.status,
      adress: row.adress,
    });
    this.selectedRowData = row;
  }
  // delete single row
  deleteSingleRow(row) {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#8963ff',
      cancelButtonColor: '#fb7823',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {

        this.deleteRecord(row);
        this.deleteRecordSuccess(1);
      }
    });
  }

  deleteRecord(row) {
    this.s.deluser(row.id).subscribe(
      ()=>{
        console.log('user deleted !');
      })
    this.data = this.arrayRemove(this.data, row.id);
  }
  arrayRemove(array, id) {
    return array.filter(function (element) {
      return element.id !== id;
    });
  }
  // save add new record
  onAddRowSave(form: FormGroup) {
    //this.data.push(form.value);
    //this.data = [...this.data];

      this.s.adduser(form.value).subscribe(
        ()=>{
         console.log('user Add Success !')
        })
    
    form.reset();
    this.modalService.dismissAll();
    this.addRecordSuccess();
  }
  // save record on edit






  onEditSave(form: FormGroup) {

    this.s.updateuser('62bf3534e164ab3184941a96',form.value).subscribe(
      ()=>{
    
        this.editRecordSuccess();
       console.log('user updated Success !')
      })
  
   
  }




  onEditSaverown(form: FormGroup) {

    this.s.updateuser('62bf3534e164ab3184941a96',form.value).subscribe(
      ()=>{
        this.data = this.data.filter((value, key) => {
          if (value.id == form.value.id) {
            value.name = form.value.name;
            value.password = form.value.password;
            value.role = form.value.role;
            value.phone = form.value.phone;
            value.gender = form.value.gender;
            value.email = form.value.email;
            value.status = form.value.status;
            value.adress = form.value.adress;
          }
          this.modalService.dismissAll();
          return true;
        });
        this.editRecordSuccess();
       console.log('user updated Success !')
      })
  
   
  }
  // filter table data
  filterDatatable(event) {
    // get the value of the key pressed and make it lowercase
    const val = event.target.value.toLowerCase();
    // get the amount of columns in the table
    const colsAmt = this.columns.length;
    // get the key names of each column in the dataset
    const keys = Object.keys(this.filteredData[0]);
    // assign filtered matches to the active datatable
    this.data = this.filteredData.filter(function (item) {
      // iterate through each row's column data
      for (let i = 0; i < colsAmt; i++) {
        // check for a match
        if (
          item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
          !val
        ) {
          // found match, return true to add to result set
          return true;
        }
      }
    });
    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  // get random id
  getId(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  addRecordSuccess() {
    this.toastr.success('Add Record Successfully', '');
  }
  editRecordSuccess() {
    this.toastr.success('Edit Record Successfully', '');
  }
  deleteRecordSuccess(count) {
    this.toastr.error(count + ' Records Deleted Successfully', '');
  }
}
export interface selectRowInterface {
  img: String;
  firstName: String;
  lastName: String;
}
