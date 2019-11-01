import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './page/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { RegisterComponent } from './page/register/register.component';

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
