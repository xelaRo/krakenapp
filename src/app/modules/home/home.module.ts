import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialDesignModule } from 'src/app/shared/material-design/material-design.module';
import { NavComponent } from 'src/app/core/navbar/nav.component';

@NgModule({
  declarations: [HomeRoutingModule.components],
  imports: [
    CommonModule,
    MaterialDesignModule
  ]
})
export class HomeModule { }
