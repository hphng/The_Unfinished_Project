import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Bars from './Bars';
import styles from './NavBar.module.css'
import { FaBars } from 'react-icons/fa';

export default function NavBar() {
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (index) => {
        setActiveLink(index === activeLink ? null : index);
    };

  return (
      <div className={styles.navbar}>   
          {/* <Bars />     */}
          <FaBars />
          <div className={styles.prjLogo}>
              <Image
                  priority
                  src="/images/logo.png"
                  width={150}
                  height={60}
                  alt=""
              />
          </div>
          <div className={styles.searchBar}>
              Search Bar Here
          </div>
          <div className={styles.content }>
              <a href='#Home' onClick={() => handleClick(0)}
                  className={activeLink === 0 ? styles.active : ''}>Home</a>
              <a href='#Middle' onClick={() => handleClick(1)}
                  className={activeLink === 1 ? styles.active : ''}>Middle</a>
              <a href='#Contact' onClick={() => handleClick(2)}
                  className={activeLink === 2 ? styles.active : ''}>Contact</a>
          </div>
      </div>
  )
}
