import React from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  IconsContainer,
  NotificationIcon,
  ProfilePicture,
} from "./HeaderStyles";
import { useHeaderViewModel } from "./HeaderViewModel";

const HeaderView: React.FC = () => {
  const { notifications, profileImage } = useHeaderViewModel();

  return (
    <HeaderContainer>
      <Logo>Go-Task</Logo>
      <Nav>
        <a href="#">Dashboard</a>
        <a href="#">Users</a>
        <a href="#">Settings</a>
      </Nav>
      <IconsContainer>
        {notifications.map((notif, index) => (
          <NotificationIcon key={index}>
            <span>{notif.count}</span>
            🛎️ {/* Ícone pode ser substituído por um componente de ícone */}
          </NotificationIcon>
        ))}
        <ProfilePicture src={profileImage} alt="User Profile" />
      </IconsContainer>
    </HeaderContainer>
  );
};

export default HeaderView;
