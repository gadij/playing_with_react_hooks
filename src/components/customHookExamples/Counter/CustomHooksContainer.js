import React, { useState } from "react";
import UseCounter from './UseCounter';
import UseUpdateTitle from './UseUpdateTitle'

export default function CounterOne() {
    const [count, increment, decrement, reset] = UseCounter(0, 1);
    const [inputText, setInputText] = useState("");

    UseUpdateTitle(inputText);

    return (
        <div className='examples-container'>
            <div className='custom__counter__container'>
                <div>
                    Count - {count}
                </div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div className="text__container">
                <h2>Insert text and see it updated in the tab title</h2>
                <input type="text" onChange={e => setInputText(e.target.value)} />
            </div>
        </div>
    );
}
