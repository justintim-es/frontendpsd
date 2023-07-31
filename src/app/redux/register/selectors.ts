import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRegisterReducer } from "./reducer";

const getRegisterFeatureState = createFeatureSelector<IRegisterReducer>('registerReducer')
export const getRegisterFetchError400IsKey = (key: string) => createSelector(
  getRegisterFeatureState,
  state => state.fetchError400 ? Object.keys(state.fetchError400.errors).includes(key) : false
)
export const getRegisterFetchError400Key = (key: string) => createSelector(
  getRegisterFeatureState,
  state => state.fetchError400 ? state.fetchError400.errors[key] : ""
)
export const getRegisterIsFetch = createSelector(
  getRegisterFeatureState,
  state => state.isFetch
)
export const getRegisterIsFetchSuccess = createSelector(
  getRegisterFeatureState,
  state => state.isFetchSuccess
)
