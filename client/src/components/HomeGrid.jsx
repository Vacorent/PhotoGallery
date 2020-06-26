import React from 'react';

class HomeGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gridPhotos: props.photos
    }

    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
  }

  handlePhotoClick (event) {
    event.preventDefault();
    this.props.onClick(event.target);
  }

  handleAllClick (event) {
    event.preventDefault();
    this.props.allClick({
      homeActive: false,
      photoListActive: true
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="homeGrid">
          <div className="photo1Container">
            <div className="overlay"></div>
            <img className="photo1" src={this.props.photos[0].url} alt={this.props.photos[0].description} onClick={this.handlePhotoClick} />
          </div>
          <div className="photo23">
            <div className="photo2Container">
              <img className="photo2" src={this.props.photos[1].url} alt={this.props.photos[1].description} onClick={this.handlePhotoClick} />
            </div>
            <div className="photo3Container">
              <img className="photo3" src={this.props.photos[2].url} alt={this.props.photos[2].description} onClick={this.handlePhotoClick} />
            </div>
          </div>
          <div className="photo45">
            <div className="photo4Container">
              <img className="photo4" src={this.props.photos[3].url} alt={this.props.photos[3].description} onClick={this.handlePhotoClick} />
            </div>
            <div className="photo5Container">
              <img className="photo5" src={this.props.photos[4].url} alt={this.props.photos[4].description} onClick={this.handlePhotoClick} />
              <a className="showAll" onClick={this.handleAllClick}>Show all photos</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default HomeGrid;