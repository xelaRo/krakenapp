import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyService } from 'src/app/core/services/dummy.service';

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

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private storage: DummyService) {   
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
    
    var user: UserModel ={
      userId: 1,
      userName: "aaldea",
      password: "1234",
      email: "alexandru.aldea@allience-healthcare.ro",
      passwordExpiryDate: new Date(),
      token: "123231sadad12a"
    }

    this.storage.addUser(user)
    this.loading = true;

    this.router.navigate(['/home']);
  }
}
