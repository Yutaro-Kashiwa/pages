import { ReactElement, useRef } from "react";
import { Ubuntu } from "next/font/google";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Heading,
  HStack,
  IconButton,
  Link,
  List,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import { first } from "lodash";
import "@splidejs/react-splide/css/core";
import { useSize } from "@chakra-ui/react-use-size";
import { NextPageWithLayout } from "@/types/next_page_with_layout";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { ChevronDown } from "@/components/icons/chevron_down";
import { ChevronUp } from "@/components/icons/chevron_up";
import { SquareAndArrowDown } from "@/components/icons/square_and_arrow_down";

const ubuntuFont = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type Publication = {
  id: string;
  title: string;
  authors: string;
  appearedJournal: string;
  downloadURL: string;
  publishedYear: number;
};

const mockPublicationsList: Publication[] = [
  {
    id: "9a1c6d95-c1b6-4a37-a8d5-387c7540d367",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2022,
  },
  {
    id: "50891f47-d0a1-4a79-9dc4-26da4a527aa1",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2022,
  },
  {
    id: "618523ee-0245-4d9d-bf32-94a519a32ae2",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2022,
  },
  {
    id: "3bc058b0-4c43-4960-b6ee-e3ddfd5de113",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2022,
  },
  {
    id: "9ed355e3-5211-4768-a3aa-7f1520e3edcc",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2022,
  },
  {
    id: "2d334b21-7e8b-4c72-a766-cbe7a6359e51",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2021,
  },
  {
    id: "1cd9a20f-b683-4c30-87a7-29a5eec68bcd",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2021,
  },
  {
    id: "1537e7f8-4df5-42ac-aea1-abd94ef431c7",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2021,
  },
  {
    id: "3f675d0c-095c-4092-a64d-6b4e44af9e64",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2021,
  },
  {
    id: "8384359e-bb92-4010-bb3a-943d8a906372",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2021,
  },
  {
    id: "6a6c169a-d71d-41f7-85cb-a0399a5c9e25",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2021,
  },
  {
    id: "e2c59939-338d-4419-824a-2ac8a2c0fdfe",
    title: "A dataset of high impact bugs: Manually-classified issue reports",
    authors:
      "M Ohira, Y Kashiwa, Y Yamatani, H Yoshiyuki, Y Maeda, N Limsettho, ...",
    appearedJournal:
      "2015 IEEE/ACM 12th Working Conference on Mining Software Repositories, 518-521",
    downloadURL: "",
    publishedYear: 2021,
  },
];

