import React from 'react';
import styles from '../styles/PhotoItem.css';

class PhotoItem extends React.Component {
  constructor(props) {
    super(props);
    this.photoClick = this.photoClick.bind(this);
  }

  photoClick(event) {
    event.preventDefault();
    this.props.onClick(event.target)
  }

  render() {
    return (
      <div>
        <img className={styles.photoItem} id={this.props.photo.id} src={this.props.photo.url} alt={this.props.photo.description} onClick={this.photoClick}/>
      </div>
    )
  }
}

export default PhotoItem;