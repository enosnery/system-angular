import { Component, OnInit } from '@angular/core';
import {LoggedUser} from '../components/classes/model/logged-user';
import {Router} from '@angular/router';
import {MenuItem} from '../components/classes/model/menu-item';
import {LoginResponse} from '../components/classes/responses/login-response';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConstantsService} from '../components/constants/constants.service';
import {MenuList} from '../components/classes/responses/menu-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loggedUser: LoggedUser;
  // menuList: Array<MenuItem>;
  constructor( private router: Router, private http: HttpClient, private constants: ConstantsService) { }

  ngOnInit() {
  this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  // this.menuList = JSON.parse(localStorage.getItem('menuItems'));
  }


}
