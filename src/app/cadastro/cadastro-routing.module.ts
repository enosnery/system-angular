import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {CadastroUsuarioDetalheComponent} from './cadastro-usuario/cadastro-usuario-detalhe/cadastro-usuario-detalhe.component';


const routes: Routes = [
  { path: 'cadastro/usuario', component: CadastroUsuarioComponent },
  {path: 'cadastro/usuario/:id', component: CadastroUsuarioDetalheComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroRoutingModule { }
