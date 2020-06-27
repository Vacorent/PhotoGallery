import React from 'react';

class ClickedPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event) {
    event.preventDefault();
    this.props.onClose({
      photoListActive: true,
      photoItemActive: false
    })
  }

  render() {
    return (
    <div className="photoContainer">
      <div className="photoWrapper">
        <img className="currentPhoto" src={this.props.photo.src}/>
      </div>
      <div className="descriptionWrapper">
        <span className="currentDescription">{this.props.photo.alt}</span>
      </div>
      <div>
        <button type="button" className="closeBtnContainer" onClick={this.handleClose}><span className="closeBtnWrapper"><span className="closeBtnX"><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className="closeBtnText">Close</span></span></button>
      </div>
    </div>
    )
  }
}

export default ClickedPhoto;