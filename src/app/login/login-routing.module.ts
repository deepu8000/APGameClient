import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginUIComponent } from './screens/loginui/loginui.component';
import { RegisterUIComponent } from './screens/registerui/registerui.component';

const routes: Routes = [{
  path: '', component: LoginComponent,pathMatch:'full',
  children: [
    { outlet:'login', path: '' , component: LoginUIComponent},
    { outlet:'login', path: 'register' , component: RegisterUIComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
