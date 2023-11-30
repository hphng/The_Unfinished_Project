import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import React from 'react';
import Head from 'next/head';

import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import SideBar from '../components/base/SideBar';

import Card from '../components/Card/Card';
import Card2 from '@components/Card/Card';


import '../styles/globals.css';
import styled from 'styled-components';
import Layout from '../components/layout'

const ContentContainer = styled.div`
  margin-left: 250px;
  padding: 20px; /* Add padding to the content area */
`;

function MyApp({ Component, pageProps }) {
 
  return (
    <>
      <Head>
        <title>The Unfinished Prj</title>
      </Head>


      <Header />
      <SideBar />
      <main>
        <ContentContainer>
          <Component {...pageProps} />
        </ContentContainer>
      </main>

    </>
  );
}

export default MyApp;