import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from './core/material-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout'
import { LoginComponent } from './pages/authentication/login/login.component';
import { AppRoutingModule } from './core/app-routing.module';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
