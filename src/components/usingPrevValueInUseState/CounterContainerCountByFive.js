import React from 'react';
import CountNoHooks from "./noHooks/CountByFive";
import CountWithHooks from "./withHooks/CountByFive";

export default function CounterContainerCountByFive() {
    return (
        <div className='examples-container'>
            <CountNoHooks />
            <CountWithHooks />
        </div>
    )
}