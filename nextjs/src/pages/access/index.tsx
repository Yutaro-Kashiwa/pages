import { ReactElement } from "react";
import { Ubuntu } from "next/font/google";
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  LinkBox,
  LinkOverlay,
  Show,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPageWithLayout } from "@/types/next_page_with_layout";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import { ArrowRight } from "@/components/icons/arrow_right";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { motion } from "framer-motion";

const ubuntuFont = Ubuntu({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const AccessPage: NextPageWithLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <Center w="100vw" h="100vh" overflow="auto">
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
                access
              </Heading>
            </HStack>
          </Show>

          <VStack flexBasis="80%" w="100%" alignItems="inherit" spacing="24px">
            <Heading as="h3" fontWeight={600} fontSize="24px" color="main">
              奈良先端科学技術大学院大学
            </Heading>

            <HStack
              w="100%"
              flex="1 1 50%"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <AspectRatio maxW="572px" w="100%" h="100%" ratio={572 / 428}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.94645321968!2d135.73156196523308!3d34.73174408042649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600122e9fc7b1ce7%3A0x2109b99d4ee8a89c!2z5aWI6Imv5YWI56uv56eR5a2m5oqA6KGT5aSn5a2m6Zmi5aSn5a2m!5e0!3m2!1sja!2sjp!4v1680743732897!5m2!1sja!2sjp"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{
                    border: 0
                  }}
                />
              </AspectRatio>

              <Spacer />

              <VStack h="100%" justifyContent="space-evenly" align="flex-start">
                <VStack align="inherit" spacing="32px">
                  <Heading as="h4" fontWeight={600} fontSize="20px" color="main">
                    大学へのアクセス
                  </Heading>

                  <VStack align="inherit" spacing="24px">
                    <Text>〒630-0192 奈良県生駒市高山町 8916番地 - 5</Text>

                    <HStack justifyContent="baseline">
                      <VStack align="flex-start" spacing="8px">
                        <HStack spacing="16px">
                          <Text>電車</Text>

                          <Text>○○駅から徒歩何分</Text>
                        </HStack>

                        <HStack spacing="16px">
                          <Text>バス</Text>

                          <Text>○○停留所から徒歩何分</Text>
                        </HStack>
                      </VStack>

                      <LinkBox p={0} color="main">
                        <LinkOverlay isExternal href="http://www.naist.jp/accessmap/">
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
                            <Text fontWeight="400" fontSize="16px">
                              詳しくはこちら
                            </Text>

                            <Box position="relative" h="16px">
                              <ArrowRight
                                position="absolute"
                                w="38px"
                                left="10px"
                              />
                            </Box>
                          </Box>
                        </LinkOverlay>
                      </LinkBox>
                    </HStack>
                  </VStack>
                </VStack>

                <Spacer />

                <VStack align="inherit">
                  <Heading as="h4" fontWeight={600} fontSize="20px" color="main">
                    連絡先
                  </Heading>

                  <Text>example.dummy@mail.com</Text>
                </VStack>

                <Spacer />
              </VStack>

              <Spacer />
            </HStack>
          </VStack>
        </VStack>
      </Center>
    </motion.div>
  );
};

AccessPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="access">{page}</CommonPageLayout>
);

export default AccessPage;
