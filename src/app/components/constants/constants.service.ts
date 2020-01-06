import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly baseURL: string = 'http://localhost:8084/';
  readonly login: string = 'login';
  readonly menuList: string = 'menu';
  readonly userName: string = 'userName';
  readonly loggedUser: string = 'loggedUser';
  readonly menuItems: string = 'menuItems';

  constructor() { }
}
