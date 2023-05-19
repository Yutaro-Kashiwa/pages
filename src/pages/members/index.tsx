import { NextPageWithLayout } from "@/types/next_page_with_layout";
import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Show,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment, ReactElement, memo } from "react";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import { Ubuntu } from "next/font/google";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { AvatarIcon } from "@/components/icons/avatar_icon";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";

const ubuntuFont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

type Member = {
  uid: string;
  name: string;
  grade: string;
  pictureURL?: string;
}

type MemberSummaryCardProps = Omit<Member, "uid">

const membersList: Member[] = [
  {
    uid: "0d22c632-6567-46d0-a215-dfde7d6bfb05",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "39782ec2-b14e-44e3-a99a-e7ce5835dead",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "196b348d-5eda-46ad-9cf1-0c6f41e49e80",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "9197c958-fa06-4e96-9d8b-adf0bb6f7f48",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "1fcf62c9-a8ff-470a-a682-f8208d1ee2c3",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "3686482f-86ac-4fac-9d19-22fc35ae1d86",
    name: "生徒氏名",
    grade: "学部4回",
  },
];

const MemberSummaryCard = memo<MemberSummaryCardProps>(
  ({ name, grade, pictureURL }) => (
    <VStack spacing="16px">
      <Avatar
        src={pictureURL}
        size="100%"
        bg="base.2"
        icon={<AvatarIcon w="100%" h="100%" fill="base.1" />}
        borderRadius={0}
      />

      <VStack spacing="4px">
        <Text
          fontWeight={500}
          fontSize={{
            base: "calc(1rem + ((1vw - 3.75px) * 0.3756))",
            lg: "20",
          }}
          textAlign="center"
        >
          {name}
        </Text>

        <Text
          fontWeight={500}
          fontSize={{
            base: "calc(0.75rem + ((1vw - 3.75px) * 0.3756))",
            lg: "16px"
          }}
          textAlign="center"
        >
          {grade}
        </Text>
      </VStack>
    </VStack>
  )
);

MemberSummaryCard.displayName = "MemberSummaryCard";

type PageProps = {
  members: Member[]
}

export const MembersPage: NextPageWithLayout<PageProps> = ({ members }) => {
  return (
    <>
      <style jsx global>
        {`
          #__next {
            overflow: hidden;
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
        <Container maxW="1280px" h={{ base: "fit-content", lg: "100%" }} overflowY="visible">
          <VStack
            h="100%"
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
                  members
                </Heading>
              </HStack>
            </Show>

            <SimpleGrid
              alignSelf="center"
              w="100%"
              h={{ base: "80vh", lg: "unset" }}
              minChildWidth="min(20vw, 136px)"
              justifyContent="space-between"
              alignItems="center"
              alignContent={{
                base: "space-evenly",
                lg: "unset"
              }}
              columnGap={{ base: "48px" }}
            >
              {members.map(({ uid, name, grade, pictureURL }) => (
                <Fragment key={uid}>
                  <Box maxH="260px" w="20vw" minW="64px" maxW="136px">
                    <MemberSummaryCard
                      name={name}
                      grade={grade}
                      pictureURL={pictureURL}
                    />
                  </Box>
                </Fragment>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </motion.div>
    </>
  );
};

MembersPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="members">{page}</CommonPageLayout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  // API取得処理の代わり
  const members = membersList

  return {
    props: {
      members
    }
  }
}

export default MembersPage;
