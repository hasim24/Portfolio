import { extendTheme, theme as base } from "@chakra-ui/react";

//  Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1050px",
  "2xl": "1600px",
};

const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      white: "#FFFFFF",
      dark: "#000000",
      mainBg: "#111111 ",
      buttonGreen: "#33FFCC",
    },
  },
  fonts: {
    heading: `Poppins, sans-serif,${base.fonts?.heading}`,
    body: `Poppins, sans-serif,${base.fonts?.body}`,
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
});

export default theme;
