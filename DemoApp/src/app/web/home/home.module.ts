import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from '../web.component';

const routes: Routes = [
  { path:'home', 
    component:WebComponent, 
    children:[
      { path:'', 
        component:HomeComponent, 
        outlet:'webOutlet'
      }
    ]
  },
  { path:'**', 
    redirectTo:'home'
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
