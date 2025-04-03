import React from "react";
import {
  SidebarContainer,
  Menu,
  MenuItem,
  ToggleButton,
} from "./SidebarStyles";
import { useSidebarViewModel } from "./SidebarViewModel";
import { Link } from "react-router-dom";

const SidebarView: React.FC = () => {
  const { isCollapsed, toggleSidebar, menuItems } = useSidebarViewModel();

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
     
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem key={index} active={item.active}>
            <Link to={item.path}>
                {item.icon}
                {!isCollapsed && <span>{item.label}</span>}
            </Link>
          </MenuItem>
        ))}
      </Menu>

      <ToggleButton onClick={toggleSidebar}>
        {isCollapsed ? "➡️" : "⬅️"}
      </ToggleButton>
    </SidebarContainer>
  );
};

export default SidebarView;
