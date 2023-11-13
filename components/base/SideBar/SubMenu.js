import React, { useState } from "react";
import Link from 'next/link';
import styled from "styled-components";

const SidebarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
   // border-left: 4px solid black;
    cursor: pointer;
  }
`;

const StyledLink = styled.a`
  text-decoration: none ;
  color: white;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.div`
  background: #414757;
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #29183A;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={item.subNav && showSubnav}>
        <Link href={item.path} style={{ textDecoration: "none" }}>
          <StyledLink>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </StyledLink>

        </Link>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink key={index} >
              <Link href={item.path} passHref style={{ textDecoration: "none" }}>
                <StyledLink>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </StyledLink>
              </Link>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
