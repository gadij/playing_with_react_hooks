import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};
export default function SameActionDifferentDispatch() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <form onSubmit={e => e.preventDefault()}>
            <fieldset>
                <legend>Counter 1</legend>
                <div>Count - {count}</div>
                <button onClick={() => dispatch("increment")}>Increment</button>
                <button onClick={() => dispatch("decrement")}>Decrement</button>
                <button onClick={() => dispatch("reset")}>Reset</button>
            </fieldset>
            <fieldset>
                <legend>Counter 2</legend>
                <div>Count - {countTwo}</div>
                <button onClick={() => dispatchTwo("increment")}>Increment</button>
                <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
                <button onClick={() => dispatchTwo("reset")}>Reset</button>
            </fieldset>
        </form>
    );
}
