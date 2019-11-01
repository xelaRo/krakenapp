import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors } from 'src/app/models/error';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user: UserModel;
loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;
errors: Errors = {errors: {}};

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userSerivce: UserService) {   
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) {
      //     this.router.navigate(['/']);
      // }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.userSerivce
    .attemptLogin(this.loginForm.value)
    .subscribe(
      data => {
        console.log(data),
        this.router.navigate(['/home'])},
      err => {
          this.errors = err;
      });

    //this.loading = true;
  }
}
