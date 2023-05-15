import NextLink from "next/link";
import { Box, Container, HStack, List, ListItem, Link } from "@chakra-ui/react";
import { Fragment, memo } from "react";

type Props = {
  currentPathname: string;
};

type NavigationRoute = {
  path: string;
  title: string;
}

const routes: (NavigationRoute & { id: string; })[] = [
  {
    id: "646859d8-1f37-43fa-802a-e9e4a75ec90d",
    path: "/whats_new",
    title: "news"
  },
  {
    id: "5714332b-93a7-4952-9993-bdfc90c595a7",
    path: "/self_introduction",
    title: "自己紹介"
  },
  {
    id: "3aca2619-a313-4bc2-a41d-999472fbe9f8",
    path: "/projects",
    title: "研究紹介"
  },
  {
    id: "5ec6c574-bb5c-4aed-92c0-c4bd30df73c9",
    path: "/members",
    title: "メンバー"
  },
  {
    id: "5dd7267f-e9c0-4b6c-b644-fc2f52ebd0d1",
    path: "/publications",
    title: "論文"
  },
  {
    id: "63380e10-baec-4d51-b5b9-7c287b629308",
    path: "/awards",
    title: "受賞履歴"
  },
  {
    id: "778dd2cd-8ba6-4ff5-8af1-8b0df94b2b58",
    path: "/access",
    title: "アクセス"
  },
]

export const NavigationLinks = memo<Props>(({ currentPathname }) => (
  <Box as="nav" mx="auto">
    <List
      display="flex"
      flexFlow="row nowrap"
      justifyContent="space-between"
      alignItems="baseline"
      pb="24px"
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
          fontSize={{
            base: currentPathname === "/" ? "calc(1.875rem + ((1vw - 3.75px) * 0.939))" : 18,
            lg: currentPathname === "/" ? 40 : 18
          }}
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

      {routes.map(({ id, title, path }) => (
        <Fragment key={id}>
          <ListItem
            transition="transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
            _hover={{
              transform: currentPathname !== path ? "translateY(-4px)" : "none",
            }}
          >
            {currentPathname === "/" ? (
              <Link
                as={NextLink}
                href={path}
                fontSize={18}
                fontWeight="700"
                textTransform="uppercase"
                color={"rgba(255, 255, 255, 0.7)"}
                _hover={{
                  textDecoration: "none",
                  color: "white"
                }}
              >
                {title}
              </Link>
            ) : (
              <Link
                as={NextLink}
                href={path}
                fontSize={{
                  base: currentPathname === path ? "calc(1.875rem + ((1vw - 3.75px) * 0.939))" : 18,
                  lg: currentPathname === path ? 40 : 18
                }}
                fontWeight="700"
                textTransform="uppercase"
                color={
                  currentPathname === path
                    ? "#0168B7"
                    : "rgba(1, 104, 183, 0.7)"
                }
                _hover={{
                  textDecoration: "none",
                  color: "main"
                }}
              >
                {title}
              </Link>
            )}
          </ListItem>
        </Fragment>
      ))}
    </List>
  </Box>
));

NavigationLinks.displayName = "NavigationLinks";
