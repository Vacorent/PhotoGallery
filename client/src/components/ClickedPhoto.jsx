import React from 'react';
import styles from '../styles/ClickedPhoto.css';

class ClickedPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstClick: true,
      nextPrevClick: false,
      nextPrevPhoto: {},
      fromGrid: this.props.gridClick
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleClose(event) {
    event.preventDefault();
    if (this.state.fromGrid) {
      this.props.onClose({
        homeActive: true,
        photoItemActive: false
      })
    } else {
      this.props.onClose({
        fromGrid: false,
        photoListActive: true,
        photoItemActive: false
      })
    }
  }

  handleNext(event) {
    event.preventDefault();
    this.props.onNext(this.props);
    this.setState({
      firstClick: false,
      nextPrevClick: true,
      nextPrevPhoto: {}
    })
  }

  handlePrev(event) {
    event.preventDefault();
    this.props.onPrev(this.props);
    this.setState({
      firstClick: false,
      nextPrevClick: true,
      nextPrevPhoto: {}
    })
  }

  render() {
    if (this.state.firstClick) {
      if (Number(this.props.photo.id) === 1) {
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
          <div className={styles.closeBtnContainer}>
            <button type="button" className={styles.closeBtn} onClick={this.handleClose}><span className={styles.closeBtnWrapper}><span className={styles.closeBtnX}><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className={styles.closeBtnText}>Close</span></span></button>
          </div>
          <div className={styles.nextBtnContainer}>
            <button aria-label="Next" type="button" className={styles.nextBtn} onClick={this.handleNext}><span className={styles.nextContainer}><span className={styles.nextWrapper}></span><svg className={styles.nextSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button>
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
        )
      } else if (Number(this.props.photo.id) === this.props.numPhotos) {
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
            <div className={styles.closeBtnContainer}>
              <button type="button" className={styles.closeBtn} onClick={this.handleClose}><span className={styles.closeBtnWrapper}><span className={styles.closeBtnX}><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className={styles.closeBtnText}>Close</span></span></button>
            </div>
            <div className={styles.prevBtnContainer}>
              <button aria-label="Next" type="button" className={styles.prevBtn} onClick={this.handlePrev}><span className={styles.prevContainer}><span className={styles.prevWrapper}></span><svg className={styles.prevSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button>
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
        )
      } else {
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
            <div className={styles.closeBtnContainer}>
              <button type="button" className={styles.closeBtn} onClick={this.handleClose}><span className={styles.closeBtnWrapper}><span className={styles.closeBtnX}><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className={styles.closeBtnText}>Close</span></span></button>
            </div>
            <div className={styles.nextBtnContainer}>
              <button aria-label="Next" type="button" className={styles.nextBtn} onClick={this.handleNext}><span className={styles.nextContainer}><span className={styles.nextWrapper}></span><svg className={styles.nextSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button>
            </div>
            <div className={styles.prevBtnContainer}>
              <button aria-label="Next" type="button" className={styles.prevBtn} onClick={this.handlePrev}><span className={styles.prevContainer}><span className={styles.prevWrapper}></span><svg className={styles.prevSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button>
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
        )
      }
    } else if (this.state.nextPrevClick) {
      if (Number(this.props.photo.id) === 1) {
        return (
          <div className={styles.photoContainer}>
            <div className={styles.photoWrapper}>
              <img className={styles.currentPhoto} src={this.props.photo.url}/>
            </div>
            <div className={styles.descriptionWrapper}>
              <span className={styles.currentDescription}>{this.props.photo.description}</span>
            </div>
            <div className={styles.numPhotosWrapper}>
              <span className={styles.numPhotos}>{this.props.photo.id + " / " + this.props.numPhotos}</span>
            </div>
            <div className={styles.closeBtnContainer}>
              <button type="button" className={styles.closeBtn} onClick={this.handleClose}><span className={styles.closeBtnWrapper}><span className={styles.closeBtnX}><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className={styles.closeBtnText}>Close</span></span></button>
            </div>
            <div className={styles.nextBtnContainer}>
              <button aria-label="Next" type="button" className={styles.nextBtn} onClick={this.handleNext}><span className={styles.nextContainer}><span className={styles.nextWrapper}></span><svg className={styles.nextSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button>
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
        )
      } else if (Number(this.props.photo.id) === this.props.numPhotos) {
        return (
          <div className={styles.photoContainer}>
            <div className={styles.photoWrapper}>
              <img className={styles.currentPhoto} src={this.props.photo.url}/>
            </div>
            <div className={styles.descriptionWrapper}>
              <span className={styles.currentDescription}>{this.props.photo.description}</span>
            </div>
            <div className={styles.numPhotosWrapper}>
              <span className={styles.numPhotos}>{this.props.photo.id + " / " + this.props.numPhotos}</span>
            </div>
            <div className={styles.closeBtnContainer}>
              <button type="button" className={styles.closeBtn} onClick={this.handleClose}><span className={styles.closeBtnWrapper}><span className={styles.closeBtnX}><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className={styles.closeBtnText}>Close</span></span></button>
            </div>
            <div className={styles.prevBtnContainer}>
              <button aria-label="Next" type="button" className={styles.prevBtn} onClick={this.handlePrev}><span className={styles.prevContainer}><span className={styles.prevWrapper}></span><svg className={styles.prevSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button>
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
        )
      } else {
        return (
          <div className={styles.photoContainer}>
            <div className={styles.photoWrapper}>
              <img className={styles.currentPhoto} src={this.props.photo.url}/>
            </div>
            <div className={styles.descriptionWrapper}>
              <span className={styles.currentDescription}>{this.props.photo.description}</span>
            </div>
            <div className={styles.numPhotosWrapper}>
              <span className={styles.numPhotos}>{this.props.photo.id + " / " + this.props.numPhotos}</span>
            </div>
            <div className={styles.closeBtnContainer}>
              <button type="button" className={styles.closeBtn} onClick={this.handleClose}><span className={styles.closeBtnWrapper}><span className={styles.closeBtnX}><svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></svg></span><span className={styles.closeBtnText}>Close</span></span></button>
            </div>
            <div className={styles.nextBtnContainer}>
              <button aria-label="Next" type="button" className={styles.nextBtn} onClick={this.handleNext}><span className={styles.nextContainer}><span className={styles.nextWrapper}></span><svg className={styles.nextSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg></span></button>
            </div>
            <div className={styles.prevBtnContainer}>
              <button aria-label="Next" type="button" className={styles.prevBtn} onClick={this.handlePrev}><span className={styles.prevContainer}><span className={styles.prevWrapper}></span><svg className={styles.prevSvg} aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg></span></button>
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
        )
      }
    }
  }
}


export default ClickedPhoto;