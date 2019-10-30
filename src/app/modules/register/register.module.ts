import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterRoutingModule.components],
  imports: [
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
