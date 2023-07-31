import { createAction, props } from "@ngrx/store";
import { IProps } from "../aschac";

export interface IOnboardCompleteFetch {
  id: string;
  token: string;
}
export const RDX_ONBOARD_COMPLETE_FETCH = 'RDX_ONBOARD_COMPLETE_FETCH';
export const rdxOnboardCompleteFetch = createAction(
  RDX_ONBOARD_COMPLETE_FETCH,
  props<IProps<IOnboardCompleteFetch>>()
)
export const RDX_ONBOARD_COMPLETE_FETCH_SUCCESS = 'RDX_ONBOARD_COMPLETE_FETCH_SUCCESS';
export const rdxOnboardCompleteFetchSuccess = createAction(
  RDX_ONBOARD_COMPLETE_FETCH_SUCCESS,
)
export interface IOnboardCompleteFetchError {
  code: number;
  title: string;
  subtitle: string;
  url: string;
}
export const RDX_ONBOARD_COMPLETE_FETCH_ERROR = 'RDX_ONBOARD_COMPLETE_FETCH_ERROR';
export const rdxOnboardCompleteFetchError = createAction(
  RDX_ONBOARD_COMPLETE_FETCH_ERROR,
  props<IProps<IOnboardCompleteFetchError>>()
)
