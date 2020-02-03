import {User} from '../model/user';

export interface UserDetailResponse {
  code: number;
  userDetail: User;
}
