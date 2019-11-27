import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MatButtonModule, MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ToastContainerModule} from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ToastContainerModule
  ]
})
export class LoginModule { }
