import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'
import classnames from 'classnames'

//Style
import './style.css'

export default class Home extends Component {
  render() {
    const images = [
      {
        original: 'http://www.wallpapereast.com/static/images/001_Fish-Wallpaper-HD_hkNsK33.jpg',
        thumbnail: 'http://www.wallpapereast.com/static/images/001_Fish-Wallpaper-HD_hkNsK33.jpg',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb'
      },
      {
        original: 'http://www.wallpapereast.com/static/images/Hawaii-Beach-Wallpaper-HD_kgppCjh.jpg',
        thumbnail: 'http://www.wallpapereast.com/static/images/Hawaii-Beach-Wallpaper-HD_kgppCjh.jpg'
      },
      {
        original: 'http://www.wallpapereast.com/static/images/6918590-beautiful-nature-desktop-wallpaper.jpg',
        thumbnail: 'http://www.wallpapereast.com/static/images/6918590-beautiful-nature-desktop-wallpaper.jpg'
      }
    ]
    return (
      <div className={classnames("Home")}>
        <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        showBullets={true}
        slideOnThumbnailHover={true}/>
      </div>
    );
  }
}
