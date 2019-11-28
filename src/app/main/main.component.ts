import { Component, OnInit } from '@angular/core';
import {LoggedUser} from '../components/classes/model/logged-user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loggedUser: LoggedUser;
  constructor( private router: Router) { }

  ngOnInit() {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  }

  goBack() {
  localStorage.clear();
  this.router.navigateByUrl('');
  }

}
