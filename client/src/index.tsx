import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/common/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import store from "./redux/store";

import {addJob} from './redux/actions'


store.subscribe(() => console.log(store.getState()))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
