import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from '../web.component';

const routes: Routes = [
  {
    path:'about', 
    component:WebComponent,
    children:[
      {
        path:'',
        component:AboutComponent,
        outlet:'webOutlet'
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
