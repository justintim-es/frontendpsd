import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AxiosError } from 'axios';
import { switchMap } from 'rxjs';
import { aschax } from 'src/app/aschax';
import { IDispatch } from '../aschac';
import { IOnboardCompleteFetchError, rdxOnboardCompleteFetch, RDX_ONBOARD_COMPLETE_FETCH_ERROR, RDX_ONBOARD_COMPLETE_FETCH_SUCCESS } from './actions';

@Injectable({
  providedIn: 'root'
})
export class OnboardCompleteService {

  constructor(
    private actions: Actions
  ) { }

  fetch = createEffect(() => {
    return this.actions.pipe(
      ofType(rdxOnboardCompleteFetch),
      switchMap(ac => aschax.get(`/shop/onboard-complete/${ac.payload?.id}/${ac.payload?.token}`).then(res => {
        let dispatch: IDispatch<any> = {
          type: RDX_ONBOARD_COMPLETE_FETCH_SUCCESS
        }
        return dispatch;
      }).catch((err: AxiosError<IOnboardCompleteFetchError>) => {
        let dispatch: IDispatch<IOnboardCompleteFetchError> = {
          type: RDX_ONBOARD_COMPLETE_FETCH_ERROR,
          payload: err.response?.data
        };
        return dispatch
      }))
    )
  })
}
