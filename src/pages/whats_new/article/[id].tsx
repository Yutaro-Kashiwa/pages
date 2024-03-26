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
import NextLink from "next/link";
import NextImage from "next/image";
import { GetServerSideProps } from "next";
import { format, formatISO, parseISO, startOfToday } from "date-fns";
import { ChakraNextImage } from "@/components/chakra_next_image";
import { useRouter } from "next/router";
import { ubuntuFont } from "@/config/next_fonts";
import "@splidejs/react-splide/css/core";
import { client } from "../../../../libs/client";
import type { Article } from "../../../../types/article";

type NewsData = {
  title?: string;
  body?: string;
  // ISO8601 形式
  createdAt?: string;
  imageURL?: string;
  article: Article;
};

type PageProps = {
  refererPath: string | null;
} & NewsData;

export const WhatsNewDetailPage: NextPageWithLayout<PageProps> = ({
  refererPath,
  article,
}) => {
  const { asPath } = useRouter();

  const shouldShowSlidingExitAnimation = asPath === "/whats_new";

  return (
    <motion.div
      initial={refererPath === "/whats_new" ? { y: "100vh" } : { opacity: 0 }}
      animate={refererPath === "/whats_new" ? { y: 0 } : { opacity: 1 }}
      exit={shouldShowSlidingExitAnimation ? { y: "100vh" } : { opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <style jsx global>
        {`
          #editor_main h1,
          #editor_main h2,
          #editor_main h3,
          #editor_main h4,
          #editor_main h5,
          #editor_main h6 {
            font-weight: 500;
          }

          #editor_main h1 {
            font-size: 200%;
          }

          #editor_main h2 {
            font-size: 150%;
          }

          #editor_main h3 {
            font-size: 120%;
          }

          #editor_main h4 {
            font-size: 100%;
          }

          #editor_main h5 {
            font-size: 80%;
          }

          #editor_main h6 {
            font-size: 70%;
          }

          #editor_main ul {
            list-style: disc;
            padding-inline-start: 40px;
          }

          #editor_main ol {
            list-style: decimal;
            padding-inline-start: 40px;
          }

          #editor_main blockquote {
            border-left: 4px solid #ccc;
            padding-left: 16px;
            margin-bottom: 5px;
            margin-top: 5px;
            text-align: justify;
          }
          #editor_main p code {
            font-family: Source Code Pro, monospace;
            display: inline-block;
            font-size: 0.9em;
            padding: 1px 5px;
            border-radius: 2px;
            color: #f8f8f2;
            background-color: #23241f;
            white-space: pre-wrap;
          }
          #editor_main pre {
            font-family: Source Code Pro, monospace;
            padding: 5px 10px;
            border-radius: 3px;
            margin-bottom: 5px;
            margin-top: 5px;
            color: #f8f8f2;
            background-color: #23241f;
            white-space: pre-wrap;
            overflow: visible;
          }

          #editor_main sub {
            vertical-align: sub;
            font-size: smaller;
          }

          #editor_main sup {
            vertical-align: super;
            font-size: smaller;
          }

          #editor_main a {
            color: -webkit-link;
            text-decoration: underline;
          }

          #editor_main img {
            display: inline;
            max-width: 100%;
            width: auto;
          }

          @media screen and (max-width: 767px) {
            #editor_main > iframe {
              width: 100%;
              height: 49.5vw;
            }
          }
        `}
      </style>
      <Container maxW="1280px" mt="5vh" mb="20vh">
        <VStack justify="space-around" alignItems="flex-start" rowGap="72px">
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

          <VStack justify="space-between" align="flex-start" rowGap="16px">
            {article.title}
            <VStack
              flexBasis="100%"
              justify="space-evenly"
              align="inherit"
              spacing="48px"
            >
              {!!article.createdAt && !!article.title && (
                <HStack
                  align="baseline"
                  wrap="wrap"
                  rowGap="8px"
                  columnGap="40px"
                >
                  {!!article.createdAt && (
                    <Text
                      as="time"
                      dateTime={article.createdAt}
                      fontFamily={ubuntuFont.style.fontFamily}
                      fontWeight={400}
                      fontSize={{
                        base: "calc(0.875rem + ((1vw - 3.75px) * 0.3756))",
                        lg: 18,
                      }}
                      whiteSpace="nowrap"
                    >
                      {format(parseISO(article.createdAt), "yyyy . MM . dd")}
                    </Text>
                  )}

                  {!!article.title && (
                    <Heading
                      as="h2"
                      fontWeight={400}
                      fontSize={{
                        base: "calc(1.25rem + ((1vw - 3.75px) * 1.1268))",
                        lg: 32,
                      }}
                    >
                      {article.title}
                    </Heading>
                  )}
                </HStack>
              )}

              <Show below="lg">
                <ChakraNextImage
                  // @ts-ignore
                  position="relative !important"
                  w="100%"
                  maxH="192px"
                  // src={article.thumbnail.url ?? ""}
                  src={"/noimage-white.jpg"}
                  alt={article.title ?? ""}
                  // @ts-ignore
                  fill
                  sx={{
                    objectFit: "contain",
                  }}
                />
              </Show>

              <HStack align="flex-start" spacing="36px">
                {!!article.body && (
                  <Box
                    id="editor_main"
                    p={0}
                    fontSize={{
                      base: "calc(0.75rem + ((1vw - 3.75px) * 0.3756))",
                      lg: 16,
                    }}
                    lineHeight="1.5"
                    whiteSpace="pre-wrap"
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  ></Box>
                )}

                <Show above="lg">
                  <AspectRatio flexBasis="50%">
                    <ChakraNextImage
                      // src={article.thumbnail.url ?? ""}
                      src={"/noimage-white.jpg"}
                      alt={article.title ?? ""}
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
              color={{ base: "#999999", lg: "rgba(1, 104, 183, 1)" }}
              _hover={{
                textDecoration: "none",
                color: "rgba(1, 104, 183, 0.5)",
              }}
              transition="ease-in 0.3s"
            >
              一覧へ戻る ↑
            </Link>
          </VStack>
        </VStack>
      </Container>
    </motion.div>
  );
};

WhatsNewDetailPage.getLayout = (page) => (
  <CommonPageLayout title="what's new">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const referer = context.req.headers.referer;

  const id = context.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: "news",
    contentId: idExceptArray,
  });

  if (!referer) {
    return {
      props: {
        refererPath: null,
        article: data,
      },
    };
  }

  const refererURL: URL = new URL(referer);
  const refererPath: string = refererURL.pathname;

  return {
    props: {
      refererPath,
      article: data,
    },
  };
};

export default WhatsNewDetailPage;
