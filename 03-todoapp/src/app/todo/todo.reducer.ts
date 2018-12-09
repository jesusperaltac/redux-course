import {actions, ADD_TODO} from './todo.actions';
import {Todo} from './model/todo';

const todo1 = new Todo('Clean the kitchen');
const todo2 = new Todo('Read the newspaper');

const initialState: Todo[] = [todo1, todo2];

export function todoReducer(state = initialState, action: actions): Todo[] {

  switch (action.type) {

    case ADD_TODO:
      const todo = new Todo(action.payload);
      return [...state, todo];
    default:
      return state;
  }

}
