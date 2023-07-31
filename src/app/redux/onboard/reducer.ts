import { createReducer, on } from "@ngrx/store";
import { rdxOnboardFetch, rdxOnboardFetchError, rdxOnboardFetchSuccess } from "./actions";

export interface IOnboardReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    url: string;
    isFetchError: boolean;
    fetchError: any;
}
const onboardInitial: IOnboardReducer = {
  isFetch: false,
  isFetchSuccess: false,
  url: '',
  isFetchError: false,
  fetchError: ''
}
export const onboardReducer = createReducer(
  onboardInitial,
  on(rdxOnboardFetch, (state: IOnboardReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchError: null
    }
  }),
  on(rdxOnboardFetchSuccess, (state: IOnboardReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
      url: action.payload!
    }
  }),
  on(rdxOnboardFetchError, (state: IOnboardReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  })
)
