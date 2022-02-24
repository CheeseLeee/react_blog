import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './store/store'
import { connect, Provider } from 'react-redux'
import App from './App';
import {EventBus} from './eventBus/index'
let eventBus = new EventBus()
export let ContextEventBus = React.createContext(eventBus);
ReactDOM.render(
  <Provider store={store}>
  <ContextEventBus.Provider value={eventBus}>
    <App />
  </ContextEventBus.Provider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

