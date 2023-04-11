import { NextPageWithLayout } from "@/types/next_page_with_layout";
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  List,
  ListItem,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, ReactElement, memo } from "react";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { Noto_Sans_JP, Ubuntu } from "next/font/google";
import { format, formatISO } from "date-fns";
import { motion } from "framer-motion";

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
    <HStack spacing="12px" alignItems="baseline">
      <HStack spacing="2px">
        <Text
          as="time"
          dateTime={formatISO(startedAt)}
          display="inline-flex"
          alignItems="baseline"
          fontFamily={ubuntuFont.style.fontFamily}
          fontSize={16}
          fontWeight={400}
          gap="2px"
        >
          {format(startedAt, "yyyy")}

          <Text
            fontFamily={notoSansJPFont.style.fontFamily}
            fontWeight={400}
            fontSize={12}
          >
            年
          </Text>

          {format(startedAt, "M")}

          <Text
            fontFamily={notoSansJPFont.style.fontFamily}
            fontWeight={400}
            fontSize={12}
          >
            月
          </Text>
        </Text>

        <Text>～</Text>

        {!!endedAt ? (
          <Text
            as="time"
            dateTime={formatISO(endedAt)}
            display="inline-flex"
            alignItems="baseline"
            fontFamily={ubuntuFont.style.fontFamily}
            fontSize={16}
            fontWeight={400}
            gap="2px"
          >
            {format(endedAt, "yyyy")}

            <Text
              fontFamily={notoSansJPFont.style.fontFamily}
              fontWeight={400}
              fontSize={12}
            >
              年
            </Text>

            {format(endedAt, "M")}

            <Text
              fontFamily={notoSansJPFont.style.fontFamily}
              fontWeight={400}
              fontSize={12}
            >
              月
            </Text>
          </Text>
        ) : (
          <Text
            fontFamily={notoSansJPFont.style.fontFamily}
            fontWeight={400}
            fontSize={16}
          >
            現在
          </Text>
        )}
      </HStack>

      <Text
        fontFamily={ubuntuFont.style.fontFamily}
        fontWeight={500}
        fontSize={16}
      >
        {careerName}
      </Text>
    </HStack>
  )
);

CareerSummaryCard.displayName = "CareerSummaryCard";

export const SelfIntroductionPage: NextPageWithLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <Center w="100vw" h="100vh">
        <VStack
          maxW="1280px"
          w="100%"
          h="80%"
          px="40px"
          justifyContent="space-evenly"
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

          <HStack
            flexWrap="wrap"
            justifyContent="space-evenly"
            alignContent="center"
            spacing={[null, null, null, "72px"]}
          >
            <VStack
              flex={1}
              w="100%"
              alignItems="flex-start"
              spacing={[null, "20px", null, "36px"]}
            >
              <HStack
                w="100%"
                flex="1 1 50%"
                alignItems="flex-end"
                spacing={[null, "24px", null, "32px"]}
              >
                <AspectRatio w="100%" maxW="193px" ratio={193 / 222}>
                  <Box w="193px" h="222px" backgroundColor="#d9d9d9" />
                </AspectRatio>

                <VStack alignItems="flex-start" spacing="48px">
                  <HStack alignItems="baseline">
                    <Text
                      fontWeight={600}
                      fontSize={36}
                      color="#333333"
                      whiteSpace="nowrap"
                    >
                      柏　祐太郎
                    </Text>

                    <Text
                      fontFamily={ubuntuFont.style.fontFamily}
                      fontWeight={300}
                      fontSize={20}
                      color="main"
                      whiteSpace="nowrap"
                    >
                      － YUTARO KASHIWA
                    </Text>
                  </HStack>

                  <VStack
                    fontWeight={500}
                    fontSize={16}
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
                </VStack>
              </HStack>

              <Box>
                専門はマイニングソフトウェアリポジトリ，特にソフトウェア品質の向上やソフトウェア保守の効率化に関する研究に従事．
                近年は，テスト実行時に動的解析を実施することで得られるトレースログを活用し，Just-In-Time不具合予測や自動リファクタリング等に盛んに取り組んでいる．その他，多数のプロジェクトで国際共同研究に取り組み，カナダ・スイス・韓国の大学に所属する多くの研究者と協力して研究を進める．博士（工学）．
              </Box>
            </VStack>

            <VStack h="100%" alignItems="flex-start" spacing="32px">
              <Heading as="h3" fontWeight={600} fontSize={24}>
                略歴
              </Heading>

              <List
                flexGrow={1}
                display="flex"
                flexFlow="column nowrap"
                justifyContent="space-between"
              >
                {careerList.map(
                  ({ startedAt, endedAt, careerDetail: careerName }, index) => (
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
          </HStack>
        </VStack>
      </Center>
    </motion.div>
  );
};

SelfIntroductionPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="self introduction">{page}</CommonPageLayout>
);

export default SelfIntroductionPage;
