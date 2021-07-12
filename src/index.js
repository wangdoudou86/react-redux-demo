import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

import { Provider } from "react-redux";

const reducer = (state, action)=>{
  if(state === undefined){
    return {n: 0}
  }else{
    if(action.type === 'add'){
      var newState = {n: state.n + action.payload} 
      return newState
    }else{
      return state
    }
  }
}

const store = createStore(reducer) //初始化store

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
