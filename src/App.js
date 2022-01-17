import DropDown from './DropDown';
import ImageGallery from './ImageGallery';
import Clock from './Clock';
import PopUp from './PopUp';
import './App.css';
import React from 'react';
import Udemy from './Udemy';

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

          {/*  pass props to a react conponent in another file */}
          <Udemy courseName={"Udemy"}/>
          
        </div>
        <div style={{"display":"flex","width":"100%","justifyContent":"space-around"}}>
          <Counter/>
          <ImageGallery/>
          <DropDown/>
        </div>
        <div style={{"marginTop":"20px"}}>
          <Clock/>
          <PopUp/>
        </div>
      </header>
    </div>
  );
}

export default App;
