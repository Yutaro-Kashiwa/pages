import { ReactElement, memo, useCallback, useRef, useState } from "react";
import { Ubuntu } from "next/font/google";
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  List,
  Show,
  VStack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import {
  Splide,
  SplideProps,
  SplideSlide,
  SplideTrack,
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { motion } from "framer-motion";
import { NextPageWithLayout } from "@/types/next_page_with_layout";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { ChevronDown } from "@/components/icons/chevron_down";
import { ChevronUp } from "@/components/icons/chevron_up";

const ubuntuFont = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

type Award = {
  id: string;
  awardedDate: string;
  awardeeName: string;
  awardName: string;
  awarderOrganization: string;
};

type AwardSummaryCardProps = Omit<Award, "id">;

const awardedHistoriesList: Award[] = [
  {
    id: "0e611141-f93b-4967-8a14-0ae52e35644a",
    awardedDate: "2022.9",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "8d463553-b4da-46bf-b8e4-69870d19a0bd",
    awardedDate: "2022.7",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "56d84aaa-3ff9-4ae2-aa9c-e8595e7517f9",
    awardedDate: "2021.12",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "20148c86-18f5-41c0-be6a-0dd3d996ea6c",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "1282650e-aee6-4a82-873c-71ee7a183fde",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "8352b01f-4861-456c-a645-175fa970c2b3",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "4b93ab61-df30-4bb7-992c-35d1560bcf08",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "8b1b67f1-280a-4db6-89d9-c531fc539ade",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "9ad239ea-91ac-44d0-81c4-801588818b8e",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "b0492ba7-ac8e-4a97-be81-4a28510685be",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    id: "70083091-fc37-4132-a05b-ac72434f6fca",
    awardedDate: "2021.5",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
];

const AwardSummaryCard = memo<AwardSummaryCardProps>(
  ({ awardedDate, awardeeName, awardName, awarderOrganization }) => (
    <HStack justifyContent="space-between" alignItems="center">
      <Text
        fontFamily={ubuntuFont.style.fontFamily}
        fontWeight={700}
        fontSize={32}
        lineHeight="0.84em"
        color="main"
        opacity="0.6"
      >
        {awardedDate}
      </Text>

      <Text fontWeight={500} fontSize={20}>
        {awardeeName}
      </Text>

      <VStack alignSelf="flex-start" alignItems="flex-start" spacing="2px">
        <Text fontWeight={500} fontSize={20}>
          {awardName}
        </Text>

        <Text fontWeight={500} fontSize={18}>
          {awarderOrganization}
        </Text>
      </VStack>
    </HStack>
  )
);

AwardSummaryCard.displayName = "AwardSummaryCard";

export const AwardsPage: NextPageWithLayout = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  const contentContainerSize = useSize(contentContainerRef);

  const updateInitialNumberOfPages = useCallback<
    Exclude<SplideProps["onPaginationMounted"], undefined>
  >((_, paginationData) => {
    setNumberOfPages(paginationData.items.length);
  }, []);

  const updateNumberOfPages = useCallback<
    Exclude<SplideProps["onPaginationUpdated"], undefined>
  >((_, paginationData) => {
    setNumberOfPages(paginationData.items.length);
  }, []);

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
      >
        <Center w="100vw" h="100vh">
          <Center
            ref={contentContainerRef}
            maxW="1280px"
            w="100%"
            h="75%"
            px="40px"
          >
            <Splide
              onPaginationMounted={updateInitialNumberOfPages}
              onPaginationUpdated={updateNumberOfPages}
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
              }}
            >
              <VStack align="center" w="100%" h="100%">
                <HStack alignItems="flex-start" h="100%" spacing="84px">
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
                          >
                            awards
                          </Heading>
                        </HStack>
                      </Show>
                    </SplideSlide>

                    {awardedHistoriesList.map(
                      ({
                        id,
                        awardedDate,
                        awardeeName,
                        awardName,
                        awarderOrganization,
                      }) => (
                        <SplideSlide key={id}>
                          <AwardSummaryCard
                            awardedDate={awardedDate}
                            awardeeName={awardeeName}
                            awardName={awardName}
                            awarderOrganization={awarderOrganization}
                          />
                        </SplideSlide>
                      )
                    )}
                  </SplideTrack>

                  <VStack
                    visibility={numberOfPages > 1 ? "visible" : "hidden"}
                    justifyContent="space-evenly"
                    alignItems="center"
                    h="64vh"
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
                    color="#cecece"
                    _hover={{
                      bg: "unset",
                    }}
                    sx={{
                      ":not(:disabled)": {
                        ":hover": {
                          color: "#adadad",
                        },
                      },
                    }}
                    icon={<ChevronDown w="32px" h="auto" />}
                  />

                  <IconButton
                    className="splide__arrow splide__arrow--prev"
                    // alia-label は Splide が勝手に設定してくれるので、ここでは空にする
                    aria-label=""
                    variant="ghost"
                    color="#cecece"
                    w="32px"
                    h="32px"
                    p={0}
                    _hover={{
                      bg: "unset",
                    }}
                    sx={{
                      ":not(:disabled)": {
                        ":hover": {
                          color: "#adadad",
                        },
                      },
                    }}
                    icon={<ChevronUp w="32px" h="auto" />}
                  />
                </HStack>
              </VStack>
            </Splide>
          </Center>
        </Center>
      </motion.div>
    </>
  );
};

AwardsPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="awards">{page}</CommonPageLayout>
);

export default AwardsPage;
