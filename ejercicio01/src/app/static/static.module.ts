import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StaticComponent } from './static.component';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SidebarComponent,
  ],
  exports:[
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class StaticModule { }
