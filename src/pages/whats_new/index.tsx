import { ReactElement, memo, useMemo, useRef } from "react";
import NextLink from "next/link";
import {
  Center,
  Container,
  HStack,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Spacer,
  AspectRatio,
  Show,
  List,
  LinkBox,
  LinkOverlay,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import {
  Splide,
  SplideSlide,
  SplideTrack,
  Options as SplideOptions,
} from "@splidejs/react-splide";
import { Grid as SplideGridExtension } from "@splidejs/splide-extension-grid";
import "@splidejs/react-splide/css/core";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import type { NextPageWithLayout } from "@/types/next_page_with_layout";
import { format, formatISO, parseISO } from "date-fns";
import { motion } from "framer-motion";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ChakraNextImage } from "@/components/chakra_next_image";
import { ubuntuFont } from "@/config/next_fonts";

export type NewsSummary = {
  id: string;
  title: string;
  createdAt: string;
  imageURL?: string;
};

const GRID_COLUMN_GAP: number = 72;
const GRID_ROW_GAP: number = 64;

const GRID_CARD_WIDTH: number = 240;
const GRID_CARD_HEIGHT: number = 204;

const GRID_MAX_COLUMNS: number = 4;
const GRID_MAX_ROWS: number = 2;

const WhatsNewGridCard = memo<Omit<NewsSummary, "id">>(
  ({ title, createdAt, imageURL }) => (
    <VStack
      maxW={`${GRID_CARD_WIDTH}px`}
      alignItems="flex-start"
      spacing="16px"
    >
      {!!imageURL ? (
        <ChakraNextImage
          src={imageURL}
          alt={title}
          width={`${GRID_CARD_WIDTH}px`}
          height={135}
          objectFit="cover"
        />
      ) : (
        <Box w={`${GRID_CARD_WIDTH}px`} h="135px" backgroundColor="gray" />
      )}

      <VStack alignItems="inherit" spacing="8px">
        <Text
          as="time"
          dateTime={formatISO(parseISO(createdAt))}
          fontFamily={ubuntuFont.style.fontFamily}
          fontWeight={400}
          fontSize="16px"
        >
          {format(parseISO(createdAt), "yyyy . MM . dd")}
        </Text>

        <Text
          fontSize="18px"
          sx={{
            display: "-webkit-box",
            "-webkit-line-clamp": "2",
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Text>
      </VStack>
    </VStack>
  )
);

WhatsNewGridCard.displayName = "WhatsNewGridCard";

const WhatsNewListCard = memo<Omit<NewsSummary, "id">>(
  ({ title, createdAt }) => (
    <HStack flexWrap="nowrap" align="baseline" h="fit-content" spacing="20px">
      <Text
        as="time"
        dateTime={formatISO(parseISO(createdAt))}
        fontFamily={ubuntuFont.style.fontFamily}
        fontWeight={400}
        fontSize="14px"
      >
        {format(parseISO(createdAt), "yyyy . MM . dd")}
      </Text>

      <Text fontSize="16px">{title}</Text>
    </HStack>
  )
);

WhatsNewListCard.displayName = "WhatsNewListCard";

const mockNewsList: NewsSummary[] = [
  {
    id: "4d79ae26-f7e3-4870-bcc8-6eaf96756083",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 9).toISOString(),
  },
  {
    id: "eb997e46-8e34-4929-9ee5-57b86f03121c",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "24f8ccf3-bd9c-4696-9aa6-bf348c97b314",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "ed9aecfa-52d7-46e8-a647-14f1cc08c384",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "ac1f00c2-c259-4b57-8605-8e65ed4bf932",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "95f2516f-b857-4e0e-8d58-9c067888b987",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "2acd1279-b1a6-4aea-ad9d-b8c8d6bf68c2",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "00214291-d29c-462d-916d-b2cedfc8d448",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "7cf92a12-17b6-43f7-a0e5-adabbe8a5949",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "99eaf1a1-f31c-4e1a-963e-28bcdc47dd38",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "d00fe380-8736-41ab-94f0-b593e39c09a0",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "4e3afc80-6e9f-4209-8e20-7aa3583a964b",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "70de2195-e81a-44bb-bec4-97e9c2fe8796",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "62629805-8914-471a-b41a-a109f607df1b",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "7d560a13-d724-4b4b-88da-0b6d47320995",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "f3b23589-0812-468d-9d19-f55f2e8115c0",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "dafe6106-6a73-4bdc-8a59-85951dd9130f",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "1ca6cf3f-7ea3-4969-949d-78298162156e",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "3609c0fd-d55a-4da0-9d71-7e262ab7753b",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "67400370-1a91-4949-b238-b182419bdec4",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "322dbc88-fce8-4ca6-a579-c8b372fee2a4",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "c8d68c8c-e042-4b4a-944b-b52a879185c7",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "d9e91ab6-76f7-40ac-96f6-b0c354a00593",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "c84c8c48-34f9-44e5-9c72-1bd3963bddc3",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 9).toISOString(),
  },
  {
    id: "cfbde760-8239-4e7e-adc8-d3236400f8d8",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "71fdaba9-0c4d-4270-adcd-828adb723d00",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "b2c17dc7-b510-475b-8c23-70a87db53bb4",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
  {
    id: "a17d2f64-efeb-44db-a630-c5a9dbdadf8b",
    title: "タイトルが入ります",
    createdAt: new Date(2022, 11, 10).toISOString(),
  },
];

type PageProps = {
  refererPath: string | null;
  newsList?: NewsSummary[];
};

export const WhatsNewPage: NextPageWithLayout<PageProps> = ({
  refererPath,
  newsList,
}) => {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const contentContainerSize = useSize(contentContainerRef);

  const { asPath } = useRouter();

  const listLayoutSplideOptions: SplideOptions = useMemo<SplideOptions>(
    () => ({
      direction: "ttb",
      wheel: true,
      waitForTransition: true,
      height: "60vh",
      fixedWidth: !!contentContainerSize
        ? contentContainerSize.width - 80
        : "80vw",
      arrows: false,
      classes: {
        pagination: "splide__pagination news-pagination",
        page: "splide__pagination__page news-pagination-page smartphone",
      },
      perPage: 9,
      gap: 0,
    }),
    [contentContainerSize]
  );

  const dynamicNumberOfGridColumns: number = Math.floor(
    (contentContainerSize?.width ?? 0) / (GRID_CARD_WIDTH + GRID_COLUMN_GAP)
  );

  const dynamicNumberOfGridRows: number = Math.floor(
    (contentContainerSize?.height ?? 0) / (GRID_CARD_HEIGHT + GRID_ROW_GAP)
  );

  const gridLayoutSplideOptions: SplideOptions = useMemo<SplideOptions>(
    () => ({
      direction: "ttb",
      wheel: true,
      waitForTransition: true,
      grid: {
        cols: Math.min(dynamicNumberOfGridColumns, GRID_MAX_COLUMNS),
        rows: Math.min(dynamicNumberOfGridRows, GRID_MAX_ROWS),
      },
      height: "60vh",
      fixedWidth: !!contentContainerSize
        ? contentContainerSize.width - 92
        : "80vw",
      arrows: false,
      classes: {
        pagination: "splide__pagination news-pagination",
        page: "splide__pagination__page news-pagination-page",
      },
    }),
    [contentContainerSize, dynamicNumberOfGridColumns, dynamicNumberOfGridRows]
  );

  return (
    <>
      <style jsx global>
        {`
          #__next {
            overflow: hidden;
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

            transition: color 0.5s;
          }

          .news-pagination-page.smartphone {
            width: 24px;
            height: 24px;
            font-size: 12px;
          }

          .news-pagination-page:hover {
            color: rgba(1, 104, 183, 0.4);
          }

          /* 現在表示されているページネーションのスタイル */
          .news-pagination-page.is-active {
            background-color: #f2f947;
          }
        `}
      </style>

      <style jsx global>
        {`
          .splide__slide {
            list-style-type: none !important;
          }
        `}
      </style>

      {/* TODO: Splide が重すぎてスライディングアニメーションが効かない問題を修正する */}
      <motion.div
        initial={
          !!refererPath?.match(/\/whats_new\/[^\s].*/)
            ? { y: "-100%" }
            : { opacity: 0 }
        }
        animate={
          !!refererPath?.match(/\/whats_new\/[^\s].*/)
            ? { y: 0 }
            : { opacity: 1 }
        }
        exit={
          !!asPath.match(/\/whats_new\/[^\s].*/) ? { y: 0 } : { opacity: 0 }
        }
        transition={{
          duration: !!refererPath?.match(/\/whats_new\/[^\s].*/) ? 0.5 : 1,
        }}
      >
        <Container
          ref={contentContainerRef}
          maxW="1280px"
          overflow="auto"
          mt="5vh"
          mb="auto"
        >
          <VStack
            w="100%"
            justifyContent="space-around"
            alignItems="flex-start"
            rowGap="72px"
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

            {/* スマホレイアウト */}
            <Show below="lg">
              <Splide hasTrack={false} options={listLayoutSplideOptions}>
                <HStack
                  justify="space-between"
                  alignItems="flex-start"
                  w="90vw"
                  columnGap="2%"
                >
                  <SplideTrack>
                    {!!newsList &&
                      newsList.map(({ id, title, createdAt }) => (
                        <SplideSlide key={id}>
                          <VStack align="flex-start" maxW="70vw">
                            <LinkBox as="article">
                              <LinkOverlay
                                as={NextLink}
                                href={`/whats_new/${id}`}
                              >
                                <WhatsNewListCard
                                  title={title}
                                  createdAt={createdAt}
                                />
                              </LinkOverlay>
                            </LinkBox>

                            <Divider
                              orientation="horizontal"
                              borderColor="#333333"
                              borderWidth="0.5"
                            />
                          </VStack>
                        </SplideSlide>
                      ))}
                  </SplideTrack>

                  <VStack
                    h="70%"
                    justifyContent="space-between"
                    alignItems="center"
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
                        fontSize={12}
                        sx={{ writingMode: "vertical-lr" }}
                        color="main"
                        userSelect="none"
                      >
                        scroll
                      </Text>
                    </VStack>
                  </VStack>
                </HStack>
              </Splide>
            </Show>

            {/* PCレイアウト */}
            <Show above="lg">
              <Splide
                hasTrack={false}
                extensions={{ SplideGridExtension }}
                options={gridLayoutSplideOptions}
              >
                <HStack alignItems="flex-start" spacing="0">
                  <SplideTrack>
                    {!!newsList &&
                      newsList.map(({ id, title, createdAt, imageURL }) => (
                        <SplideSlide key={id}>
                          <LinkBox as="article">
                            <LinkOverlay
                              as={NextLink}
                              href={`/whats_new/${id}`}
                            >
                              <WhatsNewGridCard
                                title={title}
                                createdAt={createdAt}
                                imageURL={imageURL}
                              />
                            </LinkOverlay>
                          </LinkBox>
                        </SplideSlide>
                      ))}
                  </SplideTrack>

                  <VStack
                    h="60%"
                    justifyContent="space-between"
                    alignItems="center"
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
              </Splide>
            </Show>
          </VStack>
        </Container>
      </motion.div>
    </>
  );
};

WhatsNewPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="what's new">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  const referer = context.req.headers.referer;

  const newsList: NewsSummary[] = mockNewsList;

  if (!referer) {
    return {
      props: {
        refererPath: null,
        newsList,
      },
    };
  }

  const refererURL: URL = new URL(referer);
  const refererPath: string = refererURL.pathname;

  return {
    props: {
      refererPath: refererPath,
      newsList,
    },
  };
};

export default WhatsNewPage;
