import NextLink from "next/link";
import { Box, Container, HStack, List, ListItem, Link } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  currentPathname: string;
};

export const NavigationLinks = memo<Props>(({ currentPathname }) => (
  <Box as="nav">
    <List
      display="flex"
      flexFlow="row nowrap"
      justifyContent="space-between"
      alignItems="baseline"
      py="24px"
      gap="44px"
    >
      <ListItem>
        <Link
          as={NextLink}
          href="/"
          fontSize={currentPathname === "/" ? 40 : 18}
          fontWeight="700"
          textTransform="uppercase"
          color={currentPathname === "/" ? "white" : "rgba(1, 104, 183, 0.7)"}
          _hover={{
            textDecoration: "none",
          }}
        >
          Top
        </Link>
      </ListItem>

      <ListItem>
        {currentPathname === "/" ? (
          <Link
            as={NextLink}
            href="/whats_new"
            fontSize={18}
            fontWeight="700"
            textTransform="uppercase"
            color={"rgba(255, 255, 255, 0.7)"}
            _hover={{
              textDecoration: "none",
            }}
          >
            News
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/whats_new"
            fontSize={currentPathname === "/whats_new" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname === "/whats_new"
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
            }}
          >
            News
          </Link>
        )}
      </ListItem>

      <ListItem>
        {currentPathname === "/" ? (
          <Link
            as={NextLink}
            href="/self_introduction"
            fontSize={18}
            fontWeight="700"
            textTransform="uppercase"
            color={"rgba(255, 255, 255, 0.7)"}
            _hover={{
              textDecoration: "none",
            }}
          >
            自己紹介
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/self_introduction"
            fontSize={currentPathname === "/self_introduction" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname === "/self_introduction"
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
            }}
          >
            自己紹介
          </Link>
        )}
      </ListItem>

      <ListItem>
        {currentPathname === "/" ? (
          <Link
            as={NextLink}
            href="/projects"
            fontSize={18}
            fontWeight="700"
            textTransform="uppercase"
            color={"rgba(255, 255, 255, 0.7)"}
            _hover={{
              textDecoration: "none",
            }}
          >
            研究紹介
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/projects"
            fontSize={currentPathname === "/projects" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname === "/projects"
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
            }}
          >
            研究紹介
          </Link>
        )}
      </ListItem>

      <ListItem>
        {currentPathname === "/" ? (
          <Link
            as={NextLink}
            href="/members"
            fontSize={18}
            fontWeight="700"
            textTransform="uppercase"
            color={"rgba(255, 255, 255, 0.7)"}
            _hover={{
              textDecoration: "none",
            }}
          >
            メンバー
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/members"
            fontSize={currentPathname === "/members" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname === "/members"
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
            }}
          >
            メンバー
          </Link>
        )}
      </ListItem>

      <ListItem>
        {currentPathname === "/" ? (
          <Link
            as={NextLink}
            href="/publications"
            fontSize={18}
            fontWeight="700"
            textTransform="uppercase"
            color={"rgba(255, 255, 255, 0.7)"}
            _hover={{
              textDecoration: "none",
            }}
          >
            論文
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/publications"
            fontSize={currentPathname === "/publications" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname === "/publications"
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
            }}
          >
            論文
          </Link>
        )}
      </ListItem>

      <ListItem>
        {currentPathname === "/" ? (
          <Link
            as={NextLink}
            href="/awards"
            fontSize={18}
            fontWeight="700"
            textTransform="uppercase"
            color={"rgba(255, 255, 255, 0.7)"}
            _hover={{
              textDecoration: "none",
            }}
          >
            受賞履歴
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/awards"
            fontSize={currentPathname === "/awards" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname === "/awards"
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
            }}
          >
            受賞履歴
          </Link>
        )}
      </ListItem>

      <ListItem>
        {currentPathname === "/" ? (
          <Link
            as={NextLink}
            href="/access"
            fontSize={18}
            fontWeight="700"
            textTransform="uppercase"
            color={"rgba(255, 255, 255, 0.7)"}
            _hover={{
              textDecoration: "none",
            }}
          >
            アクセス
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/access"
            fontSize={currentPathname === "/access" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname === "/access"
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
            }}
          >
            アクセス
          </Link>
        )}
      </ListItem>
    </List>
  </Box>
));

NavigationLinks.displayName = "NavigationLinks"
