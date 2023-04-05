import React, { useRef, useState } from 'react'

// D/f btn useState and useRef
// useState causes re-render, useRef does not.

// updating a reference using useRefdoesn't trigger component re-rendering.
//  However, updating a state causes component re-rendering

// The reference update is synchronous, the updated referenced value is immediately available,
//  but the state update is asynchronous - the value is updated after re-rendering.

const UseRefEx = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0)
  const handleUseState = () => {
    const updatedCount = count + 1
    console.log(`useState count ${updatedCount}`);
    setCount(updatedCount)

  }

  const handleUseRef = () => {
    countRef.current++;
    console.log(`useRef count ${countRef.current}`);
  }
  console.log("I rendered");
  return (
    <div>
      <button onClick={handleUseRef}>Click me using useRef - {countRef.current}</button>
      <button onClick={handleUseState}>Click me using useState - {count}</button>
    </div>
  )
}

export default UseRefEx