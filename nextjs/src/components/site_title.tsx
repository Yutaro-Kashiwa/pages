import { FC } from "react"
import { withRouter } from "next/router"
import { AspectRatio, Center, HStack, VStack, Link, LinkOverlay, Text } from "@chakra-ui/react"
import SakigakePrestoLogo from "@/images/sakigake_presto_logo.svg"

export const SakigakeLogo: FC = () => (
  <Center pl="12px" pr="16px" pt="8px" pb="12px"  bg="white" borderBottomLeftRadius="10px" borderBottomRightRadius="10px">
    <AspectRatio flexGrow={1} maxW="116px">
      <SakigakePrestoLogo />
    </AspectRatio>
  </Center>
)

export const SiteTitle = withRouter(({ router }) => (
  <HStack w="100%" pl="40px" alignItems="flex-end" spacing="24px" bg="transparent">
    <Link isExternal href="https://www.jst.go.jp/kisoken/presto/about/index.html">
      <AspectRatio w={router.pathname === "/" ? "148px" : "123px"} flexShrink={1} ratio={148 / 76}>
        <SakigakeLogo />
      </AspectRatio>
    </Link>

    <VStack p={0} pb="12px" m={0}>
      <Text fontWeight={400} fontSize="20px" color={router.pathname === "/" ? "#333333" : "#0168B7"}>プログラム異常動作の自動検出技術の創出プロジェクト</Text>
    </VStack>
  </HStack>
)
)