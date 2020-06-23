import React from 'react';
import PhotoList from './PhotoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [],
      homePhotos: [],
      homeListActive: true,
      photoListActive: false,
      photoItemActive: false
    }

    this.getPhotos = this.getPhotos.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
          photos: response.data,
          homePhotos: initPhotos
        });
      })
      .catch(err => console.log('CLIENT Could not get photos'))
  }

  handleClick(event) {
    event.preventDefault();
    console.log(event.target.src)
  }

  render() {
    if (this.state.homeListActive) {
      if (this.state.homePhotos.length === 0) {
        return(null);
      } else {
        console.log(this.state.homePhotos)
        return (
          <div className="wrapper">
            <div className="homeGrid">
              <div className="photo1Container">
                <img className="photo1" src={this.state.homePhotos[0].url} onClick={this.handleClick}/>
              </div>
              <div className="photo23">
                <div className="photo2Container">
                  <img className="photo2" src={this.state.homePhotos[1].url} />
                </div>
                <div className="photo3Container">
                  <img className="photo3" src={this.state.homePhotos[2].url} />
                </div>
              </div>
              <div className="photo45">
                <div className="photo4Container">
                  <img className="photo4" src={this.state.homePhotos[3].url} />
                </div>
                <div className="photo5Container">
                  <img className="photo5" src={this.state.homePhotos[4].url} />
                  <a className="showAll">Show all photos</a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    } else if (this.state.photoListActive) {
      return (
        <div>
          <PhotoList photos={this.state.photos} />
        </div>
      )
    }
  }
};

export default App;