import React from 'react';
import SetInterval from "./noHooks/SetInterval";
import SetIntervalHooks from "./withHooks/SetInterval";

export default function SetIntervalContainer() {
    return (
        <div className='examples-container'>
            <SetInterval />
            <SetIntervalHooks />
        </div>
    )
}