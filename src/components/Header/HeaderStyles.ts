import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #013E6A;
  border-bottom: 1px solid #ddd;
  color: #fff;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  border: 1px solid red;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    &:hover {
      color: #007bff;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;
  
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    padding: 3px 7px;
  }
`;

export const ProfilePicture = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
`;
