import React from 'react';

class ClickedPhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="photo-container">
      <div className="photo-wrapper">
        <img className="current-photo" src={this.props.photo.src}/>
      </div>
      <div className="description-wrapper">
        <span className="current-description">{this.props.photo.alt}</span>
      </div>
      <div>
        <button type="button" class="close-btn-container"><span class="close-btn-wrapper"><span class="close-btn-x"><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg></span><span class="close-btn-text">Close</span></span></button>
      </div>
    </div>
    )
  }
}

export default ClickedPhoto;