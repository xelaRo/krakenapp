import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/animations';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';

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
