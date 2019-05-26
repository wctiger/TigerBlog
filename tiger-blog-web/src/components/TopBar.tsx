import {
  AppBar,
  createStyles,
  IconButton,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
  withStyles,
  Snackbar
} from '@material-ui/core';
import { Brightness2, WbSunny } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import SearchBox from './SearchBox';
import User from './User';
import styled from 'styled-components';
import { green, amber } from '@material-ui/core/colors';

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
        {context.globalMessage && (
          <StyledSnackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            className={context.globalMessage.type}
            open={true}
            autoHideDuration={
              context.globalMessage.type !== 'error' ? 3000 : null
            }
            onClose={() => context.setGlobalMessage(null)}
            message={<span>{context.globalMessage.message}</span>}
          />
        )}
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

const StyledSnackbar = styled<any>(Snackbar)`
  margin-top: 5rem;

  &.success > div {
    background-color: ${green[600]};
  }
  &.error > div {
    background-color: ${props => props.theme.palette.error.dark};
  }
  &.info > div {
    background-color: ${props => props.theme.palette.primary.dark};
  }
  &.warning > div {
    background-color: ${amber[600]};
  }
`;

export default withStyles(styles)(TopBar);
