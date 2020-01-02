import React, { useContext } from "react";
import { CountContext } from "./Container";

export default function ComponentD() {
    const countContext = useContext(CountContext);
    return (
        <form onSubmit={e => e.preventDefault()}>
            <fieldset>
                <legend>ComponentD - count: {countContext.countState}</legend>
                <button onClick={() => countContext.countDispatch("increment")}>
                    Increment
                </button>
                <button onClick={() => countContext.countDispatch("decrement")}>
                    Increment
                </button>
                <button onClick={() => countContext.countDispatch("reset")}>
                    Reset
                </button>
            </fieldset>
        </form>
    );
}
