import type { AppProps } from 'next/app';
import '../styles/globals.css';
import GlobalStyle from '../styles/globals';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const theme: DefaultTheme = {
  colors: {
    blue: '#234987',
    yellow: '#FFC545',
    sand: '#F9EED7',
    green: '#316F5A',
    red: '#DE212C',
    black: '#211F20',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="description"
            content="Southeast Asian Student Festival 2022 Official Website"
          />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <GlobalStyle />
        <Background />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
