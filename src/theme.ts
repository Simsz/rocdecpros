import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: "#ffe5e5",
    100: "#ffb8b8",
    200: "#ff8a8a",
    300: "#ff5c5c",
    400: "#ff2e2e",
    500: "#e60000", // Main red color
    600: "#b30000",
    700: "#800000",
    800: "#4d0000",
    900: "#1a0000",
  },
  background: {
    dark: "#121212", // Almost black
    light: "#f8f8f8",
  },
  rochester: {
    red: "#e60000",
    black: "#121212",
    gray: "#2D2D2D",
    lightGray: "#E0E0E0",
  },
};

const fonts = {
  heading: "Montserrat, system-ui, sans-serif",
  body: "Inter, system-ui, sans-serif",
};

const styles = {
  global: (props: { colorMode: string }) => ({
    body: {
      bg: props.colorMode === "dark" ? "background.dark" : "background.light",
      color: props.colorMode === "dark" ? "white" : "gray.800",
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
      borderRadius: "md",
    },
    variants: {
      primary: {
        bg: "primary.500",
        color: "white",
        _hover: {
          bg: "primary.600",
        },
      },
      outline: {
        border: "2px solid",
        borderColor: "primary.500",
        color: "primary.500",
        _hover: {
          bg: "primary.50",
        },
      },
    },
    defaultProps: {
      variant: "primary",
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme; 