import {LoggedUser} from '../model/logged-user';

export interface LoginResponse {
  code: number;
  message: string;
  user: LoggedUser;
}
