import { FC, ReactElement, memo } from "react";
import {
  Center,
  Container,
  HStack,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Spacer,
  AspectRatio,
  Show,
} from "@chakra-ui/react";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import type { NextPageWithLayout } from "@/types/next_page_with_layout";
import { format, formatISO } from "date-fns";
import { Ubuntu } from "next/font/google";
import { motion } from "framer-motion";
import TitleBackgroundRect from "@/images/title_background_rect.svg";

const ubuntuFont = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
});

type WhatsNewGridCardProps = {
  title: string;
  createdAt: Date;
};

const WhatsNewGridCard = memo<WhatsNewGridCardProps>(({ title, createdAt }) => (
  <VStack maxW="240px" alignItems="flex-start" spacing="16px">
    <Box w="240px" h="135px" backgroundColor="gray"></Box>

    <VStack alignItems="inherit" spacing="8px">
      <Text
        as="time"
        dateTime={formatISO(createdAt)}
        fontFamily={ubuntuFont.style.fontFamily}
        fontWeight={400}
        fontSize="16px"
      >
        {format(createdAt, "yyyy . MM . dd")}
      </Text>

      <Text fontSize="16px">{title}</Text>
    </VStack>
  </VStack>
));

WhatsNewGridCard.displayName = "WhatsNewGridCard";

export const WhatsNewPage: NextPageWithLayout = () => (
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
        justifyContent="space-evenly"
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
              {`what's new`}
            </Heading>
          </HStack>
        </Show>

        <Spacer />

        <HStack w="100%" h="100%" flexGrow={2} justifyContent="space-between">
          <SimpleGrid
            flexGrow={2}
            columns={4}
            autoColumns="232px"
            autoRows="204px"
            justifyContent="space-between"
            alignContent="space-between"
          >
            <WhatsNewGridCard
              title="タイトルが入ります"
              createdAt={new Date(2022, 11, 9)}
            />

            <WhatsNewGridCard
              title="タイトルが入ります"
              createdAt={new Date(2022, 11, 9)}
            />

            <WhatsNewGridCard
              title="タイトルが入ります"
              createdAt={new Date(2022, 11, 9)}
            />

            <WhatsNewGridCard
              title="タイトルが入ります"
              createdAt={new Date(2022, 11, 9)}
            />

            <WhatsNewGridCard
              title="タイトルが入ります"
              createdAt={new Date(2022, 11, 9)}
            />

            <WhatsNewGridCard
              title="タイトルが入ります"
              createdAt={new Date(2022, 11, 9)}
            />

            <WhatsNewGridCard
              title="タイトルが入ります"
              createdAt={new Date(2022, 11, 9)}
            />
          </SimpleGrid>

          <VStack></VStack>
        </HStack>

        <Spacer />
      </VStack>
    </Center>
  </motion.div>
);

WhatsNewPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="what's new">{page}</CommonPageLayout>
);

export default WhatsNewPage;
