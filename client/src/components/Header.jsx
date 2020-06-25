import React from 'react';
import axios from 'axios';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  };

  getReviews() {
    axios.get('/api/reviews')
      .then(response => {
        console.log('Client get reviews')
        this.setState({reviews: response.data})
      })
  }

  render() {
    const randomListing = Math.floor(Math.random() * 100);
    if (this.state.reviews.length === 0) {
      return null;
    } else {
      return (
        <div>
          <h1 className="title">{this.state.reviews[randomListing].title}</h1>
          <svg className="starRating" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path className ="star" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
          <span className="avg">{this.state.reviews[randomListing].avg}</span>
          <span className="reviews">{this.state.reviews[randomListing].reviews}</span>
          <span className="location">{this.state.reviews[randomListing].city + ', ' + this.state.reviews[randomListing].state + ', ' + this.state.reviews[randomListing].country}</span>
      </div>
      )
    }
  }
};

export default Header;