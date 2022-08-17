import { createTheme } from '@mui/material/styles';
import { primary } from './variables/colors';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: primary,
          color: 'white',
          "& .MuiListItemIcon-root": {
            color: "inherit",
            minWidth: '35px'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        paper: {
          background: 'white',
          backgroundColor: 'white'
        }
      },
    }
  },
  palette: {
    appbarColor: 'white',
    background: {
      default: '#F3F3F3'
    }
  }
});

export default theme;