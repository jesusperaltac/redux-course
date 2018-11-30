import {Action, Reducer} from "./ngrx-fake/ngrx";
import {counterReducer} from "./counter/counter.reducer";
import {increaseAction, multiplicateAction} from "./counter/counter.actions";

class Store<T> {

    constructor(private reducer: Reducer<T>, private state: T) {
    }

    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }

}

const store = new Store(counterReducer, 10);

console.log(store.getState());

store.dispatch(increaseAction);
console.log(store.getState());
store.dispatch(multiplicateAction);
console.log(store.getState());
