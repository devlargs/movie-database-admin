import { ApolloProvider } from '@apollo/react-hooks';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@components/Navbar';
import RequestHelper from '@components/RequestHelper';
import client from '@graphql/client';
import theme from '@styles/theme';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { FC, useEffect } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const nprogressStart = (): void => NProgress.start();
    const nprogressDone = (): void => {
      NProgress.done();
    };
    router.events.on('routeChangeStart', nprogressStart);
    router.events.on('routeChangeComplete', nprogressDone);
    router.events.on('routeChangeError', nprogressDone);

    return (): void => {
      router.events.off('routeChangeStart', nprogressStart);
      router.events.off('routeChangeComplete', nprogressDone);
      router.events.off('routeChangeError', nprogressDone);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <RequestHelper />
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
