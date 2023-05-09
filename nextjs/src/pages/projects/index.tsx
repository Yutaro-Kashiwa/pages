import { NextPageWithLayout } from "@/types/next_page_with_layout";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, ReactElement, memo, useEffect } from "react";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import NextLink from "next/link";
import { Inter, Ubuntu } from "next/font/google";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { ArrowDown } from "@/components/icons/arrow_down";
import { GetServerSideProps } from "next";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { Project, mockProjectsList } from "./[project_name]";
import { useRouter } from "next/router";

const ubuntuFont = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const interFont = Inter({
  subsets: ["latin"],
});

const ProjectSummaryCard = memo<Project & { shouldReverseImagePlacement: boolean }>(({ title, name, summary, pictureURL, shouldReverseImagePlacement }) => (
  <HStack alignItems="center" flexFlow={shouldReverseImagePlacement ? "row-reverse" : "row"} gap="24px">
    <VStack alignItems="flex-start" spacing="40px">
      <VStack alignItems="inherit" spacing="24px">
        <Heading
          as="h3"
          fontFamily={interFont.style.fontFamily}
          fontWeight={400}
          fontSize={24}
        >
          {title}
        </Heading>

        <Text>
          {summary}
        </Text>
      </VStack>

      <LinkBox p={0} color="main">
        <LinkOverlay as={NextLink} href={`/projects/${name}`}>
          <Box
            display="inline-flex"
            alignItems="center"
            pl="18px"
            pr="28px"
            py="8px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="main"
          >
            <Text fontWeight="400" fontSize="16px" color="main">
              詳しくはこちら
            </Text>

            <Box position="relative" h="0px">
              <ArrowDown position="absolute" h="31px" left="8px" />
            </Box>
          </Box>
        </LinkOverlay>
      </LinkBox>
    </VStack>

    <Image
      as={NextImage}
      src={pictureURL}
      alt=""
      fallback={
        <Box
          as="img"
          float="right"
          ml="60px"
          minW="320px"
          minH="180px"
          backgroundColor="#d9d9d9"
        />
      }
    />
  </HStack>
));

ProjectSummaryCard.displayName = "ProjectCard";

type PageProps = {
  refererPath: string | null;
};

export const ProjectsPage: NextPageWithLayout<PageProps> = ({
  refererPath
}) => {
  const { asPath } = useRouter()

  return (
    <motion.div
      initial={!!refererPath?.match(/\/projects\/[^\s].*/) ? { y: "-100vh" } : { opacity: 0 }}
      animate={!!refererPath?.match(/\/projects\/[^\s].*/) ? { y: 0 } : { opacity: 1 }}
      exit={!!asPath.match(/\/projects\/[^\s].*/) ? { y: "-100vh" } : { opacity: 0 }}
      transition={{
        duration: !!refererPath?.match(/\/projects\/[^\s].*/) ? 0.5 : 1,
      }}
      style={{
        height: "100%",
      }}
    >
      <Container maxW="1280px" h="100%" overflow="auto">
        <VStack
          h="100%"
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
                projects
              </Heading>
            </HStack>
          </Show>

          <VStack justifyContent="space-evenly" flexBasis="90%">
            {[...mockProjectsList, ...mockProjectsList].map(({ title, name, body, summary, pictureURL }, index) => (
              <Fragment key={`${title}${name}${summary}${pictureURL}${index}`}>
                <ProjectSummaryCard title={title} name={name} summary={summary} body={body} shouldReverseImagePlacement={index % 2 > 0} />
              </Fragment>
            ))}
          </VStack>
        </VStack>
      </Container>
    </motion.div>
  );
};

ProjectsPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="projects">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const referer = context.req.headers.referer;

  if (!referer) {
    return { 
      props: {
        refererPath: null
      }
    }
  }

  const refererURL: URL = new URL(referer);
  const refererPath = refererURL.pathname;

  return {
    props: {
      refererPath,
    },
  };
};

export default ProjectsPage;
