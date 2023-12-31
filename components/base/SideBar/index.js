import React, { useState } from "react";
import styled from "styled-components";
// import styles from './SideBar.module.css'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

// const Nav = styled.div`
//   background: #779282;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
  background: #779282;
  opacity: 80%;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 80px;
  //overflow-y: auto;
  //left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  //transition: 350ms;
  /* z-index: 10; */
`;

const SidebarWrap = styled.div`
  width: 100%;
 // padding-left: 10px;
`;


export default function SideBar() {
  const [sidebarWidth, setSidebarWidth] = useState(true);
  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav >
          <SidebarWrap>
            {/* <AiIcons.AiOutlineClose onClick={closeSidebar} /> */}
            {SideBarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}
