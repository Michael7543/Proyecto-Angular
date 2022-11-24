import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound.component';



@NgModule({
  declarations: [
    NotfoundComponent
    
  ],
  exports:[
    NotfoundComponent

  ],
  imports: [
    CommonModule
  ]
})
export class NotfoundModule { }
