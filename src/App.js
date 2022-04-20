import DropDown from './DropDown';
import ImageGallery from './ImageGallery';
import Clock from './Clock';
import PopUp from './PopUp';
import './App.css';
import React from 'react';
import Udemy from './Udemy';
import Calculation from './Calculation';
// import VisibilityToogle from './VisibilityToogle';
import NestedComponemt from './NestedComponent';
import UseStateExample from './useStateExample';
import VisiblilityToogle from './VisibilityToogle';
import Header from './Header';
import SliderSection from './SliderSection';
import MyNewApp from './useStateEx';
import ReactHooks from './ReactHooks';
import FormWithHooks from './FormWithHooks';
import Greetings from './Greetings';
import TODOLIST from './TODO-list';
import Accodian from './Accodian';
import CovidData from './CovidData';
import ReactRouter from './ReactRouter';
import UseParam from './UseParam';
import BootstrapEx from './BootstrapEx';
import BootstrapWithReact from './BootstrapWithReact';
import HomePage from './HomePage';
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
          {/* <WelcomeMessage>special prop</WelcomeMessage>
          <GoodByeMessage myprop={"Prop pass as attribute"}/> */}

          {/*  pass props to a react conponent in another file */}
          {/* <Udemy courseName={"Udemy"} /> */}
          {/* <UseStateExample/ /> */}
          {/* <VisiblilityToogle /> */}
          {/* <Calculation/> */}
          {/* <NestedComponemt /> */}
        <Header />
        </div>
        <div className="slider-section-wrapper">
          {/* <Counter/> */}
          {/* <SliderSection /> */}
          {/* <ImageGallery/> */}
          {/* <DropDown/> */}
          <HomePage />
        </div>
        <div style={{"marginTop":"20px"}}>
          {/* <MyNewApp /> */}
          {/* <ReactHooks /> */}
          {/* <FormWithHooks /> */}
          {/* <Greetings /> */}
          {/* <Clock/> */}
          {/* <PopUp/> */}
          <TODOLIST />
          {/* <Accodian /> */}
          {/* <CovidData /> */}
          {/* <ReactRouter /> */}
          {/* <BootstrapEx /> */}
          {/* <UseParam /> */}
          <BootstrapWithReact />
        </div>
      </header>
    </div>
  );
}

export default App;
