import { AuthService } from 'src/app/core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'angular-feather/icons';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  authMessage = 'Email or Password are wrong';
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['Admin@email.com', Validators.required],
      password: ['anis123', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.authService
        .login(this.f.username.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res) {
              const token = this.authService.currentUserValue.token;
              
              if (token && res.user=='admin') {
                this.router.navigate(['/admin/liste']);
              }
             else 
             if (token && res.user=='enseignant') {
                this.router.navigate(['/enseignant/liste']);
              }
              else 
              if (token && res.user=='Student') {
                
                this.router.navigate(['/etudiant/liste']);
                
              }else{
                this.error = 'Invalid Login';

              }

            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
        );
    }
  }
}
 