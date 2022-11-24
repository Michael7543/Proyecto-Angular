import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './user/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
import { NotfoundModule } from './notfound/notfound.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PagesComponent,
    AuthComponent
    
  ],
  //imports siempre van los modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    StaticModule,
    NotfoundModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
