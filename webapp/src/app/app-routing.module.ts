import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './helpers/auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {BrokerRegisterComponent} from './broker-register/broker-register.component';
import {VerifyEmailComponent} from './verify-email/verify-email.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  // {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'registerbroker', component: BrokerRegisterComponent, canActivate: [AuthGuard]},
  {path: 'verifyEmail', component: VerifyEmailComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
