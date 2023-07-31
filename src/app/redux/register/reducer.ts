import { createReducer, on } from "@ngrx/store";
import { rdxRegisterFetch, rdxRegisterFetchError, rdxRegisterFetchSuccess } from "./actions";

export interface IRegisterReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    fetchError400: {
      errors: {[key: string]: []}
    };
}
const registerInitial: IRegisterReducer = {
    isFetch: false,
    isFetchSuccess: false,
    fetchError400: {
      errors: {}
    }
}
export const registerReducer = createReducer(
  registerInitial,
  on(rdxRegisterFetch, (state: IRegisterReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
    }
  }),
  on(rdxRegisterFetchSuccess, (state: IRegisterReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
    }
  }),
  on(rdxRegisterFetchError, (state: IRegisterReducer, action) => {
    return {
      ...state,
      isFetch: false,
      fetchError400: {
        errors: action.payload?.errors[0]["errors"]
      }
    }
  })
)
