import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    HeaderModule,
    SignupModule
  ]
})
export class CoreModule { }
