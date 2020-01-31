import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../../components/constants/constants.service';
import {UserListResponse} from '../../components/classes/responses/user-list-response';
import {User} from '../../components/classes/model/user';
import {UserListItem} from '../../components/classes/model/user-list-item';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

private userList: Array<UserListItem>;
private currentUserList: Array<UserListItem>;
private listSize: number;
private pageSize: 10;
private columns: string[] = ['id', 'name', 'login', 'type', 'action' ];
private pageEvent: PageEvent;

  constructor(private router: Router, private http: HttpClient, private constants: ConstantsService) { }

  ngOnInit() {
    this.http.get<UserListResponse>(this.constants.baseURL + this.constants.userList).subscribe((data) => {
      console.log(data);
      this.userList = data.users;
      this.listSize = this.userList.length;
      this.currentUserList = this.userList.slice(0, 1);

      }
    );
  }

  goToDetail(variabl) {
    alert(variabl);
  }

  updateList(event) {
    this.pageEvent = event;
    this.currentUserList = this.userList.slice(0, this.pageEvent.pageSize);
  }

}
