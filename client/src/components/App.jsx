import React from 'react';
import PhotoList from './PhotoList.jsx';
import HomeList from './HomeList.jsx';
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
          <div className="homeGrid">
            <div className="boxOne">
              <img className="homePhoto1" onClick={this.handleClick} src={this.state.homePhotos[0].url}/>
            </div>
            <div className="boxTwo">2</div>
            <div className="boxThree">3</div>
            <div className="boxFour">4</div>
            <div className="boxFive">5</div>
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