import React from 'react';
import IsEvenNoMemo from "./noMemo/isEvenNoMemo";
import IsEvenWithMemo from "./usingMemo/isEvenWithMemo";

export default function IsEvenCountContainer() {
    return (
        <div className='examples-container'>
            <IsEvenNoMemo />
            <IsEvenWithMemo />
        </div>
    )
}