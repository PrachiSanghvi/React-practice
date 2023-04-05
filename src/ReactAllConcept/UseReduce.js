import React , { useReducer ,useState , useRef , useEffect}  from 'react'
const initialValue = { count : 1,
  isRunning : false,
  time : 0
};

// https://dmitripavlutin.com/react-usereducer/#:~:text=The%20useReducer%20%28reducer%2C%20initialState%29%20hook%20accepts%202%20arguments%3A,MyComponent%28%29%20%7B%20const%20%5Bstate%2C%20dispatch%5D%20%3D%20useReducer%28reducer%2C%20initialState%29%3B
function reducer(state,action) {

  switch (action.type) {
    // Increment- decrement reducer
    case "increment":
      return { count :  state.count + 1}
    case "decrement":
      return { count :  state.count - 1}

    // Timer reducer
    case "start":
      return { ...state,isRunning : true}
    case "stop":
      return { ...state,isRunning : false}
    case "reset":
      return {isRunning : false ,time : 0}
    case "tick":
        return {...state ,time : state.time + 1}
    default:
      return state;
  }
}
const UseReduce = () => {
  const [state,dispatch] = useReducer(reducer,initialValue)

  // For increment decrement
  const [counting,setCounting] = useState(0)

  // For stopwatch
  const idRef = useRef(0);
  useEffect(() => {
    if(!state.isRunning) return;
    idRef.current = setInterval(() => dispatch({type : 'tick'}) , 1000);
    return () => {
      clearInterval(idRef.current)
      idRef.current = 0
    }
  
  }, [state.isRunning])


  return (
    <div>
      <p> Using useReducer</p>
      count : {state.count}<br/>
      <button onClick={() => dispatch({ type : 'increment'})}>Increment</button>
      <button onClick={() => dispatch({ type : 'decrement'})}>decrement</button><br/>

        <br/><br/>
      <p> Using useState</p>
      count : {counting}<br/>
      <button onClick={() => setCounting(counting + 1)}>Increment</button>
      <button onClick={() => setCounting(counting - 1)}>decrement</button><br/>


      <p> Stop watch</p>
      {state.time}s
      <button onClick={() => dispatch({ type : 'start'})}>Start</button>
      <button onClick={() => dispatch({ type : 'stop'})}>Stop</button>
      <button onClick={() => dispatch({ type : 'reset'})}>Reset</button>
    </div>
  )
}

export default UseReduce