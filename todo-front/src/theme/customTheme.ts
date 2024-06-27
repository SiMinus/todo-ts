import { createTheme, ThemeOptions } from "@mui/material";


export const customTheme: ThemeOptions = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: 'rgba(168,85,247,.80)',
        main: 'rgba(168,85,247,.65)',
        dark: 'rgba(168,85,247,.28)'
      },
      background: {
        paper: 'rgba(80, 80, 80, 0.7)',
        default: 'url("/bg-img.jpg")' // set up background image
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: 'url("/bg-img.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed' // In this way, background image won't slide when scrolling up and down
          }
        }
      }
    }
  })
