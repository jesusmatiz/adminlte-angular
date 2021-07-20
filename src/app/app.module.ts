import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './@shared/adminlte/header/header.component';
import { SidebarComponent } from './@shared/adminlte/sidebar/sidebar.component';
import { FooterComponent } from './@shared/adminlte/footer/footer.component';
import { AppRoutingModule } from './app.routing';
import { PagesComponent } from './pages/pages.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PagesComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
