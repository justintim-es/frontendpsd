import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../aschac';
import { RDX_TOKEN_INIT } from '../token/reducer';
import { ILoginFetch, rdxLoginFetch, rdxLoginFetchSuccess, RDX_LOGIN_FETCH_ERROR, RDX_LOGIN_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetch),
      switchMap(ac => aschax.post('/shop/login', ac.payload).then(res => {
        let dispatch: IDispatch<string> = {
          type: RDX_LOGIN_FETCH_SUCCESS,
          payload: res.data
        };
        return dispatch;
      }).catch((err: AxiosError) => {
        let dispatch: IDispatch<any> = {
          type: RDX_LOGIN_FETCH_ERROR,
          payload: err.response?.data
        };
        return dispatch;
      }))
    )
  })
  fetchSuccess = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxLoginFetchSuccess),
      map(ac => {
        let dispatch: IDispatch<string> = {
          type: RDX_TOKEN_INIT,
          payload: ac.payload!
        };
        return dispatch;
      })
    )
  })
}
