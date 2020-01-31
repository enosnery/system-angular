import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {CadastroRoutingModule} from './cadastro-routing.module';
import {MainPageModule} from '../main/main-page.module';
import {MatIconModule, MatPaginatorModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {CadastroUsuarioDetalheComponent} from './cadastro-usuario/cadastro-usuario-detalhe/cadastro-usuario-detalhe.component';



@NgModule({
  declarations: [CadastroUsuarioComponent, CadastroUsuarioDetalheComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MainPageModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class CadastroModule { }
