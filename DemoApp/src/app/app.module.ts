import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  {path:'login',loadChildren:'./login/login.module#LoginModule'},
  {path:'',loadChildren:'./web/web.module#WebModule'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
