import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './creative-website/app/store';
var rootDiv =  document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
    </Provider>, 
  </BrowserRouter>,
  rootDiv
);

// ** StrictMode **
//  StrictMode  is a tool for highlighting potential problems in an application.
//  Like Fragment, StrictMode does not render any visible UI. 
// It activates additional checks and warnings for its descendants.
// Strict mode checks are run in development mode only; they do not impact the production build.


// class HelloExample extends React.Component {
//   render() {
//     return <div>Hello {this.props.gettingWorld}</div>
//   }
// }
// ReactDOM.render(
//   <HelloExample gettingWorld="Prachi" />,
//   rootDiv
// );

// var templateDiv = React.createElement("span", null, "prachi here");
// ReactDOM.render(
//   templateDiv,
//   rootDiv
// );