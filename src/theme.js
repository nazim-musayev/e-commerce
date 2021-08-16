import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette : {
    primary : {
      main : "#fff"
    },
    secondary : {
      main : "#000"
    }
  },
  breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1200,
        xl: 1920,
      },
    },
    typography: {
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    overrides : {
      MuiInputLabel : {
        root : {
          color : "white",
        }
      },
      MuiOutlinedInput : {
        root : {
          color : "white",
        },
        colorSecondary : {
          color : "black !important",
          border : "1px solid black !important"
        }
      }
    }
})

export default theme;