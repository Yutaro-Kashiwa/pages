import { ReactElement } from "react";
import { Ubuntu } from "next/font/google";
import { Box, HStack, Container, Text } from "@chakra-ui/react";

type CommonBackgroundLayoutProps = Required<{
  readonly children: ReactElement;
  readonly title: string;
}>;

const ubuntuFont = Ubuntu({
  weight: ["700"],
  subsets: ["latin"],
});

export const CommonPageLayout = ({
  children,
  title,
}: CommonBackgroundLayoutProps) => (
  <Box
    position="relative"
    w="100vw"
    h="100vh"
    backgroundImage="/common_background.svg"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundColor="#f5f5f5"
  >
    <Container position="absolute" bottom="28px" right="0px" zIndex={0}>
      <HStack justifyContent="flex-end" textAlign="right" whiteSpace="nowrap">
        <Text
          fontFamily={ubuntuFont.style.fontFamily}
          fontWeight={700}
          fontSize="180px"
          color="#d7d7d7"
          opacity={0.25}
          textTransform="capitalize"
          userSelect="none"
        >
          {title}
        </Text>
      </HStack>
    </Container>

    <Box position="relative" zIndex={5}>{children}</Box>
  </Box>
);