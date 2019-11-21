import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly baseURL: string = 'http://192.168.0.147:8084/';
  readonly login: string = 'login';
  readonly userName: string = 'userName';

  constructor() { }
}
