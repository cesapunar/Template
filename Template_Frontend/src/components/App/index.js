import React, { Component } from 'react';
import classnames from 'classnames'

//Style
import './style.css';

//components
import Home from './../Home'
import MenuItem from './MenuItem'
export default class App extends Component {
  render() {
    return (
      <div className={classnames("App")}>
        <div className={classnames("AppMenu")}>
          <MenuItem to='/' icon='home' name='Inicio' account={false}/>
          <MenuItem to='/products' icon='product-hunt' name='Productos' account={false}/>
          <MenuItem to='/account' icon='user-circle-o' name='Mi Cuenta' account={true}/>
        </div>
        <Home/>
      </div>
    );
  }
}
