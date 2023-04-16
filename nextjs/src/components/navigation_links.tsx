import NextLink from "next/link";
import { Box, Container, HStack, List, ListItem, Link } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
  currentPathname: string;
};

export const NavigationLinks = memo<Props>(({ currentPathname }) => (
  <Box as="nav" mx="auto">
    <List
      display="flex"
      flexFlow="row nowrap"
      justifyContent="space-between"
      alignItems="baseline"
      py="24px"
      gap="44px"
    >
      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: currentPathname !== "/" ? "translateY(-4px)" : "none",
        }}
      >
        <Link
          as={NextLink}
          href="/"
          fontSize={currentPathname === "/" ? 40 : 18}
          fontWeight="700"
          textTransform="uppercase"
          color={currentPathname === "/" ? "white" : "rgba(1, 104, 183, 0.7)"}
          _hover={{
            textDecoration: "none",
            color: currentPathname !== "/" ? "main" : undefined
          }}
        >
          Top
        </Link>
      </ListItem>

      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: currentPathname !== "/whats_new" ? "translateY(-4px)" : "none",
        }}
      >
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
              color: "white"
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
              color: "main"
            }}
          >
            News
          </Link>
        )}
      </ListItem>

      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: currentPathname !== "/self_introduction" ? "translateY(-4px)" : "none",
        }}
      >
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
              color: "white"
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
              color: "main"
            }}
          >
            自己紹介
          </Link>
        )}
      </ListItem>

      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: !currentPathname.includes("/projects") ? "translateY(-4px)" : "none",
        }}
      >
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
              color: "white"
            }}
          >
            研究紹介
          </Link>
        ) : (
          <Link
            as={NextLink}
            href="/projects"
            fontSize={currentPathname.includes("/projects") ? 40 : 18}
            fontWeight="700"
            textTransform="uppercase"
            color={
              currentPathname.includes("/projects")
                ? "#0168B7"
                : "rgba(1, 104, 183, 0.7)"
            }
            _hover={{
              textDecoration: "none",
              color: "main"
            }}
          >
            研究紹介
          </Link>
        )}
      </ListItem>

      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: currentPathname !== "/members" ? "translateY(-4px)" : "none",
        }}
      >
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
              color: "white"
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
              color: "main"
            }}
          >
            メンバー
          </Link>
        )}
      </ListItem>

      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: currentPathname !== "/publications" ? "translateY(-4px)" : "none",
        }}
      >
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
              color: "white"
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
              color: "main"
            }}
          >
            論文
          </Link>
        )}
      </ListItem>

      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: currentPathname !== "/awards" ? "translateY(-4px)" : "none",
        }}
      >
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
              color: "white"
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
              color: "main"
            }}
          >
            受賞履歴
          </Link>
        )}
      </ListItem>

      <ListItem
        transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
        _hover={{
          transform: currentPathname !== "/access" ? "translateY(-4px)" : "none",
        }}
      >
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
              color: "white"
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
              color: "main"
            }}
          >
            アクセス
          </Link>
        )}
      </ListItem>
    </List>
  </Box>
));

NavigationLinks.displayName = "NavigationLinks";
