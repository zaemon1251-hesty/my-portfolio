import '../../styles/globals.css'

import '../../styles/components/templates/markdown.css';

import React from 'react'
import { AppProps } from 'next/app';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default MyApp
