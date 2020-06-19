import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  bar: {
    background: '#617D8B',
    height: '60px'
  },
  img: {
    marginRight: '15.5px'
  },
  content: {
    lineHeight: '28px'
  }
}));
export default function TopBar({children, disabled}) {
  const classes = useStyles();

  return (
    <Button disabled={disabled}>
      {children}
    </Button>
  )
}