import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/vmessage/vmessage.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
