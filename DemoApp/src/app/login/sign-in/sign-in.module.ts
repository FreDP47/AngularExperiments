import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login.component';

const routes: Routes=[
  {
    path:'signIn',
    component:LoginComponent,
    children:
    [
      {
        path:'',
        component:SignInComponent,
        outlet:'loginOutlet'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'signIn'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
