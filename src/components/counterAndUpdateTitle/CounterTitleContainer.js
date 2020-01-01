import React from 'react';
import CounterAndTitleHooks from "./withHooks/CounterAndTitle";
import CounterAndTitle from "./noHooks/CounterAndTitle";


export default function CounterTitleContainer() {
    return (
        <div className='examples-container'>
            <CounterAndTitleHooks />
            <CounterAndTitle />
        </div>
    )
}