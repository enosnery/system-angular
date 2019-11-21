import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConstantsService} from '../components/constants/constants.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private constants: ConstantsService, private http: HttpClient) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  ngOnInit() {
  }
  onLogin() {

    this.http.post(this.constants.baseURL + this.constants.login, JSON.stringify('login') , this.httpOptions).subscribe(data => {
      // localStorage.setItem(data.user, 'teste');
      console.log(data);
    } );
    localStorage.setItem('teste', 'teste');
    this.router.navigateByUrl('main', {skipLocationChange: true});
  }

}
