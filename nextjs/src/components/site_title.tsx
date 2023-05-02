import { memo } from "react";
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

type SiteTitleProps = {
  readonly currentPathname: string;
};

export const SiteTitle = memo<SiteTitleProps>(({ currentPathname }) => (
  <HStack w="100%" alignItems="flex-end" columnGap="1vw" bg="transparent">
    <Link
      isExternal
      href="https://www.jst.go.jp/kisoken/presto/about/index.html"
      w={currentPathname === "/" ? "20vw" : "8vw"}
      maxW="148px"
      minW="80px"
      alignSelf="flex-start"
    >
      <Center
        pl="8%"
        pr="12%"
        pt="10%"
        pb="10%"
        bg="white"
        borderBottomLeftRadius="10px"
        borderBottomRightRadius="10px"
      >
        <AspectRatio w="100%" ratio={359.5 / 146.15}>
          <SakigakePrestoLogo />
        </AspectRatio>
      </Center>
    </Link>

    <VStack p={0} pb="12px" m={0}>
      {currentPathname === "/" ? (
        <Text
          display="inline-flex"
          flexFlow="row wrap"
          fontWeight={400}
          fontSize={{
            base: "calc(0.75rem + ((1vw - 3.75px) * 0.7512))",
            lg: "20px",
          }}
          color="#333333"
        >
          <Text as="span">プログラム異常動作の</Text>
          <Text as="span">自動検出技術の創出プロジェクト</Text>
        </Text>
      ) : (
        <Link
          as={NextLink}
          href="/"
          display="inline-flex"
          flexFlow="row wrap"
          fontWeight={400}
          fontSize={{
            base: "calc(0.75rem + ((1vw - 3.75px) * 0.7512))",
            lg: "20px",
          }}
          color="main"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text as="span" color="inherit">プログラム異常動作の</Text>
          <Text as="span" color="inherit">自動検出技術の創出プロジェクト</Text>
        </Link>
      )}
    </VStack>
  </HStack>
));

SiteTitle.displayName = "SiteTitle";
