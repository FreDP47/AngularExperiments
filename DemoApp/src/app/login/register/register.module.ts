import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login.component';

const routes : Routes=[
  {
    path:'register',
    component:LoginComponent,
    children:[
      {
        path:'',
        component:RegisterComponent,
        outlet:'loginOutlet'
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
