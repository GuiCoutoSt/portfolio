import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    blue: {
      100: "#9ADCFF",
    },

    pink: {
      100: "#FFB2A6",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  styles: {
    body: {
      bg: "white",
      color: "black",
      "::-webkit-scrollbar": {
        width: "0.5em",
      },
    },
  },
});
