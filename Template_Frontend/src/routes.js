// Libraries
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

// Stores

// Utils
import Project from './utils/project'
import Fetcher from './utils/fetcher'

// Components
import App from './components/App'
import Home from './components/Home'


// Styles


const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
)

export default Routes
