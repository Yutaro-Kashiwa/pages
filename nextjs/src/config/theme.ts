import { extendTheme } from "@chakra-ui/react";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJPFont = Noto_Sans_JP({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const theme = extendTheme({
  fonts: {
    heading: notoSansJPFont.style.fontFamily,
    body: notoSansJPFont.style.fontFamily,
  },
  styles: {
    global: {
      "html, body": {
        overflow: "unset",
      },
    },
  },
});