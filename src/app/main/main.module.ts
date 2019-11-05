import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {CustomHeaderComponent} from '../components/custom-header/custom-header.component';


@NgModule({
  declarations: [MainComponent, CustomHeaderComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ]
})
export class MainModule { }
