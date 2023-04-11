import { Fragment, ReactElement, memo } from "react";
import { Ubuntu } from "next/font/google";
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  List,
  ListItem,
  Show,
  VStack,
  Text,
} from "@chakra-ui/react";
import { NextPageWithLayout } from "@/types/next_page_with_layout";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import TitleBackgroundRect from "@/images/title_background_rect.svg";

const ubuntuFont = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

type AwardSummaryCardProps = {
  awardedDate: string;
  awardeeName: string;
  awardName: string;
  awarderOrganization: string;
};

const awardedHistoriesList: AwardSummaryCardProps[] = [
  {
    awardedDate: "2022.9",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    awardedDate: "2022.7",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
    awardedDate: "2021.12",
    awardeeName: "受賞者名",
    awardName: "受賞した賞の名前が入ります。受賞した賞の名前が入ります。",
    awarderOrganization: "賞を与えた機関名が入ります",
  },
  {
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

        <List
          w="100%"
          maxW="72%"
          maxH="70%"
          flexGrow={1}
          display="flex"
          flexFlow="column nowrap"
          justifyContent="space-between"
        >
          {awardedHistoriesList.map(
            (
              { awardedDate, awardeeName, awardName, awarderOrganization },
              index
            ) => (
              <Fragment key={`${awardedDate}${index}`}>
                <ListItem>
                  <AwardSummaryCard
                    awardedDate={awardedDate}
                    awardeeName={awardeeName}
                    awardName={awardName}
                    awarderOrganization={awarderOrganization}
                  />
                </ListItem>
              </Fragment>
            )
          )}
        </List>
      </VStack>
    </Center>
  );
};

AwardsPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="awards">{page}</CommonPageLayout>
);

export default AwardsPage;
