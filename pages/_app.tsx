// /pages/_app.tsx
// Saturday, September 30th 2023, 12:57 am

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme/theme';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MyApp(props: AppProps) {
  const {Component, pageProps} = props;
  return (
    <>
      <Head>
        <title>Anakin Dabir Portfolio</title>
        <meta content='initial-scale=1, width=device-width' name='viewport' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
