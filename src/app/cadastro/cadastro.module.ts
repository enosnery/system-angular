import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {CadastroRoutingModule} from './cadastro-routing.module';
import {MainPageModule} from '../main/main-page.module';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule, MatSelectModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {CadastroUsuarioDetalheComponent} from './cadastro-usuario/cadastro-usuario-detalhe/cadastro-usuario-detalhe.component';
import {MatFabMenuModule} from '@angular-material-extensions/fab-menu';



@NgModule({
  declarations: [CadastroUsuarioComponent, CadastroUsuarioDetalheComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    MainPageModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatFabMenuModule
  ]
})
export class CadastroModule { }
