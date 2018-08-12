import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { WebComponent } from '../web.component';

const routes: Routes = [
  {
    path:'contact', 
    component: WebComponent,
    children : [
      {
        path:'',
        component: ContactComponent,
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
  declarations: [ContactComponent]
})
export class ContactModule { }
