import {Link} from 'react-router'
import Icon from 'react-fa'
import React, { Component } from 'react';
import classnames from 'classnames'
//style
import './style.css'
import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
export default class MenuItem extends Component {
  render() {
    const className = {
      "AppMenuItem": !this.props.account,
      "AppMenuItemAccount": this.props.account
    }
    return (
      <div className={classnames(className)}>
        <Link to={this.props.to} activeClassName='AppMenuActiveItem'>
            <Icon size='lg' className={classnames('AppMenuItemIcon')} name={this.props.icon}/>
            <span>{this.props.name}</span>
        </Link>
      </div>
    )
  }
}
