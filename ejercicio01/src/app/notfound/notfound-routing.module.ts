import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound.component';

const routes :  Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {
    path: '**',
    component: NotfoundComponent,
  },
  
]


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class NotfoundRoutingModule { }
