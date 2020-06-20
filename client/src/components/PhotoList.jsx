import React from 'react';
import PhotoItem from './PhotoItem.jsx'

var PhotoList = (props) => (
  <div className="photoList">
    {props.photos.map((photo, index) => (
      <PhotoItem key={index} photo={photo} />
    ))}
  </div>
);

export default PhotoList;