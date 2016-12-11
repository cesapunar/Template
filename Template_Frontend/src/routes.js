// Libraries
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'


// Components
import App from './components/App'
import Home from './components/Home'
import Products from './components/Products'


const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path="/products" component={Products}/>
    </Route>
  </Router>
)

export default Routes
