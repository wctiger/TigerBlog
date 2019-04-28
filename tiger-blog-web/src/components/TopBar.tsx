import {
  AppBar,
  Button,
  createStyles,
  Theme,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';
import React from 'react';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    grow: {
      flex: 1
    },
    nodeco: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText
    },
    top: {
      fontWeight: 700,
      color: theme.palette.primary.contrastText
    }
  });

const TopBar: React.FunctionComponent<any> = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={props.classes.grow}>
          <Link className={props.classes.nodeco} to={'/'}>
            TigerBlog
          </Link>
        </Typography>
        <SearchBox />
        <Button className={props.classes.top}>{'Login'}</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