export const PublicationsPage: NextPageWithLayout = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const contentContainerSize = useSize(contentContainerRef);

  return (
    <>
      {/* global を付けないと splide に認識されない */}
      <style jsx global>
        {`
          /* https://codepen.io/junpei-sugiyama/pen/rNZGJLx */

          /* ページネーションに番号を表示 */
          .splide__pagination {
            counter-reset: pagination-num;
          }

          .splide__pagination__page:before {
            content: counter(pagination-num);
            counter-increment: pagination-num;
          }

          .news-pagination {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            gap: 20px;
            overflow: hidden;
          }

          /* ページネーションのスタイル */
          .news-pagination-page {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            padding: 8px;
            width: 40px;
            height: 40px;
            font-family: ${ubuntuFont.style.fontFamily};
            font-weight: 400;
            font-size: 24px;
            background-color: transparent;
            color: #0168b7;
            transform: rotate(90deg);
            border-radius: 100%;
          }

          /* 現在表示されているページネーションのスタイル */
          .news-pagination-page.is-active {
            background-color: #f2f947;
          }
        `}
      </style>

      <style jsx global>
        {`
          .splide:not(.is-overflow) .splide__list {
            justify-content: center;
          }

          .splide:not(.is-overflow) .splide__list:first-child {
            margin-bottom: 76px !important;
          }

          .splide:not(.is-overflow) .splide__slide:last-child {
            margin: 0 !important;
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
        }}
        style={{
          height: "100%"
        }}
      >
        <Container
          ref={contentContainerRef}
          maxW="1280px"
          h="100%" 
          mt="5vh" 
          overflow="auto"
        >
          <Splide
            hasTrack={false}
            options={{
              direction: "ttb",
              wheel: true,
              waitForTransition: true,
              height: "70vh",
              fixedWidth: !!contentContainerSize
                ? contentContainerSize.width - 184
                : "80vw",
              classes: {
                pagination: "splide__pagination news-pagination",
                page: "splide__pagination__page news-pagination-page",
              },
              perPage: 5,
              gap: 40,
            }}
          >
            <VStack align="center" w="100%" h="100%">
              <HStack
                w="100%"
                h="100%"
                justify="space-between"
                align="flex-start"
                spacing="84px"
              >
                <SplideTrack>
                  <SplideSlide>
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
                          marginInlineStart={0}
                        >
                          publications
                        </Heading>
                      </HStack>
                    </Show>
                  </SplideSlide>

                  {mockPublicationsList.map(
                    (
                      {
                        id,
                        title,
                        authors,
                        appearedJournal,
                        downloadURL,
                        publishedYear,
                      },
                      _,
                      sourceArray
                    ) => {
                      const publicationsInCurrentYear: Publication[] =
                        sourceArray.filter(
                          ({ publishedYear: year }) => year === publishedYear
                        );

                      const firstPublicationInCurrentYear = first(
                        publicationsInCurrentYear
                      );

                      const isTheFirstPublicationInCurrentYear =
                        id === firstPublicationInCurrentYear?.id;

                      return (
                        <SplideSlide key={id}>
                          <HStack justify="space-between">
                            <Box
                              w="110px"
                              minW="110px"
                              aria-hidden={
                                !isTheFirstPublicationInCurrentYear
                              }
                            >
                              {isTheFirstPublicationInCurrentYear && (
                                <Heading
                                  as="h3"
                                  fontFamily={ubuntuFont.style.fontFamily}
                                  fontWeight={700}
                                  fontSize={48}
                                  color="main"
                                  opacity="0.6"
                                >
                                  {publishedYear}
                                </Heading>
                              )}
                            </Box>

                            <HStack
                              flexBasis="80%"
                              justify="space-between"
                              align="flex-start"
                            >
                              <VStack align="flex-start">
                                <Heading
                                  as="h4"
                                  fontFamily={ubuntuFont.style.fontFamily}
                                  fontWeight={700}
                                  fontSize={16}
                                >
                                  {title}
                                </Heading>

                                <VStack align="inherit" spacing="1px">
                                  <Text
                                    fontFamily={ubuntuFont.style.fontFamily}
                                    fontWeight={400}
                                    fontSize={14}
                                    whiteSpace="pre-line"
                                    textAlign="left"
                                  >
                                    {authors}
                                  </Text>

                                  <Text
                                    fontFamily={ubuntuFont.style.fontFamily}
                                    fontWeight={400}
                                    fontSize={14}
                                    whiteSpace="pre-line"
                                    textAlign="left"
                                  >
                                    {appearedJournal}
                                  </Text>
                                </VStack>
                              </VStack>

                              <Link
                                href={downloadURL}
                                isExternal
                                boxSize="44px"
                                p="12px"
                                borderRadius="100%"
                                _hover={{ bgColor: "white" }}
                              >
                                <SquareAndArrowDown
                                  w="100%"
                                  h="100%"
                                  fill="main"
                                />
                              </Link>
                            </HStack>
                          </HStack>
                        </SplideSlide>
                      );
                    }
                  )}
                </SplideTrack>

                <VStack
                  h="60vh"
                  justifyContent="space-between"
                  alignItems="center"
                  pt="10vh"
                >
                  <List
                    className="splide__pagination news-pagination"
                    display="flex"
                    flexFlow="column nowrap"
                    justifyContent="space-between"
                  />

                  <VStack
                    justifyContent="space-between"
                    alignItems="center"
                    rowGap="16px"
                    cursor="default"
                  >
                    <Box mr="30%" w="1px" h="88px" bg="main" />

                    <Text
                      fontFamily={ubuntuFont.style.fontFamily}
                      fontWeight={400}
                      fontSize={20}
                      sx={{ writingMode: "vertical-lr" }}
                      color="main"
                      userSelect="none"
                    >
                      scroll
                    </Text>
                  </VStack>
                </VStack>
              </HStack>

              <HStack className="splide__arrows" spacing="44px">
                {/* onClick は Splide が勝手に注入するので不要 */}
                <IconButton
                  className="splide__arrow splide__arrow--next"
                  // alia-label は Splide が勝手に設定してくれるので、ここでは空にする
                  aria-label=""
                  variant="ghost"
                  color="#adadad"
                  _hover={{
                    bg: "unset",
                    ":not(:disabled)": {
                      color: "#cecece",
                    },
                  }}
                  _disabled={{
                    opacity: 0.3
                  }}
                  icon={<ChevronDown w="32px" h="auto" />}
                />

                <IconButton
                  className="splide__arrow splide__arrow--prev"
                  // alia-label は Splide が勝手に設定してくれるので、ここでは空にする
                  aria-label=""
                  variant="ghost"
                  color="#adadad"
                  w="32px"
                  h="32px"
                  p={0}
                  _hover={{
                    bg: "unset",
                    ":not(:disabled)": {
                      color: "#cecece",
                    },
                  }}
                  _disabled={{
                    opacity: 0.3
                  }}
                  icon={<ChevronUp w="32px" h="auto" />}
                />
              </HStack>
            </VStack>
          </Splide>
        </Container>
      </motion.div>
    </>
  );
};

PublicationsPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="publications">{page}</CommonPageLayout>
);

export default PublicationsPage;
