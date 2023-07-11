import { Inter, Noto_Sans_JP, Ubuntu } from "next/font/google";

export const variableNotoSansJPFont = Noto_Sans_JP({
  weight: "variable",
  subsets: ["latin"],
});

export const ubuntuFont = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const interFont = Inter({
  subsets: ["latin"],
});
