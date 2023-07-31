import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IOnboardCompleteReducer } from "./reducer";

const getOnboardCompleteFeatureState = createFeatureSelector<IOnboardCompleteReducer>('onboardCompleteReducer');
export const getOnboardCompleteIsFetch = createSelector(
  getOnboardCompleteFeatureState,
  state => state.isFetch
)
export const getOnboardCompleteIsFetchSuccess = createSelector(
  getOnboardCompleteFeatureState,
  state => state.isFetchSuccess
)
export const getOnboardCompleteIsFetchError = createSelector(
  getOnboardCompleteFeatureState,
  state => state.isFetchError
)
export const getOnboardCompleteFetchError = createSelector(
  getOnboardCompleteFeatureState,
  state => state.fetchError
)
