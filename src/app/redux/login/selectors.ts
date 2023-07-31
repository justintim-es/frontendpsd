import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoginReducer } from "./reducer";

const getLoginFeatureState = createFeatureSelector<ILoginReducer>('loginReducer');

export const getLoginIsFetch = createSelector(
  getLoginFeatureState,
  state => state.isFetch
)
export const getLoginIsFetchSuccess = createSelector(
  getLoginFeatureState,
  state => state.isFetchSuccess
)
export const getLoginIsFetchError = createSelector(
  getLoginFeatureState,
  state => state.isFetchError
)
export const getLoginFetchError = createSelector(
  getLoginFeatureState,
  state => state.fetchError
)
