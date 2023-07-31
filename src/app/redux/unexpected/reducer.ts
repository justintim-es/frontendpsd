import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export interface IUnexpectedReducer {
    is: boolean;
}
const unexpextedInitial: IUnexpectedReducer = {
    is: false
}
export const RDX_UNEXPECTED_INIT = 'RDX_UNEXPECTED_INIT';
export const rdxUnexpectedInit = createAction(
  RDX_UNEXPECTED_INIT
)
export const getUnexpectedFeatureState = createFeatureSelector<IUnexpectedReducer>('unexpectedReducer');
export const getUnexpectedIs = createSelector(
  getUnexpectedFeatureState,
  state => state.is
)
export const unexpectedReducer = createReducer(
  unexpextedInitial,
  on(rdxUnexpectedInit, (state: IUnexpectedReducer) => {
    return {
      ...state,
      is: true
    }
  })
)
