import React from 'react';
import Timer from "./noHooks/Timer";
import TImerWithRef from "./withHooks/TImerWithRef";

export default function TimerContainer() {
    return (
        <div className='examples-container'>
            <Timer />
            <TImerWithRef />
        </div>
    )
}