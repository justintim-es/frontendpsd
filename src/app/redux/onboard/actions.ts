import { createAction, props } from "@ngrx/store";
import { IProps } from "../aschac";
export interface IOnboardFetch {
  id: string;
  token: string;
}
export const RDX_ONBOARD_FETCH = 'RDX_ONBOARD_FETCH';
export const rdxOnboardFetch = createAction(
  RDX_ONBOARD_FETCH,
  props<IProps<IOnboardFetch>>()
)
export const RDX_ONBOARD_FETCH_SUCCESS = 'RDX_ONBOARD_FETCH_SUCCESS';
export const rdxOnboardFetchSuccess = createAction(
  RDX_ONBOARD_FETCH_SUCCESS,
  props<IProps<string>>()
)
export const RDX_ONBOARD_FETCH_ERROR = 'RDX_ONBOARD_FETCH_ERROR';
export const rdxOnboardFetchError = createAction(
  RDX_ONBOARD_FETCH_ERROR,
  props<IProps<any>>()
)
