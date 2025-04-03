import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? "60px" : "250px")};
  background-color: #1e1e2d;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  
  cursor: pointer;

  a {
    margin: 20px 0;
    padding: 15px 15px;
    color: ${(props) => (props.active ? "#007bff" : "white")};
    background: ${(props) => (props.active ? "#2a2a3c" : "transparent")};
    width: 20rem;
  }
 

  &:hover {
    background: ${(props) => (props.active ? "#013E6A" : "transparent")};
    color: #fff;
  }

  span {
    margin-left: 10px;
    display: ${(props) => (props.active ? "inline" : "none")};
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 1.2rem;
`;
