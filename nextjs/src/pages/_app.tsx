import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RootLayout } from "./root_layout";
import { theme } from '@/config/theme';
import { NextPageWithLayout } from '@/types/next_page_with_layout';
import { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <RootLayout>
          {getLayout(
            <Component key={router.asPath} {...pageProps} />
          )}
        </RootLayout>
      </AnimatePresence>
    </ChakraProvider>
  );
}
