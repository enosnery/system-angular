import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantsService} from '../../../components/constants/constants.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../components/classes/model/user';
import {UserDetailResponse} from '../../../components/classes/responses/user-detail-response';
import {ToastrService} from 'ngx-toastr';
import {GeneralResponse} from '../../../components/classes/responses/general-response';

@Component({
  selector: 'app-cadastro-usuario-detalhe',
  templateUrl: './cadastro-usuario-detalhe.component.html',
  styleUrls: ['./cadastro-usuario-detalhe.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CadastroUsuarioDetalheComponent implements OnInit {
  private id: number;
  private sub: any;
  private user: User;
  constructor(private http: HttpClient, private constants: ConstantsService, private router: Router,
              private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = + params.id;
      this.http.get<UserDetailResponse>(this.constants.baseURL + this.constants.userDetail + this.id).subscribe((data) => {
        console.log(data);
        this.user = data.userDetail;
      });
    });
  }

  deleteUser() {
    this.http.delete<GeneralResponse>(this.constants.baseURL + this.constants.userDelete + this.id).subscribe((data) => {
      this.toastr.info(data.message).onHidden.subscribe(() => {
        this.router.navigate(['cadastro/usuario', {skipLocationChange: true}]);
      });
    });
  }

}
