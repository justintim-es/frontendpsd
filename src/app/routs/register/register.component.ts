import { Component, OnDestroy } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, SubscriptionLike } from 'rxjs';
import { ErrorMatcher } from 'src/app/error-matcher';
import { IDispatch } from 'src/app/redux/aschac';
import { IRegisterFetch, RDX_REGISTER_FETCH } from 'src/app/redux/register/actions';
import { getRegisterFetchError400IsKey, getRegisterFetchError400Key, getRegisterIsFetch, getRegisterIsFetchSuccess } from 'src/app/redux/register/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  errorMatcher: ErrorMatcher;
  fg: FormGroup;
  kvk: string;
  kvkFormControl: FormControl;
  company: string;
  companyFormControl: FormControl;
  email: string;
  emailFormControl: FormControl;
  password: string;
  passwordFormControl: FormControl;

  isKvkKey: SubscriptionLike;
  isEmailKey: SubscriptionLike;
  isCompanyKey: SubscriptionLike;
  isPasswordKey: SubscriptionLike;
  kvkError: Observable<any>;
  emailError: Observable<any>;
  companyError: Observable<any>;
  passwordError: Observable<any>;
  isFetch: Observable<boolean>;
  isFetchSuccess: SubscriptionLike;
  isHidePassword: boolean;


  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.fg = this.fb.group({});
    this.errorMatcher = new ErrorMatcher();
    this.kvk = '';
    this.kvkFormControl = new FormControl('', [
      Validators.required
    ]);
    this.company = '';
    this.companyFormControl = new FormControl('', [
      Validators.required
    ])
    this.email = '';
    this.emailFormControl = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
    this.password = '';
    this.passwordFormControl = new FormControl('', [
      Validators.required
    ]);
    this.isKvkKey = this.store.select(getRegisterFetchError400IsKey("KVKNumber")).subscribe(res => {
      if (res) this.kvkFormControl.setErrors({ backend: true });
    });
    this.isEmailKey = this.store.select(getRegisterFetchError400IsKey("Email")).subscribe(res => {
      if (res) this.emailFormControl.setErrors({ backend: true });
    });
    this.isCompanyKey = this.store.select(getRegisterFetchError400IsKey("CompanyName")).subscribe(res => {
      if (res) this.companyFormControl.setErrors({ backend: true })
    });
    this.isPasswordKey = this.store.select(getRegisterFetchError400IsKey("Password")).subscribe(res => {
      if (res) this.passwordFormControl.setErrors({ backend: true });
    });
    this.kvkError = this.store.select(getRegisterFetchError400Key("KVKNumber"));
    this.emailError = this.store.select(getRegisterFetchError400Key("Email"));
    this.companyError = this.store.select(getRegisterFetchError400Key("CompanyName"));
    this.passwordError = this.store.select(getRegisterFetchError400Key("Password"));
    this.isFetch = this.store.select(getRegisterIsFetch);
    this.isFetchSuccess = this.store.select(getRegisterIsFetchSuccess).subscribe(res => {
      if (res) this.router.navigate(['/confirm']);
    });
    this.isHidePassword = true;
  }

  register() {
    this.store.dispatch<IDispatch<IRegisterFetch>>({
      type: RDX_REGISTER_FETCH,
      payload: {
        kvkNumber: this.kvk,
        companyName: this.company,
        email: this.email,
        password: this.password
      }
    })
  }
  ngOnDestroy(): void {
    this.isKvkKey.unsubscribe();
    this.isEmailKey.unsubscribe();
    this.isCompanyKey.unsubscribe();
    this.isPasswordKey.unsubscribe();
    this.isFetchSuccess.unsubscribe();
  }
}
