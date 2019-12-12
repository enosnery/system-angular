import {MenuItem} from '../model/menu-item';

export interface MenuList {
  code: number;
  message: string;
  list: Array<MenuItem>;
}
