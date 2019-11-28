import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConstantsService} from '../components/constants/constants.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLoginRequest} from '../components/classes/requests/user-login-request';
import {LoginResponse} from '../components/classes/responses/login-response';
import {ToastrService} from 'ngx-toastr';
import {LoggedUser} from '../components/classes/model/logged-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private inputUsername = '';
  private inputPassword = '';
  private message = '';
  loggedUser: LoggedUser;

  constructor(private router: Router, private constants: ConstantsService, private http: HttpClient, private user: UserLoginRequest,
              private toastr: ToastrService) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  ngOnInit() {
    if (localStorage.length > 0) {
      this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      if (this.loggedUser.token !== undefined && this.loggedUser.token !== '') {
        this.router.navigateByUrl('main', {skipLocationChange: true});
      }
    }
  }
  onLogin() {
  if (this.inputUsername === '') {
    this.toastr.error('Favor preencher os campos obrigatórios');
    return;
  }
  if (this.inputPassword === '') {
    this.toastr.error('Favor preencher os campos obrigatórios');
    return;
  }
  this.message = '';
  this.user = new UserLoginRequest();
  this.user.username = this.inputUsername;
  this.user.password = this.inputPassword;
  console.log(JSON.stringify(this.user));
  this.http.post<LoginResponse>(this.constants.baseURL + this.constants.login, JSON.stringify(this.user) , this.httpOptions)
    .subscribe(data => {
      console.log(data);
      if (data.code === 1 ) {
        const loggedUser = data.user;
        localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        this.router.navigateByUrl('main', {skipLocationChange: true});
      } else if (data.code === 0) {
        this.toastr.error(data.message);
        this.inputPassword = '';
      }
    });
  }

}
