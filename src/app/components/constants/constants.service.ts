import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  // General Constants
  readonly baseURL: string = 'http://localhost:8084/';

  // Login
  readonly login: string = 'login';

  // Menu
  readonly menuList: string = 'menu';
  readonly menuItems: string = 'menuItems';

  // User
  readonly userName: string = 'userName';
  readonly loggedUser: string = 'loggedUser';
  readonly userList: string = 'users/list';

  constructor() { }
}
