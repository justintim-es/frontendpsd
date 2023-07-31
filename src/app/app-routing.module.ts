import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { DashboardComponent } from './routs/dashboard/dashboard.component';
import { LandingComponent } from './routs/landing/landing.component';
import { LoginComponent } from './routs/login/login.component';
import { OnboardCompleteComponent } from './routs/onboard-complete/onboard-complete.component';
import { OnboardComponent } from './routs/onboard/onboard.component';
import { RegisterComponent } from './routs/register/register.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'confirm', component: ConfirmComponent
  },
  {
    path: 'onboard/:id/:token', component: OnboardComponent
  },
  {
    path: 'onboard-complete/:id/:token', component: OnboardCompleteComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
