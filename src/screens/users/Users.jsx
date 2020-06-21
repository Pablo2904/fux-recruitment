import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import UsersList from './UsersList'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(12)
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to='/new' {...props} />
));

const Users = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Box mt={24} mb={24} clone>
        <Paper className={classes.paper}>
          <Box pb={8} className={classes.box}>
            <Typography variant='h5'>Users</Typography>
            <Button color='primary' variant='contained' component={LinkBehavior}>
              + add user
            </Button>
          </Box>
          <UsersList />
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
