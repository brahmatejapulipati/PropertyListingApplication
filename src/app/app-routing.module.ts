import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  } from "./modules/dashboard/dashboard.module";
import { ProfileComponent } from './modules/profile/profile.component';


const routes: Routes = [
  {
    path : "",
    loadChildren : "./modules/dashboard/dashboard.module#DashboardModule",
  },
  {
    path : "login-dashboard",
    loadChildren : "./modules/login-dashboard/login-dashboard.module#LoginDashboardModule"
  },
  {
    path : "profile",
    component : ProfileComponent
  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
