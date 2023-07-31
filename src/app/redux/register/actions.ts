import { createAction, props } from "@ngrx/store";
import { IProps } from "../aschac";


export interface IRegisterFetch {
  kvkNumber: string;
  companyName: string;
  email: string;
  password: string;
}
export const RDX_REGISTER_FETCH = 'RDX_REGISTER_FETCH';
export const rdxRegisterFetch = createAction(
  RDX_REGISTER_FETCH,
  props<IProps<IRegisterFetch>>()
)
export const RDX_REGISTER_FETCH_SUCCESS = 'RDX_REGISTER_FETCH_SUCCESS';
export const rdxRegisterFetchSuccess = createAction(
  RDX_REGISTER_FETCH_SUCCESS
)
export interface IRegisterFetchError400 {
  title: string,
  status: number,
  traceId: string,
  errors: any[];
}
export const RDX_REGISTER_FETCH_ERROR_400 = 'RDX_REGISTER_FETCH_ERROR_400';
export const rdxRegisterFetchError400 = createAction(
  RDX_REGISTER_FETCH_ERROR_400,
  props<IProps<IRegisterFetchError400>>()
)
export const RDX_REGISTER_FETCH_ERROR_422 = 'RDX_REGISTER_FETCH_ERROR_422';
export const rdxRegisterFetchError422 = createAction(
  RDX_REGISTER_FETCH_ERROR_422,
  props<IProps<string>>()
)
