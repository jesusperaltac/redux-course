import {actions, ADD_TODO} from './todo.actions';
import {Todo} from './model/todo';

const initialState: Todo[] = [];

export function todoReducer(state = initialState, action: actions): Todo[] {

  switch (action.type) {

    case ADD_TODO:
      const todo = new Todo(action.payload);
      return [...state, todo];
    default:
      return state;
  }

}
