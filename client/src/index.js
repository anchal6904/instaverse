import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import reducers from "./reducers";

console.log(thunk)
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);