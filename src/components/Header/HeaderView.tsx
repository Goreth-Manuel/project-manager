import React, { useContext } from "react";
import {
  HeaderContainer,
  Logo,
  Nav,
  IconsContainer,
  NotificationIcon,
  ProfilePicture,
} from "./HeaderStyles";
import { useHeaderViewModel } from "./HeaderViewModel";
import { AuthContext } from "../../contexts/AuthContext";
import { Typewriter } from "react-simple-typewriter";

const HeaderView: React.FC = () => {
  const { notifications, profileImage } = useHeaderViewModel();
  const auth = useContext(AuthContext);
   console.log("Nome do user no header", auth.user?.name);

  return (
    <HeaderContainer>
      <Logo>
        <Typewriter
          words={['Go-Task!']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={65}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </Logo>
      <Nav>
        <a href="#">Dashboard</a>
        <a href="#">Users</a>
        <a href="#">Settings</a>
      </Nav>
      <IconsContainer>
      
        {notifications.map((notif, index) => (
          <NotificationIcon key={index}>
            <span>{notif.count}</span>
            🛎️ 
          </NotificationIcon>
        ))}
        {auth.user?.name ? (
          <span>{auth.user.name}</span>
            ) : (
          <span>Carregando...</span>
        )}
 
       
        <ProfilePicture src={profileImage} alt="User Profile" />
      </IconsContainer>
    </HeaderContainer>
  );
};

export default HeaderView;
