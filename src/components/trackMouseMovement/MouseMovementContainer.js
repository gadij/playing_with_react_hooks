import React from 'react';
import TrackMouse from "./noHooks/TrackMouse";
import TrackMouseHook from "./withHooks/TrackMouse";

export default function MouseMovementContainer() {
    return (
        <div className='examples-container'>
            <TrackMouse />
            <TrackMouseHook />
        </div>
    )
}