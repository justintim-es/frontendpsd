import { createAction, props } from "@ngrx/store";
import { IProps } from "../aschac";

export interface ILoginFetch {
  email: string;
  password: string;
}
export const RDX_LOGIN_FETCH = 'RDX_LOGIN_FETCH';
export const rdxLoginFetch = createAction(
  RDX_LOGIN_FETCH,
  props<IProps<ILoginFetch>>()
)
export const RDX_LOGIN_FETCH_SUCCESS = 'RDX_LOGIN_FETCH_SUCCESS';
export const rdxLoginFetchSuccess = createAction(
  RDX_LOGIN_FETCH_SUCCESS,
  props<IProps<string>>()
)
export const RDX_LOGIN_FETCH_ERROR = 'RDX_LOGIN_FETCH_ERROR';
export const rdxLoginFetchError = createAction(
  RDX_LOGIN_FETCH_ERROR,
  props<IProps<any>>()
)
