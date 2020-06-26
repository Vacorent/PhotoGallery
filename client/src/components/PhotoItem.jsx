import React from 'react';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);

    this.photoClick = this.photoClick.bind(this);
  }

  photoClick(event) {
    event.preventDefault();
    console.log(event.target.src)
  }

  render() {
    return (
      <div>
        <img className="photoItem" src={this.props.photo.url} onClick={this.photoClick}/>
      </div>
    )
  }
}

export default PhotoItem;