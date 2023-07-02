import React from 'react';
import Head from "next/head"
import Header from './Header';
import Footer from './Footer';


const Layout = ({ children }) => (
  <>
  <Head>
  <title>AiHubPro</title>
  <meta name='description' content="Learn the Future" />
  <meta name='viewport' content='width=device-width, initial-scale=1' />
  <link rel='icon' href='/favicon.ico' />
</Head>
<Header />
<main>{children}</main>
<Footer />
</>
);

export default Layout;
