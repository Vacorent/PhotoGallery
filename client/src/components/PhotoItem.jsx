import React from 'react';

const PhotoItem =(props) => (
  <div className="photosItem">
    <img src={props.photo.url}/>
  </div>
);

export default PhotoItem;