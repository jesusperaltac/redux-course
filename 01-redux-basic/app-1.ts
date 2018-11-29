interface Action {
    type: string;
    payload?: any;
}

function reducer(state = 10, action: Action) {

    switch (action.type) {
        case 'INCREASE':
            return state += 1;

        case 'DECREASE':
            return state -= 1;
        case 'MULTIPLICATE':
            return state * action.payload;
        case 'DIVIDE':
            return state /  action.payload;
        default:
            return state;
    }

}

const increaseAction: Action = {
    type: 'INCREASE'
};

const decreaseAction: Action = {
    type: 'DECREASE'
};

const multiplicateAction: Action = {
    type: 'MULTIPLICATE',
    payload: 2
};

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 3
};

console.log(reducer(11, increaseAction));
console.log(reducer(11, decreaseAction));
console.log(reducer(11, multiplicateAction));
console.log(reducer(11, divideAction));