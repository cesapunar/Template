import React, { Component } from 'react'
import classnames from 'classnames'

//Style
import './style.css'
//components
import Product from './Product'
//Utils
import Fetcher from '../../utils/fetcher'

export default class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  componentWillMount = () => {
    Fetcher.jsonGet('/products').then(response => {
        console.log(response)
        response.json().then(json => {
          this.setState({ products:json })
        })
    })
  }
  render() {
    return (
      <div className={classnames("Products")}>
        {this.state.products.map((product,index) => {
            return(<Product {...product} key={index}/>)
          }
        )}
      </div>
    );
  }
}
