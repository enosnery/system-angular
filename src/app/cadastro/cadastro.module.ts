import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {CadastroRoutingModule} from './cadastro-routing.module';
import {MainPageModule} from '../main/main-page.module';
import {MatTableModule} from '@angular/material';



@NgModule({
  declarations: [CadastroUsuarioComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MainPageModule,
    MatTableModule
  ]
})
export class CadastroModule { }
