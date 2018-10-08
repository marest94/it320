import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/authentication/login/login.component';
import { ForgotPasswordComponent } from '../pages/authentication/forgot-password/forgot-password.component';
import { RegisterComponent } from '../pages/authentication/register/register.component';
import { SearchComponent } from '../pages/user/search/search.component';
import { EditProfileComponent } from '../pages/user/edit-profile/edit-profile.component';
import { ReportsComponent } from '../pages/admin/reports/reports.component';
import { UsersComponent } from '../pages/admin/users/users.component';
import { AuthenticationService } from '../services/authentication.service';


const routes: Routes = [
  {path : '', component : LoginComponent},
  {path: 'reset-password', component : ForgotPasswordComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'user/search', component : SearchComponent, canActivate: [AuthenticationService],
},
  {path: 'user/edit-profile', component : EditProfileComponent,     canActivate: [AuthenticationService],
},
  {path: 'admin/reports', component : ReportsComponent,     canActivate: [AuthenticationService],
},
  {path: 'admin/users', component : UsersComponent,     canActivate: [AuthenticationService],
}



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
