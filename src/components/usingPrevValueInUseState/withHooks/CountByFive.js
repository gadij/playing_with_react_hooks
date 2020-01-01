import React, { useState } from "react";

export default function CountByFive() {
  const initalCount = 0;
  const [count, setCount] = useState(initalCount);

  const goByFive = () => {
    for (let i = 0; i < 5; i++) {
      console.log(`here, i = ${i}, count = ${count}`); // will always be 0, closure in JS
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      <h2>
        Count: {count}
      </h2>
      <button onClick={() => setCount(count + 1)}>Incerement</button>
      <button onClick={() => setCount(count - 1)}>Decerement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={goByFive}>Increment by 5</button>
    </div>
  );
}
