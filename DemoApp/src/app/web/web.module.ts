import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponent } from './web.component';
import { NavbuttonsComponent } from './navbuttons/navbuttons.component';
//import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
//import { AboutComponent } from './about/about.component';
//import { ContactComponent } from './contact/contact.component';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';
import { ContactModule } from './contact/contact.module';

// const routes: Routes=[
//   {
//     path:'home',component:WebComponent,children:[
//       {path:'',component: HomeComponent,outlet:'webOutlet'}
//     ]
//   },
//   {
//     path:'about',component:WebComponent,children:[
//       {path:'',component: AboutComponent,outlet:'webOutlet'}
//     ]
//   },
//   {
//     path:'contact',component:WebComponent,children:[
//       {path:'',component: ContactComponent,outlet:'webOutlet'}
//     ]
//   }
// ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContactModule,
    AboutModule,
    HomeModule
  ],
  declarations: [
    WebComponent, 
    NavbuttonsComponent 
    //HomeComponent,
    //AboutComponent,
    //ContactComponent
  ]
})
export class WebModule { }
