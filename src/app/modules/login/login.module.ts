import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { RegisterRoutingModule } from '../register/register-routing.module';

@NgModule({
  declarations: [
    LoginRoutingModule.components
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
