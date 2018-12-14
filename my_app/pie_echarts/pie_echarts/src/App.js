import React, { Component } from 'react';
import logo from './logo.svg';
//引入Echarts主模块
// import echarts from 'echarts/lib/echarts';
//引入柱状图
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
