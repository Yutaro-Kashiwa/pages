import { ReactElement, useEffect } from "react";
import { Box, Container, HStack } from "@chakra-ui/react";
import { NavigationLinks } from "@/components/navigation_links";
import { SiteTitle } from "@/components/site_title";

type RootLayoutProps = Required<{
  readonly children: ReactElement;
  currentPathname: string
}>;

export const RootLayout = ({ children, currentPathname }: RootLayoutProps) => (
  <>
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <SiteTitle />
    </Box>

    <main>{children}</main>

    <Container
      key={currentPathname}
      as="footer"
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      overflowX="scroll"
      overflowY="visible"
      whiteSpace="nowrap"
      maxW="1440px"
      centerContent
      zIndex={100}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <NavigationLinks currentPathname={currentPathname} />
    </Container>
  </>
);