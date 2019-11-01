import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

user: UserModel;
loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    
    // var user: UserModel ={
    //   userId: 1,
    //   userName: "aaldea",
    //   password: "1234",
    //   email: "alexandru.aldea@allience-healthcare.ro",
    //   passwordExpiryDate: new Date(),
    //   token: "123231sadad12a"
    // }

    // this.storage.addUser(user)
    this.loading = true;

    this.router.navigate(['/home']);
  }
}
