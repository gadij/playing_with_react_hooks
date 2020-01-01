import React, { useState, useMemo } from "react";

function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        console.log("incrementOne");
        setCounterOne(counterOne + 1);
    };

    const incrementTwo = () => {
        console.log("incrementTwo");
        setCounterTwo(counterTwo + 1);
    };

    const isEven = count => {
        console.log("isEven");
        return count % 2 === 0;
    };
    const withIsEven = useMemo(() => isEven(counterOne), [counterOne]);

    return (
        <div>
            <div className='counter__container--block'>
                <div>{withIsEven ? "Even" : "Odd"}</div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
            </div>
            <div className='counter__container'>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    );
}

export default Counter;
