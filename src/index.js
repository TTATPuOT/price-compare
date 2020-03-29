import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import itemsReducer from "./reducers/items";

import * as serviceWorker from "./serviceWorker";

import App from './App';

import "antd/dist/antd.css";
import "./index.sass";

const store = createStore(combineReducers({
    items: itemsReducer
}));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();
