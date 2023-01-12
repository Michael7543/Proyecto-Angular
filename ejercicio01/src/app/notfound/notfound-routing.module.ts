import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound.component';
import { PagesComponent } from '../pages/pages.component';
import { PagesModule } from '../pages/pages.module';

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
    PagesModule,
    RouterModule.forRoot(routes)
  ]
})
export class NotfoundRoutingModule { }
