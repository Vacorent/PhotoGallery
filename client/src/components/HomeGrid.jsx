import React from 'react';
import styles from '../styles/HomeGrid.css';

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
      <div className={styles.homeGridWrapper}>
        <div className={styles.homeGrid}>
          <div className={styles.photo1Container}>
            <img className={styles.photo1} id="1" src={this.state.gridPhotos[0].url} alt={this.state.gridPhotos[0].description} onClick={this.handlePhotoClick} />
          </div>
          <div className={styles.photo23}>
            <div className={styles.photo2Container}>
              <img className={styles.photo2} id="2" src={this.state.gridPhotos[1].url} alt={this.state.gridPhotos[1].description} onClick={this.handlePhotoClick} />
            </div>
            <div className={styles.photo3Container}>
              <img className={styles.photo3} id="3" src={this.state.gridPhotos[2].url} alt={this.state.gridPhotos[2].description} onClick={this.handlePhotoClick} />
            </div>
          </div>
          <div className={styles.photo45}>
            <div className={styles.photo4Container}>
              <img className={styles.photo4} id="4" src={this.state.gridPhotos[3].url} alt={this.state.gridPhotos[3].description} onClick={this.handlePhotoClick} />
            </div>
            <div className={styles.photo5Container}>
              <img className={styles.photo5} id="5" src={this.state.gridPhotos[4].url} alt={this.state.gridPhotos[4].description} onClick={this.handlePhotoClick} />
              <a className={styles.showAll} onClick={this.handleAllClick}>Show all photos</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default HomeGrid;