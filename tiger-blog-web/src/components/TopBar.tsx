import {
  AppBar,
  createStyles,
  IconButton,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
  withStyles
} from '@material-ui/core';
import { Brightness2, WbSunny } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import SearchBox from './SearchBox';
import User from './User';
import styled from 'styled-components';

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
  const context = useContext(AppContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={props.classes.grow}>
          <Link className={props.classes.nodeco} to={'/'}>
            TigerBlog
          </Link>
        </Typography>
        <SearchBox />
        <Tooltip title="Toggle light/dark mode">
          <StyledIconButton
            onClick={() =>
              context.themeType === 'light'
                ? context.setTheme('dark')
                : context.setTheme('light')
            }
          >
            {context.themeType === 'light' ? (
              <Brightness2 className={props.classes.top} />
            ) : (
              <WbSunny className={props.classes.top} />
            )}
          </StyledIconButton>
        </Tooltip>
        <User className={props.classes.top} />
      </Toolbar>
    </AppBar>
  );
};

const StyledIconButton = styled<any>(IconButton)`
  && {
    margin-right: 1.5rem;
  }
`;

export default withStyles(styles)(TopBar);
