import React, { useState, useEffect, useCallback } from "react";

export default function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [count, tick]);

    return <div>{count}</div>;
}
