import { AuthService } from 'src/app/core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.sass'],
})
export class ForgotComponent implements OnInit {
    ForgForm: FormGroup;
    submitted = false;
    constructor(
      private authService: UserService
    ) {}

  ngOnInit(): void {}


  onSubmit() {
 
      this.authService
        .resetpass('yassinetayachi71@gmail.com')
        .subscribe(
          (res) => {
            if (res) {
             console.log(res);

            }
          },
          (error) => {
           console.log(error);
            this.submitted = false;
          }
        );
    }
  }

