import React, { useState, useContext } from 'react';
import {
  Button,
  Avatar,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  Fade
} from '@material-ui/core';
import styled from 'styled-components';
import LoginBox from './LoginBox';
import { AppContext } from '../App';
import { ExitToApp, Create } from '@material-ui/icons';
import { withRouter, RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps {
  className?: string;
}

const User: React.FunctionComponent<IProps> = props => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(AppContext);
  return (
    <Container>
      {context.authenticatedUser ? (
        <React.Fragment>
          <Tooltip title={'User: ' + context.authenticatedUser.DisplayName}>
            <StyledAvatar onClick={() => setMenuOpen(!menuOpen)}>
              {context.authenticatedUser.DisplayName
                ? context.authenticatedUser.DisplayName[0]
                : 'U'}
            </StyledAvatar>
          </Tooltip>
          <Fade in={menuOpen}>
            <UserMenu>
              <List>
                <ListItem dense>
                  <ListItemIcon>
                    <Avatar style={{ width: '2rem', height: '2rem' }}>
                      {context.authenticatedUser.DisplayName
                        ? context.authenticatedUser.DisplayName[0]
                        : 'U'}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      context.authenticatedUser.DisplayName || 'Test User'
                    }
                  />
                </ListItem>
                <Divider />
                <ListItem
                  button
                  onClick={() => {
                    props.history.push('/new');
                    setMenuOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <Create />
                  </ListItemIcon>
                  <ListItemText primary="New Post" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    setMenuOpen(false);
                    context.setUser(null);
                  }}
                >
                  <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItem>
              </List>
            </UserMenu>
          </Fade>
        </React.Fragment>
      ) : (
        <Button className={props.className} onClick={() => setLoginOpen(true)}>
          {'Login'}
        </Button>
      )}
      <LoginBox isOpen={loginOpen} close={() => setLoginOpen(false)} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const StyledAvatar = styled<any>(Avatar)`
  cursor: pointer;
`;

const UserMenu = styled.div`
  position: absolute;
  z-index: 200;
  top: 6rem;
  right: 1rem;
  width: 20rem;
  background-color: ${props => props.theme.palette.primary.light};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  ::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -2rem;
    right: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 2rem solid ${props => props.theme.palette.primary.light};
  }
`;

export default withRouter(User);
