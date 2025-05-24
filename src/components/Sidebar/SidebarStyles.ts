import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 250px;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  position: fixed;
  z-index: 10;

  @media (max-width: 768px) {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0047AB;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  color: #2a2a3c;
  align-items: center;
  padding: 20px 10px;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0047ab;
    color: #fff;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.5);

    a {
      color: #fff;
    }
  }

  a {
    color: #2a2a3c;
    font-size: 1.3rem;
    text-decoration: none;
    transition: color 0.2s;
  }

  span {
    margin-left: 10px;
    display: ${(props) => (props.active ? "inline" : "none")};
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #0047ab;
  padding: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  align-self: flex-end;

  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: -40px;
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
