import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import { CustomHeaderComponent } from './components/custom-header/custom-header.component';
import {ConstantsService} from './components/constants/constants.service';
import {HttpClientModule} from '@angular/common/http';
import {UserLoginRequest} from './components/classes/requests/user-login-request';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [ConstantsService, UserLoginRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
