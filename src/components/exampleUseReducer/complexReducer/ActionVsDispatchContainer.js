import React from 'react';
import SameActionDifferentDispatch from "./SameActionDifferentDispatch";
import SameDispatchDifferentAction from "./SameDispatchDifferentAction";

export default function ActionVsDispatchContainer() {
    return (
        <div className='examples-container'>
            <SameActionDifferentDispatch />
            <SameDispatchDifferentAction />
        </div>
    )
}