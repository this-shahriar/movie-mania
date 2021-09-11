import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "100px",
  sm: "500px",
  md: "700px",
  lg: "1024px",
  xl: "1920px",
  xxl: "6000px",
});

const theme = extendTheme({
  colors: {
    primary: { 500: "#112031", 600: "#112031" },
    secondary: { 500: "#F43B86", 600: "#F43B86" },
    back: { 500: "#F8F0DF", 600: "#F8F0DF" },
    text: { 500: "#FFEF78", 600: "#FFEF78" },
  },
  breakpoints,
});

export default theme;
