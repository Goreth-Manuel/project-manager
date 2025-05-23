import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? "60px" : "250px")};
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;

  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
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
  padding: 0 20px;
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  color: #2a2a3c;
  align-items: center;
  /* border: 1px solid red; */
  padding: 20px 0;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  /* margin-top: 20px; */

  &:hover {
    background: #0047AB;
    color: red;
    border-radius: 5px;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.5);
  }
  
  cursor: pointer;
  a {
    color: #2a2a3c;
    font-size: 1.3rem;
    text-decoration: none;
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
