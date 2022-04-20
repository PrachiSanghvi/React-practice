import react, { useState , useEffect ,createContext } from "react";
import React from 'react';
import ComA from "./UseContext";

const FirstName = createContext();
const LastName = createContext();

const ReactHooks = () => {
  const state = useState();

  const [count,setCount] = useState(0);

  useEffect(() => {
    return () => {
     document.title = `you have clicked ${count} times`;
    };
  }, [count])

  const IncrementValue = () => {
    setCount(count+1);
  }
  return (
  <>
    <h1>Count - {count}</h1>
    <button onClick={IncrementValue}>Click Me</button>
    <FirstName.Provider value={"Prachi"}>
      <LastName.Provider value={"Sanghvi"}>
        <ComA />
      </LastName.Provider>
    </FirstName.Provider>
  </>);
}

export default ReactHooks;
export {FirstName , LastName };

