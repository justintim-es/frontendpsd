import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { ErrorMatcher } from 'src/app/error-matcher';
import { IDispatch } from 'src/app/redux/aschac';
import { ILoginFetch, RDX_LOGIN_FETCH } from 'src/app/redux/login/actions';
import { getLoginFetchError, getLoginIsFetch, getLoginIsFetchError, getLoginIsFetchSuccess } from 'src/app/redux/login/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  isFetchError: SubscriptionLike;
  fetchError: Observable<any>;

  errorMatcher: ErrorMatcher;
  email: string;
  emailFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;
  fg: FormGroup;
  isHidePassword: boolean;

  constructor(
    private store: Store,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.isFetch = this.store.select(getLoginIsFetch);
    this.isFetchSuccess = this.store.select(getLoginIsFetchSuccess).subscribe(res => {
      if (res) this.router.navigate(['/dashboard']);
    });
    this.isFetchError = this.store.select(getLoginIsFetchError).subscribe(res => {
      if (res) this.passwordFormControl.setErrors({ backend: true });
    });
    this.fetchError = this.store.select(getLoginFetchError);
    this.errorMatcher = new ErrorMatcher();
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.password = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.fg = this.fb.group({});
    this.isHidePassword = true;
  }
  fetch() {
    this.store.dispatch<IDispatch<ILoginFetch>>({
      type: RDX_LOGIN_FETCH,
      payload: {
        email: this.email,
        password: this.password
      }
    })
  }

}
