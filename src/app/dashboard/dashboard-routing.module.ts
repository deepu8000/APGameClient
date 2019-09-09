import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './screens/home/home.component';
import { ManageeventComponent } from './screens/manageevent/manageevent.component';
import { EventComponent } from './screens/event/event.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    { path: '' , component: HomeComponent},
    { path: 'event/:id' , component: EventComponent},
    { path: 'manageevent/:id' , component: ManageeventComponent},
    { path: 'home' , component: HomeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
