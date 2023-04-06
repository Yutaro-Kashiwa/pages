import NextLink from "next/link";
import { Box, Container, HStack, List, ListItem, Link } from "@chakra-ui/react";
import { withRouter } from "next/router";

export const NavigationLinks = withRouter(({ router }) => (
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
          fontSize={router.pathname === "/" ? 40 : 18}
          fontWeight="700"
          textTransform="uppercase"
          color={router.pathname === "/" ? "white" : "rgba(1, 104, 183, 0.7)"}
          _hover={{
            textDecoration: "none",
          }}
        >
          Top
        </Link>
      </ListItem>

      <ListItem>
        {router.pathname === "/" ? (
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
            fontSize={router.pathname === "/whats_new" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              router.pathname === "/whats_new" ? "#0168B7" : "rgba(1, 104, 183, 0.7)"
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
        {router.pathname === "/" ? (
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
            fontSize={router.pathname === "/self_introduction" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              router.pathname === "/self_introduction" ? "#0168B7" : "rgba(1, 104, 183, 0.7)"
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
        {router.pathname === "/" ? (
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
            fontSize={router.pathname === "/projects" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              router.pathname === "/projects" ? "#0168B7" : "rgba(1, 104, 183, 0.7)"
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
        {router.pathname === "/" ? (
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
            fontSize={router.pathname === "/members" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              router.pathname === "/members" ? "#0168B7" : "rgba(1, 104, 183, 0.7)"
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
        {router.pathname === "/" ? (
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
            fontSize={router.pathname === "/publications" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              router.pathname === "/publications" ? "#0168B7" : "rgba(1, 104, 183, 0.7)"
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
        {router.pathname === "/" ? (
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
            fontSize={router.pathname === "/awards" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              router.pathname === "/awards" ? "#0168B7" : "rgba(1, 104, 183, 0.7)"
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
        {router.pathname === "/" ? (
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
            fontSize={router.pathname === "/access" ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              router.pathname === "/access" ? "#0168B7" : "rgba(1, 104, 183, 0.7)"
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
