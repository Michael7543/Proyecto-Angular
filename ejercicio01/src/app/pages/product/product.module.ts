import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormComponent
    
  ],
  exports:[
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ]
})
export class ProductModule { }
