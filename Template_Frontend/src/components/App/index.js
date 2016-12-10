import React, { Component } from 'react';
import classnames from 'classnames'
import Icon from 'react-fa'
//Style
import './style.css';

//components
import Home from './../Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppMenu">
          <div className={classnames('AppMenuItem')}>
            <Icon className={classnames('AppMenuItemIcon')} name="home"/>
            Inicio
          </div>
          <div className={classnames('AppMenuItem')}>
            <Icon className={classnames('AppMenuItemIcon')} name="product-hunt"/>
            Productos
          </div>
          <div className={classnames('AppMenuItemAccount')}>
            <Icon className={classnames('AppMenuItemIcon')} name="user-circle-o"/>
            Mi Cuenta
          </div>
        </div>
        <Home/>
      </div>
    );
  }
}

export default App;
