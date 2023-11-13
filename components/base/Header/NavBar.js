import React from "react";
import { useState } from "react";
import Image from "next/image";
import Bars from "./Bars";
import styles from "./NavBar.module.css";
import SearchBar from "./SearchBar";
import { FaBars } from "react-icons/fa";
import  SideBar  from "../SideBar";


export default function NavBar() {
  const [activeLink, setActiveLink] = useState(null);
  // const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (index) => {
    setActiveLink(index === activeLink ? null : index);
  };

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };


  return (
    <div className={styles.navbar}>
      {/* <FaBars onClick={toggleSidebar} />
      {isSidebarOpen && <SideBar closeSidebar={toggleSidebar} />} */}
      <div className={styles.prjLogo}>
        <Image priority src="/images/logo.png" width={150} height={60} alt="" />
      </div>

      <SearchBar />

      <div className={styles.content}>
        <a
          href="#Home"
          onClick={() => handleClick(0)}
          className={activeLink === 0 ? styles.active : ""}>
          Home
        </a>
        <a
          href="#Middle"
          onClick={() => handleClick(1)}
          className={activeLink === 1 ? styles.active : ""}>
          Middle
        </a>
        <a
          href="#Contact"
          onClick={() => handleClick(2)}
          className={activeLink === 2 ? styles.active : ""}>
          Contact
        </a>
      </div>
    </div>
  );
}
