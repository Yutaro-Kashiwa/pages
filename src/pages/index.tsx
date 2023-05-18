import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
  Spacer,
  Container,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { ArrowRight } from "@/components/icons/arrow_right";
import { motion } from "framer-motion";

export default function TopPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
      }}
      style={{
        height: "100%"
      }}
    >
      <Container maxW="1280px" h="100%">
        <VStack
          position="relative"
          w="100%"
          h="100%"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing="36px"
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
            <Text as="span" minW={0} color="inherit">ソフトウェアの動きから</Text>
            <Text as="span" minW={0} color="inherit">異常を自動検知</Text>
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

            <LinkBox p={0}>
              <LinkOverlay href="">
                <Box
                  display="inline-flex"
                  alignItems="center"
                  pl="20px"
                  pr="28px"
                  py="8px"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="#ffffff"
                >
                  <Text
                    fontWeight="400"
                    fontSize={{
                      base: "calc(0.875rem + ((1vw - 3.75px) * 0.1878))",
                      lg: "16px",
                    }}
                    color="#ffffff"
                  >
                    詳しくはこちら
                  </Text>

                  <Box position="relative" h="16px">
                    <ArrowRight
                      position="absolute"
                      w="38px"
                      left="10px"
                      color="#ffffff"
                    />
                  </Box>
                </Box>
              </LinkOverlay>
            </LinkBox>
          </VStack>
        </VStack>
      </Container>
    </motion.div>
  );
}
