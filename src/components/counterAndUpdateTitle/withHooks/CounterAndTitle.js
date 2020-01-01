import React, { useState, useEffect } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        document.title = `you clicked ${count} times, with text: ${name}`;
    }, [count, name]);
    return (
        <div>
            <input onChange={e => setName(e.target.value)} value={name} />
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    );
}

export default HookCounter;
