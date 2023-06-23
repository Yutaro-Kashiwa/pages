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
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Options as SplideOptions, Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
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
import { GetServerSideProps } from "next";

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

type PageProps = {
  publications?: Publication[];
}

export const PublicationsPage: NextPageWithLayout<PageProps> = ({ publications }) => {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const contentContainerSize = useSize(contentContainerRef);

  const responsiveSplideOptions: SplideOptions | undefined =
    useBreakpointValue<SplideOptions>(
      {
        base: {
          direction: "ttb",
          wheel: true,
          waitForTransition: true,
          height: !!contentContainerSize
            ? contentContainerSize.height * (90 / 100)
            : "75vh",
          width: "100vw",
          perPage: 5,
          classes: {
            pagination: "splide__pagination news-pagination",
            page: "splide__pagination__page news-pagination-page",
          },
          padding: {
            top: "5vh",
          },
        },
        lg: {
          direction: "ttb",
          wheel: true,
          waitForTransition: true,
          height: !!contentContainerSize
            ? contentContainerSize.height * (92 / 100)
            : "75vh",
          width: "100vw",
          perPage: 6,
          classes: {
            pagination: "splide__pagination news-pagination",
            page: "splide__pagination__page news-pagination-page",
          },
          padding: {
            top: "5vh",
          },
        },
        "2xl": {
          direction: "ttb",
          wheel: true,
          waitForTransition: true,
          height: !!contentContainerSize
            ? contentContainerSize.height * (92 / 100)
            : "75vh",
          width: "100vw",
          perPage: 10,
          classes: {
            pagination: "splide__pagination news-pagination",
            page: "splide__pagination__page news-pagination-page",
          },
          padding: {
            top: "5vh",
          },
        },
      },
      { ssr: true, fallback: "md" }
    );

  return (
    <>
      <style jsx global>
        {`
          html {
            overflow-x: hidden;
            overflow-y: hidden;
          }
        `}
      </style>

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
            display: flex !important;
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

          @media screen and (max-width: 991px) {
            .news-pagination-page {
              width: 24px;
              height: 24px;
              font-size: 12px;
            }
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

      <style jsx global>
        {`
          .splide__track {
            width: 100%;
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
        style={{
          height: "100%",
        }}
      >
        <Container
          ref={contentContainerRef}
          maxW="1280px"
          h="100%" 
          overflow="auto"
        >
          <Splide
            hasTrack={false}
            options={responsiveSplideOptions}
          >
            <VStack align="center" w="100%" h="100%">
              <HStack
                w="100%"
                h="100%"
                justify="space-between"
                align="flex-start"
                spacing={{ base: "12px", lg: "84px" }}
              >
                <SplideTrack>
                  <Show above="lg">
                    <SplideSlide>
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
                    </SplideSlide>
                  </Show>

                  {!!publications && publications.map(
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
                        <SplideSlide
                          key={id}
                          style={{ width: "100%", flexBasis: "80%" }}
                        >
                          <Stack
                            flexDir={{ base: "column", lg: "row" }}
                            justify={{ lg: "space-between" }}
                          >
                            <Box
                              w="110px"
                              aria-hidden={!isTheFirstPublicationInCurrentYear}
                            >
                              {isTheFirstPublicationInCurrentYear && (
                                <Heading
                                  as="h3"
                                  fontFamily={ubuntuFont.style.fontFamily}
                                  fontWeight={700}
                                  fontSize={{
                                    base: "calc(1.5rem + ((1vw - 3.75px) * 2.2535))",
                                    lg: 48,
                                  }}
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
                              <VStack
                                w="90%"
                                align="flex-start"
                                rowGap={{ base: "4px", lg: "8px" }}
                                spacing={0}
                              >
                                <Heading
                                  as="h4"
                                  fontFamily={ubuntuFont.style.fontFamily}
                                  fontWeight={700}
                                  fontSize={{
                                    base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
                                    lg: 16,
                                  }}
                                  sx={{
                                    display: "-webkit-box",
                                    "-webkit-line-clamp": "2",
                                    "-webkit-box-orient": "vertical",
                                    overflow: "hidden",
                                  }}
                                >
                                  {title}
                                </Heading>

                                <VStack w="100%" align="inherit" spacing={{ lg: "1px" }}>
                                  <Text
                                    fontFamily={ubuntuFont.style.fontFamily}
                                    fontWeight={400}
                                    fontSize={{
                                      base: "calc(0.625rem + ((1vw - 3.75px) * 0.3756))",
                                      lg: 14,
                                    }}
                                    w="100%"
                                    textOverflow={{
                                      base: "ellipsis",
                                      lg: "unset"
                                    }}
                                    overflow={{
                                      base: "hidden",
                                      lg: "unset"
                                    }}
                                    whiteSpace={{ base: "nowrap", lg: "pre-line" }}
                                    textAlign="left"
                                    sx={{
                                      display: "-webkit-box",
                                      "-webkit-line-clamp": "1",
                                      "-webkit-box-orient": "vertical",
                                      overflow: "hidden",
                                    }}
                                  >
                                    {authors}
                                  </Text>

                                  <Text
                                    fontFamily={ubuntuFont.style.fontFamily}
                                    fontWeight={400}
                                    fontSize={{
                                      base: "calc(0.625rem + ((1vw - 3.75px) * 0.3756))",
                                      lg: 14,
                                    }}
                                    w="100%"
                                    textOverflow={{
                                      base: "ellipsis",
                                      lg: "unset"
                                    }}
                                    overflow={{
                                      base: "hidden",
                                      lg: "unset"
                                    }}
                                    whiteSpace={{ base: "nowrap", lg: "pre-line" }}
                                    textAlign="left"
                                    sx={{
                                      display: "-webkit-box",
                                      "-webkit-line-clamp": "1",
                                      "-webkit-box-orient": "vertical",
                                      overflow: "hidden",
                                    }}
                                  >
                                    {appearedJournal}
                                  </Text>
                                </VStack>
                              </VStack>

                              <Link
                                href={downloadURL}
                                isExternal
                                display="inline-flex"
                                justifyContent="center"
                                alignItems="center"
                                boxSize={{ base: "22px", lg: "44px" }}
                                p={{ lg: "12px" }}
                                borderRadius="100%"
                                _hover={{ lg: { bgColor: "white" } }}
                              >
                                <SquareAndArrowDown
                                  w="100%"
                                  h="100%"
                                  fill="main"
                                />
                              </Link>
                            </HStack>
                          </Stack>
                        </SplideSlide>
                      );
                    }
                  )}
                </SplideTrack>

                <VStack
                  h="100%"
                  justifyContent="space-around"
                  alignItems="center"
                  wrap="nowrap"
                  pt="10%"
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
                      fontSize={{ base: "12px", lg: 20 }}
                      sx={{ writingMode: "vertical-lr" }}
                      color="main"
                      userSelect="none"
                    >
                      scroll
                    </Text>
                  </VStack>
                </VStack>
              </HStack>

              <HStack
                className="splide__arrows"
                spacing={{ base: "8px", lg: "44px" }}
              >
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
                    opacity: 0.3,
                  }}
                  icon={
                    <ChevronDown w={{ base: "20px", lg: "32px" }} h="auto" />
                  }
                />

                <IconButton
                  className="splide__arrow splide__arrow--prev"
                  // alia-label は Splide が勝手に設定してくれるので、ここでは空にする
                  aria-label=""
                  variant="ghost"
                  color="#adadad"
                  w={{ base: "20px", lg: "32px" }}
                  h={{ base: "20px", lg: "32px" }}
                  p={0}
                  _hover={{
                    bg: "unset",
                    ":not(:disabled)": {
                      color: "#cecece",
                    },
                  }}
                  _disabled={{
                    opacity: 0.3,
                  }}
                  icon={<ChevronUp w={{ base: "20px", lg: "32px" }} h="auto" />}
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

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  // API通信の代わり
  const publications: Publication[] = mockPublicationsList

  return {
    props: {
      publications
    }
  }
}

export default PublicationsPage;
