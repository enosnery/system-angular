import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginRequest {
  username: string;
  password: string;
}
