import { FC } from "react"
import { withRouter } from "next/router"
import { Center, HStack, Image, Text } from "@chakra-ui/react"
import SakigakePrestoLogo from "@/images/sakigake_presto_logo.svg"

export const SakigakeLogo: FC = () => (
  <Center w="148px" h="76px" bg="white" borderBottomLeftRadius="10px" borderBottomRightRadius="10px">
    <SakigakePrestoLogo width="116px" />
  </Center>
)

export const SiteTitle = withRouter(({ router }) => (
  <HStack w="100%" pl="40px" alignItems="baseline" spacing="24px" bg="transparent">
    <SakigakeLogo />

    <Text fontWeight={400} fontSize="20px" color={router.pathname === "/" ? "#333333" : "#0168B7"}>プログラム異常動作の自動検出技術の創出プロジェクト</Text>
  </HStack>
)
)