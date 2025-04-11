import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7d1a", // Orange
      light: "#ffede0", // Pale orange
    },
    neutral: {
      veryDarkBlue: "#1d2025",
      darkGrayishBlue: "#68707d",
      grayishBlue: "#b6bcc8",
      lightGrayishBlue: "#f7f8fd",
      white: "#ffffff",
      black: "#00000075", // Black with 75% opacity
    },
  },
  typography: {
    fontFamily: "'Kumbh Sans', sans-serif",
    fontSize: 16, // Base font size
    fontWeightRegular: 400,
    fontWeightBold: 700,
    body1: {
      fontSize: "1rem", // 16px
    },
  },
});

export default theme;