import { NextPageWithLayout } from "@/types/next_page_with_layout";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  List,
  ListItem,
  Show,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, ReactElement, memo } from "react";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { Noto_Sans_JP, Ubuntu } from "next/font/google";
import { format, formatISO } from "date-fns";
import { motion } from "framer-motion";
import { ChakraNextImage } from "@/components/chakra_next_image";

const ubuntuFont = Ubuntu({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const notoSansJPFont = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
});

type CareerSummaryCardProps = {
  startedAt: Date;
  endedAt?: Date;
  careerDetail: string;
};

const careerList: CareerSummaryCardProps[] = [
  {
    startedAt: new Date(2013, 3, 1),
    endedAt: new Date(2015, 2, 1),
    careerDetail: "和歌山大学大学院システム工学研究科 博士前期課程",
  },
  {
    startedAt: new Date(2015, 3, 1),
    endedAt: new Date(2017, 2, 1),
    careerDetail: "株式会社 日立製作所",
  },
  {
    startedAt: new Date(2015, 3, 1),
    endedAt: new Date(2017, 2, 1),
    careerDetail: "和歌山大学大学院システム工学研究科 博士後期課程",
  },
  {
    startedAt: new Date(2017, 3, 1),
    endedAt: new Date(2020, 2, 1),
    careerDetail: "日本学術振興会 特別研究員（DC1）",
  },
  {
    startedAt: new Date(2019, 3, 1),
    endedAt: new Date(2019, 8, 1),
    careerDetail: "Polytechnique Montréal 客員研究員",
  },
  {
    startedAt: new Date(2020, 3, 1),
    endedAt: new Date(2022, 2, 1),
    careerDetail: "九州大学 システム情報科学研究院 特任助教",
  },
  {
    startedAt: new Date(2021, 10, 1),
    endedAt: new Date(2022, 1, 1),
    careerDetail: "Università della Svizzera italiana 客員研究員",
  },
  {
    startedAt: new Date(2022, 3, 1),
    careerDetail: "奈良先端科学技術大学院大学 先端科学技術研究科 助教",
  },
];

const CareerSummaryCard = memo<CareerSummaryCardProps>(
  ({ startedAt, endedAt, careerDetail: careerName }) => (
    <Stack
      flexDir={{ base: "column", lg: "row" }}
      alignItems="baseline"
      columnGap="8px"
      spacing={0}
    >
      <HStack spacing="2px">
        <Text
          as="time"
          dateTime={formatISO(startedAt)}
          display="inline-flex"
          alignItems="baseline"
          fontFamily={ubuntuFont.style.fontFamily}
          fontSize={{
            base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
            lg: 16,
          }}
          fontWeight={400}
          gap="2px"
          whiteSpace="nowrap"
          color={{
            base: "#5F5F5F",
            lg: "unset",
          }}
        >
          {format(startedAt, "yyyy")}

          <Text
            fontFamily={notoSansJPFont.style.fontFamily}
            fontWeight={400}
            fontSize={{
              base: "calc(0.75rem + ((1vw - 3.75px) * 0.1878))",
              lg: 12,
            }}
            color="inherit"
          >
            年
          </Text>

          {format(startedAt, "M")}

          <Text
            fontFamily={notoSansJPFont.style.fontFamily}
            fontWeight={400}
            fontSize={{
              base: "calc(0.75rem + ((1vw - 3.75px) * 0.1878))",
              lg: 12,
            }}
            color="inherit"
          >
            月
          </Text>
        </Text>

        <Text
          color={{
            base: "#5F5F5F",
            lg: "unset",
          }}
        >
          ～
        </Text>

        {!!endedAt ? (
          <Text
            as="time"
            dateTime={formatISO(endedAt)}
            display="inline-flex"
            alignItems="baseline"
            fontFamily={ubuntuFont.style.fontFamily}
            fontSize={{
              base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
              lg: 16,
            }}
            fontWeight={400}
            gap="2px"
            whiteSpace="nowrap"
            color={{
              base: "#5F5F5F",
              lg: "unset",
            }}
          >
            {format(endedAt, "yyyy")}

            <Text
              fontFamily={notoSansJPFont.style.fontFamily}
              fontWeight={400}
              fontSize={12}
              color="inherit"
            >
              年
            </Text>

            {format(endedAt, "M")}

            <Text
              fontFamily={notoSansJPFont.style.fontFamily}
              fontWeight={400}
              fontSize={12}
              color="inherit"
            >
              月
            </Text>
          </Text>
        ) : (
          <Text
            fontFamily={notoSansJPFont.style.fontFamily}
            fontWeight={400}
            fontSize={{
              base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
              lg: 16,
            }}
            whiteSpace="nowrap"
            color={{
              base: "#5F5F5F",
              lg: "unset",
            }}
          >
            現在
          </Text>
        )}
      </HStack>

      <Text
        fontFamily={ubuntuFont.style.fontFamily}
        fontWeight={500}
        fontSize={{
          base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
          lg: 16,
        }}
        whiteSpace="pre-wrap"
      >
        {careerName}
      </Text>
    </Stack>
  )
);

CareerSummaryCard.displayName = "CareerSummaryCard";

