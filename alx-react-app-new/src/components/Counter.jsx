import React, { useState } from "react";
function Counter() {
  const [counter, setCount] = useState(0);
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => setCount(counter++)}>Increment</button>

      <button onClick={() => setCount(counter--)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
export default Counter;
