import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ViewPort from './components/ViewPort';
import Home from './pages/home';
import Post from './pages/post';
import PostList from './pages/post-list';
import GlobalStyle from './styles/components/GlobalStyle';
import defaultTheme from './styles/themes/default';

const App = () => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <GlobalStyle />
          <TopBar />
          <ViewPort>
            <Route path="/" exact component={Home} />
            <Route path="/user/blog/" exact component={PostList} />
            <Route path="/user/post/" exact component={Post} />
          </ViewPort>
          <Footer />
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
