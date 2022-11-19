import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserComponent } from './user/user/user.component';
import { HeaderComponent } from './static/header/header.component';
import { NavComponent } from './static/nav/nav.component';
import { FooterComponent } from './static/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { BreadcrumbsComponent } from './static/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    NotfoundComponent,
    LoginComponent,
    BreadcrumbsComponent,
    SidebarComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
