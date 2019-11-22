import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConstantsService} from '../components/constants/constants.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserLoginRequest } from '../components/classes/requests/user-login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private inputUsername = '';
  private inputPassword = '';

  constructor(private router: Router, private constants: ConstantsService, private http: HttpClient, private user: UserLoginRequest) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  ngOnInit() {
  }
  onLogin() {
  this.user = new UserLoginRequest();
  this.user.username = this.inputUsername;
  this.user.password = this.inputPassword;
  console.log(JSON.stringify(this.user));
  this.http.post(this.constants.baseURL + this.constants.login, JSON.stringify(this.user) , this.httpOptions).subscribe(data => {
    // localStorage.setItem(data.user, 'teste');
    console.log(data);
    if (data.code === 0 ) {
        alert(data.message);
      }
    } );
    // localStorage.setItem('teste', 'teste');
    // this.router.navigateByUrl('main', {skipLocationChange: true});
  }

}
