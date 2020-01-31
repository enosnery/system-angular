import {UserListItem} from '../model/user-list-item';

export interface UserListResponse {
  code: number;
  users: Array<UserListItem>;
}
