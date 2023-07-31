import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './routs/landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './routs/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { registerReducer } from './redux/register/reducer';
import { tokenReducer } from './redux/token/reducer';
import { RegisterService } from './redux/register/register.service';
import { ConfirmComponent } from './routs/confirm/confirm.component';
import { OnboardComponent } from './routs/onboard/onboard.component';
import { onboardReducer } from './redux/onboard/reducer';
import { OnboardService } from './redux/onboard/onboard.service';
import { OnboardCompleteComponent } from './routs/onboard-complete/onboard-complete.component';
import { onboardCompleteReducer } from './redux/onboard-complete/reducer';
import { OnboardCompleteService } from './redux/onboard-complete/onboard-complete.service';
import { LoginComponent } from './routs/login/login.component';
import { DashboardComponent } from './routs/dashboard/dashboard.component';
import { loginReducer } from './redux/login/reducer';
import { LoginService } from './redux/login/login.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    ConfirmComponent,
    OnboardComponent,
    OnboardCompleteComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      registerReducer: registerReducer,
      tokenReducer: tokenReducer,
      onboardReducer: onboardReducer,
      onboardCompleteReducer: onboardCompleteReducer,
      loginReducer: loginReducer
    }, {
    }),
    EffectsModule.forRoot([
      RegisterService,
      OnboardService,
      OnboardCompleteService,
      LoginService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
