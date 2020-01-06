import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ConstantsService} from '../components/constants/constants.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserLoginRequest} from '../components/classes/requests/user-login-request';
import {LoginResponse} from '../components/classes/responses/login-response';
import {ToastrService} from 'ngx-toastr';
import {LoggedUser} from '../components/classes/model/logged-user';
import {MenuList} from '../components/classes/responses/menu-list';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private inputUsername = '';
  private inputPassword = '';
  private message = '';
  private isLogging = false;
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
  this.isLogging = true;
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
  setTimeout(() => {}, 3000);
  this.http.post<LoginResponse>(this.constants.baseURL + this.constants.login, JSON.stringify(this.user) , this.httpOptions)
    .subscribe(data => {
      console.log(data);
      if (data.code === 1 ) {
        const loggedUser = data.user;
        localStorage.setItem(this.constants.loggedUser, JSON.stringify(loggedUser));
        this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.loggedUser.token
          })
        };
        this.http.get<MenuList>(this.constants.baseURL + this.constants.menuList, httpOptions)
          .subscribe(response => {
           localStorage.setItem(this.constants.menuList, JSON.stringify(response.list));
           this.router.navigateByUrl('main', {skipLocationChange: true});
          });
      } else if (data.code === 0) {
        this.toastr.error(data.message);
        this.inputPassword = '';
      }
      this.isLogging = false;
    });
  }

}
