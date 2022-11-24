import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule
  ]
})
export class StaticRoutingModule { }
