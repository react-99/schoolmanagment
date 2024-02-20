import { createTheme } from "@mui/material";

export const Theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    lightblue: {
      light: "#63b7f6",
      main: "#3DA5F4",
      dark: "#2a73aa",
    },
    lightpink: {
      main: "#FF4979",
    },
    lightorange: {
      main: "#FDA006",
    },
  },
});
