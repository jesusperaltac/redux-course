import {Action} from "../ngrx-fake/ngrx";

export const increaseAction: Action = {
    type: 'INCREASE'
};

export const decreaseAction: Action = {
    type: 'DECREASE'
};

export const multiplicateAction: Action = {
    type: 'MULTIPLICATE',
    payload: 2
};

export const divideAction: Action = {
    type: 'DIVIDE',
    payload: 3
};

export const resetAction: Action = {
    type: 'RESET',
};
