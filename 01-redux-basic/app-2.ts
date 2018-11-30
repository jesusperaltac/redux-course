import {decreaseAction, divideAction, increaseAction, multiplicateAction, resetAction} from "./counter/counter.actions";
import {counterReducer} from "./counter/counter.reducer";

console.log(counterReducer(11, increaseAction));
console.log(counterReducer(11, decreaseAction));
console.log(counterReducer(11, multiplicateAction));
console.log(counterReducer(11, divideAction));
console.log(counterReducer(11, resetAction));