import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AxiosError } from 'axios';
import { switchMap, withLatestFrom } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../aschac';
import { getTokenToken } from '../token/reducer';
import { rdxOnboardFetch, RDX_ONBOARD_FETCH_ERROR, RDX_ONBOARD_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  constructor(
    private actions: Actions,
    private store: Store
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOnboardFetch),
      withLatestFrom(this.store.select(getTokenToken)),
      switchMap(ac => aschax.get(`/shop/onboard/${ac[0].payload?.id}/${ac[0].payload?.token}`).then(res => {
        let dispatch: IDispatch<string> = {
          type: RDX_ONBOARD_FETCH_SUCCESS,
          payload: res.data
        };
        return dispatch;
      }).catch((err: AxiosError) => {
        let dispatch: IDispatch<any> = {
          type: RDX_ONBOARD_FETCH_ERROR,
          payload: err.response?.data
        }
        return dispatch;
      }))
    )
  })
}
