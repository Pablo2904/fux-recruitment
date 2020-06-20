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
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '4px',
    padding: '16px 16px 12px',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',

    '&:hover': {
      background: '#fafafa'
    },

    '&:last-child': {
      marginBottom: 0
    }
  },
  image: {
    height: '100%',
    width: 'auto'
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  idText: {
    fontSize: '14px',
    letterSpacing: '0.25px',
    lineHeight: '20px',
    color: 'rgba(0,0,0,0.6)'
  }
}));
// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to={`/${props}`} {...props} />
// ));
const UsersList = () => {
  const users = useSelector(state => state.users.data);
  const classes = useStyles();

  return (
    <List p={0}>
      {users.map(user => (
        <Link key={`user-${user.id}`} component={RouterLink} to={`/${user.id}`} underline='none'>
          <ListItem className={classes.item}>
            <div className={classes.leftContent}>
              <ListItemText
                className={classes.idText}
                secondary={`ID: ${user.id}`}
              />
              <ListItemText
                primary={
                  <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
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
