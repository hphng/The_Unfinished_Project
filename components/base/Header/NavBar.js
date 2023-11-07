import React from 'react'
import Image from 'next/image';
import Bars from './Bars';
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
      <div className={styles.navbar}>   
          <Bars />    
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
          <div className={styles.content}>
              <a href='#Home'>Home</a>
              <a href='#Middle'>Middle</a>
              <a href='#Contact'>Contact</a>
          </div>
      </div>
  )
}
