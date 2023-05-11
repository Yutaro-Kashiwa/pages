import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { NextPageWithLayout } from "@/types/next_page_with_layout";

import {
  AspectRatio,
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Image,
  Link,
  Show,
  SimpleGrid,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Ubuntu } from "next/font/google";
import NextLink from "next/link";
import NextImage from "next/image";
import { GetServerSideProps } from "next";
import { format, formatISO, parseISO, startOfToday } from "date-fns";
import { ChakraNextImage } from "@/components/chakra_next_image";
import { useRouter } from "next/router";

const ubuntuFont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

type NewsData = {
  title?: string;
  body?: string;
  // ISO8601 形式
  createdAt?: string;
  imageURL?: string;
};

type PageProps = {
  refererPath: string | null;
} & NewsData;

// API通信レスポンスの代わり
const mockNewsData: NewsData = {
  title: "タイトルが入ります",
  body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
  createdAt: "2022-11-09T00:00:00+09:00",
  imageURL: "https://1.bp.blogspot.com/-dXIT6B4KA-Y/X5OcMsqpZyI/AAAAAAABb6g/0_AtsYXLRNwGOXmbyTB_d7OqL7IWya88gCNcBGAsYHQ/s846/computer_laptop_angle1.png",
};

export const WhatsNewDetailPage: NextPageWithLayout<PageProps> = ({
  refererPath,
  title,
  body,
  createdAt,
  imageURL,
}) => {
  const { asPath } = useRouter()

  const shouldShowSlidingExitAnimation = asPath === "/whats_new"

  return (
    <>
      <style global jsx>
        {`
          #__next {
            overflow-x: auto;
            overflow-y: scroll;
          }
        `}
      </style>

      <motion.div
        initial={refererPath === "/whats_new" ? { y: "100vh" } : { opacity: 0 }}
        animate={refererPath === "/whats_new" ? { y: 0 } : { opacity: 1 }}
        exit={shouldShowSlidingExitAnimation ? { y: "100vh" } : { opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        style={{
          height: "100%",
        }}
      >
        <Container maxW="1280px" h="100%" overflow="visible">
          <VStack h="100%" justify="space-around" alignItems="flex-start">
            <Show above="lg">
              <HStack position="relative" w="fit-content">
                <Box
                  position="absolute"
                  right="-20px"
                  bottom="-16px"
                  w="199px"
                  zIndex={-1}
                >
                  <AspectRatio w="100%" ratio={199 / 44}>
                    <TitleBackgroundRect />
                  </AspectRatio>
                </Box>

                <Heading
                  as="h2"
                  fontFamily={ubuntuFont.style.fontFamily}
                  fontWeight={400}
                  color="main"
                  textTransform="uppercase"
                >
                  {`what's new`}
                </Heading>
              </HStack>
            </Show>

            <VStack flexBasis="60%" justify="space-between" align="flex-start">
              <VStack
                flexBasis="100%"
                justify="space-evenly"
                align="inherit"
                spacing="48px"
              >
                {!!createdAt && !!title && (
                  <SimpleGrid
                    alignItems="baseline"
                    templateColumns="repeat(auto-fit, minmax(140px, 1fr))"
                    templateRows="auto"
                  >
                    {!!createdAt && (
                      <Text
                        as="time"
                        dateTime={createdAt}
                        fontFamily={ubuntuFont.style.fontFamily}
                        fontWeight={400}
                        fontSize={{
                          base: "calc(0.875rem + ((1vw - 3.75px) * 0.3756))",
                          lg: 18,
                        }}
                      >
                        {format(parseISO(createdAt), "yyyy . MM . dd")}
                      </Text>
                    )}

                    {!!title && (
                      <Heading
                        as="h2"
                        fontWeight={400}
                        fontSize={{
                          base: "calc(1.25rem + ((1vw - 3.75px) * 1.1268))",
                          lg: 32,
                        }}
                        whiteSpace="nowrap"
                      >
                        {title}
                      </Heading>
                    )}
                  </SimpleGrid>
                )}

                <Show below="lg">
                  <ChakraNextImage
                    // @ts-ignore
                    position="relative !important"
                    w="100%"
                    maxH="192px"
                    src={imageURL ?? ""}
                    alt={title ?? ""}
                    // @ts-ignore
                    fill
                    objectFit="contain"
                  />
                </Show>

                <HStack align="flex-start" spacing="36px">
                  {!!body && (
                    <Box
                      p={0}
                      fontSize={{
                        base: "calc(0.75rem + ((1vw - 3.75px) * 0.3756))",
                        lg: 16,
                      }}
                      lineHeight="1.5"
                      whiteSpace="pre-wrap"
                    >
                      {body}
                    </Box>
                  )}

                  <Show above="lg">
                    <AspectRatio flexBasis="50%">
                      <ChakraNextImage
                        src={imageURL ?? ""}
                        alt={title ?? ""}
                        // @ts-ignore
                        fill
                      />
                    </AspectRatio>
                  </Show>
                </HStack>
              </VStack>

              <Link
                as={NextLink}
                href="/whats_new"
                pr="8px"
                fontSize={16}
                fontWeight={{ base: 700, lg: 400 }}
                color={{ base: "#999999", lg: "main" }}
              >
                一覧へ戻る ↑
              </Link>
            </VStack>
          </VStack>
        </Container>
      </motion.div>
    </>
  );
};

WhatsNewDetailPage.getLayout = (page) => (
  <CommonPageLayout title="what's new">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const referer = context.req.headers.referer;

  if (!referer) {
    return {
      props: {
        refererPath: null,
        ...mockNewsData
      }
    }
  }

  const refererURL: URL = new URL(referer);
  const refererPath: string = refererURL.pathname;

  return {
    props: {
      refererPath,
      ...mockNewsData,
    },
  };
};

export default WhatsNewDetailPage;
