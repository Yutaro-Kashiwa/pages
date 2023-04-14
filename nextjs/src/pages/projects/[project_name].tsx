import type { NextPageWithLayout } from "@/types/next_page_with_layout";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  AspectRatio,
  Badge,
  Box,
  Center,
  HStack,
  Heading,
  Link,
  Show,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { Inter, Ubuntu } from "next/font/google";
import { GetServerSideProps } from "next";
import NextLink from "next/link";
import NextImage from "next/image";
import { useEffect, useState } from "react";

const ubuntuFont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

const interFont = Inter({
  subsets: ["latin"],
});

export type Project = {
  title: string;
  name: string;
  summary: string;
  body: string;
  pictureURL?: string;
};

type Props = {
  refererPath?: string;
};

export const mockProjectsList: Project[] = [
  {
    title: "研究 1. 入出力テストに頼らない不具合・異常検出手法の確立",
    name: "hoge",
    summary: `初期研究として、動的な変化量(トレースの変化量)と不具合混入コミットの関係性を調査した。その結果、不具合混入コミットでは動的な変化量が大きく変化することが観察された。さらに静的な変化量(ソースコードの変更行)を加えて分析したところ、小さな変更でも動作が大幅に変化し不具合に繋がることが判明した。`,
    body: `
      デバッグ作業は、ソフトウェア製品の開発時間のうち約50%を占めると言われている。より早い段階でバグを検出するための方法としてソフトウェアの変更に対するバグ予測が研究されている。ソフトウェアの変更に対するバグ予測では、開発者が実装工程中に行うファイルの変更に対して、その変更がバグを含むか否かを予測する。例えば、Kameiらは、バージョン管理システムから計測できる14種類のメトリクスを用いてJust-In-Time(JIT)バグ予測モデルを構築した。また、Sohnらは、バグの局所性を利用し、バグレポートとファイルの変更の語彙的な類似性を用いてバグ予測モデルを構築した。これらのバグ予測は静的な情報を利用している。静的な情報とは、プログラムの実行を必要とせずに得られるソフトウェアの変更情報などのことである。


  一方、プログラムの実行によって得られる動的な情報を用いたバグ予測に関する研究は未だ多く行われていない。特に、変更した箇所とは異なる箇所の動作が大きく変化した場合、不具合が含まれている可能性が高い。本研究では、プログラム変更前後の動作を比較しながら、予想外の動作変更が含まれていないかを検出する。本研究課題では、動作した箇所の特定にトレースログを利用し、動作を観察する。トレースログとは、プログラムが動作した箇所や変数情報などをファイル書き出したものである。
    `,
  },
];

export const ProjectDetailPage: NextPageWithLayout<Props> = ({
  refererPath,
}) => {
  const {
    query: { project_name },
  } = useRouter();

  const [projectTitle, setProjectTitle] = useState<string>("");
  const [projectBody, setProjectBody] = useState<string>("");
  const [imageURL, setImageURL] = useState<string | undefined>("");

  useEffect(() => {
    // API取得の代わり
    const fetchedProjectDetail: Project | undefined = mockProjectsList.find(
      ({ name }) => name === project_name
    );

    if (!fetchedProjectDetail) return;

    setProjectTitle(fetchedProjectDetail.title);
    setProjectBody(fetchedProjectDetail.body);
    setImageURL(fetchedProjectDetail.pictureURL);
  }, [project_name]);

  return (
    <motion.div
      initial={refererPath === "/projects" ? { y: 500 } : false}
      animate={{ y: 0 }}
      exit={{ y: 500 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Center as="article" w="100vw" h="100vh">
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
                about study
              </Heading>
            </HStack>
          </Show>

          <VStack flexBasis="80%" alignItems="flex-start">
            <Heading
              as="h3"
              fontFamily={interFont.style.fontFamily}
              fontWeight={400}
              fontSize={24}
            >
              {projectTitle}
            </Heading>

            <VStack h="100%" alignItems="inherit">
              <Text
                fontFamily={interFont.style.fontFamily}
                fontWeight={400}
                fontSize={16}
                whiteSpace="pre-wrap"
              >
                <Image
                  as={NextImage}
                  src={imageURL}
                  alt={projectTitle}
                  fallback={
                    <Box
                      as="image"
                      float="right"
                      ml="60px"
                      minW="320px"
                      minH="180px"
                      backgroundColor="#d9d9d9"
                    />
                  }
                />

                {projectBody}
              </Text>

              <VStack w="100%" alignItems="inherit" spacing="2px">
                <HStack alignItems="center">
                  <Badge
                    fontFamily={interFont.style.fontFamily}
                    fontWeight={500}
                    fontSize="18px"
                    bg="#f2f947"
                    color="#333333"
                    borderRadius="4px"
                    border="4px solid #F2F947"
                    px="8px"
                    py="4px"
                  >
                    発表論文
                  </Badge>

                  <Text
                    fontFamily={interFont.style.fontFamily}
                    fontWeight={400}
                    fontSize="16px"
                    color="#333333"
                    textDecoration="underline"
                  >
                    論文のリストorリンクが入ります論文のリストorリンクが入ります論文のリストorリンクが入ります
                  </Text>
                </HStack>

                <Link
                  as={NextLink}
                  href="/projects"
                  alignSelf="flex-end"
                  color="main"
                  fontWeight={400}
                  fontSize={16}
                >
                  一覧へ戻る ↑
                </Link>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </Center>
    </motion.div>
  );
};

ProjectDetailPage.getLayout = (page) => (
  <CommonPageLayout title="Projects">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const referer = context.req.headers.referer;

  const refererURL: URL | undefined = !!referer ? new URL(referer) : undefined;
  const refererPath: string | undefined = refererURL?.pathname;

  return {
    props: {
      refererPath,
    },
  };
};

export default ProjectDetailPage;
