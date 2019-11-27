import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly baseURL: string = 'http://localhost:8084/';
  readonly login: string = 'login';
  readonly userName: string = 'userName';

  constructor() { }
}
