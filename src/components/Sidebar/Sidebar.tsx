import React from "react";
import styled from "styled-components";
import { FaChartPie, FaUser, FaCog, FaSignOutAlt, FaFileAlt, FaTable, FaMap, FaLayerGroup } from "react-icons/fa";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
`;

const Logo = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  flex-grow: 1;
`;

const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#34495e" : "transparent")};
  border-radius: 5px;
  margin-bottom: 10px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #34495e;
  }

  svg {
    margin-right: 10px;
  }
`;

const Footer = styled.div`
  margin-top: auto;
  border-top: 1px solid #ffffff40;
  padding-top: 10px;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo>Velonic</Logo>
      <Nav>
        <NavItem active>
          <FaChartPie /> Dashboard
        </NavItem>
        <NavItem>
          <FaLayerGroup /> Pages
        </NavItem>
        <NavItem>
          <FaUser /> Authentication
        </NavItem>
        <NavItem>
          <FaFileAlt /> Forms
        </NavItem>
        <NavItem>
          <FaTable /> Tables
        </NavItem>
        <NavItem>
          <FaMap /> Maps
        </NavItem>
      </Nav>
      <Footer>
        <NavItem>
          <FaCog /> Settings
        </NavItem>
        <NavItem>
          <FaSignOutAlt /> Logout
        </NavItem>
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;
