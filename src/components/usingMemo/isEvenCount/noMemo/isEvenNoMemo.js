import React, { useState } from "react";

function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        console.log("called 1");
        setCounterOne(counterOne + 1);
    };

    const incrementTwo = () => {
        console.log("called 2");
        setCounterTwo(counterTwo + 1);
    };

    const isEven = count => {
        console.log('called is even')
        return count % 2 === 0;
    };

    return (
        <div>
            <div className='counter__container--block'>
                <div>{isEven(counterOne) ? "Even" : "Odd"}</div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
            </div>
            <div className='counter__container'>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    );
}

export default Counter;
