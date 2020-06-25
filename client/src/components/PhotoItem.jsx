import React from 'react';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="photoItem" src={this.props.photo.url}/>
      </div>
    )
  }
}

export default PhotoItem;