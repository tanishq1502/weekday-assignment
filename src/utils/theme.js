import { createTheme } from "@mui/material/styles";

// Define a type for your custom palette
const customPalette = {
  white: "#fff",
  input_background: "#F4F6FA",
  grey_1: "#575757",
  grey_2: "#707070",
  grey_3: "#dcdcdc",
  grey_4: "#f4f6fa",
  blue_1: "#0075FC",
  blue_2: "#0078d4",
  blue_3: "#75CFF0",
  blue_4: "#2196f3",
  blue_5: "#000FFF",
};

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    htmlFontSize: 13,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          font-size: 62.5%;
        }
        
        @media only screen and (min-width: 1536px) {
          html {
            font-size: 65%;
          }
        }
        
        @media only screen and (max-width: 1030px) {
          html {
            font-size: 57%;
          }
        }
        
        @media only screen and (max-width: 600px) {
          html {
            font-size: 54%;
          }
        }
     `,
    },
  },
  palette: {
    custom: customPalette,
  },
});

export default theme;
