import { FC, memo } from "react";
import {
  AspectRatio,
  Center,
  HStack,
  VStack,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import SakigakePrestoLogo from "@/images/sakigake_presto_logo.svg";

export const SakigakeLogo: FC = () => (
  <Center
    pl="12px"
    pr="16px"
    pt="8px"
    pb="12px"
    bg="white"
    borderBottomLeftRadius="10px"
    borderBottomRightRadius="10px"
  >
    <AspectRatio flexGrow={1} maxW="116px">
      <SakigakePrestoLogo />
    </AspectRatio>
  </Center>
);

type SiteTitleProps = {
  readonly currentPathname: string;
};

export const SiteTitle = memo<SiteTitleProps>(({ currentPathname }) => (
  <HStack
    w="100%"
    pl="40px"
    alignItems="flex-end"
    spacing="24px"
    bg="transparent"
  >
    <Link
      isExternal
      href="https://www.jst.go.jp/kisoken/presto/about/index.html"
    >
      <AspectRatio
        w={currentPathname === "/" ? "148px" : "123px"}
        flexShrink={1}
        ratio={148 / 76}
      >
        <SakigakeLogo />
      </AspectRatio>
    </Link>

    <VStack p={0} pb="12px" m={0}>
      {currentPathname === "/" ? (
        <Text fontWeight={400} fontSize="20px" color="#333333">
          プログラム異常動作の自動検出技術の創出プロジェクト
        </Text>
      ) : (
        <Link
          as={NextLink}
          href="/"
          fontWeight={400}
          fontSize="20px"
          color="main"
          _hover={{
            textDecoration: "none",
          }}
        >
          プログラム異常動作の自動検出技術の創出プロジェクト
        </Link>
      )}
    </VStack>
  </HStack>
));

SiteTitle.displayName = "SiteTitle";
