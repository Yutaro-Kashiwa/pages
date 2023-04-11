import { NextPageWithLayout } from "@/types/next_page_with_layout";
import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  HStack,
  Heading,
  Show,
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
        icon={
          <AvatarIcon w="100%" h="100%" fill="base.1" />
        }
        borderRadius={0}
      />

      <VStack spacing="4px">
        <Text fontWeight={500} fontSize={20} textAlign="center">
          {name}
        </Text>

        <Text fontWeight={500} fontSize={16} textAlign="center">
          {grade}
        </Text>
      </VStack>
    </VStack>
  )
);

MemberSummaryCard.displayName = "MemberSummaryCard";

export const MembersPage: NextPageWithLayout = () => {
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
                members
              </Heading>
            </HStack>
          </Show>

          <Spacer />

          <HStack
            w="100%"
            justifyContent={[null, "flex-start", "space-between"]}
            flexWrap="wrap"
          >
            {membersList.map(({ uid, name, grade, pictureURL }) => (
              <Fragment key={uid}>
                <Box maxH="260px" maxW="136px">
                  <MemberSummaryCard name={"学生 氏名"} grade={"学部4回"} />
                </Box>
              </Fragment>
            ))}
          </HStack>

          <Spacer />
        </VStack>
      </Center>
    </motion.div>
  );
};

MembersPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="members">{page}</CommonPageLayout>
);

export default MembersPage;
