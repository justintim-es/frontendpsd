import { createAction, props } from "@ngrx/store";

export const RDX_TOKEN_INIT = 'RDX_TOKEN_INIT';
export const rdxTokenInit = createAction(
  RDX_TOKEN_INIT,
  props<{ token: string }>()
)
