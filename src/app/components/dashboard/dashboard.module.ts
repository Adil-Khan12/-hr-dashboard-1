import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { SummaryStatusComponent } from './summary-status/summary-status.component';


@NgModule({
  declarations: [
    RecentActivitiesComponent,
    SummaryStatusComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    SummaryStatusComponent,
    RecentActivitiesComponent
  ]
})
export class DashboardModule { }
