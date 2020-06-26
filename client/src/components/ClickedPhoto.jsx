import React from 'react';

class ClickedPhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="clickedPhoto">
      <div>
        <img className="currentPhoto" src={this.props.photo.src}/>
      </div>
      <div>
        <span className="currentDescription">{this.props.photo.alt}</span>
      </div>
    </div>
    )
  }
}

export default ClickedPhoto;