import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './screens/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store';

const store = configureStore();
const theme = createMuiTheme({
  spacing: 2,
  palette: {
    primary: {
      main: '#607D8B'
    },
    secondary: {
      main: '#546E7A'
    },
    action: {
      disabled: 'rgba(0,0,0,0.38)'
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)'
    },
    divider: '#C1C6C8',
    background: {
      header: '#617D8B',
      footer: '#E1E4E5',
      active: '#fafafa',
      container: '#EEF0F1'
    }
  },
  typography: {
    h5: {
      lineHeight: 1.16,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '0.75rem',
      lineHeight: 1.33,
      letterSpacing: '0.16em'
    },
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      letterSpacing: '0.078em',
      textTransform: 'uppercase'
    }
  }
});

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
