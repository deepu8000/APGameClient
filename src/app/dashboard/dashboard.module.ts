import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './screens/home/home.component';
import { ManageeventComponent } from './screens/manageevent/manageevent.component';
import { EventComponent } from './screens/event/event.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent,EventComponent,ManageeventComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
