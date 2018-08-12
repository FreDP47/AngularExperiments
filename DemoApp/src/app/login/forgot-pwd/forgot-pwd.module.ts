import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPwdComponent } from './forgot-pwd.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login.component';

const routes: Routes =[
  {
    path:'forgotPwd',
    component:LoginComponent,
    children:[
      {
        path:'',
        component:ForgotPwdComponent,
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
  declarations: [ForgotPwdComponent]
})
export class ForgotPwdModule { }
