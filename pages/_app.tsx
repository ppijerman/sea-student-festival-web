import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import { ThemeProvider, DefaultTheme } from 'styled-components';

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
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
