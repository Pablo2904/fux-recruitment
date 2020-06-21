import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    border: `${theme.spacing(0.5)}px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(2),
    padding: `${theme.spacing(8)}px ${theme.spacing(8)}px ${theme.spacing(6)}px`,
    marginBottom: theme.spacing(8),
    display: 'flex',
    justifyContent: 'space-between',

    '&:hover': {
      background: theme.palette.background.active
    }
  },
  image: {
    height: theme.spacing(42),
    width: theme.spacing(51.5)
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    marginBottom: theme.spacing(4)
  }
}));

const UsersList = () => {
  const users = useSelector(state => state.users);
  const classes = useStyles();

  return (
    <List p={0}>
      {users && users.map(user => (
        <Link key={`user-${user.id}`} component={RouterLink} to={`/${user.id}`} underline='none'>
          <ListItem className={classes.item}>
            <div className={classes.leftContent}>
              <ListItemText
                color='textSecondary'
                secondary={`ID: ${user.id}`}
              />
              <ListItemText
                primary={
                  <Typography color='textPrimary' variant="h5" className={classes.name}>{`${user.first_name} ${user.last_name}`}</Typography>
                }
                secondary={user.email}
              />
            </div>
            <ListItemAvatar >
              <Avatar alt={`${user.first_name} ${user.last_name} avatar`} src={user.avatar} variant='square' className={classes.image}/>
            </ListItemAvatar>
          </ListItem>
        </Link>
      ))}
    </List>
  )
};

export default UsersList;
