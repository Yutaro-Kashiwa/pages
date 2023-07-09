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
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { AvatarIcon } from "@/components/icons/avatar_icon";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { ubuntuFont } from "@/config/next_fonts";

type Member = {
  uid: string;
  name: string;
  grade: string;
  pictureURL?: string;
};

type MemberSummaryCardProps = Omit<Member, "uid">;

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
  {
    uid: "fe6ad000-493c-47c6-839e-3e2b9e86868d",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "0362da62-9df7-4605-8aa0-d21e9d4d6a7e",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "d553af77-a461-4979-9d06-9593962ab3a5",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "a531b23f-c46b-45c7-82e9-e2f1b601f638",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "ab9ff006-a8a8-4261-80d5-2a24dff83e29",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "cc6c50e4-f27f-4ed6-a698-46899607501a",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "5320f716-335c-4425-9832-e2ff43cb637d",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "2bfe3a32-4901-4fe9-be2e-4aef17010a25",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "7db9c0ee-32b6-4fb3-bbce-bc2c7729b145",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "07ddbb6d-21b6-466b-978c-cc6a600306ab",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "b122532a-547c-4d8a-ac3b-6852b29126bc",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "ea89069b-5781-495e-bfeb-9e56b3aa3531",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "19ec7c31-d7b3-4c89-9281-92b7a3540398",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "ff0fe572-17cd-4e11-b91e-880881052e2e",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "f408d568-a4ce-4660-ad3d-666b7dd66a9e",
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    uid: "f32f787b-6073-4b15-ab32-adaf48140465",
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
        aspectRatio={135 / 180}
        bg="base.2"
        icon={<AvatarIcon w="100%" h="100%" fill="base.1" />}
        borderRadius={0}
        objectFit="cover"
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
            lg: "16px",
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
  members: Member[];
};

export const MembersPage: NextPageWithLayout<PageProps> = ({ members }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
        }}
      >
        <Container maxW="1280px" my="5vh">
          <VStack
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
                  members
                </Heading>
              </HStack>
            </Show>

            <SimpleGrid
              alignSelf="center"
              w="100%"
              h="fit-content"
              minChildWidth="min(20vw, 136px)"
              justifyContent="space-between"
              alignItems="start"
              alignContent={{
                base: "space-evenly",
                lg: "unset",
              }}
              columnGap={{ base: "48px" }}
              rowGap="56px"
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

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context
) => {
  // API取得処理の代わり
  const members = membersList;

  return {
    props: {
      members,
    },
  };
};

export default MembersPage;
