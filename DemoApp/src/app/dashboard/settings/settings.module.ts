import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path:'settings',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:SettingsComponent,
        outlet:'dashboardOutlet'
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
