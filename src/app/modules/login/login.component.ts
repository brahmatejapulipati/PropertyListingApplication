import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { encode } from 'punycode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginGroup: FormGroup;

  constructor(public _dialogRef: MatDialogRef<LoginComponent>, private _buildForm: FormBuilder) { }

  ngOnInit() {
    this.loginGroup = this._buildForm.group({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  onLogin() {
    if (this.loginGroup.valid) {
      console.log(this.loginGroup.value);
      window.localStorage.setItem('loginInfo',JSON.stringify(this.loginGroup.value));
      this._dialogRef.close({
        data: { loggedIn: true, loginInfo : this.loginGroup.value }
      });
    }
  }

}
