import React from 'react'
import Image from 'next/image';
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
      <div className={styles.navbar}>
          <Image
              priority
              src="/assets/bars-3.svg"
              width={15}
              height={15}
              alt=""
          />
          <Image
              priority
              src="/images/logo.png"
              width={150}
              height={72}
              alt=""
          />
          <div className={styles.searchBar}>
              Search Bar Here
          </div>
          <div className={styles.content}>
              <a href='#Home'>Home</a>
              <a href='#Home'>Middle</a>
              <a href='#Home'>Contact</a>
          </div>
      </div>
  )
}
