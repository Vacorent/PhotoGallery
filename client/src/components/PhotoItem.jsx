import React from 'react';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photoItemWrapper">
        <div className="photoItemContainer">
          <img className="photoItem" src={this.props.photo.url}/>
        </div>
      </div>
    )
  }
}

export default PhotoItem;