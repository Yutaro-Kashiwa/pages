import { ReactElement } from "react";
import { Box, HStack, Container, Text, Hide } from "@chakra-ui/react";
import { ubuntuFont } from "@/config/next_fonts";

type CommonBackgroundLayoutProps = Required<{
  readonly children: ReactElement;
  readonly title: string;
}>;

export const CommonPageLayout = ({
  children,
  title,
}: CommonBackgroundLayoutProps) => (
  <>
    <style jsx global>
      {`
        body {
          background-color: #f5f5f5;
          background-image: url("/common_background_stretchable.svg");
          background-attachment: fixed;
          background-size: cover;
          background-position: right top;
          background-repeat: no-repeat;

          @media (min-width: 1280px) {
            background-image: url("/common_background.svg");
          }
        }
      `}
    </style>

    <Box
      zIndex={5}
      h="100%"
      _after={{
        xl: {
          content: `"${title}"`,
          position: "fixed",
          zIndex: -1,
          right: 0,
          bottom: 12,
          ...ubuntuFont.style,
          fontWeight: 700,
          fontSize: 180,
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          opacity: 0.25,
          color: "base.1",
        },
      }}
    >
      {children}
    </Box>
  </>
);
