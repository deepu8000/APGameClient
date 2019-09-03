import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginUIComponent } from './screens/loginui/loginui.component';
import { RegisterUIComponent } from './screens/registerui/registerui.component';


@NgModule({
  declarations: [LoginComponent, LoginUIComponent, RegisterUIComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
