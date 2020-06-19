import React from 'react';
import Container from '@material-ui/core/Container/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  footer: {
    background: '#E1E4E5',
    marginTop: 'auto',
    borderTop: '2px solid #C1C6C8'
  },
  content: {
    textAlign: 'center',
    lineHeight: '16px',
    color: '#607D8B',
    fontSize: '12px',
    letterSpacing: '2px'
  },
  container: {
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <footer>
        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h6" className={classes.content} >
            &copy; USERS APP
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
