import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ViewPort from './components/ViewPort';
import BackToTop from './components/BackToTop';
import Home from './pages/home';
import Post from './pages/post';
import NewPost from './pages/new-post';
import GlobalStyle from './styles/components/GlobalStyle';
import defaultTheme from './styles/themes/default';
import { ContextViewModel } from './models/context';
import HttpBase from './components/HttpBase';

export const AppContext = React.createContext<ContextViewModel>(
  new ContextViewModel()
);

const App = () => {
  const [appState, setAppState] = useState(new ContextViewModel());
  appState.setTheme = theme => {
    setAppState({ ...appState, themeType: theme });
  };
  appState.setUser = user => {
    setAppState({ ...appState, authenticatedUser: user });
  };
  appState.setGlobalMessage = message => {
    setAppState({ ...appState, globalMessage: message });
  };
  appState.setTestPostContent = content => {
    setAppState({ ...appState, testPostContent: content });
  };

  const theme = createMuiTheme({
    ...defaultTheme,
    palette: { ...defaultTheme.palette, type: appState.themeType }
  });

  return (
    <AppContext.Provider value={appState}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <HttpBase>
            <Router>
              <GlobalStyle />
              <TopBar />
              <ViewPort>
                <Route path="/" exact component={Home} />
                <Route path="/new" exact component={NewPost} />
                <Route path="/edit/:id" exact component={NewPost} />
                <Route path="/posts/:id" component={Post} />
              </ViewPort>
              <BackToTop />
              <Footer />
            </Router>
          </HttpBase>
        </ThemeProvider>
      </MuiThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
