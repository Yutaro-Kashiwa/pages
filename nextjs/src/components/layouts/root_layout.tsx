import { ReactElement, useEffect } from "react";
import { Box, Center, Container, HStack } from "@chakra-ui/react";
import { NavigationLinks } from "@/components/navigation_links";
import { SiteTitle } from "@/components/site_title";

type RootLayoutProps = Required<{
  readonly children: ReactElement;
  currentPathname: string;
}>;

const FOOTER_HEIGHT_SP = 64
const FOOTER_HEIGHT_PC = 120

export const RootLayout = ({ children, currentPathname }: RootLayoutProps) => (
  <>
    <Box
      as="header"
      position="sticky"
      top={0}
      w="100%"
      maxW="1320px"
      mx="auto"
      pl={{ base: "12px", md: "40px" }}
      zIndex={100}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <SiteTitle currentPathname={currentPathname} />
    </Box>

    <Box as="main" overflow="hidden" mb={{ base: `${FOOTER_HEIGHT_SP}px`, md: `${FOOTER_HEIGHT_PC}px` }}>
      {children}
    </Box>

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
      maxW="1280px"
      h={{
        base: `${FOOTER_HEIGHT_SP}px`,
        md: `${FOOTER_HEIGHT_PC}px`
      }}
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
