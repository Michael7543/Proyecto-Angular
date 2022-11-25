import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { NotfoundRoutingModule } from './notfound/notfound-routing.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
  //rutas protegidas

];
//routermodule.forRoot :especifica las rutas principales
@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes),
  PagesRoutingModule,AuthRoutingModule,CommonModule],

  exports: [RouterModule],
})
export class AppRoutingModule { }
