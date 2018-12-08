import {Action} from '@ngrx/store';

export const ADD_TODO = '[TODO] add todo';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: string) {
  }
}

export type actions = AddTodoAction;
