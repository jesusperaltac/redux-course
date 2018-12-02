import {Action} from '@ngrx/store';

export const INCREMENT = '[COUNTER] INCREMENT';
export const DECREMENT = '[COUNTER] DECREMENT';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}
