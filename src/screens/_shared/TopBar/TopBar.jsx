import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../../images/logo.svg'

const useStyles = makeStyles((theme) => ({
  bar: {
    height: theme.spacing(30),
    background: theme.palette.background.header
  },
  img: {
    marginRight: theme.spacing(7.75)
  }
}));
export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.bar}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <img src={logo} alt='Users app logo' className={classes.img} />
          <Typography variant="h5">
            Users app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
