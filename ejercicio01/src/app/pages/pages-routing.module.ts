import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { StaticModule } from '../static/static.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './product/list/list.component';
import { FormComponent } from './product/form/form.component';

const routes: Routes = [
  
  {
    path: 'dashboard',
    component: PagesComponent,
    //Rutas hijas
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
        
      },
      {
        path: 'catalogue',
        component: CatalogueComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'form/:id',
        component: FormComponent,
      },
    ],
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StaticModule,
    RouterModule.forChild(routes)
  ]
  //Forchild invoca a los hijos
})
export class PagesRoutingModule { }
