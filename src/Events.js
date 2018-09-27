import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import events from './images/events/index';

const photos = [
  { src: events[0], width: 2, height: 3 }, { src: events[1], width: 3, height: 2 },
  { src: events[2], width: 3, height: 2 }, { src: events[3], width: 3, height: 2 },
  { src: events[4], width: 2, height: 3 }, { src: events[5], width: 3, height: 2 },
  { src: events[6], width: 2, height: 3 }, { src: events[7], width: 3, height: 3 },
  { src: events[8], width: 3, height: 3 }, { src: events[9], width: 3, height: 2 },
  { src: events[10], width: 3, height: 2 }
];

class Events extends Component {
  state = { currentImage: 0 };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };
  render() {
    const { galleryColumns, classes } = this.props;
    return (
      <Fragment>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.PageTitle} color="secondary" variant="subheading">
              {'Events'}
            </Typography>
          </Toolbar>
        </AppBar>
        <Gallery photos={photos} columns={galleryColumns} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </Fragment>
    );
  }
}

const styles = {
  PageTitle: {
    marginLeft: 40,
  },
  appBar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    top: 0,
    zIndex: -1,
  },
  appBarHeader: {
    flexGrow: 1,
  },
};

export default withStyles(styles)(Events);

Events.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  galleryColumns: PropTypes.number.isRequired,
};
