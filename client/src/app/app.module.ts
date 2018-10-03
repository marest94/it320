import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from './material/material-component.module';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout'
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
