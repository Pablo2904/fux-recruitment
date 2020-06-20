import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to='/' {...props} />
));
// const useStyles = makeStyles(() => ({
// })
const UserForm = ({user}) => {
  // const users = useSelector(state => state.users.data);
  // const classes = useStyles();
  const header = () => {
    return user ? `${user.first_name} ${user.last_name}` : 'New user details'
  }
  return (
    <Paper elevation={3}>
      <Box>
        <Link component={LinkBehavior}>
          <ArrowBackIosIcon/>
        </Link>
        <Typography variant='h5'>{header()}</Typography>
        <span>
          {user && user.id && `ID: ${user.id}`}
        </span>
      </Box>
      <Box>
        <form autoComplete='off'>
          <TextField
            id="name"
            label="Name"
            defaultValue={''}
            disabled
            variant="outlined"
          />
          <TextField
            id="surname"
            label="Surname"
            defaultValue=""
            variant="outlined"
          />
          <TextField
            id="email"
            label="Email"
            defaultValue=""
            variant="outlined"
          />
        </form>
      </Box>
    </Paper>
  )
};

export default UserForm;