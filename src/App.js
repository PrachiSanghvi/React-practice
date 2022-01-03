import DropDown from './DropDown';
import ImageGallery from './ImageGallery';
import Clock from './Clock';
import './App.css';
import React,{ Component } from 'react';

const { useEffect , useState } = React

const Counter = () =>  {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`you clicked ${count} times`);
  })

  return (
    <div>
      <p className="click-count">you Clicked {count} times</p>
      <button className="click-btn" onClick={() => setCount(count+1)}>Click me</button>
    </div>
  )
}

function WelcomeMessage ({children}) {
  return <p className="welcome-message">{children}</p>
}

function GoodByeMessage ({myprop}) {
  return <p className="good-bye-message">{myprop}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{"display":"flex","width":"100%","justifyContent":"space-around"}}>
          <WelcomeMessage>special prop</WelcomeMessage>
          <GoodByeMessage myprop={"Prop pass as attribute"}/>
        </div>
        <div style={{"display":"flex","width":"100%","justifyContent":"space-around"}}>
          <Counter/>
          <ImageGallery/>
          <DropDown/>
        </div>
        <div style={{"marginTop":"20px"}}>
          <Clock/>
        </div>
      </header>
    </div>
  );
}

export default App;
