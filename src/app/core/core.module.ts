import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalApiService } from './services/local-api.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers:[
    LocalApiService,
    UserService
  ]
})
export class CoreModule { }
