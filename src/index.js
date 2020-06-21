import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers/index";



// const thunk = ({ disptach, getState }) => (next) => (action) => {

//     if (typeof action === "function") {
//         action(disptach);
//         return;
//     }

//     next(action);
// }

const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log("Store", store);

// console.log("State", store.getState());
ReactDOM.render(<App store={store} />, document.getElementById("root"));
