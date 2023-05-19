import React, { useState } from 'react'

const UseCallbackEx = () => {
  const [count, setcount] = useState(0)
  const increment = () => {
    setcount(count+1)
  }
  const decrement = () => {
    setcount(count-1)
  }
  return (
    <div>
      count - {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default UseCallbackEx