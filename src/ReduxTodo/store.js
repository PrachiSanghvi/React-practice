import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux';
import rootReducer from "./reducers";

import { mySaga } from "./sagas/saga";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: rootReducer }, applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
sagaMiddleware.run(mySaga);
export default store;