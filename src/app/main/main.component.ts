import { Component, OnInit } from '@angular/core';
import {LoggedUser} from '../components/classes/model/logged-user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loggedUser: LoggedUser;
  constructor() { }

  ngOnInit() {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  goBack() {

  }

}
