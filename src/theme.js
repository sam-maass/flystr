import { createMuiTheme } from '@material-ui/core/styles';
import { styles } from './styles';

export const createTheme = () =>
  createMuiTheme({
    palette: {
      primary: { main: styles.colors.blue3 },
      secondary: { main: styles.colors.orange },
      typography: {
        fontFamily: ['Open Sans', 'Roboto', 'sans-serif'].join(',')
      }
    }
  });
