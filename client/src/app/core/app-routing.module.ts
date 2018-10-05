import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/authentication/login/login.component';
import { ForgotPasswordComponent } from '../pages/authentication/forgot-password/forgot-password.component';
import { RegisterComponent } from '../pages/authentication/register/register.component';
import { SearchComponent } from '../pages/user/search/search.component';
import { EditProfileComponent } from '../pages/user/edit-profile/edit-profile.component';


const routes: Routes = [
  {path : '', component : LoginComponent},
  {path: 'reset-password', component : ForgotPasswordComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'search', component : SearchComponent},
  {path: 'edit-profile', component : EditProfileComponent}


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
