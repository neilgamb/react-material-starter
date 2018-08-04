import React, { Fragment } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const About = () => (
  <Fragment>
    <Typography gutterBottom variant="headline">
      About
    </Typography>
    <Typography gutterBottom>Detail coming soon</Typography>
  </Fragment>
);

const styles = {};

export default withStyles(styles)(About);
