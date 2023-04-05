import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
  Spacer,
} from "@chakra-ui/react";
import { ArrowRight } from "@/components/icons/arrow_right";

export default function TopPage() {
  return (
    <VStack
      position="relative"
      h="100vh"
      justifyContent="flex-end"
      alignItems="flex-start"
      background="url(/AdobeStock_394174786.png) no-repeat left top / cover"
      backgroundColor="#f5f5f5"
    >
      <Spacer />
      <Spacer />

      <VStack p={0} pl="40px" zIndex={3}>
        <VStack color="#ffffff" alignItems="flex-start" spacing="36px">
          <Heading
            as="h1"
            fontWeight="500"
            fontSize="64px"
            lineHeight="92px"
            textDecoration="underline"
          >
            ソフトウェアの動きから異常を自動検知
          </Heading>

          <VStack alignItems="inherit" spacing="28px">
            <Text maxWidth="708px" fontWeight="400" whiteSpace="pre-wrap">
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
                  <Text fontWeight="400" fontSize={16}>
                    詳しくはこちら
                  </Text>

                  <Box position="relative" h="16px">
                    <ArrowRight position="absolute" w="38px" left="10px" />
                  </Box>
                </Box>
              </LinkOverlay>
            </LinkBox>
          </VStack>
        </VStack>
      </VStack>

      <Spacer />

      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        background="linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #0168B7 100%)"
        zIndex={1}
        __css={{
          aspectRatio: "1440 / 442"
        }}
      />
    </VStack>
  );
}
