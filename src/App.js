import './App.css';

import React, {Component} from 'react';

class App extends Component {
  add1(){
    this.props.onAdd1()
  }
  add2(){
    this.props.onAdd2()
  }
  render(){
    return (
      <div className="App">
        你点击了 <span id="value">{this.props.value}</span> 次
        <div>
          <button id="add1" onClick={this.add1.bind(this)}>+1</button>
          <button id="add2" onClick={this.add2.bind(this)}>+2</button>
          <button id="add1IfOdd" onClick={()=>{this.props.onAdd3()}}>如果是单数就+1</button>
          <button id="add1After2Sec" onClick={()=>{this.props.onAdd4()}}>两秒钟后+1</button>
        </div>
      </div>
    );

  }
}

export default App;
