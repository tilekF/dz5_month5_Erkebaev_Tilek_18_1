import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {rootReducer} from "./redux/reducers";
import {Provider} from "react-redux";
import {createStore} from "redux";
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);