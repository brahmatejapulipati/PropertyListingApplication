import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  loggedInUserName : string = 'Hello, SignIn ';

  constructor(private _route: Router, private _dialog: MatDialog) { }

  ngOnInit() {
  }

  onLogin() {
    const dialogRef = this._dialog.open(LoginComponent, {
      width: '800px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res.data && res.data.loggedIn) {
        this.isLoggedIn = true;
        this.loggedInUserName = 'Hello, ' + res.data.loginInfo.userName + ' ';
        this._route.navigate(['/login-dashboard']);
      }
    });
  }

  onLogout() {
    window.localStorage.removeItem('loginInfo');
    this.isLoggedIn = false;
    this.loggedInUserName = 'Hello, SignIn ';
    this._route.navigate(['']);
  }


}
