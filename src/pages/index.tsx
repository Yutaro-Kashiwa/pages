import { ArrowRight } from "@/components/icons/arrow_right";
import { Box, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

export default function TopPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <Container maxW="1280px" mt="10%">
        <VStack
          position="relative"
          w="100%"
          justifyContent="flex-end"
          alignItems="flex-start"
          rowGap="36px"
        >
          <Heading
            as="h1"
            display="inline-flex"
            flexFlow="row wrap"
            fontWeight="500"
            fontSize={{
              base: "calc(1.875rem + ((1vw - 3.75px) * 3.1925))",
              lg: "64px",
            }}
            lineHeight="1.5"
            textDecoration="underline"
            overflowWrap="break-word"
            color="#ffffff"
          >
            <Text as="span" minW={0} color="inherit">
              ソフトウェアの動きから
            </Text>

            <Text as="span" minW={0} color="inherit">
              異常を自動検知
            </Text>
          </Heading>

          <VStack alignItems="inherit" spacing="28px">
            <Text
              maxWidth="708px"
              fontWeight="400"
              fontSize={{
                base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
                lg: "16px",
              }}
              whiteSpace="pre-wrap"
              color="#ffffff"
            >
              {/* prettier-ignore */}
              {`本研究では、人手で作成した入出力テストに頼らず、機械が不具合（異常）を検出することを目指しています。
    具体的には、変更前後のソフトウェアにおける動作の差異から異常か否かの判断を試みています。
    
    変更後の動作が変更前の動作と著しく異なる場合や、開発者の変更意図(コミットメッセージ等)から逸脱している場合を異常な変更として検出します。
    
    右図のように、動的解析により変更前後のトレースログを取得し、ソフトウェア動作を定量化することで実現を試みています。`}
            </Text>

            <Box position="relative" h="40px">
              <Link
                as={NextLink}
                href="/projects"
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="white"
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
                  color="white"
                  whiteSpace="nowrap"
                >
                  詳しくはこちら
                </Text>

                <Box position="absolute" w="32px" right="-16px">
                  <ArrowRight w="100%" h="100%" color="white" />
                </Box>
              </Link>
            </Box>
          </VStack>
        </VStack>
      </Container>
    </motion.div>
  );
}
