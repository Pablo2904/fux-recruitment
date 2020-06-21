import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { loadUsers } from '../redux/actions/usersActions';
import Users from './users';
import UserForm from '../screens/users/UserForm'
import TopBar from './_shared/TopBar';
import Footer from './_shared/Footer';
import { setInfo } from '../redux/actions/infoActions';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.palette.background.container
  },
}));

const SingleUser = ({ match }) => {
  const users = useSelector(state => state.users);
  const user = users.find(user => {
    return parseInt(match.params.userId) === user.id
  })
  return user && match.isExact ? <UserForm user={user} /> : <div>Page not found</div>
}

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const info = useSelector(state => state.info);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setInfo(''))
    }, 5000)

    return () => clearTimeout(timeout)
  }, [dispatch, info])

  return (
    <Router>
      <div className={classes.container}>
        <TopBar />
        <main>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/new' component={UserForm} />
          <Route path={`/:userId`} component={SingleUser}/>
          <Route path='*' render={()=> <div>Page not found</div>} />
        </Switch>
        </main>
        <Footer />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(info)}
        message={info}
        key={'top-center'}
      />
    </Router>
  )
};

export default App;
