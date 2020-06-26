import React from 'react';
import PhotoList from './PhotoList.jsx';
import Header from './Header.jsx';
import HomeGrid from './HomeGrid.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [],
      homePhotos: [],
      currentPhoto: {},
      homeActive: true,
      photoListActive: false,
      photoItemActive: false
    }

    this.getPhotos = this.getPhotos.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    axios.get('/api/photos')
      .then(response => {
        var initPhotos = [];
        for (var i = 0; i < 5; i++) {
          initPhotos.push(response.data[i]);
        }
        this.setState({
          allPhotos: response.data,
          homePhotos: initPhotos
        });
      })
      .catch(err => console.log('CLIENT Could not get photos'))
  }

  handleGridClick(imgData) {
    this.setState({
      currentPhoto: imgData,
      homeActive: false,
      photoItemActive: true,
    })
  }

  handlePhotoClick(item) {
    let img = item.url;
  }

  handleAllClick(state) {
    event.preventDefault();
    this.setState({
      homeActive: false,
      photoListActive: true
    })
  }

  handleBackHome(state) {
    this.setState(state);
  }

  render() {
    if (this.state.homeActive) {
      if (this.state.homePhotos.length === 0) {
        return(null);
      } else {
        return (
          <div>
            <Header />
            <HomeGrid photos={this.state.homePhotos} onClick={this.handleGridClick}/>
          </div>
        )
      }
    } else if (this.state.photoListActive) {
      return (
        <div>
          <PhotoList photos={this.state.allPhotos} handleHome={this.handleBackHome}/>
        </div>
      )
    } else if (this.state.photoItemActive) {
      return (
        <div className="clickedPhoto">
          <img className="currentPhoto" src={this.state.currentPhoto.src} />
          <span className="currentDescription">{this.state.currentPhoto.alt}</span>
        </div>
      )
    }
  }
};

export default App;