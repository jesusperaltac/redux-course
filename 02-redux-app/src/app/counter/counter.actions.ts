import {Action} from '@ngrx/store';

export const INCREMENT = '[COUNTER] INCREMENT';
export const DECREMENT = '[COUNTER] DECREMENT';
export const MULTIPLY = '[COUNTER] MULTIPLY';
export const DIVIDE = '[COUNTER] DIVIDE';
export const RESET = '[COUNTER] RESET';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export class MultiplyAction implements Action {
  readonly type = MULTIPLY;

  constructor(public payload: number) {
  }
}

export class DivideAction implements Action {
  readonly type = DIVIDE;

  constructor(public payload: number) {
  }
}

export class ResetAction implements Action {
  readonly type = RESET;
}

export type actions = IncrementAction | DecrementAction | MultiplyAction | DivideAction | ResetAction;
