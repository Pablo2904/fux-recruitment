import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  spacing: 2,
  palette: {
    common: {
      secondaryButton: '#546E7A'
    },
    primary: {
      main: 'rgba(0,0,0,0.87)',
    },
    secondary: {
      main: '#607D8B'
    },
    action: {
      disabled: 'rgba(0,0,0,0.38)'
    },
    text: {
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
  mixins: {
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column'
    },
    flexBeetwen: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    flexStart: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    flexEnd: {
      display: 'flex',
      justifyContent: 'flex-end',
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
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.078em',
      textTransform: 'uppercase'
    }
  }
});
