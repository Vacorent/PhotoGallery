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
        <a href="#" className="previous round" onClick={this.goBack}>&#8249;</a>
        {this.props.photos.map((photo, index) => (
          <PhotoItem key={index} photo={photo} />
        ))}
    </div>
    )
  };
}

export default PhotoList;