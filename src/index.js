import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

const reducer = (state, action)=>{
  if(state === undefined){
    return 0
  }else{
    if(action.type === 'add'){
      var newState = state + action.payload
      return newState
    }else{
      return state
    }
  }
}

const store = createStore(reducer) //初始化store
render()
store.subscribe(()=>{
  render()
})


function add3(){
  var oldState = store.getState()
  if(oldState % 2 === 1){
    store.dispatch({type:'add', payload: 1}) 
  }
}


function add4(){
  setTimeout(()=>{
    store.dispatch({type: 'add', payload: 1})
  },2000)
}


function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App value={store.getState()} 
        onAdd1={()=>{store.dispatch({type: 'add', payload: 1})}}
        onAdd2={()=>{store.dispatch({type: 'add', payload: 2})}}
        onAdd3={add3}
        onAdd4={add4}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
