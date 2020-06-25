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
      homeActive: true,
      photoListActive: false,
      photoItemActive: false
    }

    this.getPhotos = this.getPhotos.bind(this);
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
        console.log('CLIENT Get Photos');
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

  handlePhotoClick(event) {
    event.preventDefault();
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
                  <img className="photo1" src={this.state.homePhotos[0].url} onClick={this.handlePhotoClick} />
                </div>
                <div className="photo23">
                  <div className="photo2Container">
                    <img className="photo2" src={this.state.homePhotos[1].url} onClick={this.handlePhotoClick} />
                  </div>
                  <div className="photo3Container">
                    <img className="photo3" src={this.state.homePhotos[2].url} onClick={this.handlePhotoClick} />
                  </div>
                </div>
                <div className="photo45">
                  <div className="photo4Container">
                    <img className="photo4" src={this.state.homePhotos[3].url} onClick={this.handlePhotoClick} />
                  </div>
                  <div className="photo5Container">
                    <img className="photo5" src={this.state.homePhotos[4].url} onClick={this.handlePhotoClick} />
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
    }
  }
};

export default App;