import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        light: '#101D25',
        dark: '#101D25',
      },
      secondary: {
        main: '#00B09C',
        light: '#00B09C',
        dark: '#00B09C',
      },
      background: {
        default: '#101D25',
        paper: '#232D36',
      },
      divider: '#b2c5bb',
      info: {
        main: '#fff',
        light: '#fff',
        dark: '#fff',
      },
      text: {
        primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.87)',
      disabled: 'rgba(156,152,152,0.38)',
      hint: 'rgba(255,255,255,0.87)',
      },
    },
    overrides: {
      MuiAppBar: {
        colorInherit: {
          backgroundColor: '#101D25',
          color: '#fff',
        },
      },
    },
    props: {
      MuiAppBar: {
        color: 'inherit',
      },
    },
  })