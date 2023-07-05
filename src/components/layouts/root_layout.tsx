import { ReactElement, useEffect, useRef } from "react";
import {
  Box,
  Center,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Hide,
  IconButton,
  Link,
  List,
  ListItem,
  Show,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavigationLinks } from "@/components/navigation_links";
import { SiteTitle } from "@/components/site_title";
import NextImage from "next/image";
import { useSize } from "@chakra-ui/react-use-size";
import Head from "next/head";
import { MenuIcon } from "../icons/menu_icon";
import NextLink from "next/link";
import { CloseIcon } from "../icons/close_icon";

type RootLayoutProps = Required<{
  readonly children: ReactElement;
  currentPathname: string;
}>;

const FOOTER_HEIGHT_SP = 64;
const FOOTER_HEIGHT_PC = 120;

export const RootLayout = ({ children, currentPathname }: RootLayoutProps) => {
  const drawerButtonRef = useRef<HTMLButtonElement>(null);

  const headerElementRef = useRef<HTMLDivElement>(null);
  const footerElementRef = useRef<HTMLDivElement>(null);

  const headerElementSize = useSize(headerElementRef);
  const footerElementSize = useSize(footerElementRef);

  const {
    isOpen,
    onOpen: openDrawerMenu,
    onClose: closeDrawerMenu,
  } = useDisclosure();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <HStack
        ref={headerElementRef}
        as="header"
        position="sticky"
        top={0}
        align="center"
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

        <Hide above="md">
          <IconButton
            ref={drawerButtonRef}
            onClick={openDrawerMenu}
            aria-label="サイト内メニューを開く"
            size="48px"
            p="16px"
            icon={<MenuIcon w="23px" h="14px" />}
            fill="main"
            variant="ghost"
            colorScheme="transparent"
          />
        </Hide>
      </HStack>

      <Box
        as="main"
        flexGrow={1}
        pb={`${footerElementSize?.height ?? FOOTER_HEIGHT_SP}px`}
      >
        {children}
      </Box>

      <Container
        key={currentPathname}
        ref={footerElementRef}
        as="footer"
        position="fixed"
        left={0}
        right={0}
        bottom={0}
        overflowX="scroll"
        overflowY="hidden"
        whiteSpace="nowrap"
        maxW="1280px"
        h="fit-content"
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

      <Hide above="md">
        <Drawer
          onClose={closeDrawerMenu}
          isOpen={isOpen}
          finalFocusRef={drawerButtonRef}
          autoFocus={false}
          placement="right"
        >
          <DrawerOverlay />

          <DrawerContent maxW="40vw">
            <DrawerHeader h="fit-content">
              <DrawerCloseButton
                variant="ghost"
                colorScheme="transparent"
                size="48px"
                p="16px"
                _active={{ bg: "unset" }}
                _hover={{ bg: "unset" }}
              >
                <CloseIcon w="16px" h="16px" color="main" />
              </DrawerCloseButton>
            </DrawerHeader>

            <DrawerBody as="nav" p={0} pl="28px" mt="20px">
              <List
                display="inline-flex"
                flexFlow="column nowrap"
                alignItems="flex-start"
                whiteSpace="nowrap"
                spacing="24px"
              >
                <ListItem>
                  <Link
                    as={NextLink}
                    href="/"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    Top
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    as={NextLink}
                    href="/whats_new"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    News
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    as={NextLink}
                    href="/self_introduction"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    自己紹介
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    as={NextLink}
                    href="/projects"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    研究紹介
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    as={NextLink}
                    href="/members"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    メンバー
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    as={NextLink}
                    href="/publications"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    論文
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    as={NextLink}
                    href="/awards"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    受賞履歴
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    as={NextLink}
                    href="/access"
                    onClick={closeDrawerMenu}
                    fontSize="calc(1.125rem + ((1vw - 3.75px) * 0.1878))"
                    fontWeight="700"
                    textTransform="uppercase"
                    color="rgba(1, 104, 183, 0.7)"
                    _hover={{
                      textDecoration: "none",
                      color: undefined,
                    }}
                  >
                    アクセス
                  </Link>
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Hide>

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
              background={{
                base: "linear-gradient(180deg, rgba(0, 52, 91, 0.05) 0%, #00345B 100%)",
                md: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #0168B7 100%)",
              }}
              zIndex={1}
              h={{
                base: "100%",
                md: "50%",
              }}
            />
          </Box>
        </>
      )}
    </>
  );
};
