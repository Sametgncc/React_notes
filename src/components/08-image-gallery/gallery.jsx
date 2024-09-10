import React from 'react'
import imagesData from "./data.json"
import GalleryItem from './gallery-item'
import "./gallery.scss"

const Gallery = () => {
  return (
    <div className="gallery">
    <h1>Image Gallery</h1>
    <div className="images">
        {imagesData.map((item) => (
            <GalleryItem key={item.id} {...item} />
        ))}
    </div>
</div>
  )
}

export default Gallery

