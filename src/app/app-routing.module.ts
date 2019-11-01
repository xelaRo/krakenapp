import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/page/login/login.component';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  { path: '',pathMatch:"full", redirectTo: "/login" },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