export const SelfIntroductionPage: NextPageWithLayout = () => {
  return (
    <>
      <style jsx global>
        {`
          html {
            overflow-x: hidden;
            overflow-y: hidden;
          }

          #__next {
            overflow-x: visible;
            overflow-y: scroll;
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
          height: "100%",
        }}
      >
        <Container
          display="block"
          position="relative"
          maxW="1280px"
          h="100%"
          overflowX="visible"
          overflowY="visible"
        >
          <VStack
            h="100%"
            w="100%"
            justifyContent="space-around"
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
                  self-introduction
                </Heading>
              </HStack>
            </Show>

            <SimpleGrid
              w="100%"
              h="70%"
              templateRows="auto"
              minChildWidth="min(50vw, 300px)"
              justifyContent="space-between"
              columnGap="72px"
            >
              <VStack
                minW={0}
                h="100%"
                justify="space-between"
                align="flex-start"
                rowGap={{ base: "20px", lg: "unset" }}
              >
                <Grid
                  gridTemplateRows="auto 1fr"
                  gridTemplateColumns="minmax(20px, 1fr) 1fr"
                  templateAreas={{
                    base: `
                      "picture name"
                      "picture name"
                      "positions positions"
                    `,
                    lg: `
                      "picture name"
                      "picture name"
                      "picture positions"
                    `,
                  }}
                  rowGap={{ base: "8px", lg: "unset" }}
                  columnGap={{ base: "24px", lg: "32px" }}
                >
                  <GridItem area="picture" maxW="200px">
                    <ChakraNextImage
                      // @ts-ignore
                      position="relative !important"
                      src="/image-YutaroKASHIWA-1.jpg"
                      alt="顔写真"
                      // @ts-ignore
                      fill
                      objectFit="contain"
                      fallback={
                        <AspectRatio
                          w="100%"
                          minW={0}
                          maxW="196px"
                          ratio={4 / 5}
                        >
                          <Box as="img" backgroundColor="#d9d9d9" />
                        </AspectRatio>
                      }
                    />
                  </GridItem>

                  <GridItem alignSelf="center" area="name">
                    <HStack
                      flexWrap={{ base: "wrap", xl: "nowrap" }}
                      alignItems="baseline"
                    >
                      <Text
                        fontWeight={600}
                        fontSize={{
                          base: "calc(1.5rem + ((1vw - 3.75px) * 1.1268))",
                          lg: 36,
                        }}
                        color="#333333"
                        whiteSpace="nowrap"
                      >
                        柏　祐太郎
                      </Text>

                      <Text
                        fontFamily={ubuntuFont.style.fontFamily}
                        fontWeight={300}
                        fontSize={{
                          base: "calc(0.875rem + ((1vw - 3.75px) * 0.5634))",
                          lg: 20,
                        }}
                        color="main"
                        whiteSpace="nowrap"
                      >
                        － YUTARO KASHIWA
                      </Text>
                    </HStack>
                  </GridItem>

                  <GridItem area="positions">
                    <VStack
                      fontWeight={500}
                      fontSize={{
                        base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
                        lg: 16,
                      }}
                      alignItems="inherit"
                      spacing="2px"
                    >
                      <Text whiteSpace="nowrap">
                        奈良先端科学技術大学院大学（NAIST）
                      </Text>

                      <Text whiteSpace="nowrap">
                        先端科学技術研究科 情報領域 助教
                      </Text>

                      <Text whiteSpace="nowrap">
                        総合情報基盤センター（兼務）
                      </Text>
                    </VStack>
                  </GridItem>
                </Grid>

                <Box
                  as="p"
                  position="relative"
                  pl={{ base: "8px", lg: "20px" }}
                  pt={{ base: "4px", lg: "20px" }}
                  pr={{ base: "8px", lg: "16px" }}
                  pb={{ base: 0, lg: "12px" }}
                  fontSize={{
                    base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
                    lg: 16,
                  }}
                  lineHeight="1.8"
                  _before={{
                    content: `''`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    w: "18px",
                    h: "18px",
                    borderLeftColor: "main",
                    borderTopColor: "main",
                    borderLeftWidth: "2px",
                    borderTopWidth: "2px",
                    borderLeftStyle: "solid",
                    borderTopStyle: "solid",
                  }}
                  _after={{
                    content: `''`,
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    w: "27px",
                    h: "27px",
                    borderRightColor: {
                      base: "white",
                      lg: "main",
                    },
                    borderBottomColor: {
                      base: "white",
                      lg: "main",
                    },
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderRightStyle: "solid",
                    borderBottomStyle: "solid",
                  }}
                >
                  専門はマイニングソフトウェアリポジトリ，特にソフトウェア品質の向上やソフトウェア保守の効率化に関する研究に従事．
                  近年は，テスト実行時に動的解析を実施することで得られるトレースログを活用し，Just-In-Time不具合予測や自動リファクタリング等に盛んに取り組んでいる．その他，多数のプロジェクトで国際共同研究に取り組み，カナダ・スイス・韓国の大学に所属する多くの研究者と協力して研究を進める．博士（工学）．
                </Box>
              </VStack>

              <VStack h="100%" alignItems="flex-start" spacing="32px">
                <Show above="md">
                  <Heading as="h3" fontWeight={600} fontSize={24}>
                    略歴
                  </Heading>
                </Show>

                <List
                  h="100%"
                  display="flex"
                  flexFlow="column nowrap"
                  justifyContent="space-between"
                  rowGap="16px"
                >
                  {careerList.map(
                    (
                      { startedAt, endedAt, careerDetail: careerName },
                      index
                    ) => (
                      <Fragment
                        key={`${startedAt}${endedAt}${careerName}${index}`}
                      >
                        <ListItem>
                          <CareerSummaryCard
                            startedAt={startedAt}
                            endedAt={endedAt}
                            careerDetail={careerName}
                          />
                        </ListItem>
                      </Fragment>
                    )
                  )}
                </List>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </motion.div>
    </>
  );
};

SelfIntroductionPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="self introduction">{page}</CommonPageLayout>
);

export default SelfIntroductionPage;
