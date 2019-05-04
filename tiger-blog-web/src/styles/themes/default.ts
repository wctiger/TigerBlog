import { amber, green } from '@material-ui/core/colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const muiTheme: ThemeOptions = {
  palette: {
    primary: {
      main: green[500],
      contrastText: '#fff'
    },
    secondary: amber,
    type: 'light'
  },
  typography: {
    fontFamily: ['Lato', 'Roboto', 'sans-serif'].join(','),
    htmlFontSize: 10,
    useNextVariants: true
  }
};

export default muiTheme;
