import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/home';
import PostList from './pages/post-list';
import Post from './pages/post';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              News
            </Typography>
            <Button color="inherit">Login</Button>
            <ul>
              <li>
                <Button>
                  <NavLink to="/">Home</NavLink>
                </Button>
              </li>
              <li>
                <Button>
                  <NavLink to="/user/blog/">Posts</NavLink>
                </Button>
              </li>
              <li>
                <Button>
                  <NavLink to="/user/post/">Post</NavLink>
                </Button>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/user/blog/">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/user/post/">Post</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/user/blog/" exact component={PostList} />
        <Route path="/user/post/" exact component={Post} />
      </div>
    </Router>
  );
};

export default App;
