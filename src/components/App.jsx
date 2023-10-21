import React, { useState } from "react";

function App() {
  const [count, countChange] = useState(0);
  const date = new Date();
  const [time, timeChange] = useState(date.toLocaleTimeString());
  setInterval(() => {
    const date = new Date();
    timeChange(date.toLocaleTimeString());
  }, 1000);

  return (
    <div>
      <h2>{time}</h2>
      <h1>{count}</h1>
      <button onClick={() => countChange(count == 0 ? 0 : count - 1)}>-</button>
      <button onClick={() => countChange(count + 1)}>+</button>
    </div>
  );
}

export default App;
