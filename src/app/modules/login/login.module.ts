import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  {
    path: "",
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],
  exports : [LoginComponent],
  entryComponents : [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
