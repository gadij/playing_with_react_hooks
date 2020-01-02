import React, { useState, useEffect, useRef } from "react";

export default function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1); // important else timer value will always be 0, since its a closure
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);
    return <div>
        <div>
            Timer - {timer}
        </div>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>;
}
