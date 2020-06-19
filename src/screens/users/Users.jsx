import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UsersList from './UsersList'
import { loadUsers } from '../../redux/actions/usersActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    padding: '24px'
  },
}));

const Users = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Box mt={6} mb={6} clone>
        <Paper className={classes.paper}>
          <Box pb={2.5} clone>
            <Typography variant='h5'>Users</Typography>
          </Box>
          <UsersList />
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
