import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import { purple, green, amber } from '@material-ui/core/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: '#fff'
    },
    secondary: amber
  },
  typography: {
    fontFamily: ['Lato', 'Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10
  }
});

export default muiTheme;
