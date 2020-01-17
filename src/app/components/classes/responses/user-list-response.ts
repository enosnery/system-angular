import {User} from '../model/user';

export interface UserListResponse {
  code: number;
  users: Array<User>;
}
