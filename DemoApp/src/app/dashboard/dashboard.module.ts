import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavBarComponent } from './dashboard-nav-bar/dashboard-nav-bar.component';
import { RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SettingsModule,
    ProfileModule
  ],
  declarations: [DashboardComponent,DashboardNavBarComponent]
})
export class DashboardModule { }
