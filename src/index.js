import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
// import store from './Reduxapp/store';
// import store from './ReduxTodo/store'
// import store from './creative-website/app/store';
import { ThemeProvider } from './creative-website/app/userContext';

import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from "./ReduxTodo/reducers/index";
import mySaga from "./ReduxTodo/sagas/saga";
import myWebsiteSaga from './ReactAllConcept/sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)});

// sagaMiddleware.run(mySaga);
sagaMiddleware.run(myWebsiteSaga);
const rootDiv = document.getElementById('root');

store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
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