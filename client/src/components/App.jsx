import React from 'react';
import Header from './Header.jsx';
import HomeGrid from './HomeGrid.jsx';
import PhotoList from './PhotoList.jsx';
import ClickedPhoto from './ClickedPhoto.jsx'
import styles from '../styles/App.css'
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [],
      homePhotos: [],
      currentPhoto: {},
      homeActive: true,
      fromGrid: true,
      photoListActive: false,
      photoItemActive: false
    }

    this.getPhotos = this.getPhotos.bind(this);
    this.handlePhotoClick = this.handlePhotoClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleBackHome = this.handleBackHome.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  handlePhotoClick(photoData) {
    this.setState({
      currentPhoto: photoData,
      homeActive: false,
      photoListActive: false,
      photoItemActive: true
    })
  }

  handleAllClick(state) {
    this.setState(state);
  }

  handleBackHome(state) {
    this.setState(state);
  }

  handleClose(state) {
    this.setState(state);
  }

  render() {
    if (this.state.homeActive) {
      if (this.state.homePhotos.length === 0) {
        return(null);
      } else {
        return (
          <div className={styles.appHomeContainer}>
            <Header />
            <HomeGrid photos={this.state.homePhotos} onClick={this.handlePhotoClick} allClick={this.handleAllClick} onClose={this.handleClose}/>
          </div>
        )
      }
    } else if (this.state.photoListActive) {
      return (
        <div className={styles.appPhotolistContainer}>
          <PhotoList photos={this.state.allPhotos} onClick={this.handlePhotoClick} handleHome={this.handleBackHome} />
        </div>
      )
    } else if (this.state.photoItemActive) {
      return (
        <ClickedPhoto id={this.state.currentPhoto.id} photo={this.state.currentPhoto} onClose={this.handleClose} numPhotos={this.state.allPhotos.length}/>
      )
    }
  }
};

export default App;