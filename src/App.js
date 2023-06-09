import React , {useContext} from 'react';
// import DropDown from './DropDown';
// import ImageGallery from './ImageGallery';
// import Clock from './Clock';
// import PopUp from './PopUp';
import './App.css';
// import Udemy from './Udemy';
// import Calculation from './Calculation';
// // import VisibilityToogle from './VisibilityToogle';
// import NestedComponemt from './NestedComponent';
// import UseStateExample from './useStateExample';
// import VisiblilityToogle from './VisibilityToogle';
// import Header from './Header';
// import SliderSection from './SliderSection';
// import MyNewApp from './useStateEx';
// import ReactHooks from './ReactHooks';
// import FormWithHooks from './FormWithHooks';
// import Greetings from './Greetings';
// import TODOLIST from './TODO-list';
// import Accodian from './Accodian';
// import CovidData from './CovidData';
// import ReactRouter from './ReactRouter';
// import UseParam from './UseParam';
// import BootstrapEx from './BootstrapEx';
// import BootstrapWithReact from './BootstrapWithReact';
// import HomePage from './HomePage';
// import Revise from './Revise';
// import ClassBasedComponent from './Practice/ClassBasedComponent';
// import Temprature from './Practice/Temprature';
// import SearchFilter from './Practice/SearchFilter';
// import SubmitForm from './Practice/SubmitForm';
// import QuizApp from './Practice/QuizApp';
// import LoginForm from './Practice/LoginForm';
// import ContactList from './Practice/Components/ContactList';
// import NEWTODO from './Practice/NEWTODO';
// import Calculator from './Practice/Calculator';
// import ClassBasedCalculator from './Practice/ClassBasedCalculator';
// import WeatherApp from './Practice/WeatherApp';
// import CompleteWebsite from './Practice/CompleteWebsite';
// import RandomQuote from './Practice/RandomQuote';
// import ReactNote from './Practice/ReactNote';
import { darkModeContext } from './ReactAllConcept/useContext';
// import { UserContext } from './creative-website/app/userContext';
// import Homepage from './creative-website/pages/Homepage';
// import ReduxPractice from './Reduxapp/ReduxPractice';
// import Todo from './ReduxTodo/components/Todo';
// import ShowUserData from './ReduxTodo/components/showUserData';
// import UserData from './ReactAllConcept/components/UserData';
// import MyWebsite from './ReactAllConcept/MyWebsite';
// import UseReduce from './ReactAllConcept/UseReduce';
// import UseRefEx from './ReactAllConcept/UseRefEx';
// import EmployeeDepart from './TestSolution/EmployeeDepart';
// import UseCallbackEx from './UseCallbackEx/UseCallbackEx'
import EnhancedLikes from './HOCExample/LikeComponent';
import EnhanceComments from './HOCExample/CommentComponent';

const { useEffect , useState } = React;
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
  // const theme = useContext(UserContext);
  const theme = useContext(darkModeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`App ${darkMode ? "bg-dark" : "bg-light"}`}>
      <header className="App-header">
        <div style={{"display":"flex","width":"100%","justifyContent":"space-around"}}>

          {/* Pass props to react component in same file */}
           {/* <WelcomeMessage>special prop</WelcomeMessage> */}
          {/* <GoodByeMessage myprop={"Prop pass as attribute"}/> */}

          {/*  pass props to a react conponent in another file */}
          {/* <Udemy courseName={"Udemy"} /> */}
          {/* <UseStateExample/ /> */}
          {/* <VisiblilityToogle /> */}
          {/* <Calculation/> */}
          {/* <NestedComponemt /> */}
        {/* <Header /> */}
        {/* <Revise/> */}
        </div>
        <div className="slider-section-wrapper">
          {/* <Counter/> */}
          {/* <SliderSection /> */}
          {/* <ImageGallery/> */}
          {/* <DropDown/> */}
          {/* <HomePage /> */}
        </div>
        <div>
          {/* <MyNewApp /> */}
          {/* <ReactHooks /> */}
          {/* <FormWithHooks /> */}
          {/* <Greetings /> */}
          {/* <Clock/> */}
          {/* <PopUp/> */}
          {/* <TODOLIST /> */}
          {/* <Accodian /> */}
          {/* <CovidData /> */}
          {/* <ReactRouter /> */}
          {/* <BootstrapEx /> */}
          {/* <UseParam /> */}
          {/* <BootstrapWithReact /> */}
        </div>
        <div className="practice app">
          {/* <ClassBasedComponent/> */}
          {/* <Temprature/> */}
          {/* <SearchFilter  /> */}
          {/* <SubmitForm/> */}
          {/* <QuizApp/> */}
          {/* <LoginForm /> */}

          {/* Pending */}
          {/* <NEWTODO /> */}
          {/* <Calculator /> */}
          {/* Pending */}
          
          {/* <ClassBasedCalculator/> */}
          {/* <ContactList /> */}

          {/* Have no api access */}
          {/* <WeatherApp /> */}
          {/* <CompleteWebsite /> */}
          {/* <RandomQuote /> */}
        </div>
        {/* <div className="container">
          <ReactNote />
        </div> */}
        {/* <div className="creative-website">
          <Homepage />
        </div> */}
        <div className="redux-practice">
          {/* <ReduxPractice/> */}
          {/* <Todo /> */}
          {/* <ShowUserData /> */}
          {/* <MyWebsite /> */}
          {/* <UseReduce /> */}
          {/* <UseRefEx /> */}
          {/* <EmployeeDepart /> */}
          {/* <UseCallbackEx /> */}
          <EnhancedLikes />
          <EnhanceComments />
        </div>
      </header>
    </div>
  );
}

export default App;
