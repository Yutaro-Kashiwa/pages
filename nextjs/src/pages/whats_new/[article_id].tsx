import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { NextPageWithLayout } from "@/types/next_page_with_layout";

import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Link,
  Show,
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
  refererPath?: string;
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
}) => (
  <motion.div
    initial={refererPath === "/whats_new" ? { y: 500 } : { opacity: 0 }}
    animate={refererPath === "/whats_new" ? { y: 0 } : { opacity: 1 }}
    exit={{ y: 500 }}
    transition={{
      duration: 0.5,
    }}
  >
    <Center w="100vw" h="100vh" overflow="auto">
      <VStack
        maxW="1280px"
        w="100%"
        h="70%"
        px="40px"
        justifyContent="space-between"
        alignItems="flex-start"
      >
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

        <VStack flexBasis="80%" justify="space-between" align="flex-start">
          <VStack flexBasis="100%" justify="space-evenly" align="inherit" spacing="48px">
            {!!createdAt && !!title && (
              <HStack align="baseline" spacing="40px">
                {!!createdAt && (
                  <Text
                    as="time"
                    dateTime={createdAt}
                    fontFamily={ubuntuFont.style.fontFamily}
                    fontWeight={400}
                    fontSize={18}
                  >
                    {format(parseISO(createdAt), "yyyy . MM . dd")}
                  </Text>
                )}

                {!!title && (
                  <Heading as="h2" fontWeight={400} fontSize={32}>
                    {title}
                  </Heading>
                )}
              </HStack>
            )}

            <HStack align="flex-start" spacing="36px">
              {!!body && (
                <Box p={0} fontSize={16} lineHeight="1.5" whiteSpace="pre-wrap">
                  {body}
                </Box>
              )}

              <AspectRatio flexBasis="50%">
                <ChakraNextImage
                  src={imageURL ?? ""}
                  alt={title ?? ""}
                  fill
                />
              </AspectRatio>
            </HStack>
          </VStack>

          <Link
            as={NextLink}
            href="/whats_new"
            pr="8px"
            fontSize={16}
            color="main"
          >
            一覧へ戻る ↑
          </Link>
        </VStack>
      </VStack>
    </Center>
  </motion.div>
);

WhatsNewDetailPage.getLayout = (page) => (
  <CommonPageLayout title="what's new">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const referer = context.req.headers.referer;

  const refererURL: URL | undefined = !!referer ? new URL(referer) : undefined;
  const refererPath: string | undefined = refererURL?.pathname;

  return {
    props: {
      refererPath,
      ...mockNewsData,
    },
  };
};

export default WhatsNewDetailPage;
