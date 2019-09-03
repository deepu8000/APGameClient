import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // Outlet main
  { outlet: 'main', path: '', redirectTo: '/login', pathMatch: 'full' },
  { outlet: 'main', path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { outlet: 'main', path: 'login', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
