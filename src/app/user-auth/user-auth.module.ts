import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';



@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SingInComponent
  ]
})
export class UserAuthModule { }
