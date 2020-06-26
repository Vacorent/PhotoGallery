import React from 'react';
import PhotoList from './PhotoList.jsx';
import Header from './Header.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [],
      homePhotos: [],
      currentPhoto: '',
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
        console.log(initPhotos);
        this.setState({
          allPhotos: response.data,
          homePhotos: initPhotos
        });
      })
      .catch(err => console.log('CLIENT Could not get photos'))
  }

  handleGridClick(event) {
    event.preventDefault();
    let img = event.target.src;
    console.log(event.target)
    this.setState({
      homeActive: false,
      photoItemActive: true,
      currentPhoto: img
    })
  }

  handlePhotoClick(item) {
    let img = item.url;
  }

  handleAllClick(event) {
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
            <div className="wrapper">
              <div className="homeGrid">
                <div className="photo1Container">
                  <div className="overlay"></div>
                  <img className="photo1" description={this.state.homePhotos[0].description} src={this.state.homePhotos[0].url} onClick={this.handleGridClick} />
                </div>
                <div className="photo23">
                  <div className="photo2Container">
                    <img className="photo2" description={this.state.homePhotos[1].description} src={this.state.homePhotos[1].url} onClick={this.handleGridClick} />
                  </div>
                  <div className="photo3Container">
                    <img className="photo3" description={this.state.homePhotos[2].description} src={this.state.homePhotos[2].url} onClick={this.handleGridClick} />
                  </div>
                </div>
                <div className="photo45">
                  <div className="photo4Container">
                    <img className="photo4" description={this.state.homePhotos[3].description} src={this.state.homePhotos[3].url} onClick={this.handleGridClick} />
                  </div>
                  <div className="photo5Container">
                    <img className="photo5" description={this.state.homePhotos[4].description} src={this.state.homePhotos[4].url} onClick={this.handleGridClick} />
                    <a className="showAll" onClick={this.handleAllClick}>Show all photos</a>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="currentPage">
          <img className="currentPhoto" src={this.state.currentPhoto} />
          <span className="currentDescription">hi</span>
        </div>
      )
    }
  }
};

export default App;