import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  add3(){
    let n = this.props.n
    if(n % 2 === 1){
      this.props.add1()
    }
  }
  add4(){
    setTimeout(() => {
      this.props.add1()
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button id="add1" onClick={() => { this.props.add1() }}>+1</button>
          <button id="add2" onClick={() => { this.props.add2() }}>+2</button>
          <button id="add1IfOdd" onClick={() => { this.add3() }}>如果是单数就+1</button>
          <button id="add1After2Sec" onClick={() => { this.add4() }}>两秒钟后+1</button>
        </div>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    n: state.n
  }
}

const mapDispatchToProps = {
  add1: () => {
    return { type: 'add', payload: 1 }
  },
  add2: () => {
    return { type: 'add', payload: 2 }
  }
}

//connect(x, y)(App)
//参数x是专门生成props里的数据
//参数y是专门生成action相关操作的
export default connect(mapStateToProps, mapDispatchToProps)(App);

