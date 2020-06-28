import React from 'react';
import styles from '../styles/ClickedPhoto.css';

class ClickedPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(event) {
    event.preventDefault();
    this.props.onClose({
      photoListActive: true,
      photoItemActive: false
    })
  }

  handleNext(event) {
    event.preventDefault();

  }

  render() {
    return (
    <div className={styles.photoContainer}>
      <div className={styles.photoWrapper}>
        <img className={styles.currentPhoto} src={this.props.photo.src}/>
      </div>
      <div className={styles.descriptionWrapper}>
        <span className={styles.currentDescription}>{this.props.photo.alt}</span>
      </div>
      <div className={styles.numPhotosWrapper}>
        <span className={styles.numPhotos}>{this.props.photo.id + " / " + this.props.numPhotos}</span>
      </div>
      <div>
        <button type="button" className={styles.closeBtnContainer} onClick={this.handleClose}><span className={styles.closeBtnWrapper}><span className={styles.closeBtnX}><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className={styles.closeBtnText}>Close</span></span></button>
      </div>
      <div>
        <button aria-label="Next" type="button" className={styles.nextBtn}><span className={styles.nextContainer}><span className={styles.nextWrapper}></span><svg className={styles.nextSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button>
      </div>
      <div>
        <button aria-label="Next" type="button" className={styles.prevBtn}><span className={styles.prevContainer}><span className={styles.prevWrapper}></span><svg className={styles.prevSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button>
      </div>
    </div>
    )
  }
}

export default ClickedPhoto;