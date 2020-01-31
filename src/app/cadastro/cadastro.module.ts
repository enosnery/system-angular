import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {CadastroRoutingModule} from './cadastro-routing.module';
import {MainPageModule} from '../main/main-page.module';
import {MatIconModule, MatPaginatorModule, MatTableModule} from '@angular/material';



@NgModule({
  declarations: [CadastroUsuarioComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MainPageModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class CadastroModule { }
