import React from 'react';
import PhotoItem from './PhotoItem.jsx';
import styles from '../styles/PhotoList.css';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);

    this.clickPhoto = this.clickPhoto.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack(event) {
    event.preventDefault();
    this.props.handleHome({
      homeActive: true,
      photoListActive: false,
      fromGrid: true
    })
  }

  clickPhoto(photoData, state) {
    this.props.onClick(photoData, state);
  }

  render() {
    return (
      <div className={styles.photoListContainer}>
        <div className={styles.photoListWrapper}>
          <div className={styles.photoList}>
              {this.props.photos.map((photo, index) => (
                <PhotoItem key={index} photo={photo} onClick={this.clickPhoto} numPhotos={this.props.photos.length}/>
              ))}
          </div>
        </div>
        <div className={styles.backArrowWrapper}>
          <svg className={styles.backArrow} viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" onClick={this.goBack}><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
        </div>
      </div>
    )
  };
}

export default PhotoList;

