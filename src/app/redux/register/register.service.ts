import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../aschac';
import { getTokenToken } from '../token/reducer';
import { rdxRegisterFetch, RDX_REGISTER_FETCH_ERROR, RDX_REGISTER_FETCH_ERROR_422, RDX_REGISTER_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxRegisterFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.post('/shop', ac[0].payload!, {
        headers: {
          'Authorization': 'Bearer ' + ac[1]
        }
      }).then(res => {
        let dischis: IDispatch<any> = {
          type: RDX_REGISTER_FETCH_SUCCESS
        };
        return dischis;
      }).catch((err: AxiosError) => {
        if (err.response?.status == 400) {
          let dispatch: IDispatch<{ errors: {} }> = {
            type: RDX_REGISTER_FETCH_ERROR,
            payload: {
              errors: [err.response?.data]
            }
          }
          return dispatch;
        } else if (err.response?.status == 422) {
          let dispatch: IDispatch<any> = {
            type: RDX_REGISTER_FETCH_ERROR_422,
            payload: err.response.data!
          }
          return dispatch;
        }
      }))

    )
  })
}
