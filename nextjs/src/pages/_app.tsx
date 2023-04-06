import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { RootLayout } from "./root_layout";
import { theme } from '@/config/theme';
import { NextPageWithLayout } from '@/types/next_page_with_layout';
import { ReactElement } from 'react';

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        {getLayout(
          <Component {...pageProps} />
        )}
      </RootLayout>
    </ChakraProvider>
  );
}
