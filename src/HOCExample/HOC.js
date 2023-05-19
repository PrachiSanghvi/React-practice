import React, { useState } from 'react'

// A higher-order component (HOC) is an advanced technique in React for reusing component logic.
//  HOCs are not part of the React API, per se. 
// They are a pattern that emerges from React’s compositional nature.

const HOC = (Component) => {
  const FNHOC = () => {
    const [count, setCount] = useState(5)
    const handleClick = () => {
      setCount(count + 1)
    }
    return (
      <Component countNumber={count} handleClick={handleClick} />
    )
  }
  return FNHOC;
}

export default HOC