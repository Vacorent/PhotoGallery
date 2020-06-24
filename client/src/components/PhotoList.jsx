import React from 'react';
import PhotoItem from './PhotoItem.jsx'

class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack(event) {
    event.preventDefault();
    this.props.handleHome({
      homeActive: true,
      photoListActive: false
    })
  }

  render() {
    return (
      <div className="photoList">
        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
        {this.props.photos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} />
        ))}
    </div>
    )
  };
}

export default PhotoList;