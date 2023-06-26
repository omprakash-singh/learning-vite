import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  /**
   * abc
   */

  function printCountChange() {
    alert("Count change");
  }

  useEffect(() => printCountChange(), [count]);

  function abc() {
    setCount(count + 1);
  }

  function countTwofun() {
    setCountTwo(countTwo + 1);
  }
  return (
    <>
      {count}

      {countTwo}

      <button onClick={abc}>count</button>

      <button onClick={countTwofun}>count 2</button>
    </>
  );
}

export default App;
