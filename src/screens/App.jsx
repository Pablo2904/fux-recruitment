import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Users from './users';
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

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <TopBar />
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/new' render={()=> <div>new</div>} />
          <Route path='/:userId' render={()=> <div>id</div>}/>
          <Route path='*' render={()=> <div>erro</div>} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
};

export default App;
