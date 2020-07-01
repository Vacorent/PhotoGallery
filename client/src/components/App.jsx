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
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
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
      .catch(err => {})
  }

  handlePhotoClick(photoData, state) {
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

  handleNext(nextPhoto) {
    let nextId = Number(nextPhoto.id);
    nextId++;
    for (var i = 0; i < this.state.allPhotos.length; i++) {
      if (this.state.allPhotos[i].id === nextId) {
        this.setState({currentPhoto: this.state.allPhotos[i]});
      }
    }
  }

  handlePrev(prevPhoto) {
    let prevId = Number(prevPhoto.id);
    prevId--;
    for (var i = 0; i< this.state.allPhotos.length; i++) {
      if (this.state.allPhotos[i].id === prevId) {
        this.setState({currentPhoto: this.state.allPhotos[i]});
      }
    }
  }

  render() {
    if (this.state.homeActive && this.state.fromGrid) {
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
    } else if (this.state.photoListActive && !this.state.fromGrid) {
      return (
        <div className={styles.appPhotolistContainer}>
          <PhotoList photos={this.state.allPhotos} onClick={this.handlePhotoClick} handleHome={this.handleBackHome} />
        </div>
      )
    } else if (this.state.photoItemActive) {
      return (
        <ClickedPhoto id={this.state.currentPhoto.id} photo={this.state.currentPhoto} numPhotos={this.state.allPhotos.length} gridClick={this.state.fromGrid} onClose={this.handleClose} onNext={this.handleNext} onPrev={this.handlePrev}/>
      )
    }
  }
};

export default App;
