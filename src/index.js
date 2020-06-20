import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
    }
  },
  button: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1,
    letterSpacing: '0.078125rem',
    textTransform: 'uppercase'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
