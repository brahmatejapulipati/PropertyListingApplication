import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from '../common/material.module';
import { HttpClientModule } from '@angular/common/http';


const route: Routes = [
    {
      path: "",
      component: DashboardComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    HttpClientModule
  ],
  declarations: [DashboardComponent],
  exports : [DashboardComponent],
})
export class DashboardModule { }
