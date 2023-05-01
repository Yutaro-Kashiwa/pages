import { ReactElement, useEffect, useRef } from "react";
import { Box, Center, Container, HStack } from "@chakra-ui/react";
import { NavigationLinks } from "@/components/navigation_links";
import { SiteTitle } from "@/components/site_title";
import NextImage from "next/image";
import { useSize } from "@chakra-ui/react-use-size";
import Head from "next/head";

type RootLayoutProps = Required<{
  readonly children: ReactElement;
  currentPathname: string;
}>;

const FOOTER_HEIGHT_SP = 64;
const FOOTER_HEIGHT_PC = 120;

export const RootLayout = ({ children, currentPathname }: RootLayoutProps) => {
  const headerElementRef = useRef<HTMLDivElement>(null);

  const headerElementSize = useSize(headerElementRef)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Box
        ref={headerElementRef}
        as="header"
        position="sticky"
        top={0}
        w="100%"
        h="fit-content"
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

      <Box
        as="main"
        flexGrow={1}
        overflow="hidden"
        h={`calc(100% - ${headerElementSize?.height ?? 0}px)`}
        pb={{ base: `${FOOTER_HEIGHT_SP}px`, md: `${FOOTER_HEIGHT_PC}px` }}
      >
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
        overflowY="hidden"
        whiteSpace="nowrap"
        maxW="1280px"
        h={{
          base: `${FOOTER_HEIGHT_SP}px`,
          md: `${FOOTER_HEIGHT_PC}px`
        }}
        maxH="max-content"
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

      {currentPathname === "/" && (
        <>
          <Box position="fixed" w="100%" h="100%" top={0} right={0} zIndex={-1}>
            <NextImage
              src="/AdobeStock_394174786.png"
              alt="AdobeStock_394174786"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />

            <Box
              position="absolute"
              left={0}
              right={0}
              bottom={0}
              background="linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #0168B7 100%)"
              zIndex={1}
              h="50%"
            />
          </Box>
        </>
      )}
    </>
  )
};
