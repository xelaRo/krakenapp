import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './navbar/nav.component';
import { DummyService } from './services/dummy.service';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, StorageServiceModule 
  ],
  providers:[
    DummyService
  ]
})
export class CoreModule { }
