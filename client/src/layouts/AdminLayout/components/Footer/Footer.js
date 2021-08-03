import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Gourav Kumar
      </Typography>
      <Typography variant="caption">
        <Link href="http://bookmyshow.com/" target="_blank" rel="noopener">
          Gourav Kumar
        </Link>
      </Typography>
    </div>
  );
}
