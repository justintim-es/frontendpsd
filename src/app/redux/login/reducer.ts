import { createReducer, on } from "@ngrx/store";
import { rdxLoginFetch, rdxLoginFetchError, rdxLoginFetchSuccess } from "./actions";

export interface ILoginReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchError: string;
}
const loginInitial: ILoginReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: ''
}
export const loginReducer = createReducer(
  loginInitial,
  on(rdxLoginFetch, (state: ILoginReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: true,
      fetchError: ''
    }
  }),
  on(rdxLoginFetchSuccess, (state: ILoginReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true
    }
  }),
  on(rdxLoginFetchError, (state: ILoginReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  })
)
