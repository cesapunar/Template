import React, { Component } from 'react'
import classnames from 'classnames'

//Style
import './style.css'

export default class Product extends Component {
  render() {
    const {name, description, price, picture} = this.props
    return (
      <div className="Product">
        <div className={classnames('ProductPictureContainer')}>
          <img src={picture} className={classnames('ProductPicture')} alt={name}/>
        </div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3 className={classnames('ProductPrice')}>$ {price}</h3>
      </div>
    );
  }
}
