import { TextProps, extendTheme } from "@chakra-ui/react";
import { variableNotoSansJPFont } from "./next_fonts";

export const theme = extendTheme({
  fonts: {
    heading: variableNotoSansJPFont.style.fontFamily,
    body: variableNotoSansJPFont.style.fontFamily,
  },
  styles: {
    global: {
      "html, body": {
        overflow: "unset",
      },
      body: {
        bg: "",
        bgColor: "#f5f5f5",
      },
    },
  },
  colors: {
    main: "#0168B7",
    base: {
      1: "#D7D7D7",
      2: "#F5F5F5",
    },
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  components: {
    Text: {
      baseStyle: (_: TextProps) => ({
        color: "#333333",
      }),
    },
    Heading: {
      baseStyle: (_: TextProps) => ({
        color: "#333333",
      }),
    },
  },
});

export { variableNotoSansJPFont };
