import React from "react";
import ReactDOM from "react-dom";

//Step 1- import createStore from redux
//createStore creates a Redux store that holds the complete state tree of your app
import { createStore } from "redux";

//Step 3- import Provider from react-redux
//Provider makes the store available to all container components in the app without passing it explicitly
//Only need to use Provider once when rendering the root component
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

//imports our reducer
import rootReducer from "./reducers/index";

//Step 2- create a const for the store and invoke the createStore function, passing in reducer (create a reducer component or start with a mock reducer)

//A reducer is simply a function that returns an object
//The returned object will represent the state tree
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  //Step 4- Wrap <App /> in the Provider component
  //Step 5- Pass the newly created store object to <Provider />'s store prop
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
