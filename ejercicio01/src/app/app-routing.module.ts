import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CommonModule } from '@angular/common';
import { NotfoundRoutingModule } from './notfound/notfound-routing.module';


const routes: Routes = [
  
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},//ruta por defecto
 


];
//routermodule.forRoot :especifica las rutas principales
@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes),
  PagesRoutingModule,AuthRoutingModule,NotfoundRoutingModule,CommonModule],

  exports: [RouterModule],
})
export class AppRoutingModule { }
