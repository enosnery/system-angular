import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {CustomHeaderComponent} from '../components/custom-header/custom-header.component';
import {MainMenuCardComponent} from '../components/main-menu-card/main-menu-card.component';



@NgModule({
  declarations: [MainComponent, CustomHeaderComponent, MainMenuCardComponent],
  exports: [
    CustomHeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
  ]
})
export class MainPageModule { }
