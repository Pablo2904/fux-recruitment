import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { loadUsers } from '../redux/actions/usersActions';
import Users from './users';
import UserForm from '../screens/users/UserForm'
import TopBar from './_shared/TopBar';
import Footer from './_shared/Footer';


const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: '#EEF0F1'
  },
}));

const SingleUser = ({ match }) => {
  const users = useSelector(state => state.users.data);
  const user = users.find(user => {
    return parseInt(match.params.userId) === user.id
  })
  return user && match.isExact ? <UserForm user={user} /> : <div>erro</div>

}

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Router>
      <div className={classes.container}>
        <TopBar />
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/new' component={UserForm} />
          <Route path={`/:userId`} component={SingleUser}/>
          <Route path='*' render={()=> <div>erro</div>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
};

export default App;
