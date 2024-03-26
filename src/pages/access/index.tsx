import { ReactElement } from "react";
import {
  AspectRatio,
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Show,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NextPageWithLayout } from "@/types/next_page_with_layout";
import { CommonPageLayout } from "@/components/layouts/common_page_layout";
import { ArrowRight } from "@/components/icons/arrow_right";
import TitleBackgroundRect from "@/images/title_background_rect.svg";
import { motion } from "framer-motion";
import { ubuntuFont } from "@/config/next_fonts";

export const AccessPage: NextPageWithLayout = () => {
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
        <Container
          maxW="1280px"
          mt="5vh"
          mb="20vh"
          overflowX="visible"
          overflowY="visible"
        >
          <VStack alignItems="flex-start" rowGap="72px">
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

            <VStack w="100%" align="inherit" rowGap="24px">
              <Heading
                as="h3"
                fontWeight={600}
                fontSize={{
                  base: "calc(1.125rem + ((1vw - 3.75px) * 0.5634))",
                  lg: "24px",
                }}
                color="main"
              >
                奈良先端科学技術大学院大学
              </Heading>

              <Grid
                w="100%"
                templateRows="auto"
                templateColumns="repeat(auto-fit, minmax(min(50vw, 480px), 1fr))"
                justifyContent="space-around"
                alignContent="start"
                columnGap="24px"
                rowGap="36px"
              >
                <GridItem rowSpan={2} colSpan={1}>
                  <AspectRatio w="100%" minW="280px" maxW="572px" ratio={4 / 3}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.94645321968!2d135.73156196523308!3d34.73174408042649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600122e9fc7b1ce7%3A0x2109b99d4ee8a89c!2z5aWI6Imv5YWI56uv56eR5a2m5oqA6KGT5aSn5a2m6Zmi5aSn5a2m!5e0!3m2!1sja!2sjp!4v1680743732897!5m2!1sja!2sjp"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{
                        border: 0,
                      }}
                    />
                  </AspectRatio>
                </GridItem>

                <GridItem colSpan={1}>
                  <VStack w="100%" align="inherit" spacing="32px">
                    <Show above="lg">
                      <Heading
                        as="h4"
                        fontWeight={600}
                        fontSize="20px"
                        color="main"
                      >
                        大学へのアクセス
                      </Heading>
                    </Show>

                    <VStack w="100%" align="inherit" spacing="24px">
                      <Text
                        fontSize={{
                          base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
                          lg: "16px",
                        }}
                      >
                        〒630-0192 奈良県生駒市高山町 8916番地 - 5
                      </Text>

                      <Grid
                        w="100%"
                        templateRows="auto"
                        templateColumns="repeat(auto-fit, minmax(272px, 1fr))"
                        rowGap="16px"
                      >
                        <GridItem colSpan={1}>
                          <VStack align="flex-start" spacing="8px">
                            <HStack spacing="16px">
                              <Text
                                fontSize={{
                                  base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
                                  lg: "16px",
                                }}
                              >
                                電車
                              </Text>

                              <Text
                                fontSize={{
                                  base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
                                  lg: "16px",
                                }}
                              >
                                ○○駅から徒歩何分
                              </Text>
                            </HStack>

                            <HStack spacing="16px">
                              <Text
                                fontSize={{
                                  base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
                                  lg: "16px",
                                }}
                              >
                                バス
                              </Text>

                              <Text
                                fontSize={{
                                  base: "calc(0.9375rem + ((1vw - 3.75px) * 0.0939))",
                                  lg: "16px",
                                }}
                              >
                                ○○停留所から徒歩何分
                              </Text>
                            </HStack>
                          </VStack>
                        </GridItem>

                        <GridItem colSpan={1}>
                          <Link
                            isExternal
                            href="http://www.naist.jp/accessmap/"
                            position="relative"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="main"
                            h="fit-content"
                            w="fit-content"
                            pl={{ base: "12px", lg: "20px" }}
                            pr={{ base: "24px", lg: "28px" }}
                            py={{ base: "4px", lg: "8px" }}
                            transform="scale(1)"
                            transformOrigin="left top"
                            _hover={{
                              textDecoration: "none",
                              backgroundColor: "#F2F947",
                              pl: "28px",
                              pr: "40px",
                              py: "12px",
                              transfrom: "scale(1.001)",
                            }}
                            transition="ease-out 0.3s"
                          >
                            <Text
                              as="p"
                              fontWeight="400"
                              fontSize={{
                                base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
                                lg: "16px",
                              }}
                              color="main"
                              whiteSpace="nowrap"
                            >
                              詳しくはこちら
                            </Text>

                            <Box position="absolute" w="32px" right="-16px">
                              <ArrowRight w="100%" h="100%" color="main" />
                            </Box>
                          </Link>
                        </GridItem>
                      </Grid>
                    </VStack>
                  </VStack>
                </GridItem>

                <GridItem colSpan={1}>
                  <VStack align="inherit">
                    <Heading
                      as="h4"
                      fontWeight={600}
                      fontSize={{
                        base: "calc(1.125rem + ((1vw - 3.75px) * 0.1878))",
                        lg: "20px",
                      }}
                      color="main"
                    >
                      連絡先
                    </Heading>

                    <Text
                      fontSize={{
                        base: "calc(0.9375rem + ((1vw - 3.75px) * 0.4695))",
                        lg: "20px",
                      }}
                    >
                      example.dummy@mail.com
                    </Text>
                  </VStack>
                </GridItem>
              </Grid>
            </VStack>
          </VStack>
        </Container>
      </motion.div>
    </>
  );
};

AccessPage.getLayout = (page: ReactElement) => (
  <CommonPageLayout title="access">{page}</CommonPageLayout>
);

export default AccessPage;
