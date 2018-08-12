import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginNavBarComponent } from './login-nav-bar/login-nav-bar.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ForgotPwdModule } from './forgot-pwd/forgot-pwd.module';
import { RegisterModule } from './register/register.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ForgotPwdModule,
    RegisterModule,
    SignInModule
  ],
  declarations: [LoginComponent, LoginNavBarComponent]
})
export class LoginModule { }
