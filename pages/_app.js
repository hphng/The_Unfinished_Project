import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import React from 'react';
import Head from 'next/head';

import Header from '../components/base/Header';
import Footer from '../components/base/Footer';
import SideBar from '../components/base/SideBar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>My Next.js App</title>
        </Head>
        <div className="app-container">
          <Header /> {/* Render the Header component */}
          <SideBar />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer /> {/* Render the Footer component */}
        </div>
      </>
    );
  }

export default MyApp;