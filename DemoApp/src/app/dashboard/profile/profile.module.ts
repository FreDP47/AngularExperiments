import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';

const routes: Routes=[
  {
    path:'profile', 
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:ProfileComponent,
        outlet:'dashboardOutlet'
      }
    ]
  },
  { path:'**', 
    redirectTo:'profile'
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
