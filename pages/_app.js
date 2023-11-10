import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import React from 'react';
import Head from 'next/head';

import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import SideBar from '../components/base/SideBar';

import '../styles/globals.css';
import styled from 'styled-components';

const ContentContainer = styled.div`
  margin-left: ${({ sidebarWidth }) => (sidebarWidth ? '250px' : '0')}; /* Adjust margin based on sidebarWidth state */
  transition: margin 350ms;
  padding: 20px; /* Add padding to the content area */
`;

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>My Next.js App</title>
        </Head>
        <div className="app-container">
          <Header /> {/* Render the Header component */}
          
          {/* <ContentContainer sidebarWidth={sidebarWidth}>
            <Component {...pageProps} />
          </ContentContainer> */}
          <main>
            <Component {...pageProps} />
          </main>
          
        </div>
      </>
    );
  }

export default MyApp;