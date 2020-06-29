import React from 'react';
import styles from '../styles/Header.css';
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
        this.setState({reviews: response.data})
      })
  }

  render() {
    const randomListing = Math.floor(Math.random() * 100);
    if (this.state.reviews.length === 0) {
      return null;
    } else {
      return (
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{this.state.reviews[randomListing].title}</h1>
            </div>
            <div className={styles.starWrapper}>
              <svg className={styles.starRating} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path className={styles.star} d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
            </div>
            <div className={styles.avgWrapper}>
              <span className={styles.avg}>{this.state.reviews[randomListing].avg}</span>
            </div>
            <div className={styles.reviewsWrapper}>
              <span className={styles.reviews}>{'(' + this.state.reviews[randomListing].reviews + ')'}</span>
            </div>
            <div className={styles.dotWrapper}>
              <span className={styles.dot} aria-hidden="true">·</span>
            </div>
            <div className={styles.locationWrapper}>
              <span className={styles.location}>{this.state.reviews[randomListing].city + ', ' + this.state.reviews[randomListing].state + ', ' + this.state.reviews[randomListing].country}</span>
            </div>
            <div className={styles.shareSaveContainer}>
              <div className={styles.shareSaveWrapper}>
                <div className={styles.shareSaveBox}>
                  <button type="button" className={styles.shareBtn}>
                    <div className={styles.shareBtnContainer}>
                      <span className={styles.shareBtnWrapper}>
                        <svg className={styles.shareBtnSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <g vectorEffect="non-scaling-stroke" transform="translate(0,0)scale(1,1)" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2">
                            <path d="m27 18v9c0 1.1045695-.8954305 2-2 2h-18c-1.1045695 0-2-.8954305-2-2v-9"></path>
                            <path d="m4.5 14.5h23z" transform="matrix(0 1 -1 0 30.5 -1.5)"></path>
                            <path d="m6 13 9.2928932-9.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l9.2928932 9.29289322"></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                    <span className={styles.shareText}>Share</span>
                  </button>
                </div>
                <div>
                  <button type="button" className={styles.saveBtn}>
                    <div className={styles.saveBtnContainer}>
                      <span className={styles.saveBtnWrapper}>
                        <svg className={styles.saveBtnSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                        </svg>
                      </span>
                    </div>
                    <span className={styles.saveText}>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
};

export default Header;

<div className="_xluqb9"><div className="_1jdtwz4"><div className="_c2acbp"><button type="button" className="_qp12mwx"><div className="_5kaapu"><span className="_14tkmhr"><svg aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 16px; width: 16px; fill: currentcolor;"><g vector-effect="non-scaling-stroke" transform="translate(0,0)scale(1,1)" fill="none" fill-rule="evenodd" stroke="#000" stroke-width="2"><path d="m27 18v9c0 1.1045695-.8954305 2-2 2h-18c-1.1045695 0-2-.8954305-2-2v-9"></path><path d="m4.5 14.5h23z" transform="matrix(0 1 -1 0 30.5 -1.5)"></path><path d="m6 13 9.2928932-9.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l9.2928932 9.29289322"></path></g></svg></span>Share</div></button></div><div><button type="button" className="_qp12mwx"><div className="_5kaapu"><span className="_14tkmhr"><svg aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg></span>Save</div></button></div></div></div>