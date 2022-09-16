import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Twemoji from 'react-twemoji';
import '../styles/twemoji.css';
import '../styles/customCN.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <><ChakraProvider><Twemoji options={{ className: 'twemoji' }}><Component {...pageProps} /></Twemoji></ChakraProvider></>;
}

export default MyApp;
