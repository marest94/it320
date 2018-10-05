import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/authentication/login/login.component';
import { ForgotPasswordComponent } from '../pages/authentication/forgot-password/forgot-password.component';
import { RegisterComponent } from '../pages/authentication/register/register.component';


const routes: Routes = [
  {path : '', component : LoginComponent},
  {path: 'reset_password', component : ForgotPasswordComponent},
  {path: 'register', component : RegisterComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
