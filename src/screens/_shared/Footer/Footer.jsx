import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.background.footer,
    marginTop: 'auto',
    borderTop: `${theme.spacing(1)}px solid ${theme.palette.divider}`
  },
  content: {
    color: theme.palette.secondary.main,
  },
  container: {
    height: theme.spacing(20),
    ...theme.mixins.flexCenter
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.footer}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h6" align='center' className={classes.content} >
          &copy; USERS APP
        </Typography>
      </Container>
      </div>
    </footer>
  );
}
