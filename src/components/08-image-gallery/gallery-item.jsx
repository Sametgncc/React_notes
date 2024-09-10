import React from "react";

const GalleryItem = (props) => {
    const {image} = props
  return <div className='gallery-item'>
  <img src={`/images/gallery/${props.image}`} alt="" />
</div>
};

export default GalleryItem;
