interface Action {
    type: string;
    payload?: any;
}

function reducer(state = 10, action: Action) {

    if (action.type === "increase"){
        return state + 1;
    }
        return state;
}

const increaseAction: Action = {
    type: "increase"
};

console.log(reducer(11, increaseAction));