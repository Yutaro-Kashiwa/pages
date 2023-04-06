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
import { CommonPageLayout } from "../common_page_layout";
import { Ubuntu } from "next/font/google";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { AvatarIcon } from "@/components/icons/avatar_icon";

const ubuntuFont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

type MemberSummaryCardProps = {
  name: string;
  grade: string;
  pictureURL?: string;
};

const membersList: MemberSummaryCardProps[] = [
  {
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
    name: "生徒氏名",
    grade: "学部4回",
  },
  {
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
          <HStack position="relative">
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

        <HStack w="100%" justifyContent={[null, "flex-start", "space-between"]} flexWrap="wrap">
          {membersList.map(({ name, grade, pictureURL }) => (
            <Fragment key={`${name}${grade}${pictureURL}`}>
              <Box maxH="260px" maxW="136px">
                <MemberSummaryCard name={"学生 氏名"} grade={"学部4回"} />
              </Box>
            </Fragment>
          ))}
        </HStack>

        <Spacer />
      </VStack>
    </Center>
  );
};

MembersPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="members">{page}</CommonPageLayout>
);

export default MembersPage;
