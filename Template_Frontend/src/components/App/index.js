import React, { Component } from 'react';
import classnames from 'classnames'

//Style
import './style.css';

//components
import Home from './../Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppMenu">
          <div className={classnames('AppMenuItem')}>Home</div>
          <div className={classnames('AppMenuItem')}>Productos</div>
          <div className={classnames('AppMenuItemAccount')}>Mi Cuenta</div>
        </div>
        <Home/>
      </div>
    );
  }
}

export default App;
