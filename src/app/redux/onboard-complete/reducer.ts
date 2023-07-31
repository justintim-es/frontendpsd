import { createReducer, on } from "@ngrx/store";
import { IOnboardCompleteFetchError, rdxOnboardCompleteFetch, rdxOnboardCompleteFetchError, rdxOnboardCompleteFetchSuccess } from "./actions";

export interface IOnboardCompleteReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchError: IOnboardCompleteFetchError;
}
const onboardCompleteInitial: IOnboardCompleteReducer = {
  isFetch: false,
  isFetchSuccess: false,
  isFetchError: false,
  fetchError: {
    code: -1,
    title: '',
    subtitle: '',
    url: ''
  }
}
export const onboardCompleteReducer = createReducer(
  onboardCompleteInitial,
  on(rdxOnboardCompleteFetch, (state: IOnboardCompleteReducer) => {
    return {
      ...state,
      isFetch: true,
      isFetchSuccess: false,
      isFetchError: false,
      fetchError: {
        code: -1,
        title: '',
        subtitle: '',
        url: ''
      }
    }
  }),
  on(rdxOnboardCompleteFetchSuccess, (state: IOnboardCompleteReducer) => {
    return {
      ...state,
      isFetch: false,
      isFetchSuccess: true,
    }
  }),
  on(rdxOnboardCompleteFetchError, (state: IOnboardCompleteReducer, action) => {
    return {
      ...state,
      isFetch: false,
      isFetchError: true,
      fetchError: action.payload!
    }
  })
)
