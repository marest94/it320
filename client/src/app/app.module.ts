import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from './core/material-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './pages/authentication/login/login.component';
import { AppRoutingModule } from './core/app-routing.module';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { SearchComponent } from './pages/user/search/search.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { ReportsComponent } from './pages/admin/reports/reports.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    SearchComponent,
    EditProfileComponent,
    ReportsComponent,
    UsersComponent,
    ReportsComponent
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
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
