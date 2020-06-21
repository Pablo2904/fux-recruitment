import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import { setUser } from '../../../redux/actions/usersActions';

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to='/' {...props} />
));
const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative'
  },
  link: {
    display: 'flex',
    position: 'absolute',
    left: theme.spacing(7),
    bottom: theme.spacing(2)
  },
  id: {
    color: theme.palette.text.secondary
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  firstButton: {
    marginRight: theme.spacing(8)
  },
  newDisbled: {
    boxShadow: `${theme.shadows[2]} !important`
  }
}))


const UserForm = ({ user }) => {
  const [name, setName] = useState((user && user.first_name) || '')
  const [surname, setSurname] = useState((user && user.last_name) || '')
  const [email, setEmail] = useState((user && user.email) || '')
  const dispatch = useDispatch();
  const history = useHistory()

  const classes = useStyles();
  const header = () => {
    return user ? `${user.first_name} ${user.last_name}` : 'New user details'
  }

  const onChange = e => {
    switch (e.target.id) {
      case 'name':
        return setName(e.target.value)
      case 'surname':
        return setSurname(e.target.value)
      case 'email':
        return setEmail(e.target.value)
      default:
        break;
    }
  }

  const onSubmit = e => {
    e.preventDefault()
  
    dispatch(setUser({ name, surname, email }))
    history.push('')
  }

  return (
    <Container maxWidth='xs'>
      <Box mt={24} mb={24}>
        <Paper elevation={3}>
          <Box>
            <Box pt={12} pl={26} className={classes.header}>
              <Link component={LinkBehavior} className={classes.link}>
                <KeyboardArrowLeftIcon/>
              </Link>
              <Typography variant='h5'>{header()}</Typography>
            </Box>
            {
              user && user.id &&
              <Box pl={26} pt={2} color='textSecondary'>
                <span className={classes.id}>
                  {`ID: ${user.id}`}
                </span>
              </Box>
            }
          </Box>
          <Box pl={26} pr={12} pb={12}>
            <form autoComplete='off' onSubmit={onSubmit}>
              <TextField
                id="name"
                label="Name"
                fullWidth
                variant="outlined"
                margin='normal'
                value={name}
                onChange={onChange}
              />
              <TextField
                id="surname"
                label="Surname"
                variant="outlined"
                fullWidth
                margin='normal'
                value={surname}
                onChange={onChange}
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin='normal'
                value={email}
                onChange={onChange}
              />
              <Box mt={7.5} className={classes.buttons}>
                <Button color='primary' variant='text' className={classes.firstButton} component={LinkBehavior}>
                  CANCEL
                </Button>
                <Button color='secondary' type='submit' variant='contained' disabled={user && true} classes={{
                  disabled: classes.newDisbled
                }}>
                  SUBMIT TO REVIEW
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
};

export default UserForm;