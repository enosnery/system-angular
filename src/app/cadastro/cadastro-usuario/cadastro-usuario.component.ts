import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../../components/constants/constants.service';
import {UserListResponse} from '../../components/classes/responses/user-list-response';
import {User} from '../../components/classes/model/user';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

private userList: Array<User>;
private columns: string[] = ['id', 'name', 'login', 'email', 'type' ];

  constructor(private router: Router, private http: HttpClient, private constants: ConstantsService) { }

  ngOnInit() {
    this.http.get<UserListResponse>(this.constants.baseURL + this.constants.userList).subscribe((data) => {
      console.log(data);
      this.userList = data.users;

      }
    );
  }

}
