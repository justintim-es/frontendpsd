
export interface IProps<T> {
  payload?: T;
}
export interface IDispatch<T> {
    type: string;
    payload?: T;
}
