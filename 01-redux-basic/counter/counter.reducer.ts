import {Action} from "../ngrx-fake/ngrx";

export function counterReducer(state = 10, action: Action) {

    switch (action.type) {
        case 'INCREASE':
            return state += 1;

        case 'DECREASE':
            return state -= 1;
        case 'MULTIPLICATE':
            return state * action.payload;
        case 'DIVIDE':
            return state / action.payload;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}