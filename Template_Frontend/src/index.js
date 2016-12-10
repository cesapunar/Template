// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import Routes from './routes';

//Style
import './index.css'

ReactDOM.render(
  <Routes history={browserHistory}/>, document.getElementById('root'));
