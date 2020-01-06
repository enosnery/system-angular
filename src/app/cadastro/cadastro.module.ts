import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {CadastroRoutingModule} from './cadastro-routing.module';



@NgModule({
  declarations: [CadastroUsuarioComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
