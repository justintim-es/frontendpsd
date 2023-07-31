import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";


export interface ITokenReducer {
    token: string;
}
const tokenInitial: ITokenReducer =  {
    token: ''
}
export const RDX_TOKEN_INIT = 'RDX_TOKEN_INIT';
export const rdxTokenInit = createAction(
  RDX_TOKEN_INIT,
  props<{ token: string }>()
)
export const tokenReducer = createReducer(
  tokenInitial,
  on(rdxTokenInit, (state: ITokenReducer, action) => {
    return {
      ...state,
      token: action.token
    }
  })
)
export const getTokenFeatureState = createFeatureSelector<ITokenReducer>('tokenReducer');
export const getTokenToken = createSelector(
  getTokenFeatureState,
  state => state.token
)
