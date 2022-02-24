import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@components/Navbar';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
